import React from 'react';
// import Link from 'next/link';

export default function Footer() {
    return (
        <>
        {/* Footer Section Start  */}
        <footer className="footer-section fix bg-cover" style={{ backgroundImage: `url("/assets/img/home-1/footer-bg.jpg")` }}>
            <div className="container">
                <div className="footer-wrapper">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="footer-item">
                                <h2>
                                    <a href="tel:+16336547896">+163 3654 7896</a>
                                </h2>
                                <h2 className="text">69 Street, 5th AvenueLA, United States</h2>
                                <div className="footer-list-item">
                                    <a href="index.html">
                                        <img src="/assets/img/logo/white-logo.svg" alt="img" />
                                    </a>
                                    <ul className="footer-list">
                                        <li>
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="country-details.html">Visa</a>
                                        </li>
                                        <li>
                                            <a href="news-details.html">Pages</a>
                                        </li>
                                        <li>
                                            <a href="news.html">Article</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                    </ul>
                                    <div className="social-icon">
                                        <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                        <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                        <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                        <a href="#"><i className="fa-brands fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        </>
    );
}
