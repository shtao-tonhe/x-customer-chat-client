import React, { useState } from 'react';

const InputMessage = ({ 
  textContent, 
  inputPlaceholder, 
  buttonText, 
  sender, 
  timestamp,
  onSubmit
}) => {
  const isMe = sender === 'me';
  const [inputValue, setInputValue] = useState('');
  
  const handleSubmit = () => {
    if (inputValue.trim() && onSubmit) {
      onSubmit(inputValue.trim());
      setInputValue('');
    }
  };

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
        
        {/* 输入框部分 */}
        <div className={`
          px-4 py-3 rounded-2xl 
          ${isMe ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'}
        `}>
          <div className="flex gap-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
              placeholder={inputPlaceholder}
              className={`flex-1 px-3 py-2 rounded-lg text-sm border ${
                isMe 
                  ? 'bg-blue-700 border-blue-500 text-white placeholder:text-blue-200' 
                  : 'bg-gray-50 border-gray-200 text-gray-800'
              } focus:outline-none focus:ring-1 focus:ring-blue-500`}
            />
            <button
              onClick={handleSubmit}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                isMe 
                  ? 'bg-white text-blue-600 hover:bg-gray-100' 
                  : 'bg-blue-600 hover:bg-blue-700 text-white'
              } transition-colors`}
            >
              {buttonText}
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

export default InputMessage;
    