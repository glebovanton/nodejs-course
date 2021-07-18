import * as bcrypt from 'bcrypt';
import { BCRYPT_ROUNDS } from '../common/constants';

export const hashPassword = async (password: string): Promise<string> => {
  const salt: string = await bcrypt.genSalt(BCRYPT_ROUNDS);
  return await bcrypt.hash(password, salt);
};

export const checkHashedPassword = async (
  password: string,
  hash: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hash);
};
