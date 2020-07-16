/**
 * @file Defines the put CRUD action for users
 * @author ltsrc
 */

import express from 'express';

export default async function put(req: express.Request, res: express.Response): Promise<express.Response> {
    return res.send('test');
}
