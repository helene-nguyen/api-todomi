import { ErrorApi } from '../gateways/services/errorHandler.js';
class CoreModel {
    notFound = 'Item not found';
    controlItem = async (req, res, result) => {
        if (!result)
            throw new ErrorApi(this.notFound, req, res, 400);
        return result;
    };
}
export default CoreModel;
//# sourceMappingURL=coreModel.js.map