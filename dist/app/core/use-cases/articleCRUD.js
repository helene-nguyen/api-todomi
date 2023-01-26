import ArticleModel from '../models/articleModel.js';
class ArticleCRUD {
    articleInterface;
    articleModel = new ArticleModel();
    constructor(articleInterface) {
        this.articleInterface = articleInterface;
    }
    createOne = async (req, res, bodyData) => {
        const data = await this.articleModel.controlInsertion(req, res, bodyData);
        return await this.articleInterface.insert(data);
    };
    displayAll = async (req, res) => {
        const result = await this.articleInterface.selectAll();
        const articles = await this.articleModel.controlItem(req, res, result);
        return articles;
    };
    displayOne = async (req, res, articleId) => {
        const result = await this.articleInterface.selectOne(articleId);
        return await this.articleModel.controlItem(req, res, result);
    };
    updateOne = async (req, res, bodyData) => {
        const data = await this.articleModel.controlInsertion(req, res, bodyData);
        return await this.articleInterface.update(data);
    };
    deleteOne = async (req, res, articleId) => {
        return await this.articleInterface.delete(articleId);
    };
}
export default ArticleCRUD;
//# sourceMappingURL=articleCRUD.js.map