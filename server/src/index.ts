import "dotenv/config";
import express, { Request, Response } from "express";
import RouteHandler from "./Routes/RouteHandlerV1";
import cors from "cors";
import logger from './utils/logger';
import { showBanner } from "./utils/spinup_visual";
import { requestLogger } from "./Middleware/requestLogger";
import rateLimit from "express-rate-limit";
import axios from "axios";
import { prisma } from "./db/prisma";

const main = async () => {

  process.env.APP_STARTING = 'true'; // Start server spin up process

  const rateLimiter = rateLimit({
    windowMs: 1 * 30 * 1000,
    max: 30,                 // limit each IP to 30 requests
    standardHeaders: true,
    legacyHeaders: false,

    handler: (req: Request, res: Response) => {
      const ip = req.ip;
      const route = req.originalUrl;
      const method = req.method;

      logger.warn(`Rate limit hit: ${method} ${route} from ${ip}`);

      // Set CORS headers explicitly (sometimes they don't propagate on 429)
      res.setHeader('Access-Control-Allow-Origin', '*'); // or your frontend domain
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

      res.status(429).json({
        error: 'Too many requests. Please try again in a few minutes.',
      });
    },
  });

  const app = express();
  const port = 3000;

  app.use(cors({
    origin: "*",
  }));
  
  app.use(rateLimiter);
  app.use(requestLogger);
  app.use(express.json({ limit: "2mb" })); // <- ??


  // Routes
  app.use("/v1", RouteHandler);

  app.listen(port, async () => {
    
    logger.info("Port Available")
    try {
      await axios.get("http://127.0.0.1:5000"); 
      logger.info("Poshmark Scraper appears online at http://127.0.0.1:5000"); // <- this really should be dynamic in env for production
      
    } catch (error) {
      logger.error("Error connecting to Poshmark Scraper at http://127.0.0.1:5000");
    }
  
    process.env.NODE_ENV == "production" ? false /* better way to return here?? */ : logger.warn("logger is setup for development environment");
    logger.debug(`Postgres Instance Connected: ${process.env.DATABASE_URL}`)
    // Display banner + route list
    showBanner(3000, app);


    process.env.APP_STARTING = 'false'; // End server spin up process when app starts listening

    
  }).setTimeout(10 * 60 * 1000);;
};

main();
