import express, { Request, Response } from "express";
import { PORT } from "./secrets.js";

const app = express();
// const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Running!!!!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
