import React from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined,
  InfoCircleOutlined,
  AppstoreOutlined,
  ThunderboltOutlined,
  DollarOutlined,
  TeamOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
      <Menu.Item key="1" icon={<HomeOutlined />}>Home</Menu.Item>
      <Menu.Item key="2" icon={<InfoCircleOutlined />}>About Us</Menu.Item>
      <Menu.Item key="3" icon={<AppstoreOutlined />}>Products</Menu.Item>
      <Menu.Item key="4" icon={<ThunderboltOutlined />}>Activity</Menu.Item>
      <Menu.Item key="5" icon={<DollarOutlined />}>Investors</Menu.Item>
      <Menu.Item key="6" icon={<TeamOutlined />}>Career</Menu.Item>
      <Menu.Item key="7" icon={<PhoneOutlined />}>Contact Us</Menu.Item>
      <Menu.Item key="8" icon={<EnvironmentOutlined />}>Feature Location</Menu.Item>
      <Menu.Item key="9" icon={<QuestionCircleOutlined />}>FAQ</Menu.Item>
    </Menu>
  );
};

export default Sidebar;
