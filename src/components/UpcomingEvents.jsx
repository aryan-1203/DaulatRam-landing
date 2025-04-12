import React from 'react';
import './UpcomingEvents.css';

const events = [
  {
    title: 'RSI – Indianapolis, IN',
    shortDate: 'Feb-17-2025',
    dateRange: 'May 20-22, 2025',
    image: '/images/invitation.jpg'
  },
  {
    title: 'Africa Rail – Johannesburg',
    shortDate: 'Mar-10-2025',
    dateRange: 'May 13-14, 2025',
    image: '/images/invitation.jpg'
  }
];

const UpcomingEvents = () => {
  return (
    <div className="upcoming-events-wrapper">
      <h2 className="upcoming-title">Upcoming Events</h2>
      <div className="title-underline" />
      <div className="upcoming-content">
        <div className="upcoming-banner">
          <img src="/images/event.png" alt="Africa Rail" />
        </div>
        <div className="upcoming-events-list">
          {events.map((event, index) => (
            <div className="event-box" key={index}>
              <img className="event-thumbnail" src={event.image} alt={event.title} />
              <div className="event-details">
                <span className="event-date">{event.shortDate}</span>
                <h4 className="event-title">{event.title}</h4>
                <span className="event-range">{event.dateRange}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
