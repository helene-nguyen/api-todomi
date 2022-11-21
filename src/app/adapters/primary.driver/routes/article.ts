//~ Import Router
import { Router } from "express";
const router = Router();

import Article from '../controllers/article.js'

//~ Routes
// router.post('/articles', createArticle);
router.get('/api/v1/articles', Article.findAll);
router.get('/api/v1/articles/:articleId(\\d+)', Article.findOne);
// router.patch('/articles/:articleId(\\d+)', updateArticle);
// router.delete('/articles/:articleId(\\d+)', deleteArticle);

//~ Export router
export { router };