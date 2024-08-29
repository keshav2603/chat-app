import { createContext, useState, useEffect, useContext } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => useContext(SocketContext);

export const SocketContextProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();

    useEffect(() => {
        let socketInstance;

        if (authUser) {
            socketInstance = io("https://chat-app-ufpp.onrender.com", {
                query: {
                    userId: authUser.data._id
                }
            });
            setSocket(socketInstance);

            // Setup event listener for receiving online users
            socketInstance.on("getOnlineUsers", (users) => {
                setOnlineUsers(users); // Use direct update to state
                console.log("online user",users); // Logging the received users
            });

        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }

        // Cleanup function to close the socket when component unmounts or authUser changes
        return () => {
            if (socketInstance) {
                socketInstance.close();
            }
        };
    }, [authUser]);

    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>
            {children}
        </SocketContext.Provider>
    );
};
