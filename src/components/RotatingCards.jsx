import React from 'react';
import Slider from 'react-slick';
import { Card } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './RotatingCards.css';

const products = [
  {
    title: 'Pantograph',
    description: 'Advanced pantograph systems ensuring seamless power transfer. Designed for durability in high-speed rail environments.',
    image: '/images/Panto.png'
  },
  {
    title: 'Railway Motor',
    description: 'Robust railway motors offering superior performance. Engineered for traction, speed, and long operational life.',
    image: '/images/Motor.png'
  },
  {
    title: 'High Capacity Resistor',
    description: 'Heavy-duty resistors for efficient braking energy dissipation. Built to withstand extreme thermal and electrical loads.',
    image: '/images/High Capacity Resistor.png'
  },
  {
    title: 'Air Conditioner',
    description: 'Energy-efficient rail-grade air conditioning units. Designed to maintain optimal cabin climate in all weather conditions.',
    image: '/images/Air-Conditioners.png'
  }
];

// Custom arrow components
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <LeftOutlined />
    </div>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <RightOutlined />
    </div>
  );
};

const RotatingCards = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 800,
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200, // Medium screens
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768, // Small screens
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <div className="rotating-cards-container">
      <h2 className="product-section-title">Our Divisions</h2>
      <div className="categories-underline"></div>
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="card-wrapper">
            <Card
              hoverable
              className="product-card"
              cover={<img alt={product.title} src={product.image} />}
            >
              <Card.Meta title={product.title} description={product.description} />
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default RotatingCards;
