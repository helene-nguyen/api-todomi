import { Router } from "express";
const router = Router();
import { renderHomePage } from '../controllers/main.js';
router.get('/api/v1', renderHomePage);
export { router };
//# sourceMappingURL=main.js.map