/**
 * @file Defines the routes used to do user interactions
 * @author ltsrc
 */

import { Router } from 'express';

const router = Router();

router.get('/', (_req, res) => {
    res.send('YO');
});
router.put('/');
router.post('/');
router.patch('/');
router.delete('/');

export default router;