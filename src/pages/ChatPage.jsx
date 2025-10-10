
import React from 'react';
import { useState } from 'react';
import ChatTop from '../components/Chat/Top';
import ChatHistory from '../components/Chat/History';
import ServiceRating from '../components/Chat/ServiceRating';

const ChatPage = () => {
  const quickOptions = [
    { id: 1, text: '客服响应及时' },
    { id: 2, text: '问题得到解决' },
    { id: 3, text: '客服态度好' },
    { id: 4, text: '等待时间过长' },
    { id: 5, text: '问题未解决' },
    { id: 6, text: '其他原因' }
  ];

  const [showRating, setShowRating] = useState(true);

  const handleRatingSubmit = (data) => {
    console.log('评价提交:', data);
    // 这里可以调用API提交评价数据
  };

  return (
    <div className='relative h-full w-full'>
      {/* <div className='absolute top-0 left-0 w-full'>
        <ChatTop></ChatTop>
      </div> */}

      <div className='h-full w-full overflow-y-auto pt-[30px] min-h-[calc(100vh-80px)]'>
        <ChatHistory></ChatHistory>

        {/* 结果评价 */}
        <ServiceRating
          isVisible={showRating}
          quickOptions={quickOptions}
          onSubmit={handleRatingSubmit}
          onCancel={() => setShowRating(false)}
        />
      </div>

      {/* 内容发送 */}
    </div>
  );
};

export default ChatPage;