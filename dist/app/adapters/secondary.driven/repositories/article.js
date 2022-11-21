import ArticleModel from '../../../core/models/articleModel.js';
import { Article } from './datamappers/article.js';
class ArticleRepo {
    article = Article;
    model = new ArticleModel();
    selectAll = async () => {
        const result = await this.article.selectAll();
        return result;
    };
}
export default ArticleRepo;
//# sourceMappingURL=article.js.map