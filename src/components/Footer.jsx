
import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="footer" style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.row}>
          <div style={styles.right}>
            We run on
            <div style={styles.about}>
              <img style={styles.logo} src="/public/logo1.svg" alt=""/>
              X-Chat
            </div>
          </div>
          <div
            onClick={toggleTheme}
            style={styles.themeToggle}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const styles = {
  themeToggle: {
    position: 'absolute',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'var(--text-color)',
  },
  footer: {
    padding: '5px 0',
    marginTop: 'auto',
  },
  link: {
    color: 'var(--primary-color)',
    textDecoration: 'none',
    fontSize: '0.8rem',
  },
  container: {
    maxWidth: '1200px',
    margin: '2px 10px 2px 10px',
  },
  row: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  left: {
    flex: 1,
    minWidth: '200px',
  },
  company: {
    margin: '0 0 0.8rem 0',
    fontSize: '0.8rem',
    color: '#333',
  },
  copyright: {
    margin: 0,
    color: '#666',
    fontSize: '0.8rem',
  },
  right: {
    flex:1,
    minWidth: '200px',
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.8rem',
    // justifyContent: 'flex-end',
    justifyContent: 'center',
    color: '#999',
  },
  about: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '0.8rem',
    // color: '#000',
    color: '#aa4cfe',
    cursor: 'pointer',
    fontWeight: 'bold',
    margin: '0 0 0 0.4rem',
  },
  logo: {
    width: '18px',
    height: '18px',
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