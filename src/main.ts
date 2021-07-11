import { createWriteStream } from 'fs';
import * as morgan from 'morgan';
import * as path from 'path';
import * as YAML from 'yamljs';
import { NestExpressApplication } from '@nestjs/platform-express';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './common/config';
import { initAdmin } from './helpers/db';
import { CustomLogger } from './loggers/custom.logger';

const { PORT, USE_FASTIFY } = config;
const accessLogStream = createWriteStream('log/accessLog.log');

async function bootstrap() {
  const appOptions = {
    logger: new CustomLogger(),
  };
  const app = USE_FASTIFY
    ? await NestFactory.create<NestFastifyApplication>(AppModule)
    : await NestFactory.create<NestExpressApplication>(AppModule, appOptions);
  app.use(morgan('combined', { stream: accessLogStream }));
  const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
  SwaggerModule.setup('/doc', app, swaggerDocument);
  await app.listen(PORT, '0.0.0.0');
}
bootstrap().then(async () => {
  process.stdout.write(`\nApp is running on http://localhost:${PORT} \n`);
  await initAdmin();
});
