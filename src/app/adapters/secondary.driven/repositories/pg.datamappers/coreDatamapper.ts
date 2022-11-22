//~import modules
import pg from 'pg';


interface CoreDataMapper {
  client: object;
  tableName: string;
  columns: string;
}

class CoreDataMapper {

  constructor(client: object) {
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
      if (!result.rows[0]) return undefined;
      return result.rows;
    }
  }

  async selectOne(id : number) {
    if (this.client instanceof pg.Pool) {
      const preparedQuery = {
        text: `
                      SELECT ${this.columns}
                      FROM "${this.tableName}"
                      WHERE "id" = $1;`,
        values: [id]
      };

      const result = await this.client.query(preparedQuery);
      if (!result.rows[0]) return undefined;
      
      return result.rows[0];
    }
  }
}

export { CoreDataMapper };
