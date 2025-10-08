import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiSearch } from 'react-icons/fi';
import { FaMoneyCheck } from 'react-icons/fa6';
import { HiTruck } from 'react-icons/hi2';
import { RiVipCrown2Fill } from 'react-icons/ri';
import { BiSolidBadgeDollar } from 'react-icons/bi';

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  // 示例数据，实际项目中可以从接口获取
  const cardData = [
    { icon: <HiTruck />, title: '物流查询', question: '订单货品物流查询' },
    { icon: <FaMoneyCheck />, title: '修改密码', question: '如何修改密码？' },
    { icon: <BiSolidBadgeDollar />, title: '资金管理', question: '如何绑定银行卡？' },
    { icon: <RiVipCrown2Fill />, title: '会员服务', question: '会员权益有哪些？' },
  ];

  const handleSearchClick = () => {
    navigate('/chat');
  };

  return (
    <div>
      <div className="h-8 bg-gray-100 rounded-lg flex items-center px-2 border border-gray-300 mx-3 mb-4"
        onClick={() => handleSearchClick()}>
        <FiSearch className='w-4 h-4'/>
        <div className="text-gray-500 ml-1 text-[12px]">
          <div className="animate-marquee whitespace-nowrap">
            活动列表
          </div>
          {/* <div className="animate-marquee2 whitespace-nowrap">
            充值失败
          </div> */}
        </div>
      </div>

      <div className='flex flex-col mx-4 mt-4'>
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

      <div className='flex flex-col mx-4 mt-4'>
        <div className='flex flex-row justify-between'>
          <div className='font-semibold text-gray-700 flex justify-start mb-1 text-[14px]'>
          自助服务
          </div>
          <div className='text-gray-500 text-[12px] mr-1'>更多</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="border bg-black/5 border-black/40 rounded-lg p-2 flex flex-col items-start justify-center"
            >
              <div className="text-black-500 w">
                {item.icon}
              </div>
              <div className="text-gray-900 text-[12px] font-medium">
                {item.title}
              </div>
              <div className="text-gray-500 text-[10px] text-left min-h-[30px]">
                {item.question}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col mx-4 mt-4'>
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

      <div className='flex flex-col mx-4 mt-4'>
        <div className='flex flex-row justify-between'>
          <div className='font-semibold text-gray-700 flex justify-start mb-1 text-[14px]'>
          自助服务
          </div>
          <div className='text-gray-500 text-[12px] mr-1'>更多</div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="border bg-black/5 border-black/40 rounded-lg p-2 flex flex-col items-start justify-center"
            >
              <div className="text-black-500 w">
                {item.icon}
              </div>
              <div className="text-gray-900 text-[12px] font-medium">
                {item.title}
              </div>
              <div className="text-gray-500 text-[10px] text-left min-h-[30px]">
                {item.question}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='flex flex-col mx-4 mt-4'>
        <button className="bg-black text-white text-sm px-4 py-2 rounded-lg font-semibold" onClick={() => {
          navigate('/chat');
        }}>
          获取支持
        </button>
      </div>
    </div>
  );
};

export default Home;