/**
 * @file Defines the post CRUD action for users
 * @author ltsrc
 */

import express from 'express';

export default async function post(req: express.Request, res: express.Response): Promise<express.Response> {
    return res.send('test');
}
