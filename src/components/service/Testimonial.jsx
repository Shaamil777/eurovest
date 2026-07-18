"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
    {
        id: 1,
        text: "The team provided exceptional guidance throughout my immigration process. Their expertise, personalized support, and attention to detail ensured a smooth, stress-free experience and successful visa approval.",
        name: "Mohammed Ali,",
        visa: "Family Visa"
    },
    {
        id: 2,
        text: "I was struggling with the complex documentation required for my student visa. They simplified everything and helped me secure my visa in record time!",
        name: "Sarah Jenkins,",
        visa: "Student Visa"
    }
];

export default function Testimonial() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    return (
        <>
         {/* Testimonial Section3 Start  */}
        <section className="testimonial-section section-padding fix">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title mb-0">
                        <span className="sub-title" style={{ color: 'white', backgroundColor: 'rgb(6, 27, 57)', padding: '5px 20px', borderRadius: '30px', display: 'inline-block', marginBottom: '15px' }}>What Our Clients Say</span>
                        <h2 className="">
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
                                <div style={{ overflow: 'hidden' }}>
                                    <AnimatePresence mode="wait">
                                        <motion.div
                                            key={currentIndex}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            transition={{ duration: 0.8 }}
                                            className="content"
                                        >
                                            <div className="star">
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                                <i className="fa-solid fa-star"></i>
                                            </div>
                                            <h3>“{testimonials[currentIndex].text}”</h3>
                                            <div className="info-item">
                                                <div className="icon">
                                                    <i className="fa-solid fa-quote-right"></i>
                                                </div>
                                                <div className="content">
                                                    <h5>{testimonials[currentIndex].name}</h5>
                                                    <span>{testimonials[currentIndex].visa}</span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    </AnimatePresence>
                                </div>
                                <div className="array-buttons-3 mt-4">
                                    <button className="array-prev" onClick={handlePrev}><i className="fa-solid fa-arrow-left"></i></button>
                                    <button className="array-next" onClick={handleNext}><i className="fa-solid fa-arrow-right"></i></button>
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
