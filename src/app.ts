import express, { Request, Response, NextFunction } from 'express';
import { INTERNAL_SERVER_ERROR, NOT_FOUND } from 'http-status-codes';
import * as path from 'path';
import * as swaggerUI from 'swagger-ui-express';
import * as YAML from 'yamljs';

import { boardRouter } from './resources/boards/board.router';
import { userRouter } from './resources/users/user.router';
import { taskRouter } from './resources/tasks/task.router';
import { errorHandler, runMorganLogging } from './utils/errorHandler';

import { ErrorTypeEnum } from './types';

const { exit } = process;
const app = express();

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

runMorganLogging(app);

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
app.get('*', (_req: Request, res: Response) => {
  res.status(NOT_FOUND).send('Route is not found');
});
app.use((error: Error, _req: Request, res: Response) => {
  errorHandler(error, ErrorTypeEnum.UnhandledError);
  res
    .status(INTERNAL_SERVER_ERROR)
    .json({ success: false, message: error.message ? error.message : error });
});

export default app;
