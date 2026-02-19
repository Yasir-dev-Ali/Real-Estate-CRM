import { Router } from 'express';
import { authMiddleware } from '../../shared/middlewares/auth.middleware.js';
import { getPipeline } from './pipeline.controller.js';

const router = Router();

router.use(authMiddleware);
router.get('/', getPipeline);

export default router;
