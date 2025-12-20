import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema(
  {
    agencyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Agency',
      required: true,
    },
    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    fullName: { type: String, required: true },
    email: String,
    phone: { type: String, required: true },
    source: {
      type: String,
      enum: ['Facebook', 'WhatsApp', 'Website', 'Call', 'Referral'],
      default: 'Website',
    },
    budget: Number,
    interestedLocation: String,
    status: {
      type: String,
      enum: ['new', 'contacted', 'interested', 'under_discussion', 'closed', 'lost'],
      default: 'new',
    },
    pipelineStageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pipeline',
    },
    leadScore: {
      type: String,
      enum: ['hot', 'warm', 'cold'],
      default: 'warm',
    },
    notes: String,
    lastFollowUpDate: Date,
    nextFollowUpDate: Date,
  },
  { timestamps: true }
);

export const Lead = mongoose.model('Lead', leadSchema);
