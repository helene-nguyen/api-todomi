import { Router } from "express";
const router = Router();
import Article from '../controllers/article.js';
router.get('/api/v1/articles', Article.findAll);
router.get('/api/v1/articles/:articleId(\\d+)', Article.findOne);
export { router };
//# sourceMappingURL=article.js.map