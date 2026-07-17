import React from 'react';
// import Link from 'next/link'; // Uncomment if using next/link for <a> tags

export default function About() {
    return (
        <>
         {/* About Section Start  */}
        <section className="about-section section-padding" style={{ overflowX: 'hidden' }}>
            <div className="top-shape">
                <img src="/assets/img/home-1/about/globe.png" alt="img" />
            </div>
            <div className="container">
                <div className="about-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&h=700&q=80" alt="img" className="wow img-custom-anim-left" style={{ objectFit: 'cover', borderRadius: '15px' }} />
                                <div className="about-image-2">
                                    <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=400&h=400&q=80" alt="img" className="wow img-custom-anim-right" style={{ objectFit: 'cover', borderRadius: '15px' }} />
                                </div>
                                <div className="bg-shape">
                                    <img src="/assets/img/home-1/about/Vector.png" alt="img" />
                                </div>
                                <div className="plane-shape float-bob-y">
                                    <img src="/assets/img/home-1/about/plane.png" alt="img" />
                                </div>
                                 <div className="top-shape float-bob-y">
                                    <img src="/assets/img/home-1/about/shape.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title mb-0">
                                    <span className="sub-title wow fadeInUp">About Our Consultancy</span>
                                    <h2 className="split-text-right split-text-in-right">
                                        Turning Study Abroad <span>Dreams</span> Into Reality
                                    </h2>
                                </div>
                                <p className="text wow fadeInUp" data-wow-delay=".3s">
                                    We guide students with expert visa consulting, ensuring a smooth process from application to approval, turning study abroad aspirations into life-changing opportunities for a brighter future.
                                </p>
                                <div className="about-item wow fadeInUp" data-wow-delay=".5s">
                                    <div className="content">
                                        <span><img src="/assets/img/home-1/icon/01.svg" alt="" /> Global Reach-</span>
                                        <p>Expanding Opportunities Worldwide</p>
                                    </div>
                                    <div className="content">
                                        <span><img src="/assets/img/home-1/icon/01.svg" alt="" /> Global Reach-</span>
                                        <p>Expanding Opportunities Worldwide</p>
                                    </div>
                                </div>
                                <ul className="list wow fadeInUp" data-wow-delay=".3s">
                                    <li>
                                        <i className="fa-solid fa-chevrons-right"></i>
                                        Fastest Visa form processing with skilled immigration agents
                                    </li>
                                     <li>
                                        <i className="fa-solid fa-chevrons-right"></i>
                                        Partnership with International Educational Institutions
                                    </li>
                                </ul>
                                <a href="about.html" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                                    Get Started
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
