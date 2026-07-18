"use client";
import React from 'react';
import { motion } from 'framer-motion';
// import Link from 'next/link'; // Uncomment if using next/link for <a> tags

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.4
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function About() {
    return (
        <>
         {/* About Section Start  */}
        <section className="about-section section-padding" style={{ overflowX: 'hidden' }}>
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="top-shape"
            >
                <img src="/assets/img/home-1/about/globe.png" alt="img" />
            </motion.div>
            <div className="container">
                <div className="about-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6 pe-lg-4">
                            <div className="about-image" style={{ position: 'relative', zIndex: 1, paddingRight: '8%', paddingBottom: '8%' }}>
                                <motion.img 
                                    initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
                                    whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    src="/assets/img/home-1/about/about1.JPG" 
                                    alt="img" 
                                    className="img-custom-anim-left" 
                                    style={{ objectFit: 'cover', borderRadius: '20px', width: '100%', minHeight: '450px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', position: 'relative', zIndex: 2 }} 
                                />
                                <motion.div 
                                    initial={{ opacity: 0, clipPath: "inset(0 0 0 100%)" }}
                                    whileInView={{ opacity: 1, clipPath: "inset(0 0 0 0)" }}
                                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                                    viewport={{ once: true }}
                                    className="about-image-2"
                                    style={{ position: 'absolute', bottom: '-70px', right: '-150px', width: '80%', zIndex: 3 }}
                                >
                                    <img src="/assets/img/home-1/about/about2.webp" alt="img" className="img-custom-anim-right" style={{ objectFit: 'cover', borderRadius: '20px', width: '100%', boxShadow: '0 15px 40px rgba(6,27,57,0.15)' }} />
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.5 }}
                                    viewport={{ once: true }}
                                    className="bg-shape"
                                >
                                    <img src="/assets/img/home-1/about/Vector.png" alt="img" />
                                </motion.div>
                                <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.6 }}
                                    viewport={{ once: true }}
                                    className="plane-shape"
                                >
                                    <img src="/assets/img/home-1/about/plane.png" alt="img" />
                                </motion.div>
                                 <motion.div 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 1, delay: 0.7 }}
                                    viewport={{ once: true }}
                                    className="top-shape"
                                >
                                    <img src="/assets/img/home-1/about/shape.png" alt="img" />
                                </motion.div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title mb-0">
                                    <motion.span 
                                        initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                                        whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                                        transition={{ duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className="sub-title"
                                        style={{ color: 'white', backgroundColor: 'rgb(6, 27, 57)', padding: '5px 20px', borderRadius: '30px', display: 'inline-block' }}
                                    >
                                        About Our Consultancy
                                    </motion.span>
                                    <motion.h2 
                                        initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                                        whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                                        transition={{ delay: 0.2, duration: 0.6 }}
                                        viewport={{ once: true }}
                                        className="split-text-right split-text-in-right"
                                    >
                                    OUR TRUSTED PARTNER FOR <span>IMMIGRATION & VISA</span> SOLUTIONS
                                    </motion.h2>
                                </div>
                                <motion.p 
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.8 }}
                                    viewport={{ once: true }}
                                    className="text"
                                >
                                    Trusted immigration services, work permits, visitor visas, residency visas, and business investment with expert visa consulting and personalized support.
                                </motion.p>
                                <motion.div 
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={containerVariants}
                                    className="row g-4 mt-3 mb-4"
                                >
                                    <motion.div variants={itemVariants} className="col-md-6 d-flex align-items-start">
                                        <div className="d-flex justify-content-center align-items-center rounded-circle me-3" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#162e5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '18px', fontWeight: '700', color: '#10203f' }}>Global Immigration</h5>
                                            <p className="mb-0 text-muted" style={{ fontSize: '14px', lineHeight: '1.5' }}>Professional immigration solutions worldwide.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="col-md-6 d-flex align-items-start">
                                        <div className="d-flex justify-content-center align-items-center rounded-circle me-3" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#162e5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '18px', fontWeight: '700', color: '#10203f' }}>Visa Experts</h5>
                                            <p className="mb-0 text-muted" style={{ fontSize: '14px', lineHeight: '1.5' }}>Expert guidance for every visa application.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="col-md-6 d-flex align-items-start">
                                        <div className="d-flex justify-content-center align-items-center rounded-circle me-3" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#162e5b" stroke="#162e5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="M9 12l2 2 4-4" stroke="#fff" strokeWidth="3"></path></svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '18px', fontWeight: '700', color: '#10203f' }}>Trusted Process</h5>
                                            <p className="mb-0 text-muted" style={{ fontSize: '14px', lineHeight: '1.5' }}>Smooth, transparent, and reliable visa processing.</p>
                                        </div>
                                    </motion.div>
                                    <motion.div variants={itemVariants} className="col-md-6 d-flex align-items-start">
                                        <div className="d-flex justify-content-center align-items-center rounded-circle me-3" style={{ width: '50px', height: '50px', flexShrink: 0 }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#162e5b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M3 7v1a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/><path d="M4 10v11"/><path d="M20 10v11"/><path d="M8 10v11"/><path d="M12 10v11"/><path d="M16 10v11"/><path d="M12 2l-9 5h18z"/></svg>
                                        </div>
                                        <div>
                                            <h5 className="mb-1" style={{ fontSize: '18px', fontWeight: '700', color: '#10203f' }}>Business Investment</h5>
                                            <p className="mb-0 text-muted" style={{ fontSize: '14px', lineHeight: '1.5' }}>Global investment and residency opportunities.</p>
                                        </div>
                                    </motion.div>
                                </motion.div>
                                <hr className="mb-4" style={{ borderTop: '1px dashed #d1d5db', opacity: 1 }} />
                                <motion.a 
                                    initial={{ opacity: 0, clipPath: "inset(100% 0 0 0)" }}
                                    whileInView={{ opacity: 1, clipPath: "inset(0% 0 0 0)" }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                    viewport={{ once: true }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    href="about.html" 
                                    className="theme-btn"
                                >
                                    Learn More
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
