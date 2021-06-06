import { Express, Request, Response } from 'express';
import { createWriteStream, writeFileSync } from 'fs';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';
import morgan from 'morgan';
import { ErrorTypeEnum } from '../types';

const accessLogSrteam = createWriteStream('log/accessLog.log');
const { exit, stderr } = process;

function errorHandler(error: Error, type: string): void {
  const logFileName: string = type.split(' ').join('').toLowerCase();
  const isStack: boolean = type === ErrorTypeEnum.UnhandledError;
  writeFileSync(
    `log/${logFileName}Err.log`,
    `${type} detected: ${error.message} \n`
  );
  stderr.write(`${type} detected: ${isStack ? error.stack : error.message}`);
}

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

export function runInternalErrLogging(app: Express): void {
  app.use((error: Error, _req: Request, res: Response) => {
    errorHandler(error, ErrorTypeEnum.UnhandledError);
    res
      .status(INTERNAL_SERVER_ERROR)
      .json({ success: false, message: error.message ? error.message : error });
  });
}

export function runUnhandledRejLogging(): void {
  process.on('unhandledRejection', (error: Error) => {
    errorHandler(error, ErrorTypeEnum.UnhandledRejection);
  });
}

export function runUncaughtExceptLogging(): void {
  process.on('uncaughtException', (error: Error) => {
    errorHandler(error, ErrorTypeEnum.UncaughtException);
    exit(1);
  });
}
