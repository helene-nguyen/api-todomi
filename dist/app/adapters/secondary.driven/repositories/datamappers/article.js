import client from '../../database/mongodb.js';
import { CoreDataMapper } from './coreDataMapper.js';
class ArticleDataMapper extends CoreDataMapper {
    tableName = 'article';
    columns = `"id", "content"`;
    collectionName = 'article';
}
const Article = new ArticleDataMapper(client);
export { Article };
//# sourceMappingURL=article.js.map