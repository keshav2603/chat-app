import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js"


dotenv.config({
    path: "./.env"
})

const app=express();
const port = process.env.PORT ||5000;

app.use("/api/auth", authRoutes);

app.listen(port, ()=> console.log("server running at port :",port));

