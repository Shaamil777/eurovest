"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// import Link from 'next/link'; // Uncomment if using next/link for <a> tags

const faqs = [
    {
        question: "How long does the visa application process take?",
        answer: "Visa processing times vary by country and visa type. Our consultants provide accurate timelines based on your destination and application."
    },
    {
        question: "Which countries do you provide immigration services for??",
        answer: "We assist with immigration and visa services for Canada, the UK, Australia, Portugal, Poland, Europe, and other leading destinations."
    },
    {
        question: "Do you help with work permits and residency visas?",
        answer: "Yes. We offer expert guidance for work permits, visitor visas, residency visas, permanent residency, and business immigration programs."
    },
    {
        question: "What documents are required for a visa application?",
        answer: "Requirements depend on the destination and visa category. We help you prepare and verify all required documentation before submission."
    },
    {
        question: "Can you assist with business investment immigration?",
        answer: "Yes. We provide consultation for business investment, investor visas, residency by investment, and citizenship by investment programs."
    }
];

export default function Faq() {
    // Second item (index 1) is open by default
    const [activeIndex, setActiveIndex] = useState(1);

    const toggleFaq = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <>
        {/* Faq Section Start  */}
        <section className="faq-section section-padding fix">
            <div className="container">
                <div className="faq-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-5">
                            <div className="faq-content">
                                <div className="section-title mb-0">
                                    <span className="sub-title wow fadeInUp">Visa FAQs</span>
                                    <h2 className="split-text-right split-text-in-right">
                                        Got Questions? We’ve Got answers
                                    </h2>
                                </div>
                                <p className="text mt-3 mb-4">
                                    We understand students often have many questions about studying abroad. Our experts provide clear and accurate information to help you navigate the process.
                                </p>
                                 <a href="/contact" className="theme-btn">
                                    contact us
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="faq-items left-[15%]" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                {faqs.map((faq, index) => {
                                    const isActive = activeIndex === index;
                                    return (
                                        <motion.div 
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            viewport={{ once: true }}
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
                                                    {faq.question}
                                                </h5>
                                                <motion.div 
                                                    animate={{ rotate: isActive ? 45 : 0 }}
                                                    transition={{ duration: 0.3 }}
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
                                                        transition={{ duration: 0.3 }}
                                                    >
                                                        <div style={{ padding: '0 0 24px 0' }}>
                                                            <p style={{ margin: 0, color: '#6C6D6F', lineHeight: '1.6', fontSize: '16px' }}>
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
