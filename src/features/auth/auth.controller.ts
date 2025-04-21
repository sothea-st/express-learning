// src/features/auth/auth.controller.ts
import { Request, Response } from 'express';
import { generateToken } from '../../utils/jwt';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  // Dummy user check
  if (email === 'admin@example.com' && password === '123456') {
    const token = generateToken({ email });
    return res.json({ token });
  }

  return res.status(401).json({ message: 'Invalid credentials' });
};
