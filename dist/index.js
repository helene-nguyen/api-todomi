import 'dotenv/config';
import express from 'express';
const app = express();
import debug from 'debug';
const logger = debug('Entrypoint');
if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT ?? 3000;
    app.listen(PORT, () => {
        logger(`🚀\x1b[1;35m Launch server on http://localhost:${PORT}\x1b[0m`);
    });
}
//# sourceMappingURL=index.js.map