import client from '../../database/postgresql.js';
import { CoreDataMapper } from './coreDataMapper.js';
class ArticleDataMapper extends CoreDataMapper {
    tableName = 'article';
    columns = `"id", "content"`;
}
const ArticlePg = new ArticleDataMapper(client);
export { ArticlePg };
//# sourceMappingURL=article.js.map