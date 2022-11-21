import 'dotenv/config';
import debug from 'debug';
const logger = debug('Entrypoint');
import express from 'express';
const app = express();
import { ErrorApi } from './app/core/gateways/services/errorHandler.js';
import { router } from './app/adapters/primary.driver/routes/index.js';
import helmet from 'helmet';
app.use(helmet());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE');
    next();
});
app.set('trust proxy', 1);
import session from 'express-session';
app.use(session({
    saveUninitialized: true,
    resave: true,
    proxy: true,
    secret: process.env.SESSION_SECRET,
    cookie: {
        httpOnly: true,
        secure: true,
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000,
    },
}));
app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(router);
app.use((req, res) => {
    throw new ErrorApi(`Page not found !`, req, res, 404);
});
if (process.env.NODE_ENV !== 'test') {
    const PORT = process.env.PORT ?? 3000;
    app.listen(PORT, () => {
        logger(`🚀\x1b[1;35m Launch server on http://localhost:${PORT}\x1b[0m`);
    });
}
//# sourceMappingURL=index.js.map