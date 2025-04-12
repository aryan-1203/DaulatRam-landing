import React from 'react';
import './Categories.css';

const GoogleMap = () => {
  return (
    <div style={{ padding: '20px',margin: '2rem 0' }}>
      <h2 className="categories-title">Locate us at</h2>
      <div className="categories-underline"></div>
      <iframe
        title="Company Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.3486766058736!2d77.4423091!3d23.266777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c69e1008fe3fb%3A0xb7839f1a3d0e32c8!2sDaulat%20Ram%20Industries%20Group!5e0!3m2!1sen!2sin!4v1744408923210!5m2!1sen!2sin"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
