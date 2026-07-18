import React from 'react';
// import Link from 'next/link';

export default function ChooseUs2() {
    return (
        <>
        {/*  Choose-us-section-2 Start  */}
       <section className="choose-us-section-2 section-padding fix bg-cover" style={{ backgroundImage: `url("/assets/img/home-2/feature/bg-shape.png")` }}>
            <div className="container">
                <div className="choose-us-wrapper-2">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="choose-us-image">
                                <img src="/assets/img/home-2/feature/02.png" alt="img" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="feature-content">
                                 <div className="section-title mb-0">
                                    <span className="sub-title-2">Your Travel Made Easy</span>
                                    <h2 className="">
                                        Smooth Visa Journey Guaranteed
                                    </h2>
                                </div>
                                <p className="text">
                                    We provide expert guidance for every visa application, ensuring smooth processing, personalized support, and reliable assistance 
                                </p>
                                <div className="choose-us-box">
                                    <div className="icon">
                                        <img src="/assets/img/home-2/icon/01.png" alt="img" />
                                    </div>
                                    <div className="content">
                                        <h5>Expert Consultants</h5>
                                        <p>
                                            Skilled and knowledgeable visa advisors. Skilled and knowled geable visa advisors.
                                        </p>
                                    </div>
                                </div>
                                <div className="choose-us-box">
                                    <div className="icon">
                                        <img src="/assets/img/home-2/icon/01.png" alt="img" />
                                    </div>
                                    <div className="content">
                                        <h5>Personalized Support</h5>
                                        <p>
                                            Skilled and knowledgeable visa advisors. Skilled and knowled geable visa advisors.
                                        </p>
                                    </div>
                                </div>
                                <div className="choose-us-box">
                                    <div className="icon">
                                        <img src="/assets/img/home-2/icon/01.png" alt="img" />
                                    </div>
                                    <div className="content">
                                        <h5>Transparent Process</h5>
                                        <p>
                                            Skilled and knowledgeable visa advisors. Skilled and knowled geable visa advisors.
                                        </p>
                                    </div>
                                </div>
                                 <a href="contact.html" className="theme-btn">
                                    Get Started Today
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>

        </>
    );
}
