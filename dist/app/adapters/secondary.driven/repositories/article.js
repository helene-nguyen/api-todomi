import ArticleModel from '../../../core/models/articleModel.js';
import { ArticlePg } from './pg.datamappers/article.js';
class ArticleRepo {
    articlePg = ArticlePg;
    model = new ArticleModel();
    selectAll = async () => {
        const result = await this.articlePg.selectAll();
        return result;
    };
    selectOne = async (id) => {
        const result = await this.articlePg.selectOne(id);
        return result;
    };
}
export default ArticleRepo;
//# sourceMappingURL=article.js.map