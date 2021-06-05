import { writeFileSync } from 'fs';

import { ErrorTypeEnum } from '../types';

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
