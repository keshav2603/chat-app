import React, { useEffect, useState } from 'react'
import useConversation from "../zustand/useConversation.js";
import {toast} from "react-hot-toast"
import { getMessage } from '../api/auth.api.js';

function useGetMessages() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(()=>{
    const getMessages = async()=>{
        setLoading(true);
        try {
            const res = await getMessage(selectedConversation._id);
            if(res.status ===200||201){
                setMessages(res.data);
            }else{
                throw new Error(res.data.error);
            }
            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false);
        }
    }
    if(selectedConversation?._id) getMessages()
  },[selectedConversation?._id, setMessages])
  return {messages,loading};
}

export default useGetMessages