import { MongoClient } from 'mongodb';
class CoreDataMapper {
    dbName = 'todomi';
    constructor(client) {
        this.client = client;
    }
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
//# sourceMappingURL=coreDatamapper.js.map