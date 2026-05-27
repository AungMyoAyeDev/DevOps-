import express from "express";
import dotenv from "dotenv";
import mongoose, { Schema } from "mongoose";

dotenv.config();

const app = express();

const PORT = Number(process.env.PORT) || 5000;
const MONGO_URL = process.env.MONGO_URL || "mongodb://localhost:27017/docker-fundamentals";

const messageSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true },
);

const Message = mongoose.model("Message", messageSchema);

app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "server is running.",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  });
});

app.get("/health", (_req, res) => {
  res.json({
    status: "ok",
    database: mongoose.connection.readyState === 1 ? "connected" : "disconnected",
  });
});

app.get("/messages", async (_req, res, next) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 }).lean();
    res.json(messages);
  } catch (error) {
    next(error);
  }
});

app.post("/messages", async (req, res, next) => {
  try {
    const { text } = req.body as { text?: string };

    if (!text) {
      res.status(400).json({ error: "text is required" });
      return;
    }

    const message = await Message.create({ text });
    res.status(201).json(message);
  } catch (error) {
    next(error);
  }
});

app.use(
  (
    error: unknown,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction,
  ) => {
    if (error instanceof SyntaxError && "body" in error) {
      res.status(400).json({ error: "invalid json" });
      return;
    }

    console.error(error);
    res.status(500).json({ error: "internal server error" });
  },
);

async function startServer() {
  await mongoose.connect(MONGO_URL);

  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
}

startServer().catch((error) => {
  console.error("failed to start server", error);
  process.exit(1);
});
