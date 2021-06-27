import bcrypt from 'bcrypt';
import { BCRYPT_ROUNDS } from '../common/constants';

export const hashPassword = async (password: string): Promise<string> => {
  const salt: string = await bcrypt.genSalt(BCRYPT_ROUNDS);
  const hash: string = await bcrypt.hash(password, salt);
  return hash;
};

export const checkHashedPassword = async (
  password: string,
  hash: string
): Promise<boolean> => {
  const isValid: boolean = await bcrypt.compare(password, hash);
  return isValid;
};
