import React, { useState } from 'react'
import {useConversation} from "../zustand/useConversation.js"
function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const {messages, setMessages, selectedConversation}= useConversation();

  const sendMessage = async(message)=>{
    setLoading(true);
    try {
        
    } catch (error) {
        
    }finally{
        setLoading(false)
    }
  }
}

export default useSendMessage