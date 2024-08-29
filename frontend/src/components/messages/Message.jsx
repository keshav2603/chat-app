import { useAuthContext } from "../../context/AuthContext.jsx";
import { extractTime } from "../../utils/extractTime.js";
import useConversation from '../../zustand/useConversation.js';

function Message({ message }) {
  const {authUser} = useAuthContext();
  const { selectedConversation } = useConversation();
  const formatedTime = extractTime(message.createdAt)
  const fromMe = message.senderId === authUser.data._id;
 
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.data.profilePic : selectedConversation?.profilePic;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";
  // Fallback for profilePic if not available
  const defaultProfilePic = "path/to/default/profile-pic.jpg"; // Replace with actual path

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image avatar'>
        <div className='w-10 rounded-full'>
          <img 
            src={profilePic || defaultProfilePic} 
            alt={fromMe ? "Your profile picture" : "Other user profile picture"} 
            onError={(e) => e.target.src = defaultProfilePic} // Fallback if image fails to load
          />
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}>
        {message.message}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center text-white'>
        {formatedTime} {/* Replace with actual time if available */}
      </div>
    </div>
  );
}

export default Message;
