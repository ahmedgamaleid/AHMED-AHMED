import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './FOOTER'
const Layout = () => {
  const layoutStyle = {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh', // Ensures the container fills the full height of the viewport
  };

  const contentStyle = {
    flex: 1, // Ensures the content section grows to take available space
  };

  const footerStyle = {
    marginTop: 'auto', // Ensures the footer stays at the bottom
  };

  return (
    <div style={layoutStyle}>
      <Navbar />
      <div style={contentStyle}>
        <Outlet />
      </div>
      <Footer style={footerStyle} />
    </div>
  );
}

export default Layout
