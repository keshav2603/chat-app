import { useEffect, useState } from "react";
import { getUsers } from '../api/auth.api.js';
import { toast } from "react-hot-toast";

function useGetConversation() {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const response = await getUsers();
        if (response.status === 200 || response.status === 201) {
          // Extract conversations from the response data
          setConversations(response.data.data);
          console.log('Fetched conversations:', response.data.data); // Log the array of conversations
        } else {
          console.error('Error fetching conversations:', response.data.message);
        }
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);

  return { loading, conversations };
}

export default useGetConversation;
