import React from 'react';
// import Link from 'next/link';

export default function HeaderTop() {
    return (
        <>
        {/*  Header-Top-Section Start  */}
        <div className="header-top-section">
            <div className="container-fluid">
                <div className="header-top-wrapper">
                    <div className="header-left">
                        <ul className="list">
                            <li className="style-2">
                                <span>Help Line</span>
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+093783575222">+91 00000 00000</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                123 streets, Calicut, India
                            </li>
                             <li>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:info@example.com">info@example.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className="header-right">
                        <div className="flag-wrap">
                            <div className="flag">
                               <i className="fa-solid fa-globe"></i>
                            </div>
                            <div className="nice-select" tabIndex="0">
                                <span className="current">
                                    English
                                </span>
                                <ul className="list">
                                    <li data-value="1" className="option selected focus">
                                        English
                                    </li>
                                    <li data-value="1" className="option">
                                        Bangla
                                    </li>
                                    <li data-value="1" className="option">
                                        Hindi
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="social-item">
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        </>
    );
}
