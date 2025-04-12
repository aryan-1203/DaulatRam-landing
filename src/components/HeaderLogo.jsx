import React from 'react';
import './HeaderLogo.css';
import { SearchOutlined } from '@ant-design/icons';
import logo from '../assets/logo.png';

const HeaderLogo = () => {
  return (
    <div className="header-logo-container">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="search-btn">
          <SearchOutlined />
        </button>
      </div>
      <img src={logo} alt="Company Logo" className="header-logo" />
    </div>
  );
};

export default HeaderLogo;
