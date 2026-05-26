import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();

const PORT = process.env.PORT;
app.use("/", (_req, res) => {
  res.json({
    message: "server is running.",
  });
});

app.listen(PORT, () => console.log("server is running on port " + PORT));
