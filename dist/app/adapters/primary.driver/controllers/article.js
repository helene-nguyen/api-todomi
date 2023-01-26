import CoreController from './coreController.js';
import ArticleCRUD from '../../../core/use-cases/articleCRUD.js';
import ArticleRepository from '../../secondary.driven/repositories/articleRepository.js';
class ArticleController extends CoreController {
    method = ArticleCRUD;
    item = new ArticleRepository();
    paramsName = 'articleId';
}
const Article = new ArticleController();
export default Article;
//# sourceMappingURL=article.js.map