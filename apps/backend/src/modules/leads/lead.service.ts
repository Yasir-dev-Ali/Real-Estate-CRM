import { Lead } from './lead.model.js';

export const createLeadService = async (data: any, agencyId: string) => {
  return await Lead.create({
    ...data,
    agencyId,
  });
};

export const getLeadsService = async (agencyId: string, filters: any) => {
  return await Lead.find({ agencyId, ...filters })
    .populate('assignedTo', 'name email')
    .sort({ createdAt: -1 });
};

export const updateLeadService = async (id: string, data: any) => {
  return await Lead.findByIdAndUpdate(id, data, { new: true });
};

export const deleteLeadService = async (id: string) => {
  return await Lead.findByIdAndDelete(id);
};
