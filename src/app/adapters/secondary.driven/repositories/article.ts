import ArticleModel from '../../../core/models/articleModel.js';
import { ArticleRepository } from '../../../core/gateways/repositories/articleRepository.js';
import { ArticlePg } from './pg.datamappers/article.js';
// import { ArticleMongo } from './mongo.datamappers/article.js';

class ArticleRepo implements ArticleRepository {
  articlePg = ArticlePg;
  // articleMongo = ArticleMongo;
  model = new ArticleModel();

  selectAll = async (): Promise<any[] | undefined> => {
    const result = await this.articlePg.selectAll();

    return result;
  };

  selectOne = async (id: number): Promise<string[] | undefined> => {
    const result = await this.articlePg.selectOne(id);

    return result;
  };
}

export default ArticleRepo;
