import debug from 'debug';
const logger = debug('Controller');
export default class CoreController {
    element;
    item;
    model;
    read;
    create = async (req, res) => { };
    findAll = async (req, res) => {
        try {
            const result = await new this.read(this.item).displayAll(req, res);
            return res.status(200).json(result);
        }
        catch (err) {
            if (err instanceof Error)
                logger(err.message);
        }
    };
    findOne = async (req, res) => {
        try {
            const id = +req.params[this.element];
            const result = await new this.read(this.item).displayOne(req, res, id);
            return res.status(200).json(result);
        }
        catch (err) {
            if (err instanceof Error)
                logger(err.message);
        }
    };
    update = async (req, res) => { };
    delete = async (req, res) => { };
}
//# sourceMappingURL=coreController.js.map