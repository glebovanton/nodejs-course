import * as dotenv from 'dotenv';
import * as path from 'path';

interface IConfig {
  PORT?: string;
  POSTGRES_CONTAINER_PORT?: string;
  NODE_ENV?: string;
  MONGO_CONNECTION_STRING?: string;
  JWT_SECRET_KEY?: string;
  AUTH_MODE?: boolean;
  ADMIN_NAME: string;
  ADMIN_LOGIN: string;
  ADMIN_PASSWORD: string;
}

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

const {
  PORT,
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY,
  AUTH_MODE,
  POSTGRES_CONTAINER_PORT,
  ADMIN_NAME = 'admin',
  ADMIN_LOGIN = 'admin',
  ADMIN_PASSWORD = 'admin',
} = process.env;

export const config: IConfig = {
  PORT,
  NODE_ENV,
  MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY,
  POSTGRES_CONTAINER_PORT,
  AUTH_MODE: AUTH_MODE === 'true',
  ADMIN_NAME,
  ADMIN_LOGIN,
  ADMIN_PASSWORD,
};
