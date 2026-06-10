import express from "express";
import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config();
const PORT = process.env.PORT || "3000";

const app = express();

app.use("/api", (req, res) => {
  res.status(200).json("server is running");
});

if (process.env.NODE_ENV === "production") {
  const staticPath = resolve(process.cwd(), "dist/client");
  app.use(express.static(staticPath));
  app.use((req, res, next) => {
    if (req.method === "GET" && !req.url.startsWith("/api/")) {
      res.sendFile(resolve(staticPath, "index.html"));
    } else {
      next();
    }
  });
}
app.listen(PORT, () => {
  console.log("server is running on port " + PORT);
});
