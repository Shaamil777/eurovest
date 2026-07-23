'use client';

import React from 'react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/1234567890" // Update this number with the actual WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        backgroundColor: '#25D366',
        color: 'white',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '35px',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
        zIndex: 999999,
        textDecoration: 'none',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;
