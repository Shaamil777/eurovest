"use client";
import React from 'react';

export default function About2() {
    return (
        <section className="about-section-simple section-padding pb-0" style={{ backgroundColor: '#ffffff' }}>
            <div className="container">
                <div className="row g-5">
                    {/* Left Side: Photo */}
                    <div className="col-lg-6 d-flex mb-5 mb-lg-0">
                        <img 
                            src="/assets/img/inner-page/intro.webp" 
                            alt="About Us" 
                            className="rounded-[20px] shadow-lg w-100" 
                            style={{ objectFit: 'cover', transform: 'translate(100px, 40px)' }} 
                        />
                    </div>
                    
                    {/* Right Side: Title and Description */}
                    <div className="col-lg-6 d-flex flex-column justify-content-center">
                        <div className="about-content ps-lg-5">
                            <div className="section-title mb-4">
                                <span 
                                    className="sub-title"
                                    style={{ color: 'white', backgroundColor: 'rgb(6, 27, 57)', padding: '5px 20px', borderRadius: '30px', display: 'inline-block', marginBottom: '15px' }}
                                >
                                    About Our Consultancy
                                </span>
                                <h2>
                                    Your Trusted Partner for <span>Immigration & Visa</span> Solutions
                                </h2>
                            </div>
                            <p className="text mb-4">
                                We provide trusted immigration services, visa consulting, and personalized guidance to help individuals, families, and businesses achieve their global goals. Our experienced immigration consultants simplify every step of the visa application process with accuracy and confidence.
                            </p>
                            <p className="text">
                                From work permits, visitor visas, and residency visas to business investment opportunities, we deliver tailored immigration solutions designed to maximize your visa approval success while ensuring a smooth and stress-free experience.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

