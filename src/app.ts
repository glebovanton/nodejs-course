import express, { Request, Response, NextFunction } from 'express';
import { createWriteStream } from 'fs';
import { INTERNAL_SERVER_ERROR } from 'http-status-codes';
import morgan from 'morgan';
import * as path from 'path';
import * as swaggerUI from 'swagger-ui-express';
import * as YAML from 'yamljs';

import { boardRouter } from './resources/boards/board.router';
import { userRouter } from './resources/users/user.router';
import { taskRouter } from './resources/tasks/task.router';
import { errorHandler } from './utils/errorHandler';

import { ErrorTypeEnum } from './types';

const { exit } = process;
const app = express();
const accessErrSrteam = createWriteStream('log/accessErr.log');
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

morgan.token('body', (req: Request): string => JSON.stringify(req.body));
morgan.token('query', (req: Request): string => JSON.stringify(req.query));
app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":referrer" ""Url- :url" "Method- :method" "Body-:body" "Query- :query" "Status- :status""',
    { stream: accessErrSrteam }
  )
);
process.on('unhandledRejection', (error: Error) => {
  errorHandler(error, ErrorTypeEnum.UnhandledRejection);
});
process.on('uncaughtException', (error: Error) => {
  errorHandler(error, ErrorTypeEnum.UncaughtException);
  exit(1);
});

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards', taskRouter);
app.use((error: Error, _req: Request, res: Response) => {
  errorHandler(error, ErrorTypeEnum.UnhandledError);
  res
    .status(INTERNAL_SERVER_ERROR)
    .json({ success: false, message: error.message ? error.message : error });
});

export default app;
