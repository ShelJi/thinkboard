import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGODB_URI;

export const connectDB = async () => {
	try {
		await mongoose.connect(uri);
		console.log("MONGODB CONNECTED SUCCESSFULLY!");
	} catch (error) {
		console.error("Error connecting to MONGODB", error);
	}
};
