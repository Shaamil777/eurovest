"use client";
import React from 'react';
import { motion } from 'framer-motion';

const ChooseUs = () => {
  const cards = [
    {
      id: '01',
      icon: "fa-solid fa-passport",
      title: "Expert Visa Guidance",
      description: "Experienced immigration consultants providing accurate visa advice and personalized solutions.",
      color: "#3b82f6", 
      shadow: "rgba(59, 130, 246, 0.25)"
    },
    {
      id: '02',
      icon: "fa-solid fa-user-shield",
      title: "Trusted Immigration Experts",
      description: "Professional immigration support tailored to your visa and relocation goals.",
      color: "#ef4444", 
      shadow: "rgba(239, 68, 68, 0.25)"
    },
    {
      id: '03',
      icon: "fa-solid fa-file-circle-check",
      title: "Transparent Visa Process",
      description: "Clear communication, accurate documentation, and hassle-free visa processing.",
      color: "#22c55e", 
      shadow: "rgba(34, 197, 94, 0.25)"
    },
    {
      id: '04',
      icon: "fa-solid fa-plane-departure",
      title: "Global Immigration Network",
      description: "Worldwide immigration services backed by trusted international partnerships.",
      color: "#a855f7", 
      shadow: "rgba(168, 85, 247, 0.25)"
    }
  ];

  return (
    <section className="choose-us-section section-padding bg-white">
      <div className="container">
        
        {/* Header Section */}
        <div className="section-title text-center">
            <span className="sub-title" style={{ color: 'white', backgroundColor: 'rgb(6, 27, 57)', padding: '5px 20px', borderRadius: '30px', display: 'inline-block' }}>Why Choose Us</span>
            <h2 className="">
                Your Trusted Partner For <br /> <span>Immigration</span>
            </h2>
            <p 
              className="text" 
              style={{ maxWidth: '600px', margin: '0 auto', marginTop: '15px' }}
            >
              We deliver trusted immigration services, visa consulting, and personalized guidance to make your journey abroad smooth, transparent, and successful.
            </p>
        </div>

        {/* Cards Section */}
        <div className="row g-4 mt-4">
          {cards.map((card, index) => (
            <div className={`col-xl-3 col-lg-4 col-md-6 d-flex`} key={card.id}>
              <div className="premium-choose-card w-100 h-100 d-flex flex-column">
                <div className="card-inner h-100 flex-grow-1">
                  
                  <div className="icon-wrapper">
                    <div className="icon-circle mx-auto" style={{ boxShadow: `0 10px 25px ${card.shadow}` }}>
                      <i className={card.icon} style={{ color: card.color }}></i>
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
            background: linear-gradient(135deg, rgba(6, 27, 57, 0.1) 0%, rgba(255,255,255,0) 100%);
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
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 15px;
          }

          .premium-choose-card:hover .card-inner {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
            border-color: transparent;
          }

          .icon-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
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
            transition: all 0.4s ease;
            position: relative;
            z-index: 2;
          }

          .premium-choose-card:hover .icon-circle {
            background: rgb(6, 27, 57) !important;
            transform: scale(1.1) rotate(5deg);
            box-shadow: 0 15px 35px rgba(6, 27, 57, 0.2) !important;
          }

          .premium-choose-card:hover .icon-circle i {
            color: #ffffff !important;
          }

          .card-title {
            font-size: 22px;
            font-weight: 700;
            color: #10203f;
            transition: color 0.3s ease;
            position: relative;
            z-index: 2;
          }

          .premium-choose-card:hover .card-title {
            color: rgb(6, 27, 57);
          }

          .card-desc {
            color: #64748b;
            line-height: 1.7;
            font-size: 15px;
            position: relative;
            z-index: 2;
            transition: color 0.3s ease;
          }

          .premium-choose-card:hover .card-desc {
            color: rgb(6, 27, 57);
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
            color: rgb(6, 27, 57);
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
            color: rgba(6, 27, 57, 0.06);
            transform: scale(1.1) translate(-10px, -10px);
          }
        `}</style>
      </div>
    </section>
  );
};

export default ChooseUs;
