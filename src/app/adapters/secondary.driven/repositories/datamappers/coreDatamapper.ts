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

  //* METHODS

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
