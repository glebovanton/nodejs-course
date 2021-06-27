import 'reflect-metadata';
import { createConnection } from 'typeorm';
import ORMConfig from '../ormconfig';

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

export const tryDbConnect = async (cb: () => void): Promise<void> => {
  try {
    await connectToDB();
    cb();
  } catch (err) {
    stderr.write('DB connection err', err);
  }
};
