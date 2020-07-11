/**
 * @file verifies and exports the app environnement
 * @author ltsrc
 */

import { get } from 'env-var';

export const PORT = get('PORT').required().asPortNumber();
export const HOST = get('HOST').required().asString();
