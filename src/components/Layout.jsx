// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Header />
      <main className='overflow-auto bg-pink-100 h-[calc(100vh-85px)]'>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;