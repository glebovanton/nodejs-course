import 'reflect-metadata';
import { createConnection } from 'typeorm';
import ORMConfig from '../ormconfig';
import { User } from '../entities/User';
import * as usersService from '../resources/users/user.service';
import { config } from '../common/config';

const { stdout, stderr } = process;

const connectToDB = async () => {
  let connection;
  try {
    connection = await createConnection(ORMConfig);
    if (!connection.isConnected) {
      await connection.connect();
    }
    stdout.write('Connected To PostgreSQL!\n');
  } catch (err) {
    stderr.write('DB connection err', err);
  }
};

export const initAdmin: () => Promise<void> = async () => {
  const { ADMIN_NAME, ADMIN_LOGIN, ADMIN_PASSWORD } = config
  const user: User | null = await usersService.getUserByProps(ADMIN_LOGIN);
  if (!user) {
    await usersService.postUser({
      name: ADMIN_NAME,
      login: ADMIN_LOGIN,
      password: ADMIN_PASSWORD,
    });
  }
};

export const tryDbConnect = async (cb: () => void): Promise<void> => {
  try {
    await connectToDB();
    await initAdmin();
    cb();
  } catch (err) {
    stderr.write('DB connection err', err);
  }
};
