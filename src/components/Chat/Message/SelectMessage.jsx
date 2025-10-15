import React, { useState, useEffect } from 'react';
import { AiOutlineLoading3Quarters, AiOutlineCheck } from 'react-icons/ai';

const SelectMessage = ({
  textContent,
  options,
  onConfirm,
  status
}) => {
  const [selectedOption, setSelectedOption] = useState([]);
  const {isMultiple, type, values} = options;

  // 处理选项选择
  const handleOptionSelect = (value) => {
    if( status != 'init' ) return
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
        <div className="flex flex-col">
          {list.map((item) => (
            <div
              key={item.value}
              onClick={() => handleOptionSelect(item.value)}
              className={`
                flex flex-1 flex-row items-center justify-start px-2 py-1 mt-2 rounded-md cursor-pointer transition-all duration-200
                ${ isSelected(item.value)
                  ? 'text-indigo-500 bg-white font-bold'
                  : 'text-gray-800 bg-white'}
                ${ !isSelected(item.value) && status === 'loaded'
                  ? 'opacity-80'
                  : ''}`
            }>
              {isSelected(item.value) && (
                <AiOutlineCheck className="mr-1.5" />
              )}
              <div className='text-sm'>{item.label}</div>
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
                <div className="text-sm text-gray-500 mt-0.5">
                  订单编号: {item.value}
                </div>
              </div>

              {/* 右侧选中标识 */}
              {isSelected(item.value) && (
                <div className="w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center">
                  <AiOutlineCheck className="text-sm" />
                </div>
              )}
            </div>
          ))}
        </div>
      );
    }
  };

  return (
    <div className={`flex justify-start mb-3`}>
      <div className={`w-[88%] items-start flex flex-col text-white`}>
        <div className={`px-2 py-2 rounded-xl w-full bg-indigo-500 rounded-tl-none relative h-auto mt-1`}>
          <p className='text-sm text-left text-white'>{textContent}</p>

          <SelectOptionContnet />

          {status === 'loading' && (
            <div className={`absolute right-0 bottom-0 z-10 w-full h-full bg-white/70 flex items-center justify-center`}>
              <AiOutlineLoading3Quarters className="animate-spin w-6 h-6 text-indigo-600" />
            </div>
          )}

          {/* {status === 'loading' && (
            <div className={`flex justify-end mt-2`}>
              { status === 'loading' ? <AiOutlineLoading3Quarters className="animate-spin mr-1" /> : '' }
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default SelectMessage;
