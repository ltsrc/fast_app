/**
 * @file Defines the patch CRUD action for users
 * @author ltsrc
 */

import express from 'express';

export default async function patch(_req: express.Request, res: express.Response): Promise<express.Response> {
    return res.send('test');
}
