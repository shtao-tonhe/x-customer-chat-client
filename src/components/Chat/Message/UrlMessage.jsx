import React from 'react';
import { BiLink } from 'react-icons/bi';

const UrlMessage = ({ content, sender, isRead, urlInfo }) => {
  const isMe = sender === 'me';

  const { url, title, faviconUrl, description } = {
    url: 'https://example.com',
    title: '网页预览',
    description: '网页描述',
    faviconUrl: 'https://via.placeholder.com/16',
    ...urlInfo
  };

  // 提取域名作为URL源显示
  const getDomain = (urlString) => {
    try {
      const urlObj = new URL(urlString);
      return urlObj.hostname.replace('www.', '');
    } catch (e) {
      return urlString;
    }
  };

  return (
    <div className={`flex max-w-[88%] mb-2 ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div className={`
        p-3 rounded-xl text-gray-700 flex flex-col items-start
        ${isMe ? 'bg-gray-200 border border-gray-300/10 rounded-tr-none' : 'rounded-tl-none bg-indigo-500 text-white'}
      `}>
        {/* 原始内容（如果需要显示） */}
        {content && <p className='text-sm mb-2 break-words'>{content}</p>}

        {/* URL预览卡片 */}
        <div className={`flex p-2 rounded-lg border bg-white border-gray-100 min-h-[60px]`}>
          {/* 网站图标 */}
          <div className="flex items-center justify-center mr-2 h-full">
            <img className="w-10 h-10 rounded-md object-contain"
              src={faviconUrl} onError={(e) => {
                e.target.src = '/public/logo1.svg';
              }}
            />
            {/* <BiLink className={`w-8 h-8 text-gray-500`} /> */}
          </div>

          {/* 标题和URL信息 */}
          <div className="flex flex-1 flex-col items-start justify-center h-full">
            <h4 className={`text-sm font-medium ${isMe ? 'text-white' : 'text-gray-800'}`}>
              {title}
            </h4>
            <div className={`text-xs mb-1 text-ellipsis-2 ${isMe ? 'text-gray-200' : 'text-gray-800'} flex items-start justify-start text-left`}>
              {description}
            </div>
            <div className="flex items-center">
              <p className={`text-xs ${isMe ? 'text-indigo-100' : 'text-gray-500'}`}>
                {getDomain(url)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UrlMessage;
