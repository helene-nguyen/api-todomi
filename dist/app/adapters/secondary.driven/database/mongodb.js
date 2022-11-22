import { MongoClient } from 'mongodb';
import debug from 'debug';
const logger = debug('Pool');
const url = process.env.DB_URI;
const client = new MongoClient(url);
client
    .connect()
    .then(() => logger('\x1b[1;36m Mongo DB connected\x1b[0m'))
    .catch((err) => logger('\x1b[1;31m Mongo DB connection failed\x1b[0m', err));
export default client;
//# sourceMappingURL=mongodb.js.map