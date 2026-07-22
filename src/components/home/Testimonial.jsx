"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonialData = [
    {
        id: 1,
        text: "I was looking for nursing opportunities abroad and their team helped me secure the UK Skilled Worker Visa effortlessly. They handled all my documentation and employer sponsorship perfectly.",
        name: "Preethi S.",
        location: "Kerala, India",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E"
    },
    {
        id: 2,
        text: "As a psychotherapist, I wanted to relocate to Canada. Eurovest guided me through the LMIA program, making what seemed like an impossible journey extremely smooth and stress-free.",
        name: "Akhil Krishna",
        location: "Mumbai, India",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E"
    },
    {
        id: 3,
        text: "I was interested in a second passport for global mobility. Their experts managed my Dominica Citizenship by Investment application perfectly. Truly a trustworthy and reliable service.",
        name: "Nihal",
        location: "Bangalore, India",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E"
    },
    {
        id: 4,
        text: "We wanted to establish residency in Europe. The team provided end-to-end support for the Spain Golden Visa. Highly professional consultancy with deep knowledge of immigration laws.",
        name: "Aswin",
        location: "Delhi, India",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E"
    },
    {
        id: 5,
        text: "The process for Greece Residency by Investment was incredibly fast. As a medical professional, my time is limited, but they handled all the property investment legalities and paperwork for me.",
        name: "Dr. Anjali Menon",
        location: "Chennai, India",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E"
    },
    {
        id: 6,
        text: "I was looking for a flexible European residency option, and their guidance on the Portugal D7 visa was spot on. Highly recommend their transparent and responsive consultancy.",
        name: "Rohan Verma",
        location: "Pune, India",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E"
    },
    {
        id: 7,
        text: "As an expat running a business, I needed quick access to visa-free travel. The Vanuatu Citizenship program they suggested was processed in record time. Excellent service!",
        name: "Sarah Mitchell",
        location: "Dubai, UAE",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E"
    },
    {
        id: 8,
        text: "Relocating to Australia for business was a complex move, but their team navigated the business visa requirements flawlessly. They were there at every step, making it stress-free.",
        name: "John Davies",
        location: "London, UK",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E"
    }
];

export default function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        handleResize(); // Initial check
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonialData.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const visibleItems = isMobile 
        ? [testimonialData[currentIndex]] 
        : [
            testimonialData[currentIndex], 
            testimonialData[(currentIndex + 1) % testimonialData.length],
            testimonialData[(currentIndex + 2) % testimonialData.length]
        ];

    return (
        <>
            {/* Testimonial Section Start  */}
            <section className="testimonial-section section-padding pb-0 fix">
                <div className="container">
                    <div className="section-title text-center">
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="sub-title" style={{ color: 'white', backgroundColor: 'rgb(6, 27, 57)', padding: '5px 20px', borderRadius: '30px', display: 'inline-block' }}>Client Success Stories</motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="">
                            CLIENT REVIEWS & <span>SUCCESS STORIES</span>
                        </motion.h2>
                    </div>
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="testimonial-wrapper"
                    >
                        <div className="row g-4">
                            <div className="col-lg-12">
                                <div className="row h-100" style={{ overflow: 'hidden' }}>
                                    <AnimatePresence mode="popLayout">
                                        {visibleItems.map((item) => (
                                            <motion.div
                                                key={item.id}
                                                initial={{ opacity: 0, x: 50 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -50 }}
                                                transition={{ duration: 0.6, ease: "easeInOut" }}
                                                className="col-lg-4 col-md-6 col-12 mb-4"
                                            >
                                                <div className="testimonial-box h-100">
                                                    <div>
                                                        <div className="star">
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                            <i className="fa-solid fa-star"></i>
                                                        </div>
                                                        <p>“{item.text}”</p>
                                                    </div>
                                                    <div className="info-item mt-auto pt-3">
                                                        <div className="client-image">
                                                            <img src={item.image} alt="img" style={{ borderRadius: '50%', width: '60px', height: '60px', objectFit: 'cover' }} />
                                                        </div>
                                                        <div className="content">
                                                            <h5>{item.name}</h5>
                                                            <span>{item.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </AnimatePresence>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </>
    );
}

