import winston from 'winston';

let startupLogBuffer: string[] = [];

// Colorize only the level (so timestamp/message stay clean)
const colorizer = winston.format.colorize({ all: false });

const customFormat = winston.format.printf(({ level, message, timestamp, stack }) => {
  const levelColored = colorizer.colorize(level, `[${level.toUpperCase()}]`);
  const logLine = `[${timestamp}] ${levelColored} ${stack || message}`;
  if (process.env.APP_STARTING === 'true') {
    startupLogBuffer.push(logLine + "\n");
    
  }
  return logLine;
});

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.errors({ stack: true }),
    winston.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    customFormat // <- put color after timestamp and formatting
  ),
  transports: [new winston.transports.Console()],
});

export const getStartupLogBuffer = (): string[] => {
  const logs = [...startupLogBuffer];
  startupLogBuffer = [];
  return logs;
};

export default logger;
