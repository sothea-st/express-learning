// src/middleware/verifyJWT.ts
import { Request, Response, NextFunction } from "express";

export const verifyJWT = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: "Access denied. No token provided." });
  }

  try {
    // Replace this with jwt.verify(token, secret) in real-world usage
    if (token === "valid_token") {
      return next();
    }

    return res.status(403).json({ message: "Invalid token" });
  } catch (err) {
    return res.status(400).json({ message: "Token verification failed" });
  }
};
