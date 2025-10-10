import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BsSendArrowUpFill } from 'react-icons/bs';
import { BsPaperclip } from 'react-icons/bs';
import { TbMessageCircle } from 'react-icons/tb';

import { FaRegImage } from 'react-icons/fa6';
import { FaRegFileAlt } from 'react-icons/fa';
import { FaFileVideo } from 'react-icons/fa';

import TextMessage from './Message/TextMessage';
import FileMessage from './Message/FileMessage';
import ConfirmMessage from './Message/ConfirmMessage';
import InputMessage from './Message/InputMessage';
import AuthCodeMessage from './Message/AuthCodeMessage';
import SelectMessage from './Message/SelectMessage';

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
    // {
    //   id: 4,
    //   type: 'confirm',
    //   textContent: '请确认您的退款申请类型',
    //   confirmText: '全额退款',
    //   cancelText: '部分退款',
    //   sender: 'other',
    //   timestamp: '09:32'
    // },
    // {
    //   id: 5,
    //   type: 'attachment',
    //   textContent: '这是产品的相关说明',
    //   attachments: [
    //     { type: 'image', url: 'https://picsum.photos/400/300', name: '产品图片.jpg' },
    //     { type: 'file', url: '#', name: '产品说明书.pdf' }
    //   ],
    //   sender: 'other',
    //   timestamp: '09:33'
    // },
    // {
    //   id: 6,
    //   type: 'text',
    //   content: '请提供您的订单号以便我们处理',
    //   sender: 'other',
    //   timestamp: '09:34'
    // },
    // {
    //   id: 7,
    //   type: 'input',
    //   textContent: '请输入您的订单号',
    //   inputPlaceholder: '订单号',
    //   buttonText: '提交',
    //   sender: 'other',
    //   timestamp: '09:34'
    // },
    // {
    //   id: 8,
    //   type: 'attachment',
    //   textContent: '这是我的订单截图',
    //   attachments: [
    //     { type: 'image', url: 'https://picsum.photos/500/300', name: '订单截图.png' }
    //   ],
    //   sender: 'me',
    //   timestamp: '09:35'
    // }
  ]);

  const messagesEndRef = useRef(null);

  // 自动滚动到最新消息
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);


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
          <AuthCodeMessage 
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
    <div className="flex flex-col bg-gray-50">
      {/* 聊天内容区域 */}
      <div className="flex flex-col flex-1 overflow-y-auto p-4 mt-2">
        <div className="flex justify-center py-2">
          <span className="bg-gray-200 text-gray-600 text-xs px-3 py-1 rounded-full">
            Today
          </span>
        </div>

        {messages.map(msg => renderMessage(msg))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatPage;
