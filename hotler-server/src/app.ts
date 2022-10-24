import express, { Express, NextFunction, Request, Response } from "express";

import { connectToDb } from "./db/models";

//middleware import
import { morganMiddleware, errorHandlerMiddleware } from "./middleware";

// utils import
import logger from "./utils/logger.utils";

const app: Express = express();
const port = process.env.PORT || 3000;

await connectToDb();

app.use(morganMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  try {
    // res.status(200).send("Api is working!");
    throw {
      status: 404,
      message: "Just testing our error handler!",
      devMessage: "",
    };
  } catch (e) {
    next(e);
  }
});

app.use(errorHandlerMiddleware);

app.listen(port, () => {
  logger.info(`🚀 Server is running at http://localhost:${port}`);
});

//if an error is not catched
process.on("uncaughtException", (error) => {
  logger.error(error);
  process.exit(1);
});

// if a promise is not handled.
process.on("unhandledRejection", (error) => {
  logger.error(error);
});
