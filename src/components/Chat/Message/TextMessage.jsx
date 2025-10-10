import React from 'react';

const TextMessage = ({ content, sender, timestamp, isRead }) => {
  const isMe = sender === 'me';

  return (
    <div className={`flex mb-2 ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[70%] ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
        {/* <span className={`text-xs mb-1 ${isMe ? 'text-right text-gray-500' : 'text-left text-gray-500'}`}>
          {timestamp}
        </span> */}
        <div className={`
          px-2 py-2 rounded-xl text-gray-700
          ${isMe ? 'bg-blue-600 text-white rounded-tr-none' : 'rounded-tl-none bg-gray-200 border border-gray-300/10'}
          ${isMe && !isRead ? 'shadow-xs' : ''}
          ${isMe && isRead ? 'bg-blue-600/80' : ''}
        `}>
          <p className='text-xs text-left'>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TextMessage;
