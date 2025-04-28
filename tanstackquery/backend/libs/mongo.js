import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
let connected = false;
export const ConnectToMongo = async () => {
  if (connected) return;

  await mongoose.connect(process.env.MONGO_URI);
  console.log(mongoose.ConnectionStates.connected, "Connected to MongoDB");
  if (mongoose.ConnectionStates.connected) {
    connected = true;
  }
};
