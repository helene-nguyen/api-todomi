import CoreController from './coreController.js';
import ReadArticle from '../../../core/use-cases/article/read.js';
import ArticleRepo from '../../secondary.driven/repositories/article.js';
import ArticleModel from '../../../core/models/articleModel.js';
class ArticleController extends CoreController {
    read = ReadArticle;
    item = new ArticleRepo();
    model = new ArticleModel();
}
const Article = new ArticleController();
export default Article;
//# sourceMappingURL=article.js.map