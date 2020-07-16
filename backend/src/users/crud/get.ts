/**
 * @file Defines the get CRUD action for users
 * @author ltsrc
 */

import express from 'express';
import { Min, IsNumber } from 'class-validator';
import { User } from '@prisma/client';

import database from '../../database';
import { queryMiddleware } from '../../middlewares';

export class GetUserDto {
    @IsNumber()
    @Min(1)
    test!: number;
}

export const getMiddleware = queryMiddleware(GetUserDto);

export async function get(req: express.Request, _res: express.Response): Promise<User> {
    const query = req.query as unknown as GetUserDto;
    console.log(query);
    const response = await database.user.findOne({ where: { id: 0 } });
    return response!;
}
