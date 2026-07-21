"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const heroSlides = [
  {
    id: 1,
    subtitle: "Welcome to EuroVest",
    title: "Your Journey to Global Success Starts Here",
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
    const heroRef = useRef(null);

    // Parallax scroll setup
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    // Transform values for different elements
    const heroImageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const shapeTopY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
    const shapeRightY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const bgY = useTransform(scrollYProgress, [0, 1], ["center 0px", "center 250px"]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        {/* Hero Section Start  */}
        <motion.section 
            ref={heroRef}
            className="hero-section hero-1 top-[12px] fix bg-cover" 
            style={{ 
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/img/home-1/hero/hero-bg-2.webp")`, 
                minHeight: '850px', 
                display: 'flex', 
                alignItems: 'center', 
                backgroundSize: 'cover', 
                backgroundPosition: bgY 
            }}
        >
            <div className="left-shape">
                {/* <img src="/assets/img/home-1/hero/sape-2.png" alt="img" /> */}
            </div>
            
            <motion.div 
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ y: heroImageY }}
                className="hero-shape"
            >
                <Image src="/assets/img/home-1/hero/hero-img.webp" alt="img" width={1250} height={800} style={{ maxWidth: '1250px', width: '100%', height: 'auto', transform: 'translateX(-120px)' }} priority />
            </motion.div>
            
            <motion.div className="top-shape" style={{ y: shapeTopY }}>
                <Image src="/assets/img/home-1/hero/shape-3.png" alt="img" width={150} height={150} style={{ width: 'auto', height: 'auto' }} />
            </motion.div>
            
            <motion.div className="right-shape" style={{ y: shapeRightY }}>
                <Image src="/assets/img/home-1/hero/shape-4.png" alt="img" width={150} height={150} style={{ width: 'auto', height: 'auto' }} />
            </motion.div>
            
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
                            <div className="hero-content">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeIndex}
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -30 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                    >
                                        <h6>{heroSlides[activeIndex].subtitle}</h6>
                                        <h1>{heroSlides[activeIndex].title}</h1>
                                        <p>{heroSlides[activeIndex].description}</p>
                                    </motion.div>
                                </AnimatePresence>
                                <motion.div 
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.4 }}
                                    className="hero-button"
                                >
                                    <Link href="/contact" className="theme-btn">
                                        Get Free Consultation
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link href="/contact" className="theme-btn style-2">
                                        Explore Services
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </motion.div>
                            </div>
                    </div>
                    
                </div>
            </div>
        </motion.section>
        </>
    );
}
