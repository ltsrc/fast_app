/**
 * @file Defines middlewares used by the express app
 * @author ltsrc
 */

import cors from 'cors';
import express from 'express';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';

import logger from './logger';
import { MODE, CORS_WHITELIST, MODES } from './config';
import { BaseError } from './error';

let requestCounter = BigInt(0);
export function logMiddleware(req: express.Request, res: express.Response, next: Function): void {
    const id = requestCounter++;
    const { url } = req;
    const start = Date.now();

    res.locals.requestId = id;
    logger.debug(`[${req.method} ${id}] ${url} from ${req.ip}`);
    res.on('finish', () => {
        const elapsed = Date.now() - start;
        logger.debug(`[${req.method} ${id}][${res.statusCode}] ${url} in ${elapsed}ms`);
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

export function errorMiddleware(error: Error, _req: express.Request, res: express.Response, _next: Function) {
    if (error instanceof BaseError) {
        return res.status(error.code).send({
            id: error.id,
            code: error.code,
            msg: error.message,
        });
    }

    logger.error(`
		unexpected error occurred
		request ${res.locals.requestId}
		stack trace:
		${error.stack}
	`);

    return res.status(INTERNAL_SERVER_ERROR).send({ error: 'USE001' });
}
