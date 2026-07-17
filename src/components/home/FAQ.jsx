"use client";
import React, { useState } from 'react';
// import Link from 'next/link'; // Uncomment if using next/link for <a> tags

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
                                    Got Questions? We’ve Got Answers
                                </h2>
                            </div>
                            <p className="text">
                                We understand students often have many questions about studying abroad. Our experts provide clear.
                            </p>
                             <a href="contact.html" className="theme-btn">
                                contact us
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="faq-items">
                                <div className="accordion" id="accordionExample">
                                    
                                    <div className="accordion-item wow fadeInUp" data-wow-delay=".2s">
                                        <h5 className="accordion-header" id="headingTwo">
                                            <button 
                                                className={`accordion-button ${activeIndex === 0 ? '' : 'collapsed'}`} 
                                                type="button" 
                                                onClick={() => toggleFaq(0)}
                                            >
                                                How long does the student visa process usually take?
                                            </button>
                                        </h5>
                                        <div 
                                            className="accordion-collapse" 
                                            style={{ 
                                                display: 'grid', 
                                                gridTemplateRows: activeIndex === 0 ? '1fr' : '0fr',
                                                transition: 'grid-template-rows 0.3s ease-out'
                                            }}
                                        >
                                            <div style={{ overflow: 'hidden' }}>
                                                <div className="accordion-body">
                                                    <p>
                                                       Yes, we guide students in identifying suitable scholarships, preparing strong applications, and increasing chances.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item wow fadeInUp" data-wow-delay=".8s">
                                        <h5 className="accordion-header" id="headingOne">
                                            <button 
                                                className={`accordion-button ${activeIndex === 1 ? '' : 'collapsed'}`} 
                                                type="button" 
                                                onClick={() => toggleFaq(1)}
                                            >
                                                Do you assist with scholarship applications as well?
                                            </button>
                                        </h5>
                                        <div 
                                            className="accordion-collapse" 
                                            style={{ 
                                                display: 'grid', 
                                                gridTemplateRows: activeIndex === 1 ? '1fr' : '0fr',
                                                transition: 'grid-template-rows 0.3s ease-out'
                                            }}
                                        >
                                            <div style={{ overflow: 'hidden' }}>
                                                <div className="accordion-body">
                                                    <p>
                                                        Yes, we guide students in identifying suitable scholarships, preparing strong applications, and increasing chances.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item wow fadeInUp" data-wow-delay=".4s">
                                        <h5 className="accordion-header" id="headingthree">
                                            <button 
                                                className={`accordion-button ${activeIndex === 2 ? '' : 'collapsed'}`} 
                                                type="button" 
                                                onClick={() => toggleFaq(2)}
                                            >
                                               Will you guide me in preparing for the visa interview?
                                            </button>
                                        </h5>
                                        <div 
                                            className="accordion-collapse" 
                                            style={{ 
                                                display: 'grid', 
                                                gridTemplateRows: activeIndex === 2 ? '1fr' : '0fr',
                                                transition: 'grid-template-rows 0.3s ease-out'
                                            }}
                                        >
                                            <div style={{ overflow: 'hidden' }}>
                                                <div className="accordion-body">
                                                    <p>
                                                       Yes, we guide students in identifying suitable scholarships, preparing strong applications, and increasing chances.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                                        <h5 className="accordion-header" id="headingfour">
                                            <button 
                                                className={`accordion-button ${activeIndex === 3 ? '' : 'collapsed'}`} 
                                                type="button" 
                                                onClick={() => toggleFaq(3)}
                                            >
                                           Do you offer post-arrival support for students?
                                            </button>
                                        </h5>
                                        <div 
                                            className="accordion-collapse" 
                                            style={{ 
                                                display: 'grid', 
                                                gridTemplateRows: activeIndex === 3 ? '1fr' : '0fr',
                                                transition: 'grid-template-rows 0.3s ease-out'
                                            }}
                                        >
                                            <div style={{ overflow: 'hidden' }}>
                                                <div className="accordion-body">
                                                    <p>
                                                       Yes, we guide students in identifying suitable scholarships, preparing strong applications, and increasing chances.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
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
