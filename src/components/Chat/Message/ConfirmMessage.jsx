import React from 'react';

const ConfirmMessage = ({ 
  textContent, 
  confirmText, 
  cancelText, 
  sender, 
  timestamp,
  onConfirm
}) => {
  const isMe = sender === 'me';
  
  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
        {/* 文本部分 */}
        <div className={`
          px-4 py-2 rounded-2xl mb-2
          ${isMe ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'}
        `}>
          <p>{textContent}</p>
        </div>
        
        {/* 按钮部分 */}
        <div className={`
          px-4 py-3 rounded-2xl 
          ${isMe ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'}
        `}>
          <div className="flex gap-2 justify-end">
            <button
              onClick={() => onConfirm(false)}
              className={`px-4 py-1.5 rounded-lg text-sm ${
                isMe 
                  ? 'bg-blue-700 hover:bg-blue-800 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              } transition-colors`}
            >
              {cancelText}
            </button>
            <button
              onClick={() => onConfirm(true)}
              className={`px-4 py-1.5 rounded-lg text-sm ${
                isMe 
                  ? 'bg-white text-blue-600 hover:bg-gray-100' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              } transition-colors`}
            >
              {confirmText}
            </button>
          </div>
        </div>
        
        <span className={`text-xs mt-1 ${isMe ? 'text-right text-gray-500' : 'text-left text-gray-500'}`}>
          {timestamp}
        </span>
      </div>
    </div>
  );
};

export default ConfirmMessage;
    