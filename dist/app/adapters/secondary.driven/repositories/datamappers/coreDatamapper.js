import pg from 'pg';
class CoreDataMapper {
    constructor(client) {
        this.client = client;
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
            return result.rows;
        }
    }
}
export { CoreDataMapper };
//# sourceMappingURL=coreDataMapper.js.map