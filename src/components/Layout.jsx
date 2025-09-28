// src/components/Layout.jsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;