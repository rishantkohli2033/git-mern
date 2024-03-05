import mongoose from "mongoose";

export default async function connectMongoDB(){
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("CONNECTED TO MONGODB");
    } catch (error) {
        console.log("error connecting to MongoDB: ", error.message);
    }
}