import { Request, Response } from 'express';
import CoreController from './coreController.js';
import ReadArticle from '../../../core/use-cases/article/read.js';
import ArticleRepo from '../../secondary.driven/repositories/article.js';
import ArticleModel from '../../../core/models/articleModel.js';

class ArticleController extends CoreController {
  read: any = ReadArticle;
  item: any = new ArticleRepo();
  model: any = new ArticleModel();
  element: string = 'articleId';
}

const Article = new ArticleController();
export default Article;
