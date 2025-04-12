import React from 'react';
import { motion } from 'framer-motion';
import './VideoBanner.css';

const VideoBanner = () => {
  return (
    <motion.div
      className="video-banner-container"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <video
        className="video-banner"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </motion.div>
  );
};

export default VideoBanner;
