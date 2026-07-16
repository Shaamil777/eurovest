"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

export default function Hero() {
    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    return (
        <>
        {/* Hero Section Start  */}
        <section className="hero-section hero-1 fix bg-cover" style={{ backgroundImage: `url("/assets/img/home-1/hero/bg.jpg")` }}>
            <div className="left-shape">
                <img src="/assets/img/home-1/hero/sape-2.png" alt="img" />
            </div>
            <div className="hero-shape">
                <img src="/assets/img/home-1/hero/shape.png" alt="img" />
            </div>
            <div className="top-shape">
                <img src="/assets/img/home-1/hero/shape-3.png" alt="img" />
            </div>
            <div className="right-shape">
                <img src="/assets/img/home-1/hero/shape-4.png" alt="img" />
            </div>
            <div className="pagi-item">
                <div className="dot-number">
                    <span className="dot-num">
                        <span>01</span>
                    </span>
                    <span className="dot-num">
                        <span>02</span>
                    </span>
              </div>
            </div>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                       <Swiper 
                         className="hero-slider"
                         modules={[Controller, Autoplay, EffectFade]}
                         onSwiper={setFirstSwiper}
                         controller={{ control: secondSwiper }}
                         autoplay={{ delay: 5000, disableOnInteraction: false }}
                         effect="fade"
                         loop={true}
                       >
                            <SwiperSlide>
                                 <div className="hero-content">
                                    <h6>Global Education Simplified</h6>
                                    <h1>
                                        From Application to Visa – We’ve Got You Covered 
                                        <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn video-popup">
                                        <i className="fa-solid fa-play"></i>
                                        </a>
                                    </h1>
                                    <p>
                                        We guide you through every step of the education visa process, from initial application to final approval, ensuring a smooth, hassle-free journey.
                                    </p>
                                    <div className="hero-button">
                                        <a href="contact.html" className="theme-btn">
                                            Apply now
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                        <a href="contact.html" className="theme-btn style-2">
                                            Book Free Consultation
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                 <div className="hero-content">
                                    <h6>Global Education Simplified</h6>
                                    <h1>
                                        From Application to Visa – We’ve Got You Covered 
                                        <a href="https://www.youtube.com/watch?v=Cn4G2lZ_g2I" className="video-btn video-popup">
                                        <i className="fa-solid fa-play"></i>
                                        </a>
                                    </h1>
                                    <p>
                                        We guide you through every step of the education visa process, from initial application to final approval, ensuring a smooth, hassle-free journey.
                                    </p>
                                    <div className="hero-button">
                                        <a href="contact.html" className="theme-btn">
                                            Apply now
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                        <a href="contact.html" className="theme-btn style-2">
                                            Book Free Consultation
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </SwiperSlide>
                       </Swiper>
                    </div>
                    <div className="col-lg-6">
                        <Swiper 
                            className="image-slider"
                            modules={[Controller]}
                            onSwiper={setSecondSwiper}
                            controller={{ control: firstSwiper }}
                            loop={true}
                        >
                                <SwiperSlide>
                                    <div className="hero-image">
                                        <img src="/assets/img/home-1/hero/man.png" alt="img" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="hero-image">
                                        <img src="/assets/img/home-1/hero/man.png" alt="img" />
                                    </div>
                                </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}
