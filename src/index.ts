import express, { Request, Response } from "express";
import { PORT } from "./secrets.js";
import rootRouter from "./routes/index.js";
import { PrismaClient } from "@prisma/client";

const app = express();
app.use(express.json());
//routes
app.use("/api/v1", rootRouter);

// prisma client
export const prismaClient = new PrismaClient({
  log: ["query"],
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
