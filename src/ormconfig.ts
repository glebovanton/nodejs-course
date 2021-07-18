import { ConnectionOptions } from 'typeorm';
import { config } from 'dotenv';
import { join } from 'path';

config({
  path: join(__dirname, '../.env'),
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
  host: POSTGRES_HOST,
  database: POSTGRES_DB,
  port: POSTGRES_CONTAINER_PORT
    ? Number.parseInt(POSTGRES_CONTAINER_PORT, 10)
    : 5432,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  entities: [join(__dirname, '/entities/**/*{.ts,.js}')],
  migrations: [join(__dirname, '/migrations/**/*{.ts,.js}')],
  synchronize: false,
  cli: {
    entitiesDir: 'src/entities',
    migrationsDir: 'src/migrations',
  },
  logging: false,
} as ConnectionOptions;

export default ORMConfig;
