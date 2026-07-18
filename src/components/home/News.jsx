import React from 'react';
// import Link from 'next/link'; // Uncomment if using next/link for <a> tags

export default function News() {
    return (
        <>
        {/* News Section Start  */}
        <section className="news-section section-padding fix">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <span className="sub-title wow fadeInUp" style={{ color: 'white', backgroundColor: 'rgb(6, 27, 57)', padding: '5px 20px', borderRadius: '30px', display: 'inline-block' }}>Visa Tips & Guides</span>
                        <h2 className="split-text-right split-text-in-right">
                           Latest Insights & Updates
                        </h2>
                    </div>
                    <a href="news.html" className="theme-btn wow fadeInUp" data-wow-delay=".3s">
                        view all articies
                        <i className="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="news-card-item">
                            <div className="news-image">
                                <img src="/assets/img/home-1/news/news-1.jpg" alt="img" />
                                <span>Student Visa</span>
                                <div className="news-layer-wrapper">
                                    <div className="news-layer-image" style={{ backgroundImage: `url("/assets/img/home-1/news/news-1.jpg")` }}></div>
                                    <div className="news-layer-image" style={{ backgroundImage: `url("/assets/img/home-1/news/news-1.jpg")` }}></div>
                                    <div className="news-layer-image" style={{ backgroundImage: `url("/assets/img/home-1/news/news-1.jpg")` }}></div>
                                    <div className="news-layer-image" style={{ backgroundImage: `url("/assets/img/home-1/news/news-1.jpg")` }}></div>
                                </div>
                            </div>
                            <div className="news-content">
                                <div className="list">
                                    <span>Comment (08)</span>
                                    <span>_ 20 August ,2025</span>
                                </div>
                                <h3>
                                    <a href="news-details.html">
                                        Step-by-Step Guide to Applying for a Student Visa
                                    </a>
                                </h3>
                                <div className="news-bottom">
                                    <div className="info-item">
                                        <img src="/assets/img/home-1/news/client.png" alt="img" />
                                        <span>By Sohel</span>
                                    </div>
                                    <a href="news-details.html" className="link-btn">View Articles<i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="news-card-item">
                            <div className="news-image">
                                <img src="/assets/img/home-1/news/news-2.jpg" alt="img" />
                                <span>IELTS / TOEFL</span>
                                <div className="news-layer-wrapper">
                                    <div className="news-layer-image" style={{ backgroundImage: `url("/assets/img/home-1/news/news-2.jpg")` }}></div>
                                    <div className="news-layer-image" style={{ backgroundImage: `url("/assets/img/home-1/news/news-2.jpg")` }}></div>
                                    <div className="news-layer-image" style={{ backgroundImage: `url("/assets/img/home-1/news/news-2.jpg")` }}></div>
                                    <div className="news-layer-image" style={{ backgroundImage: `url("/assets/img/home-1/news/news-2.jpg")` }}></div>
                                </div>
                            </div>
                            <div className="news-content">
                                <div className="list">
                                    <span>Comment (08)</span>
                                    <span>_ 20 August ,2025</span>
                                </div>
                                <h3>
                                    <a href="news-details.html">
                                        Tips to Prepare Financial Documents for Visa Approval
                                    </a>
                                </h3>
                                <div className="news-bottom">
                                    <div className="info-item">
                                        <img src="/assets/img/home-1/news/client.png" alt="img" />
                                        <span>By Sohel</span>
                                    </div>
                                    <a href="news-details.html" className="link-btn">View Articles<i className="fa-solid fa-arrow-right"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                     <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="news-card-item">
                            <div className="news-image">
                                <img src="/assets/img/home-1/news/news-3.jpg" alt="img" />
                                <span>Study Abroad</span>
                                <div className="news-layer-wrapper">
                                    <div className="news-layer-image" style={{ backgroundImage: `url("/assets/img/home-1/news/news-3.jpg")` }}></div>
                                    <div className="news-layer-image" style={{ backgroundImage: `url("/assets/img/home-1/news/news-3.jpg")` }}></div>
                                    <div className="news-layer-image" style={{ backgroundImage: `url("/assets/img/home-1/news/news-3.jpg")` }}></div>
                                    <div className="news-layer-image" style={{ backgroundImage: `url("/assets/img/home-1/news/news-3.jpg")` }}></div>
                                </div>
                            </div>
                            <div className="news-content">
                                <div className="list">
                                    <span>Comment (08)</span>
                                    <span>_ 20 August ,2025</span>
                                </div>
                                <h3>
                                    <a href="news-details.html">
                                        Post-Arrival Guide What Every Student Should Know
                                    </a>
                                </h3>
                                <div className="news-bottom">
                                    <div className="info-item">
                                        <img src="/assets/img/home-1/news/client.png" alt="img" />
                                        <span>By Sohel</span>
                                    </div>
                                    <a href="news-details.html" className="link-btn">View Articles<i className="fa-solid fa-arrow-right"></i></a>
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
