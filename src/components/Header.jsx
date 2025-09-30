import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MdLanguage } from 'react-icons/md';
import { TbArrowsDiagonalMinimize2 } from 'react-icons/tb';
// 聊天路由icon
// import { HiMiniChatBubbleLeftRight } from 'react-icons/hi2';
// 帮助路由icon
// import { IoMdHelpCircle } from 'react-icons/io';
// 搜索路由icon
// import { BiSearchAlt } from 'react-icons/bi';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // const navLinks = [
  //   {
  //     path: '/',
  //     label: '聊天',
  //     icon: <HiMiniChatBubbleLeftRight />,
  //     iconSize: '14px'
  //   },
  //   {
  //     path: '/help',
  //     label: '帮助',
  //     icon: <IoMdHelpCircle />,
  //     iconSize: '16px'
  //   },
  //   {
  //     path: '/search',
  //     label: '搜索',
  //     icon: <BiSearchAlt />,
  //     iconSize: '16px'
  //   },
  // ];

  // 判断当前链接是否为激活状态
  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    return location.pathname.startsWith(path) && path !== '/';
  };

  // 处理导航点击事件
  const handleNavClick = (path) => {
    navigate(path);
  };

  return (
    <header className="header" style={styles.header}>
      {/* <div style={styles.container}>
        <div style={styles.navList}>
          {navLinks.map((item) => (
            <div
              key={item.path}
              style={{
                ...styles.navItem,
                ...(isActive(item.path) ? styles.navActive : {})
              }}
              onClick={() => handleNavClick(item.path)}
              className="cursor-pointer"
            >
              <div style={{ fontSize: item.iconSize, ...styles.navIcon }}>
                {item.icon}
              </div>
              {item.label}
            </div>
          ))}
        </div>
      </div> */}
      <div className='w-full px-4 flex justify-between items-center'>
        <div className="ststem-title text-base font-bold">
          ChatBot
        </div>
        <div className='w-full flex justify-end items-center'>
          {/* 切换语言 */}
          <MdLanguage className='mr-2 w-5 h-5'/>
          {/* 全屏展开 */}
          <TbArrowsDiagonalMinimize2 className='w-5 h-5'/>
        </div>
      </div>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    position: 'sticky',
    top: '0',
    left: '0',
    height: '40px',
    marginBottom: '10px',
    // background: 'var(--p-color)',
    background: '#F8F9FA',
    boxShadow:'0 0 3px 1px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navList: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItem: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '0.58rem',
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: 'white',
    padding: '0.2rem 1rem 0.1rem 1rem',
    fontSize: '0.8rem',
    margin: '0 0.3rem',
    opacity: 0.7,
    transition: 'all 0.3s ease-in-out',
  },
  navIcon: {
    paddingTop: '0.2rem',
    marginRight: '0.2rem'
  },
  navActive: {
    opacity: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
};