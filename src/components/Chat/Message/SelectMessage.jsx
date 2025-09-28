import React, { useState } from 'react';

const SelectMessage = ({
  textContent,
  options,
  sender,
  timestamp,
  onSelect
}) => {
  const isMe = sender === 'me';
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setSelectedOption(value);
    if (onSelect) {
      onSelect(value);
    }
  };

  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'} mb-4`}>
      <div className={`max-w-[80%] ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
        {/* 文本说明部分 */}
        <div className={`
          px-4 py-2 rounded-2xl mb-2
          ${isMe ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'}
        `}>
          <p>{textContent}</p>
        </div>

        {/* 选择框部分 */}
        <div className={`
          px-4 py-3 rounded-2xl
          ${isMe ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'}
        `}>
          <select
            value={selectedOption}
            onChange={handleChange}
            className={`w-full px-3 py-2 rounded-lg text-sm border ${
              isMe
                ? 'bg-blue-700 border-blue-500 text-white'
                : 'bg-gray-50 border-gray-200 text-gray-800'
            } focus:outline-none focus:ring-1 focus:ring-blue-500 appearance-none bg-no-repeat bg-right`}
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
              backgroundPosition: 'calc(100% - 10px) center'
            }}
          >
            <option value="" disabled>请选择...</option>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <span className={`text-xs mt-1 ${isMe ? 'text-right text-gray-500' : 'text-left text-gray-500'}`}>
          {timestamp}
        </span>
      </div>
    </div>
  );
};

export default SelectMessage;
