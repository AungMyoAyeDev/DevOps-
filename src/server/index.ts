import express from "express";

const PORT = "3000";

const app = express();

app.use("/", (req, res) => {
  res.status(200).json("server is running");
});

app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
