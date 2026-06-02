import mongoose from "mongoose";

export const connectToDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error("URL required.");
  await mongoose.connect(uri);
  console.log("Mongodb connected.");
};
