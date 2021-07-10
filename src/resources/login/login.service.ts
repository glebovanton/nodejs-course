import jwt from 'jsonwebtoken';
import { getUserByProps } from '../users/user.memory.repository';
import { config } from '../../common/config';
import { checkHashedPassword } from '../../helpers/hash';

const { JWT_SECRET_KEY } = config;

export const signToken = async (
  signLogin: string,
  signPassword: string
): Promise<string | null> => {
  const user = await getUserByProps(signLogin);
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
};
