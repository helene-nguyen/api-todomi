import pg from 'pg';
class CoreDataMapper {
    constructor(client) {
        this.client = client;
    }
    async insert(bodyData) {
        if (this.client instanceof pg.Pool) {
            const preparedQuery = {
                text: `
                      SELECT *
                      FROM ${this.sql_create_function}($1)
                      AS content;`,
                values: [bodyData],
            };
            const result = await this.client.query(preparedQuery);
            if (!result.rows[0].content)
                return undefined;
            return result.rows[0];
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
                values: [id],
            };
            const result = await this.client.query(preparedQuery);
            if (!result.rows[0])
                return undefined;
            return result.rows[0];
        }
    }
    async update(bodyData) {
        if (this.client instanceof pg.Pool) {
            const preparedQuery = {
                text: `
                      SELECT *
                      FROM ${this.sql_update_function}($1)
                      AS content;`,
                values: [bodyData],
            };
            const result = await this.client.query(preparedQuery);
            if (!result.rows[0].content)
                return undefined;
            return result.rows[0];
        }
    }
    async delete(id) {
        if (this.client instanceof pg.Pool) {
            const preparedQuery = {
                text: `
                      DELETE
                      FROM "${this.tableName}"
                      WHERE "id" = $1;`,
                values: [id],
            };
            const result = await this.client.query(preparedQuery);
            if (!result.rowCount)
                return undefined;
            return result.rowCount;
        }
    }
}
export { CoreDataMapper };
//# sourceMappingURL=coreDataMapper.js.map