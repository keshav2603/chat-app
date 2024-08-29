import React, { useEffect, useRef } from 'react';
import Message from './Message.jsx';
import useGetMessages from '../../hooks/useGetMessages.js';
import MessageSkeleton from "../../components/skeletons/MessageSkeleton.jsx";
import useListenMessages from '../../hooks/useListenMessages.js';

function Messages() {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef()
  useListenMessages();
  useEffect(()=>{
    setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
  },[messages])
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {loading ? (
        // Show skeleton loaders when loading
        [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)
      ) : messages.length === 0 ? (
        // Show message when there are no messages
        <p className='text-center text-white'>Send a message to start the conversation</p>
      ) : (
        // Show messages if not loading and there are messages
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message  message={message} />
          </div>
        ))
      )}
    </div>
  );
}

export default Messages;
