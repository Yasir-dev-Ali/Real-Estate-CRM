import type { Request, Response } from 'express';
import { registerService, loginService } from './auth.services.js';

export const register = async (req: Request, res: Response) => {
  try {
    const data = await registerService(req.body);
    res.status(201).json({ success: true, data });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const data = await loginService(email, password);
    console.log("Data :",data);
    res.json(data);
  } catch (error: any) {
    res.status(401).json({ message: error.message });
  }
};
