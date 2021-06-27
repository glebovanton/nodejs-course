import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';
import { UNAUTHORIZED } from 'http-status-codes';
import { config } from '../common/config';
import { PATH_WHITELIST } from '../common/constants';

const { JWT_SECRET_KEY } = config;

export const checkToken = (
  req: Request,
  res: Response,
  next: NextFunction
): void | Response => {
  if (
    PATH_WHITELIST.includes(req.path)
  ) {
    return next();
  }
  const authHeader = req.header('Authorization');
  const [type, token] = authHeader?.split(' ') ?? [];
  if (type !== 'Bearer' || !token || !JWT_SECRET_KEY) {
    return res.status(UNAUTHORIZED).send('Wrong authorization');
  }
  try {
    jwt.verify(token, JWT_SECRET_KEY);
  } catch (e) {
    return res.status(UNAUTHORIZED).send('Wrong authorization');
  }
  return next();
};
