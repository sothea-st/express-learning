// src/utils/jwt.util.ts
import jwt from 'jsonwebtoken';
import fs from 'fs';
import path from 'path';

const privateKeyPath = path.join(__dirname, '../keys/private.key');
const publicKeyPath = path.join(__dirname, '../keys/public.key');

const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
const publicKey = fs.readFileSync(publicKeyPath, 'utf8');

export const generateToken = (payload: object): string => {
  return jwt.sign(payload, privateKey, {
    algorithm: 'RS256',
    expiresIn: '1h',
  });
};

export const verifyToken = (token: string): any => {
  return jwt.verify(token, publicKey, {
    algorithms: ['RS256'],
  });
};
