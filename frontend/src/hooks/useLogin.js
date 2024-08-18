
import { loginUser } from '../api/auth.api.js';
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext.jsx';
import { useState } from 'react';
export function useLogin() {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext()
    const login = async({username, password})=>{
        if(!username || !password){
            toast.error("all field are required")
            return;
        }
        setLoading(true);
        try {
           const response =await loginUser({username, password});
            if(response.status ===200||201){
                localStorage.setItem("chat-user",JSON.stringify(response.data))
                setAuthUser(response.data);
            }else{
                console.error('login error:', response.data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }finally{
            setLoading(false)
        }
    }
    return {loading, login};
    }

