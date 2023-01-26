import ArticleModel from '../../../core/models/articleModel.js';
import { ArticlePg } from './pg.datamappers/article.js';
import { ArticleMongo } from './mongo.datamappers/article.js';
class ArticleRepo {
    articlePg = ArticlePg;
    articleMongo = ArticleMongo;
    model = new ArticleModel();
    selectAll = async () => {
        const result = await this.articleMongo.selectAll();
        return result;
    };
    selectOne = async (id) => {
        const result = await this.articlePg.selectOne(id);
        return result;
    };
}
export default ArticleRepo;
//# sourceMappingURL=article.js.map