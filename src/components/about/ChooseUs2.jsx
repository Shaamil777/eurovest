"use client";
import React from 'react';
// import Link from 'next/link';

export default function ChooseUs2() {
    return (
        <>
        {/*  Choose-us-section-2 Start  */}
       <section className="choose-us-section-2 section-padding fix pb-0 bg-cover" style={{ backgroundImage: `url("/assets/img/inner-page/intro.png")` }}>
            <div className="container">
                <div className="section-title text-center mb-5">
                    <span className="sub-title" style={{ color: 'white', backgroundColor: 'rgb(6, 27, 57)', padding: '5px 20px', borderRadius: '30px', display: 'inline-block', marginBottom: '15px' }}>Wgy Choose Us</span>
                    <h2 className="mb-4">
                        Immigration Journey Simple & Stress-Free
                    </h2>
                    <p className="text text-muted" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        We provide trusted immigration services, visa consulting, and personalized support for work permits, visitor visas, residency visas, and business investment, ensuring a smooth and hassle-free application process.
                    </p>
                </div>

                <style>{`
                    @media (min-width: 992px) {
                        .custom-border-lg {
                            border-left: 1px solid var(--bs-light);
                            border-right: 1px solid var(--bs-light);
                        }
                    }
                `}</style>
                <div className="row justify-content-center mt-2">
                    {/* Point 1 */}
                    <div className="col-lg-4 col-md-6 text-center mb-4 px-4">
                        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mb-3">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#162e5b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mb-2 mb-sm-0 me-sm-2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <h4 className="mb-0" style={{ fontSize: '1.25rem', fontWeight: '700', color: '#10203f' }}>Expert Immigration Consultants</h4>
                        </div>
                        <p className="text-muted mb-0 mx-auto" style={{ fontSize: '1.05rem', maxWidth: '350px' }}>
                           Experienced consultants providing accurate guidance for every visa application.
                        </p>
                    </div>
                    
                    {/* Point 2 */}
                    <div className="col-lg-4 col-md-6 text-center mb-4 px-4 custom-border-lg">
                        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mb-3">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#162e5b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mb-2 mb-sm-0 me-sm-2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <h4 className="mb-0" style={{ fontSize: '1.25rem', fontWeight: '700', color: '#10203f' }}>Personalized Visa Solutions</h4>
                        </div>
                        <p className="text-muted mb-0 mx-auto" style={{ fontSize: '1.05rem', maxWidth: '350px' }}>
                            Tailored immigration services designed around your goals and requirements.
                        </p>
                    </div>
                    
                    {/* Point 3 */}
                    <div className="col-lg-4 col-md-6 text-center mb-4 px-4">
                        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mb-3">
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#162e5b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="mb-2 mb-sm-0 me-sm-2">
                                <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <h4 className="mb-0" style={{ fontSize: '1.25rem', fontWeight: '700', color: '#10203f' }}>Transparent Process</h4>
                        </div>
                        <p className="text-muted mb-0 mx-auto" style={{ fontSize: '1.05rem', maxWidth: '350px' }}>
                           Clear communication, reliable updates, and complete support from start to finish.
                        </p>
                    </div>
                </div>

                <div className="row justify-content-center mt-4">
                    <div className="col-12 text-center">
                        <a href="contact.html" className="theme-btn">
                            Contact Our Experts
                            <i className="fa-solid fa-arrow-right"></i>
                        </a>
                    </div>
                </div>
            </div>
       </section>
        </>
    );
}
