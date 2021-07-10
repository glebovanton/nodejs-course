import { Injectable } from '@nestjs/common';
import { getRepository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { LoginDto } from './dto/login.dto';
import { User } from '../entities/User';
import { config } from '../common/config';
import { checkHashedPassword } from '../helpers/hash';

const { JWT_SECRET_KEY } = config;

@Injectable()
export class LoginService {
  async signToken(
    signLogin: string,
    signPassword: string,
  ): Promise<string | null> {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne({
      login: signLogin,
    });
    if (user && JWT_SECRET_KEY) {
      if (user?.id && user?.login && user?.password) {
        const { id, login, password } = user;
        const isValid = await checkHashedPassword(signPassword, password);
        if (isValid) {
          return jwt.sign({ id, login }, JWT_SECRET_KEY);
        }
      }
    }
    return null;
  }
}
