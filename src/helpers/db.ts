import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { config } from '../common/ormconfig';

const connectToDB = async () => {
  let connection;

  try {
    connection = await createConnection(config);
    if (!connection.isConnected) {
      await connection.connect();
    }
    console.log('Connected To PostgreSQL!');
  } catch (err) {
    console.log('Err', err);
  }
};

export const tryDbConnect = async (cb: () => void): Promise<void> => {
  try {
    await connectToDB();
    cb();
  } catch (err) {
    console.log('DB connection err', err);
  }
};