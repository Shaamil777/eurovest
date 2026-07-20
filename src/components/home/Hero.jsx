"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % heroSlides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
        {/* Hero Section Start  */}
        <section className="hero-section hero-1 top-[12px] fix bg-cover" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/assets/img/home-1/hero/hero-bg-2.webp")`, minHeight: '850px', display: 'flex', alignItems: 'center', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="left-shape">
                {/* <img src="/assets/img/home-1/hero/sape-2.png" alt="img" /> */}
            </div>
            <div className="hero-shape">
                <Image src="/assets/img/home-1/hero/hero-img.webp" alt="img" width={1250} height={800} style={{ maxWidth: '1250px', width: '100%', height: 'auto', transform: 'translateX(-120px)' }} priority />
            </div>
            <div className="top-shape">
                <Image src="/assets/img/home-1/hero/shape-3.png" alt="img" width={150} height={150} style={{ width: 'auto', height: 'auto' }} />
            </div>
            <div className="right-shape">
                <Image src="/assets/img/home-1/hero/shape-4.png" alt="img" width={150} height={150} style={{ width: 'auto', height: 'auto' }} />
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
                            <div className="hero-content">
                                <h6>{heroSlides[activeIndex].subtitle}</h6>
                                <h1>{heroSlides[activeIndex].title}</h1>
                                <p>{heroSlides[activeIndex].description}</p>
                                <div className="hero-button">
                                    <Link href="/contact" className="theme-btn">
                                        Get Free Consultation
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link href="/contact" className="theme-btn style-2">
                                        Explore Services
                                        <i className="fa-solid fa-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                    </div>
                    
                </div>
            </div>
        </section>
        </>
    );
}
