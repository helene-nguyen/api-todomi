import { ArticleRepository } from '../../gateways/repositories/articleRepository.js';
import ArticleModel from '../../models/articleModel.js';

class ReadArticle {
  articleModel: any = new ArticleModel();

  constructor(private articleRepository: ArticleRepository) {}

  displayAll = async (req: Request, res: Response): Promise<any> => {
    const result = await this.articleRepository.selectAll();

    return await this.articleModel.fetchAllItems(req, res, result);
  };
}

export default ReadArticle;
