"use client";
import React from 'react';

const ChooseUs = () => {
  const cards = [
    {
      id: '01',
      icon: "fa-solid fa-user-tie",
      title: "Expert Guidance",
      description: "Our consultants provide accurate advice and personalized solutions for your immigration needs.",
      color: "#3b82f6", 
      shadow: "rgba(59, 130, 246, 0.25)"
    },
    {
      id: '02',
      icon: "fa-solid fa-hand-holding-heart",
      title: "Personalized Support",
      description: "We understand your goals and offer tailored support at every step of your journey.",
      color: "#ef4444", 
      shadow: "rgba(239, 68, 68, 0.25)"
    },
    {
      id: '03',
      icon: "fa-solid fa-stopwatch",
      title: "Transparent Process",
      description: "We believe in clear communication and complete transparency throughout the entire process.",
      color: "#22c55e", 
      shadow: "rgba(34, 197, 94, 0.25)"
    },
    {
      id: '04',
      icon: "fa-solid fa-globe",
      title: "Global Reach",
      description: "Strong network with top institutions and immigration authorities around the world.",
      color: "#a855f7", 
      shadow: "rgba(168, 85, 247, 0.25)"
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
        <div className="row g-4 mt-4">
          {cards.map((card) => (
            <div className={`col-xl-3 col-lg-4 col-md-6 d-flex wow fadeInUp`} data-wow-delay={`0.${card.id.charAt(1)}s`} key={card.id}>
              <div className="premium-choose-card w-100">
                <div className="card-inner h-100 d-flex flex-column">
                  
                  <div className="icon-wrapper" style={{ '--glow-color': card.shadow, '--icon-color': card.color }}>
                    <div className="icon-circle">
                      <i className={card.icon}></i>
                    </div>
                  </div>

                  <h4 className="card-title">{card.title}</h4>
                  <p className="card-desc">{card.description}</p>
                  
                  <div className="card-footer mt-auto">
                    <span className="learn-more">
                      Learn More <i className="fa-solid fa-arrow-right"></i>
                    </span>
                  </div>

                  <div className="watermark-number">{card.id}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <style jsx="true">{`
          .premium-choose-card {
            position: relative;
            background: #ffffff;
            border-radius: 16px;
            padding: 2px; /* For the gradient border effect */
            transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            z-index: 1;
          }
          
          .premium-choose-card::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 16px;
            background: linear-gradient(135deg, rgba(227, 28, 35, 0.1) 0%, rgba(255,255,255,0) 100%);
            opacity: 0;
            transition: opacity 0.4s ease;
            z-index: -1;
          }

          .premium-choose-card:hover {
            transform: translateY(-10px);
          }
          
          .premium-choose-card:hover::before {
            opacity: 1;
          }

          .card-inner {
            background: #ffffff;
            border-radius: 14px;
            padding: 40px 30px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
            border: 1px solid rgba(0,0,0,0.05);
            position: relative;
            overflow: hidden;
            transition: all 0.4s ease;
          }

          .premium-choose-card:hover .card-inner {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
            border-color: transparent;
          }

          .icon-wrapper {
            margin-bottom: 30px;
            display: inline-block;
          }

          .icon-circle {
            width: 65px;
            height: 65px;
            min-width: 65px;
            min-height: 65px;
            background: #ffffff;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 26px;
            color: var(--icon-color);
            box-shadow: 0 10px 25px var(--glow-color);
            transition: all 0.4s ease;
            position: relative;
            z-index: 2;
          }

          .premium-choose-card:hover .icon-circle {
            background: var(--icon-color);
            color: #ffffff;
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 15px 35px var(--glow-color);
          }

          .card-title {
            font-size: 22px;
            font-weight: 700;
            color: #10203f;
            margin-bottom: 15px;
            transition: color 0.3s ease;
            position: relative;
            z-index: 2;
          }

          .premium-choose-card:hover .card-title {
            color: #E31C23;
          }

          .card-desc {
            color: #64748b;
            line-height: 1.7;
            font-size: 15px;
            margin-bottom: 25px;
            position: relative;
            z-index: 2;
          }

          .learn-more {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            font-size: 14px;
            font-weight: 600;
            color: #10203f;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
            position: relative;
            z-index: 2;
          }
          
          .learn-more i {
            font-size: 12px;
            transition: transform 0.3s ease;
          }

          .premium-choose-card:hover .learn-more {
            color: #E31C23;
          }

          .premium-choose-card:hover .learn-more i {
            transform: translateX(5px);
          }

          .watermark-number {
            position: absolute;
            bottom: -25px;
            right: -15px;
            font-size: 120px;
            font-weight: 900;
            color: rgba(16, 32, 63, 0.03);
            line-height: 1;
            z-index: 0;
            transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            pointer-events: none;
          }

          .premium-choose-card:hover .watermark-number {
            color: rgba(227, 28, 35, 0.06);
            transform: scale(1.1) translate(-10px, -10px);
          }
        `}</style>
      </div>
    </section>
  );
};

export default ChooseUs;
