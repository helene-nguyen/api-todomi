import { formattedDate } from '../utils/formattedDate.js';
import * as fs from 'fs';
import { resolve, join } from 'path';
const __dirname = resolve(`./src/app/services`);
import debug from 'debug';
const logger = debug('ErrorHandling');
function errorLoggerHandling(message, req) {
    const actualDate = new Date();
    const logMessage = `${actualDate.toLocaleString()} - ${req.url} - ${message}\r`;
    const fileName = `${formattedDate}.log`;
    fs.appendFile(join(__dirname, `../../../logs/${fileName}`), logMessage, (error) => {
        if (error)
            logger(error);
    });
}
export { errorLoggerHandling };
//# sourceMappingURL=errorLoggerHandler.js.map