import { ErrorApi } from '../gateways/services/errorHandler.js';
class CoreModel {
    notFound = 'Item not found';
    notNumber = 'Item is not a number';
    fetchAllItems = async (req, res, result) => {
        if (!result)
            throw new ErrorApi(this.notFound, req, res, 400);
        return result;
    };
    fetchOneItem = async (req, res, result, id) => {
        if (!result)
            throw new ErrorApi(this.notFound, req, res, 400);
        if (typeof id !== 'number')
            throw new ErrorApi(this.notNumber, req, res, 400);
        return result;
    };
}
export default CoreModel;
//# sourceMappingURL=coreModel.js.map