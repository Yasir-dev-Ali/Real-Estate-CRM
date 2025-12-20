import type { Request, Response } from 'express';
import {
  createLeadService,
  getLeadsService,
  updateLeadService,
  deleteLeadService,
} from './lead.service.js';

export const createLead = async (req: Request, res: Response) => {
  try {
    const lead = await createLeadService(req.body, req.user.agencyId);
    res.status(201).json(lead);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getLeads = async (req: Request, res: Response) => {
  const leads = await getLeadsService(req.user.agencyId, req.query);
  res.json(leads);
};

export const updateLead = async (req: Request, res: Response) => {
  const lead = await updateLeadService(req.params.id, req.body);
  res.json(lead);
};

export const deleteLead = async (req: Request, res: Response) => {
  await deleteLeadService(req.params.id);
  res.json({ success: true });
};
