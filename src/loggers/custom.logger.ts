import { LoggerService } from '@nestjs/common';
import { writeFileSync } from 'fs';
const { stderr } = process;

// For Enum type we unfortunately have: 'ErrorTypeEnum' is already declared in the upper scope  no-shadow
const LogTypeEnum = Object.freeze({
  Log: 'log',
  Error: 'error',
  Warn: 'warn',
  Debug: 'debug',
  Verbose: 'verbose',
});

const errorHandler = (message: string, type: string): void => {
  const errorLine = `${new Date().toUTCString()}: ${type} detected / message: ${message} \n`;
  writeFileSync(`log/${type}.log`, errorLine);
  if (type !== LogTypeEnum.Log) stderr.write(errorLine);
};

export class CustomLogger implements LoggerService {
  log(message: string) {
    errorHandler(message, LogTypeEnum.Log);
  }

  error(message: string) {
    errorHandler(message, LogTypeEnum.Error);
  }

  warn(message: string) {
    errorHandler(message, LogTypeEnum.Warn);
  }

  debug?(message: string) {
    errorHandler(message, LogTypeEnum.Debug);
  }

  verbose?(message: string) {
    errorHandler(message, LogTypeEnum.Verbose);
  }
}
