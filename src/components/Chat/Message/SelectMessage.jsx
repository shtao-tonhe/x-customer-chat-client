import React, { useState, useEffect } from 'react';
import { AiOutlineLoading3Quarters, AiOutlineCheck } from 'react-icons/ai';

const SelectMessage = ({
  textContent,
  options,
  onConfirm,
  status
}) => {
  const [selectedOption, setSelectedOption] = useState([]);
  const { isMultiple, type, values } = options;

  // 处理选项选择
  const handleOptionSelect = (value) => {
    if (isMultiple) {
      // 多选逻辑：切换选中状态
      setSelectedOption(prev =>
        prev.includes(value)
          ? prev.filter(item => item !== value)
          : [...prev, value]
      );
    } else {
      // 单选逻辑：直接替换
      setSelectedOption([value]);
    }
  };

  // 检查选项是否被选中
  const isSelected = (value) => {
    return selectedOption.includes(value);
  };

  // 渲染选择选项内容
  const SelectOptionContnet = () => {
    const msgType = type;
    const list = values || [];

    if (msgType === 'text') {
      // 纯文本标签展示
      return (
        <div className="flex flex-col mt-2">
          {list.map((item) => (
            <div
              key={item.value}
              onClick={() => handleOptionSelect(item.value)}
              className={`text-[11px] px-2 py-1  mb-1 rounded-md text-sm cursor-pointer transition-all duration-200 border ${
                isSelected(item.value)
                  ? 'bg-blue-600 text-white border-blue-700'
                  : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50'
              }`}
            >
              <span className='flex items-start'>{item.label}</span>
              {isSelected(item.value) && (
                <AiOutlineCheck className="inline-block ml-1.5 text-xs" />
              )}
            </div>
          ))}
        </div>
      );
    } else {
      // 左图右文案展示 - 订单/商品详情样式
      return (
        <div className="space-y-2 mt-2">
          {list.map((item) => (
            <div
              key={item.value}
              onClick={() => handleOptionSelect(item.value)}
              className={`flex items-center p-3 rounded-lg cursor-pointer transition-all duration-200 border ${
                isSelected(item.value)
                  ? 'bg-blue-50 text-gray-800 border-blue-200'
                  : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {/* 左侧图片 */}
              <div className="w-14 h-14 bg-gray-100 rounded overflow-hidden flex-shrink-0">
                <img 
                  src={`https://picsum.photos/seed/${item.value}/100/100`} 
                  alt={`${item.label}的缩略图`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* 中间内容 */}
              <div className="ml-3 flex-grow">
                <div className="font-medium">{item.label}</div>
                <div className="text-xs text-gray-500 mt-0.5">
                  订单编号: {item.value}
                </div>
              </div>

              {/* 右侧选中标识 */}
              {isSelected(item.value) && (
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <AiOutlineCheck className="text-xs" />
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className={`flex justify-start mb-4`}>
      <div className={`w-[70%] items-start flex flex-col`}>
        <div className={`
          px-2 py-2 rounded-xl text-gray-700 mb-2 w-full
          rounded-tl-none bg-gray-200 border border-gray-300/10
        `}>
          <p className='text-xs text-left text-gray-700'>{textContent}</p>

          <SelectOptionContnet />

          {status !== 'loaded' && (
            <div className={`flex justify-end mt-2`}>
              <button
                disabled={status === 'loading' || selectedOption.length === 0}
                onClick={() => onConfirm(selectedOption)}
                className={`flex flex-row items-center text-[11px] px-2 py-1 rounded-sm bg-blue-600 hover:bg-blue-700 text-white
                ${(status === 'loading' || selectedOption.length === 0) ? 'cursor-not-allowed opacity-70' : 'cursor-pointer'}`}
              >
                { status === 'loading' ? <AiOutlineLoading3Quarters className="animate-spin mr-1" /> : '' }
                确定
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SelectMessage;
