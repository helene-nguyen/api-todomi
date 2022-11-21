//~ Import Router
import { Router } from "express";
const router = Router();

import { renderHomePage } from '../controllers/main.js';

//~ Routes
router.get('/api/v1', renderHomePage);

//~ Export router
export { router };