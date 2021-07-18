import 'reflect-metadata';
import { User } from '../entities/User';
import { UsersService } from '../users/users.service';
import { config } from '../common/config';

export const initAdmin: () => Promise<void> = async () => {
  const { ADMIN_NAME, ADMIN_LOGIN, ADMIN_PASSWORD } = config;
  const usersService = new UsersService();
  const user: User | null = await usersService.findOneByProps(ADMIN_LOGIN);
  if (!user) {
    await usersService.create({
      name: ADMIN_NAME,
      login: ADMIN_LOGIN,
      password: ADMIN_PASSWORD,
    });
  }
};
