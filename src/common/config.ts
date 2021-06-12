import * as dotenv from 'dotenv';
import * as path from 'path';

interface IConfig {
  PORT?: string;
  NODE_ENV?: string;
  MONGO_CONNECTION_STRING?: string;
  JWT_SECRET_KEY?: string;
  AUTH_MODE?: boolean;
}

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const {PORT,NODE_ENV, MONGO_CONNECTION_STRING, JWT_SECRET_KEY, AUTH_MODE} = process.env

export const config: IConfig = {
  PORT: PORT,
  NODE_ENV: NODE_ENV,
  MONGO_CONNECTION_STRING: MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY: JWT_SECRET_KEY,
  AUTH_MODE: AUTH_MODE === 'true',
};
