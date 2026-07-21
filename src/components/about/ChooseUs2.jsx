"use client";
import React from 'react';
import Link from 'next/link';

export default function ChooseUs2() {
    return (
        <>
            {/* Choose-us-section-2 Start */}
            <section
                className="choose-us-section-2 section-padding fix pb-0 bg-cover"
                style={{ backgroundImage: `url("/assets/img/inner-page/intro.png")` }}
            >
                <div className="container">

                    <div className="section-title text-center mb-5">
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
                            Why Choose EuroVest Consultancy
                        </span>

                        <h2 className="mb-4">
                            Making Your <span>Immigration Journey</span> Simple, Secure & Successful
                        </h2>

                        <p
                            className="text text-muted"
                            style={{ maxWidth: "800px", margin: "0 auto" }}
                        >
                            At EuroVest Consultancy, we combine immigration expertise,
                            personalized visa solutions, and transparent guidance to help
                            individuals, families, professionals, and investors achieve their
                            international goals. From consultation to visa approval, we are
                            committed to delivering reliable immigration services with
                            professionalism, accuracy, and complete client support.
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
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#162e5b"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mb-2 mb-sm-0 me-sm-2"
                                >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>

                                <h4
                                    className="mb-0"
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                        color: "#10203f",
                                    }}
                                >
                                    Experienced Immigration Experts
                                </h4>
                            </div>

                            <p
                                className="text-muted mb-0 mx-auto"
                                style={{ fontSize: "1.05rem", maxWidth: "350px" }}
                            >
                                Our experienced immigration consultants provide reliable
                                guidance, accurate documentation support, and practical visa
                                solutions tailored to your immigration goals.
                            </p>
                        </div>

                        {/* Point 2 */}
                        <div className="col-lg-4 col-md-6 text-center mb-4 px-4 custom-border-lg">
                            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mb-3">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#162e5b"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mb-2 mb-sm-0 me-sm-2"
                                >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>

                                <h4
                                    className="mb-0"
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                        color: "#10203f",
                                    }}
                                >
                                    Tailored Visa & Immigration Solutions
                                </h4>
                            </div>

                            <p
                                className="text-muted mb-0 mx-auto"
                                style={{ fontSize: "1.05rem", maxWidth: "350px" }}
                            >
                                Every client receives a personalized immigration strategy based
                                on their objectives, eligibility, and destination country's
                                latest immigration requirements.
                            </p>
                        </div>

                        {/* Point 3 */}
                        <div className="col-lg-4 col-md-6 text-center mb-4 px-4">
                            <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center mb-3">
                                <svg
                                    width="28"
                                    height="28"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="#162e5b"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="mb-2 mb-sm-0 me-sm-2"
                                >
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>

                                <h4
                                    className="mb-0"
                                    style={{
                                        fontSize: "1.25rem",
                                        fontWeight: "700",
                                        color: "#10203f",
                                    }}
                                >
                                    Transparent & Client-Focused Process
                                </h4>
                            </div>

                            <p
                                className="text-muted mb-0 mx-auto"
                                style={{ fontSize: "1.05rem", maxWidth: "350px" }}
                            >
                                We believe in honest communication, regular updates, and
                                complete transparency, ensuring you stay informed throughout
                                every stage of your visa application.
                            </p>
                        </div>

                    </div>

                    <div className="row justify-content-center mt-4">
                        <div className="col-12 text-center">
                            <Link href="/contact" className="theme-btn">
                                Speak With Our Experts
                                <i className="fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}