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
    <div className={`flex text-sm ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div className={`w-[88%] ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
        {/* 文本部分 */}
        <div className={`px-2 py-2 rounded-xl text-gray-700 mb-2  w-full
          ${isMe ? 'bg-gray-200 border border-gray-300/10 rounded-tr-none' : 'rounded-tl-none bg-indigo-500 text-white'}
        `}>
          <p className='text-sm text-left'>{textContent}</p>

          {status!='loaded' &&
            <div className={`flex mt-2 rounded-sm p-1 flex-wrap`}>
              <button
                disabled={status=='loading'}
                onClick={() => onConfirm(false)}
                className={`flex-1 text-[12px] px-2 py-1 mr-2 items-center rounded-sm bg-white text-gray-800
                ${status=='loading'? 'cursor-not-allowed' : 'cursor-pointer'}`}
              >
                {cancelText}
              </button>
              <button
                disabled={status=='loading'}
                onClick={() => onConfirm(true)}
                className={`flex-1 text-[12px] px-2 py-1 items-center rounded-sm border border-white bg-indigo-500 hover:bg-indigo-700 text-white
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