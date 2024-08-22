import api from "./api.js";

export const signupUser = async ({ fullName, username, password, confirmPassword, gender }) => {
    try {
        const response = await api.post("/api/auth/signup", { fullName, username, password, confirmPassword, gender });
        return response; // Ensure response is returned correctly
    } catch (error) {
        console.error('Error in signupUser', error.message);
        throw error;  
    }
};

export const logoutUser = async()=>{
    try {
        const response = await api.post("/api/auth/logout",{});
        return response;
    } catch (error) {
        console.error('Error in logoutUser', error.message);
        throw error;  
    }
}
export const loginUser = async({username, password})=>{
    try {
        const response = await api.post("/api/auth/login", {username, password});
        return response;
    } catch (error) {
        console.error('Error in loginUser', error.message);
        throw error;  
    }
}

export const getUsers = async () => {
    try {
        const response = await api.get("/api/user/");
        return response;
    } catch (error) {
        console.error('Error in getting users', error.message);
        throw error;
    }
}

// Assuming `api` is an instance of axios or a similar library
export const sendMessages = async (_id, message) => {
    try {
        // Make sure `api` is configured properly
        const response = await api.post(`/api/message/send/${_id}`, {
            message
        }, {
            headers: {
                "Content-Type": "application/json",
            }
        });

        return response;
    } catch (error) {
        console.error('Error in sending message apifunction', error.message);
        throw error; // Rethrow the error to handle it in the calling function
    }
}

export const getMessage = async(_id)=>{
    try {
        const response = await api.get(`/api/message/${_id}`)
        return response.data;
    } catch (error) {
        console.error('Error in get message apifunction', error.message);
        throw error;
    }
}