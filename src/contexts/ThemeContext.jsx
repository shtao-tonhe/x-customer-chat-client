// src/contexts/ThemeContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// 定义主题变量
const themes = {
  light: {
    '--bg-color': '#f8f9fa',
    '--text-color': '#212529',
    '--header-bg': '#ffffff',
    '--header-border': '#dee2e6',
    '--nav-link-color': '#333',
    '--nav-link-hover': '#007bff',
    '--card-bg': '#ffffff',
    '--card-border': '#dee2e6',
    '--footer-bg': '#e9ecef',
    '--primary-color': '#007bff',
    '--shadow': '0 2px 4px rgba(0,0,0,0.1)',
  },
  dark: {
    '--bg-color': '#121212',
    '--text-color': '#e0e0e0',
    '--header-bg': '#1e1e1e',
    '--header-border': '#333333',
    '--nav-link-color': '#bbbbbb',
    '--nav-link-hover': '#4dabf7',
    '--card-bg': '#1e1e1e',
    '--card-border': '#333333',
    '--footer-bg': '#1a1a1a',
    '--primary-color': '#4dabf7',
    '--shadow': '0 2px 4px rgba(0,0,0,0.3)',
  }
};

// 创建 Context
const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // 1. 读取 localStorage 中的用户选择
  const savedTheme = localStorage.getItem('app-theme');

  // 2. 检测系统偏好
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // 3. 决定初始主题：
  //    - 如果用户手动设置过，使用用户的设置
  //    - 否则，跟随系统偏好
  const getInitialTheme = () => {
    if (savedTheme) {
      return savedTheme === 'dark' ? 'dark' : 'light';
    }
    return prefersDark ? 'dark' : 'light';
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // 4. 当 theme 变化时，更新 CSS 变量和 class
  useEffect(() => {
    const root = document.documentElement;
    const currentTheme = themes[theme];

    Object.entries(currentTheme).forEach(([prop, value]) => {
      root.style.setProperty(prop, value);
    });

    root.classList.remove('light', 'dark');
    root.classList.add(theme);

    localStorage.setItem('app-theme', theme);
  }, [theme]);

  // 5. 监听系统偏好变化（可选：当用户在系统设置中切换时自动响应）
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      // 仅当用户没有手动设置时，才跟随系统
      if (!localStorage.getItem('app-theme')) {
        setTheme(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // 切换主题（用户手动点击）
  const toggleTheme = () => {
    console.log('手动点击---contexts----')
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// 自定义 Hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme 必须在 ThemeProvider 内使用');
  }
  return context;
};