"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
  {
    id: 1,
    subtitle: "Trusted Immigration Experts",
    title: "Unlock Your Future with Immigration & Visa Solutions",
    description:
      "Expert immigration services, work permits, visitor visas, residency visas, and business investment solutions with personalized guidance for a successful journey abroad.",
  },
  {
    id: 2,
    subtitle: "Your Global Journey Starts Here",
    title: "Move Abroad with Confidence and Expert Visa Support",
    description:
      "From visa applications and work permits to residency and business investment, we provide complete immigration consulting tailored to your global goals.",
  },
];

export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        {/* Hero Section Start  */}
        <section className="hero-section hero-1 top-[12px] fix bg-cover" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/img/home-1/hero/hero-bg-2.JPG")`, minHeight: '850px', display: 'flex', alignItems: 'center', backgroundAttachment: 'fixed', backgroundPosition: 'center' }}>
            <div className="left-shape">
                {/* <img src="/assets/img/home-1/hero/sape-2.png" alt="img" /> */}
            </div>
            <div className="hero-shape">
                <img src="/assets/img/home-1/hero/hero-img.png" alt="img" style={{ maxWidth: '1250px', width: '100%', height: 'auto', transform: 'translateX(-120px)' }} />
            </div>
            <div className="top-shape">
                <img src="/assets/img/home-1/hero/shape-3.png" alt="img" />
            </div>
            <div className="right-shape">
                <img src="/assets/img/home-1/hero/shape-4.png" alt="img" />
            </div>
            <div className="pagi-item">
                <div className="dot-number" style={{ display: 'flex', gap: '10px' }}>
                    {heroSlides.map((_, idx) => (
                        <span 
                            key={idx}
                            className={`dot-num`}
                            onClick={() => setActiveIndex(idx)}
                            style={{ cursor: 'pointer', opacity: idx === activeIndex ? 1 : 0.4, transition: 'opacity 0.3s' }}
                        >
                            <span>0{idx + 1}</span>
                        </span>
                    ))}
              </div>
            </div>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="hero-content"
                            >
                                <h6>{heroSlides[activeIndex].subtitle}</h6>
                                <h1>{heroSlides[activeIndex].title}</h1>
                                <p>{heroSlides[activeIndex].description}</p>
                                <div className="hero-button">
                                    <a href="contact.html" className="theme-btn">
                                        Get Free Consultation
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                    <a href="contact.html" className="theme-btn style-2">
                                        Explore Services
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    );
}
