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
        const response = await api.post("api/auth/login", {username, password});
        return response;
    } catch (error) {
        console.error('Error in loginUser', error.message);
        throw error;  
    }
}