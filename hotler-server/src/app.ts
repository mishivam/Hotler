import express, { Express, Request, Response } from "express";

import { connectToDb } from "./db/models";
//middleware import
import { morganMiddleware } from "./middleware";

// utils import
import logger from "./utils/logger.utils";

const app: Express = express();
const port = process.env.PORT || 3000;

await connectToDb();

app.use(morganMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server! ");
});

app.listen(port, () => {
  logger.info(`🚀 Server is running at http://localhost:${port}`);
});
