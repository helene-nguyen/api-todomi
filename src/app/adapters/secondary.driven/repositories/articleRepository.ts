//~ Import modules
import { ArticleInterface } from '../../../core/gateways/interfaces/articleInterface.js';
import { ArticlePg } from './pg.datamappers/article.js';
import { ArticleMongo } from './mongo.datamappers/article.js';
import { BodyData } from '../../../core/use-cases/articleCRUD.js';

class ArticleRepository implements ArticleInterface {
  articlePg = ArticlePg;
  // articleMongo = ArticleMongo;

  insert = async (bodyData: BodyData): Promise<string[] | undefined> => {
    return await this.articlePg.insert(bodyData);
  };

  selectAll = async (): Promise<any[] | undefined> => {
    return await this.articlePg.selectAll();
  };

  selectOne = async (id: number): Promise<string[] | undefined> => {
    return await this.articlePg.selectOne(id);
  };

  update = async (bodyData: BodyData): Promise<string[] | undefined> => {
    return await this.articlePg.update(bodyData);
  };

  delete = async (id: number): Promise<number | undefined> => {
    return await this.articlePg.delete(id);
  };
}

export default ArticleRepository;
