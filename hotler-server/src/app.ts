import express, { Express, Request, Response } from "express";

import { connectToDb } from "./db";

const app: Express = express();
const port = process.env.PORT || 3000;

await connectToDb();

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server! ");
});

app.listen(port, () => {
  console.log(`\t🚀 [success]: Server is running at https://localhost:${port}`);
});
