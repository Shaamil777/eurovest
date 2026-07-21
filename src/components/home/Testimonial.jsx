"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonialData = [
    {
        id: 1,
        text: "Professional and reliable service. They explained each step clearly, prepared my documents, and supported me during the interview. My visa approval came faster than expected.",
        name: "Sohel Tanvir",
        location: "Canada",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E"
    },
    {
        id: 2,
        text: "The consultancy guided me from start to finish, making my study abroad journey smooth and stress-free. Thanks to their expert support, I secured my visa successfully.",
        name: "Ayesha Rahman",
        location: "UK. United Kingdom",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E"
    },
    {
        id: 3,
        text: "Amazing experience! Their team was incredibly helpful in selecting the right university and handling all the complicated paperwork for my student visa.",
        name: "Rahul Sharma",
        location: "Australia",
        image: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E"
    },
    {
        id: 4,
        text: "I couldn't have done it without them. From interview preparation to final visa stamping, they were there at every step.",
        name: "Sarah Jenkins",
        location: "USA",
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

