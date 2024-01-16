import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const MONGO_DB_URI: string = process.env.MONGO_REMOTE_URL || "";
const connectToDB = async () => {
  try {
    const DBConnection = await mongoose.connect(MONGO_DB_URI);

    console.log(`Connected to MongoDB Atlas: ${DBConnection.connection.host}`);
  } catch (error) {
    console.error((error as Error).message);
    process.exit(1);
  }
};

export { connectToDB };
