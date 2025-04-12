import React from 'react';
import {
  FaTrain,
  FaBolt,
  FaTruck,
  FaBusAlt,
  FaBatteryFull,
  FaTrashAlt,
  FaHardHat,
  FaBoxOpen
} from 'react-icons/fa';
import './Categories.css';

const categories = [
  { label: 'Electric Locomotive', icon: <FaBolt /> },
  { label: 'Diesel Electric Locomotive', icon: <FaTruck /> },
  { label: 'Passenger Coach Equipment', icon: <FaTrain /> },
  { label: 'Train Set', icon: <FaBusAlt /> },
  { label: 'Passenger Coach Interiors', icon: <FaTrain /> },
  { label: 'Electric Vehicle', icon: <FaBatteryFull /> },
  { label: 'Waste Management', icon: <FaTrashAlt /> },
  { label: 'Mining', icon: <FaHardHat /> },
  { label: 'Load Boxes', icon: <FaBoxOpen /> }
];

const Categories = () => {
  return (
    <div className="categories-section">
      <h2 className="categories-title">Browse From Categories</h2>
      <div className="categories-underline"></div>
      <div className="categories-container">
        {categories.map((cat, index) => (
          <div key={index} className="category-pill">
            <span className="category-icon">{cat.icon}</span>
            <span className="category-label">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
