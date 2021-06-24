import * as dotenv from 'dotenv';
import * as path from 'path';

interface IConfig {
  PORT?: string;
  POSTGRES_CONTAINER_PORT?: string;
  NODE_ENV?: string;
  MONGO_CONNECTION_STRING?: string;
  JWT_SECRET_KEY?: string;
  AUTH_MODE?: boolean;
}

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const {PORT,NODE_ENV, MONGO_CONNECTION_STRING, JWT_SECRET_KEY, AUTH_MODE, POSTGRES_CONTAINER_PORT} = process.env

export const config: IConfig = {
  PORT,
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY,
  POSTGRES_CONTAINER_PORT,
  AUTH_MODE: AUTH_MODE === 'true',
};
