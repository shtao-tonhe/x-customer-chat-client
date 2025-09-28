
import React from 'react';
import ChatTop from '../components/Chat/Top';
import ChatHistory from '../components/Chat/History';

const ChatPage = () => {
  return (
    <div>
      <ChatTop></ChatTop>
      <ChatHistory></ChatHistory>
      <input
        type="text"
        placeholder="输入消息..."
        style={{ width: '80%', padding: '0.5rem', marginTop: '1rem' }}
      />
      <button style={{ marginLeft: '0.5rem' }}>发送</button>
    </div>
  );
};

export default ChatPage;