import express from 'express';
import userRoutes from "./routes/user.routes.js"
const app = express();

app.get("/",(req,res)=>{
    res.send("Server has started");
})

app.use("/api/users",userRoutes);

app.listen(5000,()=>{
    console.log("Server started on http://localhost:5000");
});