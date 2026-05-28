import mongoose from "mongoose";

export const connectToDB = async () => {
  const MONGODB_URL = process.env.MONGO_URL;
  if (!MONGODB_URL) {
    throw new Error("Database url is required!");
  }
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("Mongodb connected!");
  } catch (error) {
    throw new Error("Failed to connect db!");
  }
};
