"use client";
import React from 'react';
import { motion } from 'framer-motion';
// import Link from 'next/link'; // Uncomment if using next/link for <a> tags

export default function About() {
    return (
        <>
         {/* About Section Start  */}
        <section className="about-section section-padding" style={{ overflowX: 'hidden' }}>
            <div className="top-shape">
                <img src="/assets/img/home-1/about/globe.png" alt="img" />
            </div>
            <div className="container">
                <div className="about-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <motion.img 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.8 }}
                                    viewport={{ once: true }}
                                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&h=700&q=80" 
                                    alt="img" 
                                    className="img-custom-anim-left" 
                                    style={{ objectFit: 'cover', borderRadius: '15px', width: '100%', height: 'auto' }} 
                                />
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.8, delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="about-image-2"
                                >
                                    <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&h=400&q=80" alt="img" className="img-custom-anim-right" style={{ objectFit: 'cover', borderRadius: '15px' }} />
                                </motion.div>
                                <div className="bg-shape">
                                    <img src="/assets/img/home-1/about/Vector.png" alt="img" />
                                </div>
                                <motion.div 
                                    
                                    className="plane-shape"
                                >
                                    <img src="/assets/img/home-1/about/plane.png" alt="img" />
                                </motion.div>
                                 <div className="top-shape">
                                    <img src="/assets/img/home-1/about/shape.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title mb-0">
                                    <motion.span 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        viewport={{ once: true }}
                                        className="sub-title"
                                    >
                                        About Our Consultancy
                                    </motion.span>
                                    <motion.h2 
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                        viewport={{ once: true }}
                                        className="split-text-right split-text-in-right"
                                    >
                                        Turning Study Abroad <span>Dreams</span> Into Reality
                                    </motion.h2>
                                </div>
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    viewport={{ once: true }}
                                    className="text"
                                >
                                    We guide students with expert visa consulting, ensuring a smooth process from application to approval, turning study abroad aspirations into life-changing opportunities for a brighter future.
                                </motion.p>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    viewport={{ once: true }}
                                    className="row g-4 mt-3 mb-4"
                                >
                                    <div className="col-md-6 d-flex align-items-start">
                                        <div className="d-flex justify-content-center align-items-center rounded-circle me-3" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#162e5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '18px', fontWeight: '700', color: '#10203f' }}>Global Reach</h5>
                                            <p className="mb-0 text-muted" style={{ fontSize: '14px', lineHeight: '1.5' }}>Providing opportunities worldwide</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-start">
                                        <div className="d-flex justify-content-center align-items-center rounded-circle me-3" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#162e5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '18px', fontWeight: '700', color: '#10203f' }}>Expert Guidance</h5>
                                            <p className="mb-0 text-muted" style={{ fontSize: '14px', lineHeight: '1.5' }}>Personalized support at every step</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-start">
                                        <div className="d-flex justify-content-center align-items-center rounded-circle me-3" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#162e5b" stroke="#162e5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="3"></path></svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '18px', fontWeight: '700', color: '#10203f' }}>Trusted Process</h5>
                                            <p className="mb-0 text-muted" style={{ fontSize: '14px', lineHeight: '1.5' }}>High visa success rate with proven results</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6 d-flex align-items-start">
                                        <div className="d-flex justify-content-center align-items-center rounded-circle me-3" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#162e5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M3 7v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/><path d="M4 10v11"/><path d="M20 10v11"/><path d="M8 10v11"/><path d="M12 10v11"/><path d="M16 10v11"/><path d="M12 2l-9 5h18z"/></svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '18px', fontWeight: '700', color: '#10203f' }}>Partnered Institutions</h5>
                                            <p className="mb-0 text-muted" style={{ fontSize: '14px', lineHeight: '1.5' }}>Collaboration with top universities and colleges</p>
                                        </div>
                                    </div>
                                </motion.div>
                                <hr className="mb-4" style={{ borderTop: '1px dashed #d1d5db', opacity: 1 }} />
                                <motion.a 
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="about.html" 
                                    className="theme-btn"
                                >
                                    Get Started
                                    <i className="fa-solid fa-arrow-right"></i>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}
