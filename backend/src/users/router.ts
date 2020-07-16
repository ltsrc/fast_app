/**
 * @file Defines the routes used to do user interactions
 * @author ltsrc
 */

import { Router } from 'express';
import asyncHandler from 'express-async-handler';

import { get, getMiddleware } from './crud/get';
import put from './crud/put';
import post from './crud/post';
import patch from './crud/patch';
import del from './crud/delete';

const router = Router();

router.get('/', getMiddleware, asyncHandler(get));
router.put('/', asyncHandler(put));
router.post('/', asyncHandler(post));
router.patch('/', asyncHandler(patch));
router.delete('/', asyncHandler(del));

export default router;
