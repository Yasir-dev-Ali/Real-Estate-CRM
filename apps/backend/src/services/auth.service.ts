import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User } from '../modules/auth/auth.model.js';
import { Agency } from '../../src/modules/agencies/agency.model.js';

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
  if (!user) throw new Error('Invalid credentials');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid credentials');

  const token = jwt.sign(
    { userId: user._id, agencyId: user.agencyId },
    process.env.JWT_SECRET as string,
    { expiresIn: '7d' }
  );

  return { token, user };
};
