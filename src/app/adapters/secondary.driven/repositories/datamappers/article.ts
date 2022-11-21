import client from '../../database/database.js';
import { CoreDataMapper } from './coreDataMapper.js';


class ArticleDataMapper extends CoreDataMapper  {
  tableName = 'article';
  columns = `"id", "content"`;
}

const Article = new ArticleDataMapper(client);

export { Article };
