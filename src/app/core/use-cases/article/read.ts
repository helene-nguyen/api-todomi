import { ArticleRepository } from '../../gateways/repositories/articleRepository.js';
import ArticleModel from '../../models/articleModel.js';

class ReadArticle {
  articleModel: any = new ArticleModel();
  
  //access to article repository properties
  constructor(private articleRepository: ArticleRepository) {}

  displayAll = async (req: Request, res: Response): Promise<string[]> => {
    const result = await this.articleRepository.selectAll();

    return await this.articleModel.fetchAllItems(req, res, result);
  };

  displayOne = async (req: Request, res: Response, articleId: number): Promise<string[]> => {

    const result = await this.articleRepository.selectOne(articleId);

    return await this.articleModel.fetchOneItem(req, res, result, articleId);
  };
}

export default ReadArticle;
