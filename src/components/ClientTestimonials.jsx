import React from 'react';
import { Avatar } from 'antd';
import { motion } from 'framer-motion';
import './ClientTestimonials.css';

const testimonials = [
  {
    name: 'Ravi Sharma',
    feedback:
      'Our experience with this team was outstanding. From the initial consultation to the final delivery, everything was handled with utmost professionalism. The quality of the products exceeded our expectations, and their team was always ready to go the extra mile to ensure our satisfaction.',
    image: '/images/man1.jpg'
  },
  {
    name: 'Anita Verma',
    feedback:
      'What impressed me most was their prompt customer support. Any queries we had were answered almost instantly, and they always provided helpful and clear responses. It’s rare to find a company that cares so much about its clients and is willing to listen and adapt quickly.',
    image: '/images/lady1.jpg'
  },
  {
    name: 'Karan Mehta',
    feedback:
      'Attention to detail and adherence to timelines are what set them apart. They not only delivered everything before the deadline but also maintained a high standard of quality. Their ability to understand our unique needs and tailor solutions accordingly was remarkable.',
    image: '/images/man2.jpg'
  },
  {
    name: 'Sneha Joshi',
    feedback:
      'Working with this team has been a seamless experience. Their professionalism, clear communication, and technical expertise made the entire process smooth and enjoyable. I highly recommend them for anyone looking for reliable and skilled partners.',
    image: '/images/lady2.jpg'
  }
];

const ClientTestimonials = () => {
  return (
    <motion.div
      className="testimonials-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="testimonial-title">What Our Clients Say</h2>
      <div className="categories-underline"></div>
      <div className="testimonial-grid-2x2">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <Avatar
              className="testimonial-avatar"
              size={64}
              src={item.image}
              alt={item.name}
            />
            <div className="testimonial-bubble">
              <p className="testimonial-text">{item.feedback}</p>
              <span className="testimonial-author">— {item.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ClientTestimonials;
