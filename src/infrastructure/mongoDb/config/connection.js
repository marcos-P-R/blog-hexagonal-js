import mongoose from 'mongoose';
import 'dotenv/config';

export default async function dbConnector() {
  try {
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_DATABASE}.xntbeyt.mongodb.net/?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    return new Error(error);
  }
}