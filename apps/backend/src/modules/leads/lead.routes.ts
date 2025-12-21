import { Router } from 'express';
import { authMiddleware } from '../../shared/middlewares/auth.middleware.js';
import {
  createLead,
  getLeads,
  updateLead,
  deleteLead,
} from './lead.controller.js';


const router = Router();

router.use(authMiddleware);

router.post('/', createLead);
router.get('/', getLeads);
router.put('/:id', updateLead);
router.delete('/:id', deleteLead);



export default router;
