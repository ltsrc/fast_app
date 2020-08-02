/**
 * @file verifies and exports the app environnement
 * @author ltsrc
 */

import { get } from 'env-var';

export enum MODES {
    DEV = 'dev',
    PROD = 'prod',
    LOCAL = 'local',
}

export const MODE = get('MODE').required().asEnum(Object.values(MODES));
export const PORT = get('PORT').required().asPortNumber();
export const HOST = get('HOST').required().asString();
export const APP_ID = get('APP_ID').required().asString();
export const CORS_WHITELIST = get('CORS_WHITELIST').required().asArray(';');

// SESSIONS
export const STORE_HOST = get('STORE_HOST').required().asString();
export const STORE_PORT = get('STORE_PORT').required().asString();
export const STORE_PASSWORD = get('STORE_PASSWORD').required().asString();
export const SESSION_SECRET = get('SESSION_SECRET').required().asString();
