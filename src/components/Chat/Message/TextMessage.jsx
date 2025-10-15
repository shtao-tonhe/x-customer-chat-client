import React from 'react';

const TextMessage = ({ content, sender, timestamp, isRead }) => {
  const isMe = sender === 'me';

  return (
    <div className={`flex mb-3 ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[88%] ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
        <div className={`
          px-2 py-2 rounded-xl text-gray-700
          ${isMe ? 'bg-gray-200 border border-gray-300/10 rounded-tr-none' : 'rounded-tl-none bg-indigo-500 text-white'}
        `}>
          <p className='text-sm text-left'>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default TextMessage;
