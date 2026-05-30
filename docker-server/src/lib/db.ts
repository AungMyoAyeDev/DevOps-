import mongoose from "mongoose";

export const connectToDb = async () => {
  const db_url = process.env.MONGO_URI;
  if (!db_url) {
    throw new Error("Mongo db url required!");
  }
  mongoose
    .connect(db_url)
    .then(() => console.log("mongo db connected."))
    .catch((err) => console.log(err));
};
