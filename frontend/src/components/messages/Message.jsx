import React from 'react'

function Message() {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://avatar.iran.liara.run/public/boy" alt="" />
            </div>
        </div>
        <div className='chat-bubble text-white bg-blue-500'>hii</div>
        <div className='chat-footer opacity-50 text-xs flex gap-1 items-center '>12:41</div>
    </div>
  )
}

export default Message