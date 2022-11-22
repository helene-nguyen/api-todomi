import ArticleModel from '../../../core/models/articleModel.js';
import { ArticleRepository } from '../../../core/gateways/repositories/articleRepository.js';
import { Article } from './datamappers/article.js';

class ArticleRepo implements ArticleRepository {
  article = Article;
  model = new ArticleModel();

  selectAll = async (): Promise<string[] | undefined> => {
    const result = await this.article.selectAll();

    return result;
  };

  selectOne = async (id : number): Promise<string[] | undefined> => { 
    const result = await this.article.selectOne(id);

    return result;
  }
}

export default ArticleRepo;
