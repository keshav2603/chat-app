import express from "express";


const app = express();

app.use(express.json());

// routes import
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
// import conversationRoutes from "./routes/conversation.routes.js" 

// routes declaration

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);
// app.use("/api/conversation", conversationRoutes);

export {app}; 