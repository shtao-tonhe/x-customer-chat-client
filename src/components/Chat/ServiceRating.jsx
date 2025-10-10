import React, { useState, useEffect } from 'react';
import {
  BsFillEmojiNeutralFill,
  BsFillEmojiSmileFill,
  BsFillEmojiLaughingFill
} from 'react-icons/bs';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { BiLoaderAlt } from 'react-icons/bi';

const ServiceRating = ({
  onSubmit,
  onCancel,
  quickOptions = [],
  isVisible = true
}) => {
  // 状态管理
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [supplementText, setSupplementText] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 评价选项配置
  const ratingOptions = [
    {
      id: 1,
      icon: <BsFillEmojiNeutralFill />,
      label: '不满意',
      color: 'text-amber-500'
    },
    {
      id: 2,
      icon: <BsFillEmojiSmileFill />,
      label: '满意',
      color: 'text-green-500'
    },
    {
      id: 3,
      icon: <BsFillEmojiLaughingFill />,
      label: '超级满意',
      color: 'text-blue-500'
    }
  ];

  // 处理表情评分选择
  const handleRatingSelect = (ratingId) => {
    setSelectedRating(ratingId);
  };

  // 处理快捷选项选择
  const handleOptionToggle = (optionId) => {
    setSelectedOptions(prev =>
      prev.includes(optionId)
        ? prev.filter(id => id !== optionId)
        : [...prev, optionId]
    );
  };

  // 处理文字补充输入
  const handleTextChange = (e) => {
    setSupplementText(e.target.value);
  };

  // 处理提交评价
  const handleSubmit = () => {
    // 验证是否选择了评分
    if (!selectedRating) return;

    setIsSubmitting(true);

    // 模拟API请求延迟
    setTimeout(() => {
      const ratingData = {
        rating: selectedRating,
        selectedOptions,
        supplementText,
        timestamp: new Date().toISOString()
      };

      // 调用父组件的提交回调
      onSubmit(ratingData);

      setIsSubmitting(false);
      setIsSubmitted(true);

      // 3秒后自动关闭评价卡片
      setTimeout(() => {
        onCancel();
      }, 3000);
    }, 800);
  };

  // 重置评价状态（当组件显示状态变化时）
  useEffect(() => {
    if (isVisible) {
      setSelectedRating(null);
      setSelectedOptions([]);
      setSupplementText('');
      setIsSubmitting(false);
      setIsSubmitted(false);
    }
  }, [isVisible]);

  // 如果不可见则不渲染
  if (!isVisible) return null;

  // 提交成功视图
  if (isSubmitted) {
    return (
      <div className="w-full flex items-center justify-center">
        <div className='m-3 bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-center flex-col'>
          <AiOutlineCheckCircle className="text-green-500 text-3xl mb-4" />
          <h3 className="text-base font-semibold text-gray-800 mb-2">感谢您的反馈！</h3>
          <p className="text-gray-500 text-sm">
            我们将不断改进服务质量
          </p>
        </div>
      </div>
    );
  }

  // 加载中视图
  if (isSubmitting) {
    return (
      <div className="w-full flex items-center justify-center">
        <div className='m-3 bg-white rounded-xl border border-gray-100 p-4 flex items-center justify-center flex-col'>
          <BiLoaderAlt className="text-blue-500 text-3xl animate-spin" />
          <p className="text-gray-600 text-sm mt-4">正在提交您的评价...</p>
        </div>
      </div>
    );
  }

  // 主评价视图
  return (
    <div className="w-full flex items-center justify-center">
      <div className='m-3 bg-white rounded-xl border border-gray-100 px-2 py-4'>
        {/* 标题区域 */}
        {/* <div className="flex items-center mb-6">
          <div className="w-4 h-4 rounded-full bg-blue-600 flex items-center justify-center mr-3">
            <span className="text-white text-sm font-medium">?</span>
          </div>
          <div className="font-semibold text-gray-800 text-base">
            期待您的评价
          </div>
        </div> */}

        {/* 表情评分区域 */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-4">请选择您对本次服务的满意度</p>
          <div className="flex justify-around">
            {ratingOptions.map(option => (
              <div
                key={option.id}
                className={`flex flex-col items-center cursor-pointer transition-all duration-200`}
                onClick={() => handleRatingSelect(option.id)}
              >
                <div className={`${selectedRating!=option.id ?'text-gray-500':option.color} text-2xl mb-1`}>
                  {option.icon}
                </div>
                <span className={`text-sm ${
                  selectedRating === option.id
                    ? option.color
                    : 'text-gray-600'
                }`}>
                  {option.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* 快捷选项区域 */}
        {quickOptions.length > 0 && (
          <div className="mb-6">
            <p className="text-sm text-gray-500 mb-3">您对本次服务的感受是？（可多选）</p>
            <div className="flex flex-wrap gap-2">
              {quickOptions.map(option => (
                <div
                  key={option.id}
                  className={`px-3 py-1 rounded-full text-sm cursor-pointer transition-all duration-200 ${
                    selectedOptions.includes(option.id)
                      ? 'bg-blue-50 text-blue-600 border border-blue-200'
                      : 'bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100'
                  }`}
                  onClick={() => handleOptionToggle(option.id)}
                >
                  {option.text}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 文字补充区域 */}
        <div className="mb-2" >
          <div className="flex justify-between items-center mb-2">
            <p className="text-sm text-gray-500">补充更多内容（选填）</p>
            <span className="text-xs text-gray-400">
              {supplementText.length}/200
            </span>
          </div>
          <textarea
            className="w-full min-h-[80px] p-3 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-sm resize-none"
            placeholder="请输入您的建议或其他反馈..."
            value={supplementText}
            onChange={handleTextChange}
            maxLength="200"
          />
        </div>

        {/* 按钮区域 */}
        <div className="flex justify-end gap-3">
          {/* <button
            className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors"
            onClick={onCancel}
          >
            取消
          </button> */}
          <button
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedRating
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            onClick={handleSubmit}
            disabled={!selectedRating}
          >
            提交评价
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceRating;
