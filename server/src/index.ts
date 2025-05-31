import "dotenv/config";
import express from "express";
import RouteHandler from "./Routes/RouteHandlerV1";
import cors from "cors"
import morgan from 'morgan';
import logger from './utils/logger';
import { showBanner } from "./utils/spinup_visual";
import { printRoutes } from "./utils/printRoutes";

process.env.APP_STARTING = 'true';

const stream = {
  write: (message: string) => logger.http(message.trim()),
};

const skip = () => process.env.NODE_ENV === 'dev';

const httpLogger = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream, skip }
);

export default httpLogger;
const main = async () => {
  const app = express();
  const port = 3000;

  app.use(httpLogger);
  app.use(express.json());

  app.use(cors({
    origin: "*",
  }));
  // Routes
  app.use("/v1", RouteHandler);

  app.listen(port, () => {
  logger.info('App is booting up...');
  logger.info('Preparing routes...');
  logger.info(`Loaded environment: ${process.env.NODE_ENV}`);

  // Display banner + route list
  showBanner(3000, app);
  printRoutes(app);

  process.env.APP_STARTING = 'false';

  });
};

main();
