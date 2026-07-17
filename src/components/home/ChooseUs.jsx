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
    <section className="choose-us-section section-padding bg-white">
      <div className="container">
        
        {/* Header Section */}
        <div className="section-title text-center">
            <span className="sub-title wow fadeInUp">Why Choose Us</span>
            <h2 className="split-text-right split-text-in-right">
                Your Trusted Partner For <br /> <span>Immigration</span>
            </h2>
            <p className="text wow fadeInUp" data-wow-delay=".3s" style={{ maxWidth: '600px', margin: '0 auto', marginTop: '15px' }}>
              We are committed to making your journey smooth, successful, and stress-free with our expert guidance and support.
            </p>
        </div>

        {/* Cards Section */}
        <div className="row g-4 mt-2">
          {cards.map((card) => (
            <div className={`col-xl-3 col-lg-4 col-md-6 wow fadeInUp`} data-wow-delay={`0.${card.id.charAt(1)}s`} key={card.id}>
              <div className="choose-card h-100">
                <div className="icon-box" style={{ color: card.color, backgroundColor: card.lightBg }}>
                  <i className={card.icon}></i>
                </div>
                <h4>{card.title}</h4>
                <p>{card.description}</p>
                <div className="watermark">{card.id}</div>
              </div>
            </div>
          ))}
        </div>
        
        <style jsx="true">{`
          .choose-card {
            background: #ffffff;
            padding: 40px 30px;
            border-radius: 12px;
            box-shadow: 0 4px 20px rgba(0,0,0,0.03);
            border: 1px solid rgba(0,0,0,0.04);
            transition: all 0.4s ease;
            position: relative;
            overflow: hidden;
            z-index: 1;
          }
          .choose-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0,0,0,0.08);
            border-color: transparent;
          }
          .choose-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 4px;
            background: #E31C23;
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.4s ease;
            z-index: 2;
          }
          .choose-card:hover::before {
            transform: scaleX(1);
          }
          .choose-card .icon-box {
            width: 70px;
            height: 70px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 28px;
            margin-bottom: 25px;
            transition: all 0.4s ease;
          }
          .choose-card:hover .icon-box {
            background: #162e5b !important;
            color: #ffffff !important;
          }
          .choose-card .icon-box i {
             transition: transform 0.4s ease;
          }
          .choose-card:hover .icon-box i {
             transform: scale(1.1);
          }
          .choose-card h4 {
            font-size: 20px;
            font-weight: 700;
            color: #10203f;
            margin-bottom: 15px;
            transition: color 0.3s ease;
          }
          .choose-card:hover h4 {
            color: #E31C23;
          }
          .choose-card p {
            color: #666;
            line-height: 1.7;
            margin-bottom: 0;
            font-size: 15px;
          }
          .choose-card .watermark {
            position: absolute;
            bottom: -20px;
            right: -10px;
            font-size: 100px;
            font-weight: 800;
            color: rgba(22, 46, 91, 0.03);
            line-height: 1;
            z-index: -1;
            transition: all 0.4s ease;
          }
          .choose-card:hover .watermark {
            color: rgba(227, 28, 35, 0.05);
            transform: scale(1.1);
          }
        `}</style>

      </div>
    </section>
  );
};

export default ChooseUs;
