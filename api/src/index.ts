import express, { Request, Response } from "express";
import dotenv from "dotenv";
import usersRouter from "./users/route";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());

app.use("/api", usersRouter);
app.use("/", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Server is running on PORT " + PORT,
  });
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`),
);
