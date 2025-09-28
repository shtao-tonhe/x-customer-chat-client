import React from 'react';

const TextMessage = ({ content, sender, timestamp }) => {
  const isMe = sender === 'me';

  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
        <div className={`
          px-4 py-2 rounded-2xl 
          ${isMe ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'}
        `}>
          <p>{content}</p>
        </div>
        <span className={`text-xs mt-1 ${isMe ? 'text-right text-gray-500' : 'text-left text-gray-500'}`}>
          {timestamp}
        </span>
      </div>
    </div>
  );
};

export default TextMessage;
