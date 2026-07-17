import React from 'react';
// import Link from 'next/link';

export default function Header() {
    return (
        <>
        {/*  Header Section Start  */}
         <header id="header-sticky" className="header-1">
            <div className="container-fluid">
                <div className="mega-menu-wrapper">
                    <div className="header-main">
                        <div className="header-left">
                            <div className="logo">
                                <a href="index.html" className="header-logo-2">
                                    <img src="/assets/img/logo/black-logo.svg" alt="logo-img" />
                                </a>
                            </div>
                            <div className="mean__menu-wrapper">
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className="active">
                                                <a href="/">
                                                    Home 
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/about">About Us</a>
                                            </li>
                                            <li className="has-dropdown">
                                                <a href="news-details.html">
                                                    Pages
                                                </a>
                                                <ul className="submenu">
                                                    <li className="has-dropdown">
                                                        <a href="service-details.html">
                                                            Service
                                                            <i className="fas fa-angle-right"></i>
                                                        </a>
                                                        <ul className="submenu">
                                                            <li><a href="service.html">Service</a></li>
                                                            <li><a href="service-details.html">Service Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-dropdown">
                                                        <a href="project-details.html">
                                                            Country List
                                                            <i className="fas fa-angle-right"></i>
                                                        </a>
                                                        <ul className="submenu">
                                                            <li><a href="country-list.html">Country List</a></li>
                                                            <li><a href="country-details.html">Country Details</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="pricing.html">Our Pricing</a></li>
                                                    <li><a href="appointment.html">Appointment</a></li>
                                                    <li><a href="404.html">404 Page</a></li>
                                                    <li><a href="coming-soon.html">Coming Soon</a></li>
                                                </ul>
                                            </li>

                                            <li>
                                                <a href="/blog">
                                                    Blog
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/contact">Contact Us</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div> 
                        </div>
                        <div className="header-right d-flex align-items-center mt-0">
                            <div className="header-call-item">
                                <a href="#" className="main-header__search search-toggler">
                                <i className="fa-regular fa-magnifying-glass"></i>
                            </a>
                                <a href="contact.html" className="theme-btn">
                                    Apply now
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                                <div className="header__hamburger my-auto">
                                <div className="sidebar__toggle">
                                    <i className="fa-solid fa-bars-staggered"></i>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header> 

        </>
    );
}
