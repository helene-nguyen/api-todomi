import { ErrorApi } from '../gateways/services/errorHandler.js';
import { Request, Response } from 'express';

class CoreModel {
  //* Properties
  notFound: string = 'Item not found';
  notNumber: string = 'Item is not a number';

  //* Methods
  fetchAllItems = async (req: Request, res: Response, result: any) => {
    if (!result) throw new ErrorApi(this.notFound, req, res, 400);
    return result;
  };

  fetchOneItem = async (req: Request, res: Response, result: any, id: number) => {
    if (!result) throw new ErrorApi(this.notFound, req, res, 400);
    if (typeof id !== 'number') throw new ErrorApi(this.notNumber, req, res, 400);

    return result;
  };
}

export default CoreModel;
