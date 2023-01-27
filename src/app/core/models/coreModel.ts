import { ErrorApi } from '../gateways/services/errorHandler.js';
import { Request, Response } from 'express';

class CoreModel {
  //* Properties
  notFound: string = 'Item not found';
  
  controlItem = async (req: Request, res: Response, result: any) => {
    if (!result) throw new ErrorApi(this.notFound, req, res, 400);
    return result;
  };
}

export default CoreModel;
