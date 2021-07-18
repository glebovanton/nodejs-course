import * as jwt from 'jsonwebtoken';
import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { config } from '../common/config';
import { PATH_WHITELIST } from '../common/constants';

const { JWT_SECRET_KEY, USE_FASTIFY } = config;

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const authHeader = USE_FASTIFY
      ? req?.headers?.authorization ?? ''
      : req?.header('Authorization') ?? '';
    const [type, token] = authHeader?.split(' ') ?? [];
    if (PATH_WHITELIST.includes(USE_FASTIFY ? req?.url : req?.path)) {
      return true;
    }
    if (type !== 'Bearer' || !token || !JWT_SECRET_KEY) {
      throw new UnauthorizedException('Wrong authorization');
    }
    try {
      jwt.verify(token, JWT_SECRET_KEY);
    } catch (e) {
      throw new UnauthorizedException('Wrong authorization');
    }
    return true;
  }
}
