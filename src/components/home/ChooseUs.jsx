"use client";
import React from 'react';

const ChooseUs = () => {
  const cards = [
    {
      id: '01',
      icon: "fa-solid fa-user-tie",
      title: "Expert Guidance",
      description: "Our experienced consultants provide accurate advice and personalized solutions for your immigration needs.",
      color: "#3b82f6", 
      lightBg: "#eff6ff",
    },
    {
      id: '02',
      icon: "fa-solid fa-hand-holding-heart",
      title: "Personalized Support",
      description: "We understand your goals and offer tailored support at every step of your immigration journey.",
      color: "#ef4444", 
      lightBg: "#fef2f2",
    },
    {
      id: '03',
      icon: "fa-solid fa-stopwatch",
      title: "Transparent Process",
      description: "We believe in clear communication and complete transparency throughout the entire process.",
      color: "#22c55e", 
      lightBg: "#f0fdf4",
    },
    {
      id: '04',
      icon: "fa-solid fa-globe",
      title: "Global Reach",
      description: "Strong network with top institutions and immigration authorities around the world.",
      color: "#a855f7", 
      lightBg: "#faf5ff",
    }
  ];

  return (
    <section className="choose-us-section py-5 bg-white">
      <div className="container">
        
        {/* Header Section */}
        <div className="text-center mb-5">
          <div className="d-inline-block px-3 py-1 mb-3 rounded-pill" style={{ backgroundColor: '#eff6ff', color: '#3b82f6', fontWeight: '600', fontSize: '14px' }}>
            Why Choose Us
          </div>
          <h2 style={{ fontSize: '42px', fontWeight: '800', color: '#10203f', textTransform: 'uppercase', lineHeight: '1.2' }}>
            YOUR TRUSTED PARTNER <br/>
            FOR <span style={{ color: '#E31C23' }}>IMMIGRATION</span>
          </h2>
          <p className="mx-auto mt-3 text-muted" style={{ maxWidth: '600px', fontSize: '16px' }}>
            We are committed to making your journey smooth, successful, and stress-free with our expert guidance and support.
          </p>
          
          {/* Airplane Separator */}
          <div className="d-flex align-items-center justify-content-center mt-4">
            <div style={{ width: '30px', height: '1px', backgroundColor: '#e5e7eb', marginRight: '10px' }} />
            <div style={{ width: '4px', height: '4px', backgroundColor: '#E31C23', borderRadius: '50%', marginRight: '15px' }} />
            <i className="fa-solid fa-plane" style={{ color: '#3b82f6', fontSize: '20px', transform: 'rotate(-45deg)' }}></i>
            <div style={{ width: '4px', height: '4px', backgroundColor: '#E31C23', borderRadius: '50%', marginLeft: '15px' }} />
            <div style={{ width: '30px', height: '1px', backgroundColor: '#e5e7eb', marginLeft: '10px' }} />
          </div>
        </div>

        {/* Cards Section */}
        <div className="row g-4 mt-2">
          {cards.map((card) => (
            <div className="col-xl-3 col-lg-4 col-md-6" key={card.id}>
              <div 
                className="p-4 bg-white h-100"
                style={{
                  borderRadius: '16px',
                  boxShadow: "0 10px 40px rgba(0,0,0,0.06)",
                  position: "relative",
                  overflow: "hidden",
                  textAlign: "center",
                  transition: "all 0.3s ease"
                }}
              >
                
                {/* Decorative Bottom Left Curve */}
                <div style={{
                  position: 'absolute',
                  bottom: '-30px',
                  left: '-30px',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  backgroundColor: card.lightBg,
                  zIndex: 0
                }} />

                {/* Decorative Number Bottom Right */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '20px',
                  fontSize: '60px',
                  fontWeight: '800',
                  color: card.lightBg,
                  lineHeight: '1',
                  zIndex: 0,
                  opacity: 0.7
                }}>
                  {card.id}
                </div>

                {/* Icon Circle */}
                <div 
                  className="mx-auto mt-2 mb-4 d-flex align-items-center justify-content-center rounded-circle"
                  style={{
                    width: '80px',
                    height: '80px',
                    backgroundColor: card.lightBg,
                    color: card.color,
                    fontSize: '32px',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <i className={card.icon}></i>
                </div>
                
                {/* Title */}
                <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#10203f', position: 'relative', zIndex: 1, marginBottom: '15px' }}>
                  {card.title}
                </h4>
                
                {/* Underline */}
                <div className="mx-auto mb-3" style={{ width: '30px', height: '3px', backgroundColor: card.color, borderRadius: '2px', position: 'relative', zIndex: 1 }} />
                
                {/* Description */}
                <p className="text-muted" style={{ fontSize: '14px', position: 'relative', zIndex: 1, lineHeight: '1.6' }}>
                  {card.description}
                </p>
                
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ChooseUs;
