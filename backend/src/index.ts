/**
 * @file entrypoint of the app
 * @auth ltsrc
 */

import app from './app';
import logger from './logger';
import { HOST, PORT } from './config';
import db from './database';

logger.info('connecting to the database ...');
db.connect().then(() => {
    app.listen(PORT, HOST, () => {
        logger.info(`app listening on http://${HOST}:${PORT}`);
    });
}).catch((error: Error) => {
    logger.error('failed to connect to the database ...');
    logger.error(error.message);
});
