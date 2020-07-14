/**
 * @file Defines the routes used to do user interactions
 * @author ltsrc
 */

import { Router } from 'express';
import get from './crud/get';
import put from './crud/put';
import post from './crud/post';
import patch from './crud/patch';
import del from './crud/delete';


const router = Router();

router.get('/', get);
router.put('/', put);
router.post('/', post);
router.patch('/', patch);
router.delete('/', del);

export default router;