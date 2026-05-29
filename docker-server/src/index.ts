import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
import { MongoClient } from "mongodb";
dotenv.config();

const PORT = process.env.PORT || 4100;

const app = express();
const db = new MongoClient(process.env.MONGO_URI!);
app.use("/health", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Server is running healthy",
  });
});

app.use("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Sever is running on port " + PORT,
  });
});

async function start() {
  try {
    await db.connect();
    app.listen(PORT, () => console.log("Server is running on port " + PORT));
  } catch (error) {
    throw new Error("Something worng.");
  }
}
start();
