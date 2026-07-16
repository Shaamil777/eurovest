import React from 'react';
// import Link from 'next/link'; // Uncomment if using next/link for <a> tags

export default function Service() {
    return (
        <>
         {/* Service Section Start  */}
        <div className="service-section section-padding fix">
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title wow fadeInUp">Our Expert Services</span>
                    <h2 className="split-text-right split-text-in-right">
                        Comprehensive Visa Solutions
                    </h2>
                </div>
            </div>
             <div className="service-wrapper">
                <div className="container">
                    <div className="service-item">
                         <div className="image-hover d-none d-md-block bg-cover" style={{ backgroundImage: `url("/assets/img/home-1/hover-bg.jpg")` }}></div>
                        <div className="left-item">
                            <h5 className="number">01</h5>
                            <h3>
                            <a href="service-details.html">Student Visa Guidance</a>
                            </h3>
                        </div>
                        <div className="right-item">
                            <p>
                                Assistance with admission, documentation, and visa application.Assistance 
                            </p>
                            <a href="service-details.html" className="service-btn">Service Details <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-wrapper active">
                <div className="container">
                    <div className="service-item">
                         <div className="image-hover d-none d-md-block bg-cover" style={{ backgroundImage: `url("/assets/img/home-1/hover-bg.jpg")` }}></div>
                        <div className="left-item">
                            <h5 className="number">02</h5>
                            <h3>
                            <a href="service-details.html">PTE Exam Preparation</a>
                            </h3>
                        </div>
                        <div className="right-item">
                            <p>
                               We provide expert guidance and personalized support throughout the education visa process, 
                            </p>
                            <a href="service-details.html" className="service-btn">Service Details <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="service-wrapper">
                <div className="container">
                    <div className="service-item">
                         <div className="image-hover d-none d-md-block bg-cover" style={{ backgroundImage: `url("/assets/img/home-1/hover-bg.jpg")` }}></div>
                        <div className="left-item">
                            <h5 className="number">03</h5>
                            <h3>
                            <a href="service-details.html">University Selection Assistance</a>
                            </h3>
                        </div>
                        <div className="right-item">
                            <p>
                                We provide expert guidance and personalized support throughout the education visa process,  
                            </p>
                            <a href="service-details.html" className="service-btn">Service Details <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
             <div className="service-wrapper">
                <div className="container">
                    <div className="service-item">
                         <div className="image-hover d-none d-md-block bg-cover" style={{ backgroundImage: `url("/assets/img/home-1/hover-bg.jpg")` }}></div>
                        <div className="left-item">
                            <h5 className="number">04</h5>
                            <h3>
                            <a href="service-details.html">IELTS Exam Preparation</a>
                            </h3>
                        </div>
                        <div className="right-item">
                            <p>
                                We provide expert guidance and personalized support throughout the education visa process,  
                            </p>
                            <a href="service-details.html" className="service-btn">Service Details <i className="fa-solid fa-arrow-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}
