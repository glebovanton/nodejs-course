import { createWriteStream } from 'fs';
import * as morgan from 'morgan';
import * as path from 'path';
import * as YAML from 'yamljs';
import { SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from './common/config';
import { initAdmin } from './helpers/db';
import { CustomLogger } from './loggers/custom.logger';

const { PORT } = config;
const accessLogStream = createWriteStream('log/accessLog.log');

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new CustomLogger(),
  });
  app.use(morgan('combined', { stream: accessLogStream }));
  const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
  SwaggerModule.setup('/doc', app, swaggerDocument);
  await app.listen(PORT);
}
bootstrap().then(async () => {
  process.stdout.write(`\nApp is running on http://localhost:${PORT} \n`);
  await initAdmin();
});
