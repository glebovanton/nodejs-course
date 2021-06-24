import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});
const {
  POSTGRES_HOST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_DB,
  POSTGRES_CONTAINER_PORT,
} = process.env;

const ORMConfig = {
  type: 'postgres',
  synchronize: false,
  dropSchema: false,
  migrationsRun: false,
  entities: ['src/entities/*.ts'],
  migrations: ['src/migrations/**/*.ts'],
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
  logging: false,
  host: POSTGRES_HOST,
  port: POSTGRES_CONTAINER_PORT
    ? Number.parseInt(POSTGRES_CONTAINER_PORT, 10)
    : 5432,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  autoReconnect: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectionInterval: 1000,
} as ConnectionOptions;

export = ORMConfig;
