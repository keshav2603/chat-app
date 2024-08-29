import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { app } from "./socket/socket.js"; 
// import path from "path";
// const app = express();
// CORS configuration
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
// const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());

// Routes import
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

// Routes declaration
app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);

// app.use(express.static(path.join(__dirname,"/frontend/dist")))

// app.get("*",(req,res)=>{
//     res.sendFile(path.join(__dirname, "/frontend/dist/index.html"))
// })
export {app};