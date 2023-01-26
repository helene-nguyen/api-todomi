//~ Import modules
import CoreController from './coreController.js';
import ArticleCRUD from '../../../core/use-cases/articleCRUD.js';
import ArticleRepository from '../../secondary.driven/repositories/articleRepository.js';

class ArticleController extends CoreController {
  //~ Crud use cases
  method: any = ArticleCRUD;
  //* Properties
  item: any = new ArticleRepository();
  paramsName: string = 'articleId';
}

const Article = new ArticleController();
export default Article;
