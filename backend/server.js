import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { server } from "./socket/socket.js";

// Load environment variables
dotenv.config({
    path: "./.env"
});

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
