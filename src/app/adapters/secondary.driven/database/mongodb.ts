//~import module
import { MongoClient } from 'mongodb';
//~ Import Debug
import debug from 'debug';
const logger = debug('Pool');

//& function that allows you to retrieve the list of our available databases
// async function listDatabases(client) {
//     const databasesList = await client.db().admin().listDatabases();

//     console.log('Databases:');
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// }

//~connexion
const url : string = process.env.DB_URI!;

const client = new MongoClient(url);

client
  .connect()
  .then(() => logger('\x1b[1;36m Mongo DB connected\x1b[0m'))
  .catch((err) => logger('\x1b[1;31m Mongo DB connection failed\x1b[0m', err));

  // await listDatabases(client);

export default client;