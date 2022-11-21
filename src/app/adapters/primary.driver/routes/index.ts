import { Router } from 'express';
const router = Router();

import { router as mainRouter } from './main.js'
router.use(mainRouter);

import { router as articleRouter } from './article.js'
router.use(articleRouter);

export { router };