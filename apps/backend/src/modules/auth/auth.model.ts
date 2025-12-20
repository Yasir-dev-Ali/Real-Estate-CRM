import mongoose, { Model } from "mongoose";
import type { UserDocument } from "../../config/user-interface.js";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema<UserDocument>(
  {
    agencyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Agency",
      required: true,
    },
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: String,
    password: { type: String, required: true },
    role: {
      type: String,
      enum: ["admin", "manager", "agent"],
      default: "admin",
    },
    status: { type: String, default: "active" },
  },
  { timestamps: true }
);

// 🔐 HASH PASSWORD BEFORE SAVE
userSchema.pre("save", async function (this: UserDocument) {
  if (!this.isModified("password")) return;

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

// 🔍 PASSWORD COMPARISON
userSchema.methods.comparePassword = async function (
  this: UserDocument,
  candidatePassword: string
): Promise<boolean> {
  return bcrypt.compare(candidatePassword, this.password);
};

export const User: Model<UserDocument> = mongoose.model<UserDocument>(
  "User",
  userSchema
);
