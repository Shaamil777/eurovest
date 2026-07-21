"use client";
import React from 'react';

export default function About2() {
    return (
        <section
            className="about-section-simple section-padding pb-0"
            style={{ backgroundColor: '#ffffff' }}
        >
            <style>{`
                .about-image {
                    object-fit: cover;
                }
                @media (min-width: 992px) {
                    .about-image {
                        transform: translate(100px, 40px);
                    }
                }
            `}</style>

            <div className="container">
                <div className="row g-5">
                    {/* Left Side: Image */}
                    <div className="col-lg-6 d-flex mb-5 mb-lg-0 justify-content-center">
                        <img
                            src="/assets/img/inner-page/intro.webp"
                            alt="EuroVest Consultancy - Immigration & Visa Services"
                            className="rounded-[20px] shadow-lg w-100 about-image"
                        />
                    </div>

                    {/* Right Side: Content */}
                    <div className="col-lg-6 d-flex flex-column justify-content-center text-center text-lg-start">
                        <div className="about-content ps-lg-5">

                            <div className="section-title mb-4">
                                <span
                                    className="sub-title"
                                    style={{
                                        color: "white",
                                        backgroundColor: "rgb(6, 27, 57)",
                                        padding: "5px 20px",
                                        borderRadius: "30px",
                                        display: "inline-block",
                                        marginBottom: "15px",
                                    }}
                                >
                                    About EuroVest Consultancy
                                </span>

                                <h2>
                                    Your Trusted Partner for <span>Immigration & Global Mobility</span>
                                </h2>
                            </div>

                            <p
                                className="text mb-4 mx-auto mx-lg-0"
                                style={{ maxWidth: "600px" }}
                            >
                                EuroVest Consultancy is a trusted immigration consultancy dedicated to
                                helping individuals, families, entrepreneurs, and professionals achieve
                                their international goals through reliable visa and immigration
                                solutions. Whether you are planning to work, visit, invest, or settle
                                abroad, our experienced immigration consultants provide expert
                                guidance, accurate documentation support, and personalized advice
                                throughout every stage of your visa application journey.
                            </p>

                            <p
                                className="text mx-auto mx-lg-0"
                                style={{ maxWidth: "600px" }}
                            >
                                We specialize in work visas, visitor visas, residency by investment,
                                citizenship by investment, business immigration, and permanent
                                residency pathways. By staying updated with the latest immigration
                                policies and international visa regulations, we deliver transparent,
                                compliant, and client-focused solutions that maximize your chances of
                                visa approval while ensuring a smooth, secure, and stress-free
                                immigration experience.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}