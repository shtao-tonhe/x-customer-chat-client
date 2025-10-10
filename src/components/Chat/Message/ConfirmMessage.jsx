import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const ConfirmMessage = ({
  textContent,
  confirmText,
  cancelText,
  sender,
  onConfirm,
  status
}) => {
  const isMe = sender === 'me';

  return (
    <div className={`flex text-xs ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div className={`w-[70%] ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
        {/* 文本部分 */}
        <div className={`px-2 py-2 rounded-xl text-gray-700 mb-2  w-full
          ${isMe ? 'bg-blue-600 text-white rounded-tr-none' : 'rounded-tl-none bg-gray-200 border border-gray-300/10'}
        `}>
          <p className='text-xs text-left text-gray-700'>{textContent}</p>

          {status!='loaded' &&
            <div className={`flex justify-end mt-2`}>
              <button
                disabled={status=='loading'}
                onClick={() => onConfirm(false)}
                className={`text-[11px] px-2 py-1 mr-2 rounded-sm bg-white text-gray-800
                ${status=='loading'? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {cancelText}
              </button>
              <button
                disabled={status=='loading'}
                onClick={() => onConfirm(true)}
                className={`flex flex-row items-center text-[11px] px-2 py-1 rounded-sm bg-blue-600 hover:bg-blue-700 text-white
                ${status=='loading'? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                { status=='loading' ? <AiOutlineLoading3Quarters className="animate-spin mr-1" /> : '' }
                {confirmText}
              </button>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default ConfirmMessage;