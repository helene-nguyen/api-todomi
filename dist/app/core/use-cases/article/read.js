import ArticleModel from '../../models/articleModel.js';
class ReadArticle {
    articleRepository;
    articleModel = new ArticleModel();
    constructor(articleRepository) {
        this.articleRepository = articleRepository;
    }
    displayAll = async (req, res) => {
        const result = await this.articleRepository.selectAll();
        return await this.articleModel.fetchAllItems(req, res, result);
    };
}
export default ReadArticle;
//# sourceMappingURL=read.js.map