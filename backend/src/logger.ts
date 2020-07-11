/**
 * @file Defines the winston logger used by the app.
 * @author LeBovin
 */

import winston from 'winston';

const logger = winston.createLogger({
    level: 'debug',
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp(),
                winston.format.printf((info) => `[${info.level}]: ${info.message} [${info.timestamp}]`),
            ),
        }),
        new winston.transports.File({
            filename: 'app.log',
            format: winston.format.combine(
                winston.format.timestamp(),
                winston.format.printf((info) => `[${info.level}]: ${info.message} [${info.timestamp}]`),
            ),
        }),
    ],
});

export default logger;
