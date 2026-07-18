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
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="sub-title"
                        style={{ color: 'white', backgroundColor: 'rgb(6, 27, 57)', padding: '5px 20px', borderRadius: '30px', display: 'inline-block' }}
                    >
                        Our Expert Services
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="split-text-right split-text-in-right"
                    >
                        Comprehensive <span style={{ color: 'var(--theme)' }}>Immigration & Visa </span>Services
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.6 }}
                        viewport={{ once: true }}
                        className="mt-3"
                        style={{ maxWidth: '800px', margin: '0 auto', color: '#64748b' }}
                    >
                        From work permits and visitor visas to business investment and immigration consulting, we provide trusted visa solutions for individuals, families, and businesses worldwide.
                    </motion.p>
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
                            <h3 style={{ textTransform: 'none' }}>
                            <a href="/contact" style={{ textTransform: 'none' }}>Work permit</a>
                            </h3>
                        </div>
                        <div className="right-item">
                            <p style={{ textTransform: 'none' }}>
                                Expert work permit and work visa assistance for a smooth overseas employment journey.
                            </p>
                            <a href="/contact" className="service-btn">Enquire Now <i className="fa-solid fa-arrow-right"></i></a>
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
                            <h3 style={{ textTransform: 'none' }}>
                            <a href="/contact" style={{ textTransform: 'none' }}>Visitor and residency visa</a>
                            </h3>
                        </div>
                        <div className="right-item">
                            <p style={{ textTransform: 'none' }}>
                               Reliable support for visitor visas, residency visas, and permanent residency (PR) applications.
                            </p>
                            <a href="/contact" className="service-btn">Enquire Now <i className="fa-solid fa-arrow-right"></i></a>
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
                            <h3 style={{ textTransform: 'none' }}>
                            <a href="/contact" style={{ textTransform: 'none' }}>Immigration consulting</a>
                            </h3>
                        </div>
                        <div className="right-item">
                            <p style={{ textTransform: 'none' }}>
                                Professional immigration consulting with personalized visa guidance and application support.
                            </p>
                            <a href="/contact" className="service-btn">Enquire Now <i className="fa-solid fa-arrow-right"></i></a>
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
                            <h3 style={{ textTransform: 'none' }}>
                            <a href="/contact" style={{ textTransform: 'none' }}>Business investment</a>
                            </h3>
                        </div>
                        <div className="right-item">
                            <p style={{ textTransform: 'none' }}>
                                Explore business investment, Residency by Investment, and Citizenship by Investment opportunities.
                            </p>
                            <a href="/contact" className="service-btn">Enquire Now <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </motion.div>
             <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true, margin: "-50px" }}
                className="service-wrapper"
            >
                <div className="container">
                    <div className="service-item">
                         <div className="image-hover d-none d-md-block bg-cover" style={{ backgroundImage: `url("/assets/img/home-1/hover-bg.jpg")` }}></div>
                        <div className="left-item">
                            <h5 className="number">05</h5>
                            <h3 style={{ textTransform: 'none' }}>
                            <a href="/contact" style={{ textTransform: 'none' }}>Tour packages</a>
                            </h3>
                        </div>
                        <div className="right-item">
                            <p style={{ textTransform: 'none' }}>
                                Customized international tour packages with complete tourist visa and travel assistance.
                            </p>
                            <a href="/contact" className="service-btn">Enquire Now <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>

        </>
    );
}
