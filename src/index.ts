//~ Import dotenv
import 'dotenv/config';

//~ Improt modules
import express, { Request, Response } from 'express';
const app = express();

//~ Import debug
import debug from 'debug';
const logger = debug('Entrypoint');

//~ Launch the server
if (process.env.NODE_ENV !== 'test') {
  const PORT = process.env.PORT ?? 3000;

  app.listen(PORT, () => {
    logger(`🚀\x1b[1;35m Launch server on http://localhost:${PORT}\x1b[0m`);
  });
}
