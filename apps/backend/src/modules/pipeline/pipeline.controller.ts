import type { Request, Response } from 'express';
import { getPipelineService } from './pipeline.service.js';

export const getPipeline = async (req: Request, res: Response) => {
  const pipeline = await getPipelineService(req.user.agencyId);
  res.json(pipeline);
};


