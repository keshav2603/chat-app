import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// routes import
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"


// routes declaration

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
app.use("/api/user", userRoutes);


export {app}; 