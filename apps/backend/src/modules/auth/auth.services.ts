import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../auth/auth.model.js'
import { Agency } from '../agencies/agency.model.js';

export const registerService = async (data: any) => {
  const agency = await Agency.create({
    name: data.agencyName,
  });

  const user = await User.create({
    agencyId: agency._id,
    name: data.name,
    email: data.email,
    password: data.password,
    role: 'admin',
  });

  return { agency, user };
};

export const loginService = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  console.log("User :",user);
  if (!user) {
    throw new Error('Invalid email or password');
  }
  const isMatch = await user.comparePassword(password);
  if (!isMatch) {
    throw new Error('Invalid email or password');
  }
  const token = jwt.sign(
    { id: user._id, role: user.role, agencyId: user.agencyId },
    process.env.JWT_SECRET as string,
    { expiresIn: '1d' }
  );

  return { token, user };
};

