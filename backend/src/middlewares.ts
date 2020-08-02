/**
 * @file Defines middlewares used by the express app
 * @author ltsrc
 */

import cors from 'cors';
import express, { RequestHandler } from 'express';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { ClassType } from 'class-transformer/ClassTransformer';

import logger from './logger';
import {
    MODE,
    CORS_WHITELIST,
    MODES,
    APP_ID,
} from './config';
import { BaseError, InvalidParamsError } from './error';

let requestCounter = BigInt(0);
export function logMiddleware(req: express.Request, res: express.Response, next: () => void): void {
    const id = requestCounter;
    requestCounter += BigInt(1);
    const { url } = req;
    const start = Date.now();

    res.locals.requestId = id;
    logger.debug(`[${req.method} ${APP_ID}_${id}] ${url} from ${req.ip}`);
    res.on('finish', () => {
        const elapsed = Date.now() - start;
        logger.debug(`[${req.method} ${APP_ID}_${id}][${res.statusCode}] ${url} in ${elapsed}ms`);
    });

    return next();
}

export const corsMiddleware = cors({
    credentials: true,
    origin: (origin, callback) => {
        if (origin === undefined && MODE !== MODES.PROD) {
            callback(null, true);
        } else if (CORS_WHITELIST.indexOf(origin!) !== -1) {
            callback(null, true);
        } else {
            callback(new Error(`Request's origin (${origin}) not allowed by CORS policy.`));
        }
    },
});

export function errorMiddleware(error: Error, _req: express.Request, res: express.Response, _next: () => void): express.Response {
    if (error instanceof BaseError) {
        return res.status(error.code).send({
            id: error.id,
            code: error.code,
            message: error.message,
        });
    }

    logger.error(`
		unexpected error occurred
		request ${res.locals.requestId}
		stack trace:
		${error.stack}
	`);

    return res.status(INTERNAL_SERVER_ERROR).send({ error: 'ISE001' });
}

function validationMiddleware<T, V>(type: ClassType<T>, accessor: (t: express.Request) => V): RequestHandler {
    return async (req, _res, next) => {
        const obj: V = accessor(req);
        const errors = await validate(plainToClass<T, V>(type, obj));
        if (errors.length !== 0) {
            next(new InvalidParamsError(JSON.stringify(errors)));
        }
        next();
    };
}

export function bodyMiddleware<T>(type: ClassType<T>): RequestHandler {
    return validationMiddleware(type, (req) => req.body);
}

export function queryMiddleware<T>(type: ClassType<T>): RequestHandler {
    return validationMiddleware(type, (req) => req.query);
}
