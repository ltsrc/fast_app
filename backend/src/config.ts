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

export const CORS_WHITELIST = get('CORS_WHITELIST').required().asArray(';');
