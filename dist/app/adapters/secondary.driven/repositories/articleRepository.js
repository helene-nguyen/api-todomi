import { ArticlePg } from './pg.datamappers/article.js';
class ArticleRepository {
    articlePg = ArticlePg;
    insert = async (bodyData) => {
        return await this.articlePg.insert(bodyData);
    };
    selectAll = async () => {
        return await this.articlePg.selectAll();
    };
    selectOne = async (id) => {
        return await this.articlePg.selectOne(id);
    };
    update = async (bodyData) => {
        return await this.articlePg.update(bodyData);
    };
    delete = async (id) => {
        return await this.articlePg.delete(id);
    };
}
export default ArticleRepository;
//# sourceMappingURL=articleRepository.js.map