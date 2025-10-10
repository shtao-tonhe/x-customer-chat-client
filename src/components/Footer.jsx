
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="footer" style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.right}>
          <div style={styles.ttext}>We run on</div>
          <div style={styles.about}>
            <img style={styles.logo} src="/public/logo1.svg" alt=""/>
            <span style={styles.company}>X-Chat</span>
          </div>
        </div>
        <div
          onClick={toggleTheme}
          style={styles.themeToggle}
        >
          {theme === 'light' ? '🌙' : '☀️'}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  themeToggle: {
    position: 'absolute',
    cursor: 'pointer',
    right: '10px',
    top: '-5px',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    color: 'var(--text-color)',
  },
  footer: {
    display: 'flex',
    padding: '10px 0',
    // background:'pink'
  },
  link: {
    color: 'var(--primary-color)',
    textDecoration: 'none',
    fontSize: '10px',
  },
  container: {
    width: '100%',
    // maxWidth: '1200px',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    position: 'relative',
  },
  copyright: {
    margin: 0,
    color: '#666',
    fontSize: '10px',
  },
  right: {
    flex:1,
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center',
    fontSize: '11px',
    justifyContent: 'center',
    color: '#999',
  },
  about: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    // color: '#000',
    color: '#aa4cfe',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  logo: {
    width: '17px',
    height: '17px',
    margin: '0 0 0 3px',
  },
  ttext: {
    fontSize: '11px',
    // lineHeight: '15px',
  },
  company: {
    fontSize: '11px',
    // lineHeight: '14px',
  },
  linkList: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '1.5rem',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
};

// 响应式建议（加到 index.css）：
/*
@media (max-width: 768px) {
  .footer .row {
    flexDirection: 'column',
    alignItems: 'flex-start',
  }
  .footer .right {
    order: -1;
    marginBottom: '1rem';
    textAlign: 'left';
  }
}
*/