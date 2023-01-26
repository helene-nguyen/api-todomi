//~ Import modules
import { ErrorApi } from '../gateways/services/errorHandler.js';
import { Request, Response } from 'express';
import CoreModel from './coreModel.js';
import { BodyData } from '../use-cases/articleCRUD.js';

class ArticleModel extends CoreModel {
  required: string = 'You need to add "task" keyword !';

  //* Methods
  controlInsertion = async (req: Request, res: Response, bodyData: BodyData) => {
    const { content } = bodyData;
    const required = /task/gi;
    const found = content.match(required);
    
    if (!found) throw new ErrorApi(this.required, req, res, 400);
    
    return bodyData;
  };
}

export default ArticleModel;
