import  { useState } from 'react';
import useConversation from "../zustand/useConversation.js";

import { sendMessages } from "../api/auth.api.js";

function useSendMessage() {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await sendMessages(selectedConversation._id, message); // Await the sendMessages call
      if (res.status === 200 || res.status === 201) {
        setMessages([...messages, res.data.data]);
      } else {
        console.error('Error sending message', res.data.message);
      }
    } catch (error) {
      console.error('Error sending message', error); // Handle error
    } finally {
      setLoading(false);
    }
  };

  return { loading, sendMessage }; // Return the correct values from the hook
}

export default useSendMessage;
