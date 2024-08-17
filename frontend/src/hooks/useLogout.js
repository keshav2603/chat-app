import { useState } from "react";
import { logoutUser } from "../api/auth.api.js";
import { useAuthContext } from "../context/AuthContext.jsx";

const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const response = await logoutUser();
      if (response.status === 200 || response.status === 201) {
        localStorage.removeItem("chat-user");
        setAuthUser(null);
      } else {
        console.error('Logout error:', response.data.message);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    } finally {
      setLoading(false);
    }
  };

  return { loading, logout };
};

export default useLogout;
