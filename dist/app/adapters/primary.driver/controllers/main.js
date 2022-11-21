import debug from 'debug';
const logger = debug('Controller');
const renderHomePage = (req, res) => {
    try {
        res.json({
            message: ' Welcome to Todomi API',
        });
    }
    catch (err) {
        if (err instanceof Error)
            logger(err.message);
    }
};
export { renderHomePage };
//# sourceMappingURL=main.js.map