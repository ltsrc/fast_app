/**
 * @file Defines the put CRUD action for users
 * @author ltsrc
 */

import express from 'express';
import {
    IsEmail, IsString, MaxLength, MinLength,
} from 'class-validator';

import database from '../../database';
import { bodyMiddleware } from '../../middlewares';
import { ConflictError } from '../../error';

export class PutUserDto {
    @IsEmail()
    email!: string;
}

export const putMiddleware = bodyMiddleware(PutUserDto);

export async function put(req: express.Request, res: express.Response): Promise<express.Response> {
    const { email } = req.body;
    const userAlreadyExists = await database.user.findOne({ where: { email } }) !== null;

    if (userAlreadyExists) {
        throw new ConflictError('CE#USERS_PUT#0001');
    }

    const user = await database.user.create({ data: { email } });
    return res.send(user);
}
