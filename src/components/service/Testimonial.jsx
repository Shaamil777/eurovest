import React from 'react';

export default function Testimonial() {
    return (
        <>
         {/* Testimonial Section3 Start  */}
        <section className="testimonial-section section-padding fix">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title mb-0">
                        <span className="sub-title-2 wow fadeInUp">What Our Clients Say</span>
                        <h2 className="split-text-right split-text-in-right">
                            Immigration Success Stories
                        </h2>
                    </div>
                    <a href="contact.html" className="theme-btn">
                        View All Review
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
                <div className="testimonial-wrapper-3">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-4">
                            <div className="testimonial-thumb">
                                <img src="assets/img/home-3/test-thumb.jpg" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="testimonial-content">
                                <div className="swiper testimonial-slider-3">
                                    <div className="swiper-wrapper">
                                        <div className="swiper-slide">
                                            <div className="content">
                                                <div className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <h3>
                                                    “The team provided exceptional guidance throughout my immigration process. Their expertise, personalized support, and attention to detail ensured a smooth, stress-free experience and successful visa approval.”
                                                </h3>
                                                <div className="info-item">
                                                    <div className="icon">
                                                        <i className="fa-solid fa-quote-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Mohammed Ali,</h5>
                                                        <span>Family Visa</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide">
                                            <div className="content">
                                                <div className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <h3>
                                                    “The team provided exceptional guidance throughout my immigration process. Their expertise, personalized support, and attention to detail ensured a smooth, stress-free experience and successful visa approval.”
                                                </h3>
                                                <div className="info-item">
                                                    <div className="icon">
                                                        <i className="fa-solid fa-quote-right"></i>
                                                    </div>
                                                    <div className="content">
                                                        <h5>Mohammed Ali,</h5>
                                                        <span>Family Visa</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="array-buttons-3">
                                    <button className="array-prev"><i className="fa-solid fa-arrow-left"></i></button>
                                    <button className="array-next"><i className="fa-solid fa-arrow-right"></i></button>
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
