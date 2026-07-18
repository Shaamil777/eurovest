import React from 'react';

export default function ServiceList() {
    return (
        <>
       {/* Service Section Start  */}
        <section className="service-section section-padding fix section-bg-1">
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title-2 wow fadeIn">What We Offer</span>
                    <h2 className="wow fadeIn">
                        Our Immigration Services
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="service-main-item-3 fade-up-anim">
                            <div className="service-left">
                                <div className="service-image">
                                    <img src="assets/img/home-3/service/01.jpg" alt="img" />
                                </div>
                                <div className="content">
                                    <h3>
                                        <a href="service-details.html">Immigration Appeal & Legal Support</a>
                                    </h3>
                                    <p>
                                        Our experts provide professional guidance for immigration appeals and legal matters, helping clients overcome visa rejections with personalized strategies and strong case representation.”
                                    </p>
                                </div>
                            </div>
                            <div className="service-button">
                                <a href="service-details.html" className="theme-btn">
                                    read more
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="service-main-item-3 style-2 fade-up-anim">
                            <div className="service-button">
                                <a href="service-details.html" className="theme-btn">
                                    read more
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                            <div className="service-left">
                                <div className="content">
                                    <h3>
                                        <a href="service-details.html">Scholarship & Study Grant Guidance</a>
                                    </h3>
                                    <p>
                                        We help students identify suitable scholarships and study grants, assist with applications, and provide expert guidance to maximize chances of securing financial support abroad.
                                    </p>
                                </div>
                                <div className="service-image">
                                    <img src="assets/img/home-3/service/02.jpg" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="service-main-item-3 fade-up-anim">
                            <div className="service-left">
                                <div className="service-image">
                                    <img src="assets/img/home-3/service/03.jpg" alt="img" />
                                </div>
                                <div className="content">
                                    <h3>
                                        <a href="service-details.html">Permanent Residency (PR) Services</a>
                                    </h3>
                                    <p>
                                        Our PR services guide clients through every step of the residency process, including documentation, eligibility assessment, and application support, ensuring a smooth and successful approval.
                                    </p>
                                </div>
                            </div>
                            <div className="service-button">
                                <a href="service-details.html" className="theme-btn">
                                    read more
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        <div className="service-main-item-3 style-2 fade-up-anim">
                            <div className="service-button">
                                <a href="service-details.html" className="theme-btn">
                                    read more
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                            <div className="service-left">
                                <div className="content">
                                    <h3>
                                        <a href="service-details.html">Citizenship & Naturalization Guidance</a>
                                    </h3>
                                    <p>
                                        We provide expert guidance for citizenship and naturalization processes, assisting clients with documentation, eligibility, and legal procedures to achieve a smooth and successful application.
                                    </p>
                                </div>
                                <div className="service-image">
                                    <img src="assets/img/home-3/service/04.jpg" alt="img" />
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
