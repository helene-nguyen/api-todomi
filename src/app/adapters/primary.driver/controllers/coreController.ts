//~ Import modules
import { Request, Response } from 'express';
import debug from 'debug';
const logger = debug('Controller');
import ReadArticle from '../../../core/use-cases/article/read.js';
import ArticleRepo from '../../secondary.driven/repositories/article.js';

export default class CoreController {
  //* Properties
  item: any;
  model: any;
  //~ Crud
  read: any;

  //* Methods
  create = async (req: Request, res: Response) => {};

  findAll = async (req: Request, res: Response) => {
    try {
      const result = await new this.read(this.item).displayAll();
   
      return res.json(result);
    } catch (err) {
      if (err instanceof Error) logger(err.message);
    }
  };
  findOne = (req: Request, res: Response) => {};

  update = (req: Request, res: Response) => {};
  delete = (req: Request, res: Response) => {};

  //* Controls
  paramsHandler = async (req: Request, res: Response, elementId: string) => {
    const idChecked = +req.params[elementId];
    return idChecked;
  };
}
