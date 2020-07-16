/**
 * @file Defines the database ORM
 * @author ltsrc
 */

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default prisma;
