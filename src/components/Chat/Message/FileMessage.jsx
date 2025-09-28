import React from 'react';
import { FaRegImage } from 'react-icons/fa6';
import { FaRegFileAlt } from 'react-icons/fa';
import { FaFileVideo } from 'react-icons/fa';


const FileMessage = ({ textContent, attachments, sender, timestamp }) => {
  const isMe = sender === 'me';

  // 获取附件图标
  const getAttachmentIcon = (type) => {
    switch (type) {
      case 'image':
        return <FaRegImage size={18} />;
      case 'video':
        return <FaFileVideo size={18} />;
      case 'file':
      default:
        return <FaRegFileAlt size={18} />;
    }
  };

  return (
    <div className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-[80%] ${isMe ? 'items-end' : 'items-start'} flex flex-col`}>
        {/* 文本部分 */}
        {textContent && (
          <div className={`
            px-4 py-2 rounded-2xl mb-2
            ${isMe ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'}
          `}>
            <p>{textContent}</p>
          </div>
        )}

        {/* 附件部分 */}
        <div className={`
          p-3 rounded-2xl
          ${isMe ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none shadow-sm border border-gray-100'}
        `}>
          <div className="space-y-2">
            {attachments.map((attachment, index) => (
              <div key={index} className="flex items-center gap-3">
                {attachment.type === 'image' ? (
                  <img
                    src={attachment.url}
                    alt={attachment.name}
                    className="w-20 h-16 object-cover rounded-md border border-gray-200"
                  />
                ) : (
                  <div className={`
                    w-10 h-10 rounded-md flex items-center justify-center
                    ${isMe ? 'bg-blue-700' : 'bg-gray-100'}
                  `}>
                    {getAttachmentIcon(attachment.type)}
                  </div>
                )}

                <div className="flex-1 min-w-0">
                  <p className="text-sm truncate">{attachment.name}</p>
                  <p className={`text-xs mt-0.5 ${isMe ? 'text-blue-100' : 'text-gray-400'}`}>
                    {attachment.type === 'image' ? '图片' :
                      attachment.type === 'video' ? '视频' : '文件'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <span className={`text-xs mt-1 ${isMe ? 'text-right text-gray-500' : 'text-left text-gray-500'}`}>
          {timestamp}
        </span>
      </div>
    </div>
  );
};

export default FileMessage;
