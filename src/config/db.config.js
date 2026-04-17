import "dotenv/config";
import mongoose from "mongoose";

export async function dbConfig() {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI);
    console.log("conectado console");
    return connection;
  } catch (e) {
    console.log(e.message);
  }
}
