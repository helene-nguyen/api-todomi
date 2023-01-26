import { Router } from "express";
const router = Router();
import Article from '../controllers/article.js';
router.post('/api/v1/articles', Article.create);
router.get('/api/v1/articles', Article.findAll);
router.get('/api/v1/articles/:articleId(\\d+)', Article.findOne);
router.patch('/api/v1/articles/:articleId(\\d+)', Article.update);
router.delete('/api/v1/articles/:articleId(\\d+)', Article.delete);
export { router };
//# sourceMappingURL=article.js.map