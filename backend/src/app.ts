/**
 * @file exports an express app instance
 * @author ltsrc
 */

import helmet from 'helmet';
import express from 'express';

import {
    logMiddleware,
    corsMiddleware,
    errorMiddleware,
} from './middlewares'
import usersRouter from './users/router';

const app = express();

app.use(helmet());
app.use(express.json());
app.use(logMiddleware);
app.use(corsMiddleware);
app.use(errorMiddleware);

app.use(`/users`, usersRouter);

export default app;
