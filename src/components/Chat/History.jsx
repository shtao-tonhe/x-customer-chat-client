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
import UrlMessage from './Message/UrlMessage';

const ChatPage = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 222,
      type: 'text',
      content: 'Hello! I would like to schedule a demo',
      sender: 'me',
      timestamp: '09:30',
      isRead: true,
    },
    {
      id: 1,
      type: 'text',
      content: "Hey 👋🏼, It's Crispy, the chatbot here at Crisp. Want to know more about me? I'm a very powerful chatbot, feel free to start the conversation 💥",
      sender: 'other',
      timestamp: '09:30',
      isRead: true,
    },
    {
      id: 223,
      type: 'text',
      content: 'Hello! I would like to schedule a demo',
      sender: 'me',
      timestamp: '09:30',
      isRead: true,
    },
    {
      id: 23,
      type: 'select',
      textContent: '你想要查看哪个版本？你想要查看哪个版本？你想要查看哪个版本？',
      sender: 'other',
      timestamp: '09:30',
      status: 'loaded',
      options: {
        isMultiple: false,
        type: 'text',
        values:[
          { label: 'Basic Version', value: 'plan1' },
          { label: 'Enterprise Version', value: 'plan2' },
          { label: 'Customized Version', value: 'plan3' },
        ]
      },
    },
    {
      id: 55,
      type: 'url',
      content: '版本介绍/帮助文档',
      sender: 'other',
      timestamp: '19:31',
      isRead: false,
      urlInfo: {
        url: 'https://ai.zhanluifo.com',
        title: 'ZhanluInfo - 智能助手',
        description: 'AI智能助手AI智能助手AI智能助手AI智能助手AI智能助手AI智能助手AI智能助手AI智能助手'
      }
    },
    {
      id: 4,
      type: 'text',
      content: '全额',
      sender: 'me',
      timestamp: '09:31',
      isRead: true,
    },
    {
      id: 3,
      type: 'text',
      content: '请问您是想申请全额退款还是部分退款呢？',
      sender: 'other',
      timestamp: '09:32',
    },
    {
      id: 33,
      type: 'confirm',
      textContent: '是否继续执行退款？此操作会进行订单全额退款噢~',
      confirmText: '已知晓平台规则，继续执行退款',
      cancelText: '取消',
      sender: 'other',
      timestamp: '09:32',
      status: 'init',
    },
    {
      id: 5,
      type: 'text',
      content: '晚安🌹🌹🌹',
      sender: 'me',
      timestamp: '19:31',
      isRead: false,
    },
    {
      id: 6,
      type: 'text',
      content: "Hey 👋🏼, It's Crispy, the chatbot here at Crisp. Want to know more about me? I'm a very powerful chatbot, feel free to start the conversation 💥",
      sender: 'me',
      timestamp: '19:31',
      isRead: false,
    },
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

  // 处理选择消息的回调
  const handleSelectConfirm = (messageId, confirmed) => {
    const checkMsg = messages.find(m => m.id == messageId);
    console.log(checkMsg);
    // 先设置msg的status为loading
    setMessages(prev => prev.map(m =>
      m.id === messageId ? { ...m, status: 'loading' } : m
    ));

    // 模拟api请求，2s之后更新status为loaded
    setTimeout(() => {
      setMessages(prev => prev.map(m =>
        m.id === messageId ? { ...m, status: 'loaded' } : m
      ));
      const reply = {
        id: Date.now() + 2,
        type: 'text',
        content: `您已选择：${confirmed}`,
        sender: 'me',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, reply]);
    }, 2000);
  };


  // 处理确认消息的回调
  const handleConfirm = (messageId, confirmed) => {
    const checkMsg = messages.find(m => m.id == messageId);
    console.log(checkMsg);
    // 先设置msg的status为loading
    setMessages(prev => prev.map(m =>
      m.id === messageId ? { ...m, status: 'loading' } : m
    ));
    // 模拟api请求，2s之后更新status为loaded
    setTimeout(() => {
      setMessages(prev => prev.map(m =>
        m.id === messageId ? { ...m, status: 'loaded' } : m
      ));
      const reply = {
        id: Date.now() + 2,
        type: 'text',
        content: `您已选择：${confirmed ? checkMsg.confirmText : checkMsg.cancelText}`,
        sender: 'me',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, reply]);
    }, 2000);
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
            isRead={msg.isRead}
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
            onConfirm={(confirmed) => handleConfirm(msg.id, confirmed)}
            status={msg.status}
          />
        );
      case 'select':
        return (
          <SelectMessage
            key={msg.id}
            textContent={msg.textContent}
            options={msg.options}
            onConfirm={(confirmed) => handleSelectConfirm(msg.id, confirmed)}
            status={msg.status}
          />
        );
      case 'url':
        return (
          <UrlMessage
            key={msg.id}
            content={msg.content}
            isRead={msg.isRead}
            urlInfo={msg.urlInfo}
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
          <span className="text-gray-600 font-semibold text-xs px-3 py-1 rounded-xl">
          {/* https://huggingface.co/ */}
            {/* Today · 星期三 · 10/15/10:11 */}
            星期三 · 10/15 08:11
          </span>
        </div>

        {messages.map(msg => renderMessage(msg))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatPage;
