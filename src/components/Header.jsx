import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// 聊天路由icon
import { HiMiniChatBubbleLeftRight } from 'react-icons/hi2';
// 帮助路由icon
import { IoMdHelpCircle } from 'react-icons/io';
// 搜索路由icon
import { BiSearchAlt } from 'react-icons/bi';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    {
      path: '/',
      label: '聊天',
      icon: <HiMiniChatBubbleLeftRight />,
      iconSize: '14px'
    },
    {
      path: '/help',
      label: '帮助',
      icon: <IoMdHelpCircle />,
      iconSize: '16px'
    },
    {
      path: '/search',
      label: '搜索',
      icon: <BiSearchAlt />,
      iconSize: '16px'
    },
  ];

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
      <div style={styles.container}>
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
      </div>
    </header>
  );
};

export default Header;

const styles = {
  header: {
    minHeight: '3rem',
    background: 'var(--p-color)',
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