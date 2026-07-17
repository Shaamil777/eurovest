"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// import Link from 'next/link'; // Uncomment if using next/link for <a> tags

export default function Service() {
    useEffect(() => {
        const serviceItems = document.querySelectorAll('.service-item');
        
        const listeners = [];

        serviceItems.forEach((item) => {
            const image = item.querySelector('.image-hover');
            const listener = (e) => {
                if (image) {
                    const rect = item.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    
                    image.style.top = `${y}px`;
                    image.style.left = `${x}px`;
                    image.style.transform = 'translate(-50%, -50%)';
                }
            };
            item.addEventListener('mousemove', listener);
            listeners.push({ item, listener });
        });

        return () => {
            listeners.forEach(({ item, listener }) => {
                item.removeEventListener('mousemove', listener);
            });
        };
    }, []);

    return (
        <>
         {/* Service Section Start  */}
        <div className="service-section section-padding fix">
            <div className="container">
                <div className="section-title text-center">
                    <motion.span 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="sub-title"
                    >
                        Our Expert Services
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        viewport={{ once: true }}
                        className="split-text-right split-text-in-right"
                    >
                        Comprehensive Visa Solutions
                    </motion.h2>
                </div>
            </div>
             <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="service-wrapper"
            >
                <div className="container">
                    <div className="service-item">
                         <div className="image-hover d-none d-md-block bg-cover" style={{ backgroundImage: `url("/assets/img/home-1/hover-bg.jpg")` }}></div>
                        <div className="left-item">
                            <h5 className="number">01</h5>
                            <h3>
                            <a href="service-details.html">Student Visa Guidance</a>
                            </h3>
                        </div>
                        <div className="right-item">
                            <p>
                                Assistance with admission, documentation, and visa application.Assistance 
                            </p>
                            <a href="service-details.html" className="service-btn">Service Details <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true, margin: "-50px" }}
                className="service-wrapper active"
            >
                <div className="container">
                    <div className="service-item">
                         <div className="image-hover d-none d-md-block bg-cover" style={{ backgroundImage: `url("/assets/img/home-1/hover-bg.jpg")` }}></div>
                        <div className="left-item">
                            <h5 className="number">02</h5>
                            <h3>
                            <a href="service-details.html">PTE Exam Preparation</a>
                            </h3>
                        </div>
                        <div className="right-item">
                            <p>
                               We provide expert guidance and personalized support throughout the education visa process, 
                            </p>
                            <a href="service-details.html" className="service-btn">Service Details <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </motion.div>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true, margin: "-50px" }}
                className="service-wrapper"
            >
                <div className="container">
                    <div className="service-item">
                         <div className="image-hover d-none d-md-block bg-cover" style={{ backgroundImage: `url("/assets/img/home-1/hover-bg.jpg")` }}></div>
                        <div className="left-item">
                            <h5 className="number">03</h5>
                            <h3>
                            <a href="service-details.html">University Selection Assistance</a>
                            </h3>
                        </div>
                        <div className="right-item">
                            <p>
                                We provide expert guidance and personalized support throughout the education visa process,  
                            </p>
                            <a href="service-details.html" className="service-btn">Service Details <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </motion.div>
             <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, margin: "-50px" }}
                className="service-wrapper"
            >
                <div className="container">
                    <div className="service-item">
                         <div className="image-hover d-none d-md-block bg-cover" style={{ backgroundImage: `url("/assets/img/home-1/hover-bg.jpg")` }}></div>
                        <div className="left-item">
                            <h5 className="number">04</h5>
                            <h3>
                            <a href="service-details.html">IELTS Exam Preparation</a>
                            </h3>
                        </div>
                        <div className="right-item">
                            <p>
                                We provide expert guidance and personalized support throughout the education visa process,  
                            </p>
                            <a href="service-details.html" className="service-btn">Service Details <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        </>
    );
}
