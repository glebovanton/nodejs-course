import express, { Request, Response, NextFunction } from 'express';
import { NOT_FOUND } from 'http-status-codes';
import * as path from 'path';
import * as swaggerUI from 'swagger-ui-express';
import * as YAML from 'yamljs';

import { loginRouter } from './resources/login/login.router';
import { boardRouter } from './resources/boards/board.router';
import { userRouter } from './resources/users/user.router';
import { taskRouter } from './resources/tasks/task.router';
import {
  runInternalErrLogging,
  runMorganLogging,
  runUncaughtExceptLogging,
  runUnhandledRejLogging,
} from './utils/errorHandler';
import { checkToken } from './helpers/token';

const app = express();

const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

app.use(express.json());

runMorganLogging(app);

runUnhandledRejLogging();
runUncaughtExceptLogging();

app.use('/', checkToken)
app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));
app.use('/login', loginRouter);

// routes with Authorization
app.use('/users', userRouter);
app.use('/boards', boardRouter);
app.use('/boards', taskRouter);
app.get('*', (_req: Request, res: Response) => {
  res.status(NOT_FOUND).send('Route is not found');
});
runInternalErrLogging(app);

export default app;
