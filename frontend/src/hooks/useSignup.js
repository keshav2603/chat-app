import { useState } from "react";
import toast from "react-hot-toast";
import { signupUser } from "../api/auth.api.js";
import { useNavigate } from "react-router-dom";

function useSignup() {
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const signup = async({ fullName, username, password, confirmPassword, gender }) => {
    const success = handleInputError({ fullName, username, password, confirmPassword, gender });
    if (!success) return;
    
    setLoading(true);
    
    try {
      const response = await signupUser({ fullName, username, password, confirmPassword, gender });
      
      if (response.status === 200 || response.status === 201) {
        navigate("/");
      } else {
        // Handle error (e.g., show an error message to the user)
        console.error('Registration error:', response.data.message);
        toast.error(response.data.message || "Registration failed");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message || "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
}

export default useSignup;

function handleInputError({ fullName, username, password, confirmPassword, gender }) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill out all fields");
    return false;
  } else if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  } else if (password.length < 6) {
    toast.error("Password must be at least 6 characters long");
    return false;
  }
  return true;
}
