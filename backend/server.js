import express from 'express';
import dotenv from "dotenv";
import userRoutes from "./routes/user.routes.js";

dotenv.config();

const app = express();

app.get("/",(req,res)=>{
    res.send("Server has started");
})

app.use("/api/users",userRoutes);

app.listen(5000,()=>{
    console.log("Server started on http://localhost:5000");
});