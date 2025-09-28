import React from 'react';
import { useTranslation } from 'react-i18next';
import { FiSearch } from 'react-icons/fi';
import { FaMoneyCheck } from 'react-icons/fa6';

const Home = () => {
  const { t } = useTranslation();

  // 示例数据，实际项目中可以从接口获取
  const cardData = [
    { icon: <FaMoneyCheck />, title: '账号认证', question: '退款退款的入口在的入退款的入口在退款的入口在口在哪里？' },
    { icon: <FaMoneyCheck />, title: '账号安全', question: '如何修改密码？' },
    { icon: <FaMoneyCheck />, title: '资金管理', question: '如何绑定银行卡？' },
    { icon: <FaMoneyCheck />, title: '会员服务', question: '会员权益有哪些？' },
  ];

  return (
    <div>
      {/* 类似于一个搜索框，宽度撑满，里面有placeholder占位，点击直接跳转chat页面 */}
      <div className="h-8 bg-gray-100 rounded-lg flex items-center px-3 border border-gray-300 mx-3 mt-2 mb-4">
        <FiSearch className='w-3 h-3'/>
        {/* 竖向无限轮播提示词 */}
        <div className="text-gray-500 ml-1 text-[12px]">
          <div className="animate-marquee whitespace-nowrap">
            活动列表
          </div>
          {/* <div className="animate-marquee2 whitespace-nowrap">
            充值失败
          </div> */}
        </div>
      </div>


      <div className='flex flex-col mx-3 mt-4'>
        {/* 标题 */}
        <div className='font-semibold text-gray-700 flex justify-start mb-1 text-[14px]'>
          是否在寻找?
        </div>
        {/* 纯文本内容列表 */}
        <div className='flex flex-col'>
          <div className='text-gray-500 mb-1 flex justify-start text-[12px]'>
            我想咨询一下关于产品退款的问题吗？
          </div>
          <div className='text-gray-500 mb-1 flex justify-start text-[12px]'>
            退款的入口在哪里？
          </div>
          <div className='text-gray-500 mb-1 flex justify-start text-[12px]'>
            我想咨询一下关于产品退款的问题吗？
          </div>
          <div className='text-gray-500 flex justify-start text-[12px]'>
            退款的入口在哪里？
          </div>
        </div>
      </div>

      <div className='flex flex-col mx-3 mt-4'>
        {/* 服务标题 */}
        <div className='font-semibold text-gray-700 flex justify-start mb-1 text-[14px]'>
          自助服务
        </div>
        {/* // 网格布局，每行2个，间距调整 */}
        <div className="grid grid-cols-2 gap-2">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="border border-black-500/10 rounded-lg p-2 flex flex-col items-start justify-center"
            >
              <div className="text-black-500">
                {item.icon}
              </div>
              <div className="text-gray-900 text-[10px] font-medium">
                {item.title}
              </div>
              <div className="text-gray-500 text-[10px] text-left min-h-[30px]">
                {item.question}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;