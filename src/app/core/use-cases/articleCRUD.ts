import { ArticleInterface } from '../gateways/interfaces/articleInterface.js';
import ArticleModel from '../models/articleModel.js';

export interface BodyData {
  id: number;
  content: string;
  is_done?: boolean | undefined;
}

class ArticleCRUD {
  //* Properties
  articleModel: any = new ArticleModel();

  //* Constructor
  //access to article repository properties
  constructor(private articleInterface: ArticleInterface) {}

  //* Methods
  createOne = async (req: Request, res: Response, bodyData: BodyData): Promise<string[] | undefined> => {
    const data = await this.articleModel.controlInsertion(req, res, bodyData);

    return await this.articleInterface.insert(data);
  };

  fetchAll = async (req: Request, res: Response): Promise<string[]> => {
    const result = await this.articleInterface.selectAll();

    // before sending results, control first
    const articles = await this.articleModel.controlItem(req, res, result);

    return articles;
  };

  fetchOne = async (req: Request, res: Response, articleId: number): Promise<string[]> => {
    const result = await this.articleInterface.selectOne(articleId);

    return await this.articleModel.controlItem(req, res, result);
  };

  updateOne = async (req: Request, res: Response, bodyData: BodyData): Promise<string[] | undefined> => {
    const data = await this.articleModel.controlInsertion(req, res, bodyData);

    return await this.articleInterface.update(data);
  };

  deleteOne = async (req: Request, res: Response, articleId: number) => {
    return await this.articleInterface.delete(articleId);
  };
}

export default ArticleCRUD;
