/**
 * @file entrypoint of the app
 * @auth ltsrc
 */

import app from './app';
import logger from './logger';
import { HOST, PORT } from './config';

app.listen(PORT, HOST, () => {
    logger.info(`app listening on http://${HOST}:${PORT}`);
});
