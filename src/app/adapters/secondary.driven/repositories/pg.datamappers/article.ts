import client from '../../database/postgresql.js';
import { CoreDataMapper } from './coreDataMapper.js';


class ArticleDataMapper extends CoreDataMapper  {
  tableName = 'article';
  columns = `"id", "content", "is_done"`;

  sql_create_function = 'create_article';
  sql_update_function= 'update_article';
}

const ArticlePg = new ArticleDataMapper(client);

export { ArticlePg };
