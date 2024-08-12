import express from "express";


const app = express();

app.use(express.json());

// routes import
import authRoutes from "./routes/auth.routes.js"


// routes declaration

app.use("/api/auth", authRoutes);

export {app}; 