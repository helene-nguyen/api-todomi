//~ Import modules
import { Request, Response } from 'express';
import debug from 'debug';
const logger = debug('Controller');

export default class CoreController {
  //* Properties
  element: any;
  item: any;
  model: any;
  //~ Crud
  read: any;

  //* Methods
  create = async (req: Request, res: Response) => {};

  findAll = async (req: Request, res: Response) => {
    try {
      const result = await new this.read(this.item).displayAll(req, res);

      return res.status(200).json(result);
    } catch (err) {
      if (err instanceof Error) logger(err.message);
    }
  };

  findOne = async (req: Request, res: Response) => {
    try {
      const id: number = +req.params[this.element];

      const result = await new this.read(this.item).displayOne(req, res, id);

      return res.status(200).json(result);
    } catch (err) {
      if (err instanceof Error) logger(err.message);
    }
  };

  update = async (req: Request, res: Response) => {};
  delete = async (req: Request, res: Response) => {};
}
