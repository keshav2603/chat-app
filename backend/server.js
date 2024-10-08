import dotenv from "dotenv";

// Load environment variables
dotenv.config({
    path: "./.env"
})

import connectDB from "./db/index.js";
import { server } from "./socket/socket.js";
import { app } from "./app.js";

// Connect to MongoDB and start the server
connectDB()
    .then(() => {
        const port = process.env.PORT || 5000;
        server.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed:", err);
    });
