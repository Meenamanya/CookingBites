
import mongoose from "mongoose";

export const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "RESERVATIONS",
      serverSelectionTimeoutMS: 10000,
    });

    console.log("Connected to database!");
  } catch (err) {
    console.error("Database connection failed:", err.message);
    throw err;
  }
};
