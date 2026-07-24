"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { serviceCategories } from '../../data/servicesData';
import dynamic from 'next/dynamic';

const MobileMenu = dynamic(() => import('./MobileMenu'), { ssr: false });

export default function Header() {
    const pathname = usePathname();
    const headerRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            if (headerRef.current) {
                const currentScrollY = window.scrollY;
                
                // Hide header when scrolling down past 150px
                if (currentScrollY > lastScrollY && currentScrollY > 150) {
                    headerRef.current.style.transform = 'translateY(-100%)';
                    headerRef.current.style.boxShadow = 'none';
                } 
                // Show header when scrolling up
                else if (currentScrollY < lastScrollY) {
                    headerRef.current.style.transform = 'translateY(0)';
                    headerRef.current.style.boxShadow = currentScrollY > 150 ? '0px 4px 10px rgba(0, 0, 0, 0.05)' : 'none';
                }
                
                lastScrollY = currentScrollY;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        {/*  Header Section Start  */}
         <header 
            ref={headerRef}
            id="header-sticky" 
            className="header-1"
            style={{
                background: '#ffffff',
                boxShadow: 'none',
                transform: 'translateY(0)',
                transition: 'transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1), box-shadow 0.3s ease-in-out'
            }}
         >
            <div className="container-fluid header-container" style={{ paddingLeft: 0 }}>
                <div className="mega-menu-wrapper">
                    <div className="header-main" style={{ position: 'relative', height: '70px', display: 'flex', alignItems: 'center' }}>
                        
                        {/* Slanted Background */}
                        <div className="slanted-bg" style={{
                            backgroundColor: 'var(--color-blue)',
                            clipPath: 'polygon(0 0, 100% 0, 85% 100%, 0% 100%)',
                            width: '320px',
                            height: '100%',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            zIndex: 0
                        }}></div>

                        <div className="header-left" style={{ position: 'relative', zIndex: 1, height: '100%', display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                            <div className="logo" style={{ width: '280px', paddingLeft: '40px' }}>
                                <Link href="/" className="header-logo-2">
                                    <Image src="/assets/img/logo/logo.png" alt="logo-img" width={225} height={60} style={{ width: '100%', height: 'auto', maxWidth: '225px', paddingRight:'15px'}} priority />
                                </Link>
                            </div>
                            <div className="mean__menu-wrapper desktop-menu" style={{ marginLeft: '20px' }}>
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className={pathname === '/' ? 'active' : ''}>
                                                <Link href="/">Home</Link>
                                            </li>
                                            <li className={pathname?.startsWith('/about') ? 'active' : ''}>
                                                <Link href="/about">About Us</Link>
                                            </li>
                                            <li className={`has-dropdown ${pathname?.startsWith('/service') ? 'active' : ''}`}>
                                                <a href="#">Services</a>
                                                <ul className="submenu">
                                                    {serviceCategories.map((category, index) => (
                                                        <li className="has-dropdown" key={index}>
                                                            <a href="#">{category.categoryName} <i className="fas fa-angle-right"></i></a>
                                                            <ul className="submenu">
                                                                {category.services.map((service, sIndex) => (
                                                                    <li key={sIndex}>
                                                                        <Link href={`/service/${service.slug}`} legacyBehavior>
                                                                            <a>{service.title}</a>
                                                                        </Link>
                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    ))}
                                                    <li>
                                                        <Link href="/tour-packages" legacyBehavior>
                                                            <a>Tour Packages</a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className={pathname?.startsWith('/blog') ? 'active' : ''}>
                                                <Link href="/blog">Blog</Link>
                                            </li>
                                            <li className={pathname?.startsWith('/contact') ? 'active' : ''}>
                                                <Link href="/contact">Contact Us</Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div> 
                            
                            {/* Mobile Menu Button */}
                            <div className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={{ cursor: 'pointer', zIndex: 100, marginRight: '20px' }}>
                                <i className={`fa-solid ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`} style={{ fontSize: '28px', color: 'var(--color-blue)' }}></i>
                            </div>
                        </div>

                        <div className="header-right d-flex align-items-center mt-0 desktop-header-right" style={{ position: 'relative', zIndex: 1, gap: '30px' }}>
                            
                            {/* Contact Info Block */}
                            <div className="contact-info-block" style={{ display: 'flex', alignItems: 'center', gap: '15px', flexShrink: 0 }}>
                                <div className="contact-address" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <i className="fa-solid fa-location-dot" style={{ color: 'var(--theme)' }}></i>
                                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'var(--color-blue)', fontWeight: '600', whiteSpace: 'nowrap' }}>Al Mawsou&apos;ah 4 Street, Al Ain, UAE</span>
                                </div>
                                <div className="contact-phone" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <i className="fa-solid fa-phone" style={{ color: 'var(--theme)' }}></i>
                                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'var(--color-blue)', fontWeight: '600', whiteSpace: 'nowrap' }}>+91 1245784512</span>
                                </div>
                            </div>

                            <div className="header-call-item">
                                <a href="https://wa.me/911245784512?text=Hello%2C%20I%20am%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" className="theme-btn">
                                    Contact Us
                                    <i className="fa-brands fa-whatsapp"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <MobileMenu isOpen={isMobileMenuOpen} setIsOpen={setIsMobileMenuOpen} />
        </header> 
        
        <style jsx="true">{`
            .mobile-menu-btn {
                display: none;
            }

            .mobile-menu-link {
                font-size: 16px;
                font-weight: 600;
                color: var(--color-blue);
                text-decoration: none;
                display: block;
                padding: 8px 0;
                border-bottom: 1px solid #f5f5f5;
            }

            .mobile-submenu-link {
                font-size: 15px;
                font-weight: 500;
                color: #4a5568;
                text-decoration: none;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 6px 0;
                cursor: pointer;
            }

            .mobile-inner-submenu {
                list-style: none;
                padding: 5px 0 5px 15px;
                margin: 0;
                display: flex;
                flex-direction: column;
                gap: 8px;
                border-left: 2px solid #f0f0f0;
                margin-left: 5px;
            }

            .mobile-inner-submenu li a {
                font-size: 14px;
                color: #718096;
                text-decoration: none;
                display: block;
                padding: 4px 0;
            }

            /* Modern Dropdown Styles */
            .main-menu nav > ul > li {
                position: relative;
            }

            .main-menu nav > ul > li .submenu {
                position: absolute;
                top: 120%;
                left: 0;
                min-width: 270px;
                background: #ffffff;
                box-shadow: 0px 24px 48px rgba(0, 0, 0, 0.08);
                border-radius: 12px;
                padding: 12px 0;
                opacity: 0;
                visibility: hidden;
                transform: translateY(15px);
                transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                z-index: 99;
                border: 1px solid rgba(0, 0, 0, 0.06);
            }

            .main-menu nav > ul > li:hover > .submenu {
                opacity: 1;
                visibility: visible;
                transform: translateY(0);
                top: 100%;
            }

            .main-menu nav ul li .submenu li {
                position: relative;
                display: block;
                padding: 0 12px;
                margin-bottom: 4px;
            }
            .main-menu nav ul li .submenu li:last-child {
                margin-bottom: 0;
            }

            .main-menu nav ul li .submenu li a {
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 10px 16px;
                color: #4a5568;
                font-weight: 500;
                font-size: 15px;
                border-radius: 8px;
                transition: all 0.25s ease;
                text-decoration: none;
                font-family: 'Inter', sans-serif;
            }

            .main-menu nav ul li .submenu li a:hover {
                background-color: rgba(0, 102, 255, 0.08);
                color: var(--color-blue);
                padding-left: 22px;
            }

            /* Nested Submenu Positioning */
            .main-menu nav ul li .submenu li.has-dropdown > .submenu {
                top: -12px;
                left: 100%;
                margin-left: 20px;
                transform: translateX(15px);
                box-shadow: 0px 15px 35px rgba(0, 0, 0, 0.06);
            }
            
            .main-menu nav ul li .submenu li.has-dropdown:hover > .submenu {
                opacity: 1;
                visibility: visible;
                transform: translateX(0);
                margin-left: 0;
            }

            /* Icon Styling */
            .main-menu nav ul li a i.fa-angle-right {
                font-size: 13px;
                transition: transform 0.3s ease;
                opacity: 0.7;
            }

            .main-menu nav ul li.has-dropdown:hover > a > i.fa-angle-right {
                transform: rotate(90deg);
                opacity: 1;
            }

            /* Override global line hover effects */
            .header-main .main-menu nav ul li .submenu li a::before,
            .header-main .main-menu nav ul li .submenu li a::after,
            .header-main .main-menu ul li .submenu li a::before,
            .header-main .main-menu ul li .submenu li a::after {
                display: none !important;
                content: none !important;
            }

            @media (max-width: 1550px) {
                .slanted-bg {
                    width: 260px !important;
                }
                .logo {
                    width: 220px !important;
                    padding-left: 20px !important;
                }
                .mean__menu-wrapper {
                    margin-left: 0px !important;
                }
                .desktop-header-right {
                    gap: 15px !important;
                }
                .contact-info-block {
                    gap: 10px !important;
                }
            }

            @media (max-width: 1200px) {
                .slanted-bg {
                    width: 240px !important;
                }
                .logo {
                    width: 200px !important;
                    padding-left: 15px !important;
                }
                .contact-address {
                    display: none !important;
                }
                .desktop-header-right {
                    gap: 10px !important;
                }
                .header-call-item .theme-btn {
                    padding: 10px 15px !important;
                    font-size: 13px !important;
                }
            }

            @media (max-width: 1050px) {
                .contact-info-block {
                    display: none !important;
                }
            }

            @media (max-width: 991px) {
                .desktop-menu {
                    display: none !important;
                }
                .desktop-header-right {
                    display: none !important;
                }
                .mobile-menu-btn {
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                }
                .logo {
                    width: 200px !important;
                    padding-left: 0px !important;
                }
                .header-left {
                    justify-content: space-between !important;
                }
                .slanted-bg {
                    width: 220px !important;
                }
                .header-container {
                    padding-left: 0 !important;
                    padding-right: 0 !important;
                }
            }
        `}</style>
        </>
    );
}
