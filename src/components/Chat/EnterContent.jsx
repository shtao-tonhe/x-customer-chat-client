
import React, { useState } from 'react';



const EnterContent = () => {

  const [message, setMessage] = useState();
  const [messages, setMessages] = useState([]);

  // 处理发送消息
  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    const newMessage = {
      id: Date.now(),
      type: 'text',
      content: message,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');
    
    // 模拟客服回复
    setTimeout(() => {
      const reply = {
        id: Date.now() + 1,
        type: 'text',
        content: '收到您的消息，我们会尽快处理，请稍等。',
        sender: 'other',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, reply]);
    }, 1000);
  };

  return (
    <div className="border-t border-gray-200 p-3 bg-white">
      <div className="flex items-center gap-2 mb-2">
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <BsPaperclip size={20} />
        </button>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <FaRegImage size={20} />
        </button>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <FaFileVideo size={20} />
        </button>
        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
          <FaRegFileAlt size={20} />
        </button>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          placeholder="输入消息..."
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
        >
          <BsSendArrowUpFill size={20} />
        </button>
      </div>
    </div>
  )
}

export default EnterContent
