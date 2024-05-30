// src/MainSection.js
import React from 'react';


const MainSection = () => {
  return (
    <div className="main-section">
      <div className="service">
        <h2>Bulk SMS</h2>
        <p>
          Reach your customers directly with our bulk SMS services. We create
          targeted SMS campaigns that communicate your message effectively and
          drive results.
        </p>
      </div>
      <div className="service">
        <h2>IVR/Toll Free</h2>
        <p>
          A toll-free/IVR is a powerful tool to keep the records for tracking your
          customer usage of your provided services. Toll-free/IVR benefits you to
          build the trust relationship with your clients by keeping you connected
          with them 24*7.
        </p>
      </div>
      <div className="illustration">
        <img src="path/to/your/image.jpeg" alt="Illustration" />
      </div>
      <div className="service">
        <h2>WhatsApp Business API</h2>
        <p>
          Boost Your Business Communication with WhatsApp Business API Integration.
        </p>
      </div>
      <div className="service">
        <h2>Voice Broadcasting</h2>
        <p>
          Experience seamless communication with Bulk Voice Call Service! Reach your
          audience effortlessly and amplify your message with just a few clicks.
          From announcements to promotions, our service ensures your voice is heard
          by hundreds or thousands of contacts.
        </p>
      </div>
    </div>
  );
};

export default MainSection;
