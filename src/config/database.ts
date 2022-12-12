import mongoose from "mongoose";
import { MONGO_URI } from "../../config";

export async function connectdb():Promise<void> {
    try {
      const db = await mongoose.connect(<string>MONGO_URI);
      console.log('conectando a ', db.connection.name)
    } catch (error) {console.log(error)}
  }