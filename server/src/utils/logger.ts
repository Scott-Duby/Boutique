// src/utils/logger.ts
import winston from 'winston';

let startupLogBuffer: string[] = [];

const formatLine = winston.format.printf(({ level, message }) => {
  const line = `[${level.toUpperCase()}] ${message}`;
  if (process.env.APP_STARTING === 'true') {
    startupLogBuffer.push(line); // collect for banner
  }
  return line;
});

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.colorize(),
    formatLine
  ),
  transports: [new winston.transports.Console()],
});

export const getStartupLogBuffer = () => {
  const logs = [...startupLogBuffer];
  startupLogBuffer = []; // clear buffer after use
  return logs;
};

export default logger;
