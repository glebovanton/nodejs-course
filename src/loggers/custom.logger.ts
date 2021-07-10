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
  writeFileSync(`log/${type}.log`, `${type} detected: ${message} \n`);
  stderr.write(` ${type} detected: ${message} `);
};

export class CustomLogger implements LoggerService {
  log(message: any) {
    errorHandler(message, LogTypeEnum.Log);
  }

  error(message: any) {
    errorHandler(message, LogTypeEnum.Error);
  }

  warn(message: any) {
    errorHandler(message, LogTypeEnum.Warn);
  }

  debug?(message: any) {
    errorHandler(message, LogTypeEnum.Debug);
  }

  verbose?(message: any) {
    errorHandler(message, LogTypeEnum.Verbose);
  }
}
