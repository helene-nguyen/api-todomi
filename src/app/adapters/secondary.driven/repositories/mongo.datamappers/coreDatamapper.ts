//~import modules
import { ObjectId, MongoClient } from 'mongodb';


interface CoreDataMapper {
  client: object;
  collectionName: string;
}

class CoreDataMapper {
  dbName: string = 'todomi';

  constructor(client: object) {
    this.client = client;
  }

  //* METHODS
    //& Find All
    async selectAll() {
      if (this.client instanceof MongoClient) {
        const db = this.client.db(this.dbName);
        const collection = db.collection(this.collectionName);
  
        const result = await collection.find().toArray();
  
        return result;
      }
    }
}

export { CoreDataMapper };