
import React from 'react';
import ChatTop from '../components/Chat/Top';
import ChatHistory from '../components/Chat/History';

const ChatPage = () => {
  return (
    <div className='relative h-full w-full'>
      <div className='absolute top-0 left-0 w-full'>
        <ChatTop></ChatTop>
      </div>

      <div className='h-full w-full overflow-y-auto pt-[30px] max-h-[calc(100vh-80px)]'>
        <ChatHistory></ChatHistory>
      </div>

      {/* <div className='absolute top-0 left-0 right-0'>
        <input className='absolute bottom-0 left-0 right-0'
          type="text"
          placeholder="输入消息..."
        />
      </div> */}
    </div>
  );
};

export default ChatPage;