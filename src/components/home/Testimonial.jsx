"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

const testimonialData = [
    {
        id: 1,
        text: "Professional and reliable service. They explained each step clearly, prepared my documents, and supported me during the interview. My visa approval came faster than expected.",
        name: "Sohel Tanvir",
        location: "Canada",
        image: "/assets/img/home-1/testimonial/client.png"
    },
    {
        id: 2,
        text: "The consultancy guided me from start to finish, making my study abroad journey smooth and stress-free. Thanks to their expert support, I secured my visa successfully.",
        name: "Ayesha Rahman",
        location: "UK. United Kingdom",
        image: "/assets/img/home-1/testimonial/client-2.png"
    },
    {
        id: 3,
        text: "Amazing experience! Their team was incredibly helpful in selecting the right university and handling all the complicated paperwork for my student visa.",
        name: "Rahul Sharma",
        location: "Australia",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80"
    },
    {
        id: 4,
        text: "I couldn't have done it without them. From interview preparation to final visa stamping, they were there at every step.",
        name: "Sarah Jenkins",
        location: "USA",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&h=100&q=80"
    }
];

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
                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={30}
                                    breakpoints={{
                                        320: { slidesPerView: 1 },
                                        768: { slidesPerView: 2 },
                                    }}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                    }}
                                    loop={true}
                                >
                                    {testimonialData.map((item) => (
                                        <SwiperSlide key={item.id}>
                                            <div className="testimonial-box">
                                                <div className="star">
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                    <i className="fa-solid fa-star"></i>
                                                </div>
                                                <p>“{item.text}”</p>
                                                <div className="info-item">
                                                    <div className="client-image">
                                                        <img src={item.image} alt="img" style={{ borderRadius: '50%', width: '60px', height: '60px', objectFit: 'cover' }} />
                                                    </div>
                                                    <div className="content">
                                                        <h5>{item.name}</h5>
                                                        <span>{item.location}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}

