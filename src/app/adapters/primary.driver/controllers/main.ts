//~ Import modules
import debug from 'debug';
const logger = debug('Controller');
import { Request, Response } from 'express';

const renderHomePage = (req: Request, res: Response) => {
    try {
    res.json({
      message: ' Welcome to Todomi API',
    });
  } catch (err) {
    if (err instanceof Error) logger(err.message);
  }
};

export { renderHomePage };
