import client from '../../database/mongodb.js';
import { CoreDataMapper } from './coreDataMapper.js';

class ArticleDataMapper extends CoreDataMapper {
  collectionName = 'article';
}

const ArticleMongo = new ArticleDataMapper(client);

export { ArticleMongo };
