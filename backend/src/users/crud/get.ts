/**
 * @file Defines the get CRUD action for users
 * @author ltsrc
 */

import express from 'express';
import {
    IsEmail,
    IsString,
} from 'class-validator';

// import database from '../../database';
import { bodyMiddleware } from '../../middlewares';

export class GetUserDto {
    @IsEmail()
    email?: string;

    @IsString()
    id?: string;
}

export const getMiddleware = bodyMiddleware(GetUserDto);

export async function get(_req: express.Request, res: express.Response): Promise<express.Response> {
    return res.send('test');
}
