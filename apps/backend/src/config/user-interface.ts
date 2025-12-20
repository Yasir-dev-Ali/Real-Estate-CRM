import mongoose, { Document, Model } from "mongoose";
import bcrypt from "bcryptjs";

export interface IUser {
  agencyId: mongoose.Types.ObjectId;
  name: string;
  email: string;
  phone?: string;
  password: string;
  role: "admin" | "manager" | "agent";
  status: string;
}

export interface IUserMethods {
  comparePassword(candidatePassword: string): Promise<boolean>;
}

export type UserDocument = Document & IUser & IUserMethods;
