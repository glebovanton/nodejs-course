import * as jwt from 'jsonwebtoken';
import { HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { config } from '../common/config';
import { NextFunction, Request, Response } from 'express';

const { JWT_SECRET_KEY } = config;

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.header('Authorization');
    const [type, token] = authHeader?.split(' ') ?? [];
    if (type !== 'Bearer' || !token || !JWT_SECRET_KEY) {
      return res.status(HttpStatus.UNAUTHORIZED).send('Wrong authorization');
    }
    try {
      jwt.verify(token, JWT_SECRET_KEY);
    } catch (e) {
      return res.status(HttpStatus.UNAUTHORIZED).send('Wrong authorization');
    }
    return next();
  }
}
