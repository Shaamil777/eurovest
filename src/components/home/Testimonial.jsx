import React from 'react';
// import Link from 'next/link'; // Uncomment if using next/link for <a> tags

export default function Testimonial() {
    return (
        <>
        {/* Testimonial Section Start  */}
        <section className="testimonial-section section-padding pb-0 fix">
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">What Our Students Say</span>
                    <h2 className="split-text-right split-text-in-right">
                        Student Reviews & Testimonials
                    </h2>
                </div>
                <div className="testimonial-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-4">
                            <div className="testimonia-image tp-clip-anim p-relative">
                                <img src="/assets/img/home-1/testimonial/01.jpg" alt="img" className="tp-anim-img" data-animate="true" />
                                <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn video-popup">
                                <i className="fa-solid fa-play"></i></a>
                                <h5>Real stories</h5>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="swiper testimonial-slider">
                                <div className="swiper-wrapper">
                                    <div className="swiper-slide">
                                        <div className="testimonial-box">
                                            <div className="star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <p>
                                                Professional and reliable service. They explained each step clearly, prepared my documents, and supported me during the interview. My visa approval came faster than expected.”
                                            </p>
                                            <div className="info-item">
                                                <div className="client-image">
                                                    <img src="/assets/img/home-1/testimonial/client.png" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h5>Sohel Tanvir</h5>
                                                    <span>Canada</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="swiper-slide">
                                        <div className="testimonial-box">
                                            <div className="star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <p>
                                                “The consultancy guided me from start to finish, making my study abroad journey smooth and stress-free. Thanks to their expert support, I secured my visa successfully.”
                                            </p>
                                            <div className="info-item">
                                                <div className="client-image">
                                                    <img src="/assets/img/home-1/testimonial/client-2.png" alt="img" />
                                                </div>
                                                <div className="content">
                                                    <h5>Ayesha Rahman</h5>
                                                    <span>UK. United Kingdom</span>
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
