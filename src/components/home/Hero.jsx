"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const heroSlides = [
    {
        id: 1,
        subtitle: "Global Education Simplified",
        title: "From Application to Visa – We’ve Got You Covered",
        description: "We guide you through every step of the education visa process, from initial application to final approval, ensuring a smooth, hassle-free journey.",
        image: "/assets/img/home-1/hero/man.png"
    },
    {
        id: 2,
        subtitle: "Your Dream Destination Awaits",
        title: "Unlock Your Future with Top Universities Worldwide",
        description: "Let us help you find the right path to success, offering expert advice and full support for your international education journey.",
        image: "/assets/img/home-1/hero/man.png"
    }
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
        <section className="hero-section hero-1 fix bg-cover" style={{ backgroundImage: `url("/assets/img/home-1/hero/bg.jpg")` }}>
            <div className="left-shape">
                <img src="/assets/img/home-1/hero/sape-2.png" alt="img" />
            </div>
            <div className="hero-shape">
                <img src="/assets/img/home-1/hero/shape.png" alt="img" />
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
                                        Apply now
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                    <a href="contact.html" className="theme-btn style-2">
                                        Book Free Consultation
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <div className="col-lg-6">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: -100, opacity: 0 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="hero-image"
                            >
                                <img src={heroSlides[activeIndex].image} alt="img" /> 
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
