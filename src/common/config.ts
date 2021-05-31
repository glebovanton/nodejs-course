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

export const config: IConfig = {
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
  AUTH_MODE: process.env.AUTH_MODE === 'true',
};
