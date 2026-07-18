import React from 'react';
// import Link from 'next/link'; // Uncomment if using next/link for <a> tags

export default function Feature() {
    return (
        <>
        {/* Feature Section Start  */}
        <section className="feature-section section-padding fix bg-cover" style={{ backgroundImage: `url("/assets/img/home-1/feature/bg.png")` }}>
            <div className="container">
                <div className="feature-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="feature-content">
                                <div className="section-title mb-0">
                                    <span className="sub-title bg-2 wow fadeInUp" style={{ color: 'white', backgroundColor: 'rgb(6, 27, 57)', padding: '5px 20px', borderRadius: '30px', display: 'inline-block' }}>Explore Destinations</span>
                                    <h2 className="text-white split-text-right split-text-in-right">
                                        Visa & vISAWAY Services To uk
                                    </h2>
                                </div>
                                <p className="text wow fadeInUp" data-wow-delay=".3s">
                                    The Express Entry program is designed for skilled workers who wish to immigrate to Canada. It includes the Federal Skilled Worker Program, the Federal Skilled…
                                </p>
                                <div className="feature-list-item wow fadeInUp" data-wow-delay=".5s">
                                    <ul className="list">
                                        <li>
                                            <i className="fa-solid fa-arrow-right"></i>
                                            Visitor Visa
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-arrow-right"></i>
                                            Student Visa & Admission
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-arrow-right"></i>
                                           Work Visa – H1B
                                        </li>
                                    </ul>
                                    <ul className="list">
                                        <li>
                                            <i className="fa-solid fa-arrow-right"></i>
                                            Business Visa
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-arrow-right"></i>
                                            Work permit for Canada
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-arrow-right"></i>
                                           Student Visa for Canada
                                        </li>
                                    </ul>
                                </div>
                                <a href="contact.html" className="theme-btn">
                                   Get Started
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="feature-image">
                                <img 
                                    src="/assets/img/home-1/feature/shape.png" 
                                    alt="img" 
                                    style={{ 
                                        animation: "none", 
                                        transform: "scale(1.5) translateX(30%)", 
                                        transformOrigin: "center right",
                                        maxWidth: "none",
                                        display: "block"
                                    }} 
                                />
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        
        </>
    );
}
