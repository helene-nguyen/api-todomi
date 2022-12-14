import pg from 'pg';
import { MongoClient } from 'mongodb';
class CoreDataMapper {
    dbName = 'todomi';
    constructor(client) {
        this.client = client;
    }
    async findAll() {
        if (this.client instanceof MongoClient) {
            const db = this.client.db(this.dbName);
            const collection = db.collection(this.collectionName);
            const result = await collection.find().toArray();
            return result;
        }
    }
    async selectAll() {
        if (this.client instanceof pg.Pool) {
            const preparedQuery = {
                text: `
                      SELECT ${this.columns}
                      FROM "${this.tableName}"
                      ORDER BY "id";`,
            };
            const result = await this.client.query(preparedQuery);
            if (!result.rows[0])
                return undefined;
            return result.rows;
        }
    }
    async selectOne(id) {
        if (this.client instanceof pg.Pool) {
            const preparedQuery = {
                text: `
                      SELECT ${this.columns}
                      FROM "${this.tableName}"
                      WHERE "id" = $1;`,
                values: [id]
            };
            const result = await this.client.query(preparedQuery);
            if (!result.rows[0])
                return undefined;
            return result.rows[0];
        }
    }
}
export { CoreDataMapper };
//# sourceMappingURL=coreDataMapper.js.map