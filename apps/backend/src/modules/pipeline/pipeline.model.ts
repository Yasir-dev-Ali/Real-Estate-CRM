import mongoose from 'mongoose';

const stageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  order: { type: Number, required: true },
  color: { type: String },
});

const pipelineSchema = new mongoose.Schema(
  {
    agencyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Agency',
      required: true,
    },
    name: { type: String, default: 'Default Pipeline' },
    stages: [stageSchema],
    isDefault: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Pipeline = mongoose.model('Pipeline', pipelineSchema);
