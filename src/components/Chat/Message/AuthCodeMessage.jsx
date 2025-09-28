import React, { useState } from 'react';

const AuthCodeMessage = ({
  textContent,
  sender,
  timestamp,
  onSubmitCode
}) => {
  const isMe = sender === 'me';
  const [code, setCode] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = () => {
    // 简单验证授权码格式（示例：6位数字）
    if (!/^\d{6}$/.test(code)) {
      setError('请输入6位数字授权码');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // 模拟提交过程
    setTimeout(() => {
      if (onSubmitCode) {
        onSubmitCode(code);
      }
      setCode('');
      setIsSubmitting(false);
    }, 800);
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

        {/* 授权码输入部分 */}
        <div className={`
          px-4 py-3 rounded-2xl
          ${isMe ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'}
        `}>
          <div className="space-y-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={code}
                onChange={(e) => {
                  // 只允许输入数字，且最多6位
                  const value = e.target.value.replace(/[^\d]/g, '').slice(0, 6);
                  setCode(value);
                  if (error) setError('');
                }}
                onKeyDown={(e) => e.key === 'Enter' && !isSubmitting && handleSubmit()}
                placeholder="请输入6位授权码"
                className={`flex-1 px-3 py-2 rounded-lg text-sm border ${
                  error
                    ? 'border-red-500 focus:ring-red-500'
                    : isMe
                      ? 'bg-blue-700 border-blue-500 text-white placeholder:text-blue-200'
                      : 'bg-gray-50 border-gray-200 text-gray-800'
                } focus:outline-none focus:ring-1`}
                disabled={isSubmitting}
                maxLength="6"
              />
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isSubmitting
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed'
                    : isMe
                      ? 'bg-white text-blue-600 hover:bg-gray-100'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                }`}
              >
                {isSubmitting ? '验证中...' : '验证'}
              </button>
            </div>

            {error && (
              <p className="text-red-500 text-xs flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="15" y1="9" x2="9" y2="15"></line>
                  <line x1="9" y1="9" x2="15" y2="15"></line>
                </svg>
                {error}
              </p>
            )}

            <p className="text-xs text-gray-500 italic">
              授权码用于临时查看您的敏感信息，有效期5分钟
            </p>
          </div>
        </div>

        <span className={`text-xs mt-1 ${isMe ? 'text-right text-gray-500' : 'text-left text-gray-500'}`}>
          {timestamp}
        </span>
      </div>
    </div>
  );
};

export default AuthCodeMessage;
