import debug from 'debug';
const logger = debug('Pool');
import pg from 'pg';
const client = new pg.Pool();
const connectClient = async () => {
    try {
        await client.connect();
        logger('\x1b[1;32m DB connected\x1b[0m');
    }
    catch (err) {
        logger('\x1b[1;31m DB connection failed\x1b[0m', err);
    }
};
connectClient();
export default client;
//# sourceMappingURL=database.js.map