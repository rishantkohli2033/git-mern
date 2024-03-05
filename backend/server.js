import express from 'express';
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import exploreRoutes from "./routes/explore.routes.js";

dotenv.config();

const app = express();
app.use(cors());

app.get("/",(req,res)=>{
    res.send("Server has started");
})

app.use("/api/users",userRoutes);
app.use("/api/explore",exploreRoutes);

app.listen(5000,()=>{
    console.log("Server started on http://localhost:5000");
});