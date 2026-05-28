import dotenv from "dotenv";
import express, { type Request, type Response } from "express";
dotenv.config();

const PORT = process.env.PORT || 4100;

const app = express();
app.use("/health", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "All good",
  });
});

app.use("/", (req: Request, res: Response) => {
  res.json({
    success: true,
    message: "Sever is running on port " + PORT,
  });
});

app.listen(PORT, () => console.log("Server is running on port " + PORT));
