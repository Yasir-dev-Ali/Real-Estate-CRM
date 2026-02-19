import { Pipeline } from './pipeline.model.js';

export const createDefaultPipeline = async (agencyId: string) => {
  return await Pipeline.create({
    agencyId,
    stages: [
      { name: 'New Lead', order: 1, color: '#2563eb' },
      { name: 'Contacted', order: 2, color: '#7c3aed' },
      { name: 'Site Visit', order: 3, color: '#0ea5e9' },
      { name: 'Negotiation', order: 4, color: '#f59e0b' },
      { name: 'Token Paid', order: 5, color: '#22c55e' },
      { name: 'Closed', order: 6, color: '#16a34a' },
      { name: 'Lost', order: 7, color: '#ef4444' },
    ],
    isDefault: true,
  });
};

export const getPipelineService = async (agencyId: string) => {
  return await Pipeline.findOne({ agencyId, isDefault: true });
};


export const updatePipelineService = async (
  agencyId: string,
  stages: Array<{ name: string; order: number; color?: string }>
) => {
  return await Pipeline.findOneAndUpdate(
    { agencyId, isDefault: true },
    { stages },
    { new: true }
    );
};


export const deletePipelineService = async (agencyId: string) => {
  return await Pipeline.findOneAndDelete({ agencyId, isDefault: true });
};

export const resetPipelineService = async (agencyId: string) => {
  await deletePipelineService(agencyId);
  return await createDefaultPipeline(agencyId);
};

export const getAllPipelinesService = async () => {
  return await Pipeline.find();
};

export const deleteAllPipelinesService = async () => {
  return await Pipeline.deleteMany({});
};

export const createPipelineService = async (
  agencyId: string,
  name: string,
    stages: Array<{ name: string; order: number; color?: string }>
) => {
  return await Pipeline.create({
    agencyId,
    name,
    stages,
  });
};