import debug from 'debug';
import { ErrorApi } from '../../../core/gateways/services/errorHandler.js';
const logger = debug('Controller');
export default class CoreController {
    method;
    item;
    paramsName;
    create = async (req, res) => {
        try {
            const bodyData = req.body;
            const isCreated = await new this.method(this.item).createOne(req, res, bodyData);
            if (!isCreated)
                throw new ErrorApi(`Given informations not allows any modification`, req, res, 403);
            return res.status(201).json('Content successfully inserted');
        }
        catch (err) {
            if (err instanceof Error)
                logger(err.message);
        }
    };
    findAll = async (req, res) => {
        try {
            const result = await new this.method(this.item).displayAll(req, res);
            return res.status(200).json(result);
        }
        catch (err) {
            if (err instanceof Error)
                logger(err.message);
        }
    };
    findOne = async (req, res) => {
        try {
            const id = +req.params[this.paramsName];
            const result = await new this.method(this.item).displayOne(req, res, id);
            return res.status(200).json(result);
        }
        catch (err) {
            if (err instanceof Error)
                logger(err.message);
        }
    };
    update = async (req, res) => {
        try {
            const id = +req.params[this.paramsName];
            const bodyData = { id, ...req.body };
            const isUpdated = await new this.method(this.item).updateOne(req, res, bodyData);
            if (!isUpdated)
                throw new ErrorApi(`Given informations not allows any modification`, req, res, 403);
            return res.status(200).json('Content successfully updated');
        }
        catch (err) {
            if (err instanceof Error)
                logger(err.message);
        }
    };
    delete = async (req, res) => {
        try {
            const id = +req.params[this.paramsName];
            const isDeleted = await new this.method(this.item).deleteOne(req, res, id);
            if (!isDeleted)
                throw new ErrorApi(`Given informations not allows any modification`, req, res, 403);
            return res.status(200).json('Content successfully deleted');
        }
        catch (err) {
            if (err instanceof Error)
                logger(err.message);
        }
    };
}
//# sourceMappingURL=coreController.js.map