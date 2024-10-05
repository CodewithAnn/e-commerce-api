import express, { Request, Response } from "express";
import { PORT } from "./secrets.js";
import rootRouter from "./routes/index.js";

const app = express();
//routes
app.use("/api", rootRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
