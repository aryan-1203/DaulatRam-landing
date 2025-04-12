import React, { useState, useRef } from 'react';
import { Layout } from 'antd';
import Sidebar from './components/Sidebar.jsx';
import HeaderLogo from './components/HeaderLogo.jsx';
import Categories from './components/Categories.jsx';
import VideoBanner from './components/VideoBanner.jsx';
import RotatingCards from './components/RotatingCards.jsx';
import ClientTestimonials from './components/ClientTestimonials.jsx';
import GoogleMap from './components/GoogleMap.jsx';
import FooterSection from './components/FooterSection.jsx';
import UpcomingEvents from './components/UpcomingEvents.jsx';
import './App.css';

const { Sider, Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(true);
  const timer = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(timer.current);
    setCollapsed(false);
  };

  const handleMouseLeave = () => {
    timer.current = setTimeout(() => {
      setCollapsed(true);
    }, 100);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsed={collapsed}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'all 0.4s ease-in-out', background: '#001529' }}
        width={200}
        collapsedWidth={60}
      >
        <Sidebar />
      </Sider>

      <Layout>
        <HeaderLogo />
        <Content style={{ padding: '24px' }}>
          <VideoBanner />
          <Categories />
          <RotatingCards />
          <ClientTestimonials />
          <GoogleMap />
          <UpcomingEvents/>
        </Content>
        <FooterSection />
      </Layout>
    </Layout>
  );
};

export default App;
