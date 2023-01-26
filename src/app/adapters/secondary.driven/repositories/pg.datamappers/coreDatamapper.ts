//~import modules
import pg from 'pg';
import { BodyData } from '../../../../core/use-cases/articleCRUD';

interface CoreDataMapper {
  client: object;
  tableName: string;
  columns: string;

  sql_create_function: string;
  sql_update_function: string;
}

class CoreDataMapper {
  constructor(client: object) {
    this.client = client;
  }

  async insert(bodyData: BodyData) {
    if (this.client instanceof pg.Pool) {
      const preparedQuery = {
        text: `
                      SELECT *
                      FROM ${this.sql_create_function}($1)
                      AS content;`,
        values: [bodyData],
      };

      const result = await this.client.query(preparedQuery);

      if (!result.rows[0].content) return undefined;

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
      if (!result.rows[0]) return undefined;
      return result.rows;
    }
  }

  async selectOne(id: number) {
    if (this.client instanceof pg.Pool) {
      const preparedQuery = {
        text: `
                      SELECT ${this.columns}
                      FROM "${this.tableName}"
                      WHERE "id" = $1;`,
        values: [id],
      };

      const result = await this.client.query(preparedQuery);
      if (!result.rows[0]) return undefined;

      return result.rows[0];
    }
  }

  async update(bodyData: BodyData) {
    if (this.client instanceof pg.Pool) {
      const preparedQuery = {
        text: `
                      SELECT *
                      FROM ${this.sql_update_function}($1)
                      AS content;`,
        values: [bodyData],
      };

      const result = await this.client.query(preparedQuery);

      // if the target id is not in DB, then return undefined
      if (!result.rows[0].content) return undefined;

      return result.rows[0];
    }
  }

  async delete(id: number) {
    if (this.client instanceof pg.Pool) {
      const preparedQuery = {
        text: `
                      DELETE
                      FROM "${this.tableName}"
                      WHERE "id" = $1;`,
        values: [id],
      };

      const result = await this.client.query(preparedQuery);

      if (!result.rowCount) return undefined;

      return result.rowCount;
    }
  }
}

export { CoreDataMapper };
