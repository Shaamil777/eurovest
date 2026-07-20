"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function ServiceDetailsArea({ serviceData }) {
    const [activeFaq, setActiveFaq] = useState(0);

    const toggleFaq = (index) => {
        setActiveFaq(activeFaq === index ? null : index);
    };

    if (!serviceData) return null;

    return (
        <>
       {/* Service-details Section Start  */}
       <section className="service-details-section section-padding fix">
        <div className="container">
            <div className="service-details-wrapper">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="service-details-post">
                            <h2>{serviceData.title}</h2>
                            <p className="mt-3 mb-3" style={{ fontSize: '18px', color: '#333' }}>
                                {serviceData.shortDescription}
                            </p>
                            <p className="mb-3">
                                {serviceData.overviewText1}
                            </p>
                            <p className="mb-5">
                                {serviceData.overviewText2}
                            </p>
                            
                            <div className="row g-4 align-items-center mb-5">
                                <div className="col-lg-6">
                                    <div className="service-left-content">
                                        <h3>Key Features</h3>
                                        <ul className="list-item mt-3">
                                            {serviceData.features?.map((feature, index) => (
                                                <li key={index} className="mb-3">
                                                    <i className="fa-solid fa-angles-right" style={{ color: 'var(--theme, #3b82f6)', marginRight: '10px' }}></i>
                                                    <span style={{ fontWeight: 'bold' }}>{feature.title}: </span> {feature.desc}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="thumb">
                                        <img src={serviceData.image2 || "/assets/img/inner-page/service-details/details-2.jpg"} alt="img" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }} />
                                    </div>
                                </div>
                            </div>

                            <div className="row g-4 align-items-center mt-4">
                                <div className="col-lg-6">
                                    <div className="thumb">
                                        <img src={serviceData.image3 || "/assets/img/inner-page/service-details/details-3.jpg"} alt="img" style={{ width: '100%', borderRadius: '12px', objectFit: 'cover' }} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="faq-items left-[15%]" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                        <h3 className="mb-4">Frequently Asked Questions</h3>
                                        {serviceData.faqs?.map((faq, index) => {
                                            const isActive = activeFaq === index;
                                            return (
                                                <div 
                                                    key={index}
                                                    style={{
                                                        borderBottom: '1px solid #eaeaea',
                                                        overflow: 'hidden'
                                                    }}
                                                >
                                                    <div 
                                                        onClick={() => toggleFaq(index)}
                                                        style={{
                                                            padding: '24px 0',
                                                            cursor: 'pointer',
                                                            display: 'flex',
                                                            justifyContent: 'space-between',
                                                            alignItems: 'center',
                                                            gap: '15px'
                                                        }}
                                                    >
                                                        <h5 style={{ 
                                                            margin: 0, 
                                                            fontSize: '18px', 
                                                            fontWeight: '500', 
                                                            color: 'var(--color-blue)',
                                                        }}>
                                                            {faq.q}
                                                        </h5>
                                                        <motion.div 
                                                            animate={{ rotate: isActive ? 45 : 0 }}
                                                            transition={{ duration: 0.8 }}
                                                            style={{
                                                                color: '#6C6D6F',
                                                                display: 'flex',
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                                flexShrink: 0,
                                                                fontSize: '24px',
                                                                width: '30px',
                                                                height: '30px'
                                                            }}
                                                        >
                                                            <i className="fa-solid fa-plus"></i>
                                                        </motion.div>
                                                    </div>
                                                    
                                                    <AnimatePresence>
                                                        {isActive && (
                                                            <motion.div
                                                                initial={{ height: 0, opacity: 0 }}
                                                                animate={{ height: 'auto', opacity: 1 }}
                                                                exit={{ height: 0, opacity: 0 }}
                                                                transition={{ duration: 0.8 }}
                                                            >
                                                                <div style={{ padding: '0 0 24px 0' }}>
                                                                    <p style={{ margin: 0, color: '#6C6D6F', lineHeight: '1.6', fontSize: '16px' }}>
                                                                        {faq.a}
                                                                    </p>
                                                                </div>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="cta-section mt-5" style={{ backgroundColor: 'var(--theme-color)', padding: '50px 30px', borderRadius: '12px', textAlign: 'center', color: '#fff' }}>
                                <h3 style={{ color: '#fff', marginBottom: '15px' }}>Ready to Take the Next Step?</h3>
                                <p style={{ marginBottom: '25px', color: '#e0e0e0', fontSize: '16px' }}>
                                    Contact our expert consultants today to discuss your {serviceData.title} goals.
                                </p>
                                <Link href="/contact" className="theme-btn" style={{ backgroundColor: '#fff', color: 'var(--theme-color)' }}>
                                    Contact Us Now <i className="fa-solid fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </section>
        </>
    );
}
