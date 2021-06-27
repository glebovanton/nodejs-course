import jwt from 'jsonwebtoken';
import { getUserByProps } from '../users/user.memory.repository';
import { config } from '../../common/config';

const { JWT_SECRET_KEY } = config;

export const signToken = async (
  signLogin: string,
  signPassword: string
): Promise<string | null> => {
  const user = await getUserByProps(signLogin, signPassword);
  if (user && JWT_SECRET_KEY) {
    if ((user?.id && user?.login)) {
      const { id, login } = user;
      return jwt.sign({ id, login }, JWT_SECRET_KEY);
    }
    return null;
  }
  return null;
};
