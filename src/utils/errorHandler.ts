import { Express, Request } from 'express';
import { createWriteStream, writeFileSync } from 'fs';
import morgan from 'morgan';
import { ErrorTypeEnum } from '../types';

const accessLogSrteam = createWriteStream('log/accessLog.log');
const { stderr } = process;

export const errorHandler = (error: Error, type: string): void => {
  const logFileName: string = type.split(' ').join('').toLowerCase();
  const isStack: boolean = type === ErrorTypeEnum.UnhandledError;
  writeFileSync(
    `log/${logFileName}Err.log`,
    `${type} detected: ${error.message} \n`
  );
  stderr.write(`${type} detected: ${isStack ? error.stack : error.message}`);
};

morgan.token('body', (req: Request): string => JSON.stringify(req.body));
morgan.token('query', (req: Request): string => JSON.stringify(req.query));

export function runMorganLogging(app: Express): void {
  app.use(
    morgan(
      ':remote-addr - :remote-user [:date[clf]] ":referrer" ""Url- :url" "Method- :method" "Body-:body" "Query- :query" "Status- :status""',
      { stream: accessLogSrteam }
    )
  );
}
