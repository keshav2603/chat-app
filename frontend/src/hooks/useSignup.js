import { useState } from 'react';
import {toast} from 'react-hot-toast';
import { signupUser } from '../api/auth.api.js';
import { useAuthContext } from '../context/AuthContext.jsx';

// Custom Hook
const useSignup = () => {
  const [loading, setLoading] = useState(false);
  const {authUser,setAuthUser}=useAuthContext()
  const signup = async ({ fullName, username, password, confirmPassword, gender }) => {
    const success = handleInputError({ fullName, username, password, confirmPassword, gender });
    if (!success) return;

    setLoading(true);
    try {
      const response = await signupUser({ fullName, username, password, confirmPassword, gender });

      if (response.status === 200 || response.status === 201) {
        localStorage.setItem("chat-user", JSON.stringify(response))
        setAuthUser(response);
      } else {
        console.error('Registration error:', response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export default useSignup;

// Validation function
function handleInputError({ fullName, username, password, confirmPassword, gender }) {
  if (!fullName || !username || !password || !confirmPassword || !gender) {
    toast.error("Please fill in all fields");
    return false;
  } else if (password !== confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  } else if (password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return false;
  }
  return true;
}
