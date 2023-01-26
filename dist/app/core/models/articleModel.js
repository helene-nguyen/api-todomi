import { ErrorApi } from '../gateways/services/errorHandler.js';
import CoreModel from './coreModel.js';
class ArticleModel extends CoreModel {
    required = 'You need to add "task" keyword !';
    controlInsertion = async (req, res, bodyData) => {
        const { content } = bodyData;
        const required = /task/gi;
        const found = content.match(required);
        if (!found)
            throw new ErrorApi(this.required, req, res, 400);
        return bodyData;
    };
}
export default ArticleModel;
//# sourceMappingURL=articleModel.js.map