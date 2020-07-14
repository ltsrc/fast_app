/**
 * @file Defines the base error class
 * @author ltsrc
 */

import {
    BAD_REQUEST, INTERNAL_SERVER_ERROR,
    NOT_FOUND,
} from 'http-status-codes';

export class BaseError extends Error {
    code: number;
    id!: string;
    stackTrace?: string;

    constructor(code: number, message: string, id: string, stackTrace?: string) {
        super(message);
        this.code = code;
        this.id = id;
        this.stackTrace = stackTrace;
    }
}

export class InternalServerError extends BaseError {
    constructor(id?: string) {
        super(INTERNAL_SERVER_ERROR, 'unexpected error occurred', 'ISE001' || id);
    }
}

export class NotFoundError extends BaseError {
    constructor(id?: string) {
        super(NOT_FOUND, 'resource not found', 'NFE001' || id);
    }
}

export class BadRequestError extends BaseError {
    constructor(id?: string) {
        super(BAD_REQUEST, 'invalid request', 'BRE001' || id);
    }
}
