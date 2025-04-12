import React from 'react';
import logo from '../assets/logo.png';
import {
  FacebookFilled,
  TwitterSquareFilled,
  LinkedinFilled,
  InstagramFilled,
  YoutubeFilled,
} from '@ant-design/icons';
import { Row, Col, Input, Button } from 'antd';
import './FooterSection.css';

const FooterSection = () => {
  return (
    <div className="footer-container">
      <Row gutter={[32, 32]} justify="space-between">
        {/* Logo & Social */}
        <Col xs={24} sm={12} md={6}>
          <img src={logo} alt="Company Logo" className="footer-logo" />
          <p className="footer-subtitle">
            India's Premier Railways Engineering 
            Equipment Manufacturer
          </p>
          <div className="social-icons">
            <FacebookFilled />
            <TwitterSquareFilled />
            <LinkedinFilled />
            <InstagramFilled />
            <YoutubeFilled />
          </div>
        </Col>

        {/* Navigation */}
        <Col xs={24} sm={12} md={4}>
          <h4 className="footer-title">Navigation</h4>
          <ul className="footer-links">
            <li>About Us</li>
            <li>Blog</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </Col>

        {/* Featured Location */}
        <Col xs={24} sm={12} md={4}>
          <h4 className="footer-title">Featured Location</h4>
          <ul className="footer-links">
            <li>Simrai</li>
            <li>Mandideep</li>
          </ul>
        </Col>

        {/* Help */}
        <Col xs={24} sm={12} md={4}>
          <h4 className="footer-title">Help</h4>
          <ul className="footer-links">
            <li>FAQ</li>
            <li>Contact Us</li>
          </ul>
        </Col>

        {/* Newsletter */}
        <Col xs={24} md={6}>
          <h4 className="footer-title">Subscribe to Our Newsletter</h4>
          <p className="newsletter-desc">
            Stay updated with the latest listings and rental tips.
          </p>
          <Input placeholder="Email Address" className="footer-input" />
          <Button type="primary" className="footer-button">
            Subscribe Now
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default FooterSection;
