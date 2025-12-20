import mongoose from 'mongoose';

const agencySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    logo: String,
    subscriptionPlan: { type: String, default: 'free' },
    activeUntil: Date,
  },
  { timestamps: true }
);

export const Agency = mongoose.model('Agency', agencySchema);
