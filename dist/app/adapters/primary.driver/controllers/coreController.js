import debug from 'debug';
const logger = debug('Controller');
export default class CoreController {
    item;
    model;
    read;
    create = async (req, res) => { };
    findAll = async (req, res) => {
        try {
            const result = await new this.read(this.item).displayAll();
            return res.json(result);
        }
        catch (err) {
            if (err instanceof Error)
                logger(err.message);
        }
    };
    findOne = (req, res) => { };
    update = (req, res) => { };
    delete = (req, res) => { };
    paramsHandler = async (req, res, elementId) => {
        const idChecked = +req.params[elementId];
        return idChecked;
    };
}
//# sourceMappingURL=coreController.js.map