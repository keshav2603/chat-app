import { Server } from "socket.io";
import http from "http";
import { app } from "../app.js";

// const app = express(); // Define app here if this is where the server is handled
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:5173', 
        credentials: true 
    }
});
console.log(`${process.env.FRONT_END_URL}`);

const userSocketMap = {};

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
};

io.on("connection", (socket) => {
    console.log("A user connected", socket.id);

    const userId = socket.handshake.query.userId;
    if (userId !== "undefined") userSocketMap[userId] = socket.id;

    // Emit event to all connected clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    // Listen for disconnect events
    socket.on("disconnect", () => {
        console.log("User disconnected", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
});

export { app, io, server };
