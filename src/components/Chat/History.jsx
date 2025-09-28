import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiSend, HiPaperclip, HiImage, HiVideo, HiFileText } from 'react-icons/hi2';
import { TbMessageCircle } from 'react-icons/tb';

// 导入消息组件
import TextMessage from './components/TextMessage';
import ConfirmMessage from './components/ConfirmMessage';
import AttachmentMessage from './components/AttachmentMessage';
import InputMessage from './components/InputMessage';

const ChatPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    // 示例消息数据
    {
      id: 1,
      type: 'text',
      content: '您好！我是您的客服，有什么可以帮助您的吗？',
      sender: 'other',
      timestamp: '09:30'
    },
    {
      id: 2,
      type: 'text',
      content: '我想咨询一下关于产品退款的问题',
      sender: 'me',
      timestamp: '09:31'
    },
    {
      id: 3,
      type: 'text',
      content: '请问您是想申请全额退款还是部分退款呢？',
      sender: 'other',
      timestamp: '09:32'
    },
    {
      id: 4,
      type: 'confirm',
      textContent: '请确认您的退款申请类型',
      confirmText: '全额退款',
      cancelText: '部分退款',
      sender: 'other',
      timestamp: '09:32'
    },
    {
      id: 5,
      type: 'attachment',
      textContent: '这是产品的相关说明',
      attachments: [
        { type: 'image', url: 'https://picsum.photos/400/300', name: '产品图片.jpg' },
        { type: 'file', url: '#', name: '产品说明书.pdf' }
      ],
      sender: 'other',
      timestamp: '09:33'
    },
    {
      id: 6,
      type: 'text',
      content: '请提供您的订单号以便我们处理',
      sender: 'other',
      timestamp: '09:34'
    },
    {
      id: 7,
      type: 'input',
      textContent: '请输入您的订单号',
      inputPlaceholder: '订单号',
      buttonText: '提交',
      sender: 'other',
      timestamp: '09:34'
    },
    {
      id: 8,
      type: 'attachment',
      textContent: '这是我的订单截图',
      attachments: [
        { type: 'image', url: 'https://picsum.photos/500/300', name: '订单截图.png' }
      ],
      sender: 'me',
      timestamp: '09:35'
    }
  ]);
  
  const messagesEndRef = useRef(null);

  // 自动滚动到最新消息
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

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

  // 处理确认消息的回调
  const handleConfirm = (messageId, confirmed) => {
    const reply = {
      id: Date.now() + 2,
      type: 'text',
      content: `您已选择：${confirmed ? '全额退款' : '部分退款'}`,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, reply]);
  };

  // 处理输入消息的提交
  const handleInputSubmit = (messageId, value) => {
    const reply = {
      id: Date.now() + 3,
      type: 'text',
      content: `我的订单号是：${value}`,
      sender: 'me',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, reply]);
  };

  // 渲染不同类型的消息
  const renderMessage = (msg) => {
    switch (msg.type) {
      case 'text':
        return (
          <TextMessage 
            key={msg.id} 
            content={msg.content} 
            sender={msg.sender}
            timestamp={msg.timestamp}
          />
        );
      case 'confirm':
        return (
          <ConfirmMessage 
            key={msg.id} 
            textContent={msg.textContent}
            confirmText={msg.confirmText}
            cancelText={msg.cancelText}
            sender={msg.sender}
            timestamp={msg.timestamp}
            onConfirm={(confirmed) => handleConfirm(msg.id, confirmed)}
          />
        );
      case 'attachment':
        return (
          <AttachmentMessage 
            key={msg.id} 
            textContent={msg.textContent}
            attachments={msg.attachments}
            sender={msg.sender}
            timestamp={msg.timestamp}
          />
        );
      case 'input':
        return (
          <InputMessage 
            key={msg.id} 
            textContent={msg.textContent}
            inputPlaceholder={msg.inputPlaceholder}
            buttonText={msg.buttonText}
            sender={msg.sender}
            timestamp={msg.timestamp}
            onSubmit={(value) => handleInputSubmit(msg.id, value)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* 顶部导航 */}
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => navigate('/')}
            className="p-2 rounded-full hover:bg-blue-700 transition-colors"
          >
            <TbMessageCircle size={24} />
          </button>
          <h1 className="text-xl font-semibold">在线客服</h1>
          <div className="w-6"></div> {/* 占位元素，保持标题居中 */}
        </div>
      </header>

      {/* 聊天内容区域 */}
      <main className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="flex justify-center py-2">
          <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
            今天
          </span>
        </div>
        
        {messages.map(msg => renderMessage(msg))}
        
        <div ref={messagesEndRef} />
      </main>

      {/* 输入区域 */}
      <footer className="border-t border-gray-200 p-3 bg-white">
        <div className="flex items-center gap-2 mb-2">
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <HiPaperclip size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <HiImage size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <HiVideo size={20} />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
            <HiFileText size={20} />
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
            <HiSend size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default ChatPage;
