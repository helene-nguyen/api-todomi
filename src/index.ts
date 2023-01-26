//~ Import dotenv
import 'dotenv/config';

//~ Import debug
import debug from 'debug';
const logger = debug('Entrypoint');

//~ Import modules
import express, { Request, Response } from 'express';
const app = express();

import { ErrorApi } from './app/core/gateways/services/errorHandler.js';
import { router } from './app/adapters/primary.driver/routes/index.js';

//~ Encoding parsing the body
//accept Content-type: application/json
app.use(express.json());
// accept Content-type: application/x-www-form-urlencoded
app.use(
  express.urlencoded({
    extended: true,
  })
);

//~ Protect API Helmet
import helmet from 'helmet';
app.use(helmet());

//~ Cors
app.use((req: Request, res: Response, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');
  next();
});

//If you have your node.js behind a proxy and are using secure: true, you need to set 'trust proxy' in express
app.set('trust proxy', 1);
// trust first proxy if deploy

//~ Session
import session from 'express-session';
app.use(
  session({
    saveUninitialized: true,
    resave: true,
    proxy: true,
    secret: process.env.SESSION_SECRET!,
    cookie: {
      httpOnly: true,
      secure: true,
      sameSite: 'lax', // or 'strict'
      maxAge: 24 * 60 * 60 * 1000, //24 hours
      //expires : new Date(Date.now() + 60 * 60 * 1000) //1 hour
    },
  })
);


//~ Router
app.use(router);

//~ Handle 404 error
app.use((req, res) => {
  throw new ErrorApi(`Page not found !`, req, res, 404);
});

//& Launch the server
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT ?? 3000;

  app.listen(PORT, () => {
    logger(`🚀\x1b[1;35m Launch server on http://localhost:${PORT}\x1b[0m`);
  });
}
