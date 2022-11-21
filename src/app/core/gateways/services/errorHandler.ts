import { errorLoggerHandling } from '../services/errorLoggerHandler.js';
import { Request, Response } from 'express';

class ErrorApi extends Error {
  constructor(message: string, req: Request, res: Response, statusCode: number = 500) {
    //use Error properties
    super(message);
    res.status(statusCode).json({ message: message });

    //~ Log errors
    errorLoggerHandling(message, req, res);
  }
}

export { ErrorApi };
