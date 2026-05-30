import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
import { connectToDb } from "./lib/db";
import userRouter from "./routes";
dotenv.config();

const PORT = process.env.PORT || 4100;

const app = express();
app.use(express.json());

app.use("/health", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Server is running healthy",
  });
});

app.use("/api", userRouter);
app.use("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Sever is running on port " + PORT,
  });
});

async function start() {
  try {
    connectToDb();
    app.listen(PORT, () => console.log("Server is running on port " + PORT));
  } catch (error) {
    throw new Error("Something worng.");
  }
}
start();
