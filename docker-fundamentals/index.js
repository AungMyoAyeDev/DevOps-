import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.json({
    message: "server is running.",
  });
});

app.listen(8080, () => console.log("server is running on port " + 8080));
