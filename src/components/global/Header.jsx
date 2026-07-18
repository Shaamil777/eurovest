"use client";
import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
// import Link from 'next/link';

export default function Header() {
    const pathname = usePathname();
    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
        {/*  Header Section Start  */}
         <header 
            id="header-sticky" 
            className="header-1"
            style={{
                background: '#ffffff',
                boxShadow: isSticky ? '0px 4px 10px rgba(0, 0, 0, 0.05)' : 'none',
                transition: 'box-shadow 0.3s ease-in-out'
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
                                <a href="/" className="header-logo-2">
                                    <img src="/assets/img/logo/white-logo.svg" alt="logo-img" style={{ maxWidth: '160px' }} />
                                </a>
                            </div>
                            <div className="mean__menu-wrapper desktop-menu" style={{ marginLeft: '20px' }}>
                                <div className="main-menu">
                                    <nav id="mobile-menu">
                                        <ul>
                                            <li className={pathname === '/' ? 'active' : ''}>
                                                <a href="/">Home</a>
                                            </li>
                                            <li className={pathname?.startsWith('/about') ? 'active' : ''}>
                                                <a href="/about">About Us</a>
                                            </li>
                                            <li className={`has-dropdown ${pathname?.startsWith('/service') ? 'active' : ''}`}>
                                                <a href="/service">Services</a>
                                                <ul className="submenu">
                                                    <li className="has-dropdown">
                                                        <a href="#">Citizenship by Investment <i className="fas fa-angle-right"></i></a>
                                                        <ul className="submenu">
                                                            <li><a href="#">Option 1</a></li>
                                                            <li><a href="#">Option 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="has-dropdown">
                                                        <a href="#">Residency by Investment <i className="fas fa-angle-right"></i></a>
                                                        <ul className="submenu">
                                                            <li><a href="#">Option 1</a></li>
                                                            <li><a href="#">Option 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li><a href="#">Canada</a></li>
                                                    <li><a href="#">United Kingdom</a></li>
                                                </ul>
                                            </li>
                                            <li className={pathname?.startsWith('/blog') ? 'active' : ''}>
                                                <a href="/blog">Blog</a>
                                            </li>
                                            <li className={pathname?.startsWith('/contact') ? 'active' : ''}>
                                                <a href="/contact">Contact Us</a>
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
                            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', flexShrink: 0 }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <i className="fa-solid fa-location-dot" style={{ color: 'var(--theme)' }}></i>
                                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'var(--color-blue)', fontWeight: '600', whiteSpace: 'nowrap' }}>Al Mawsou'ah 4 Street, Al Ain, UAE</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                    <i className="fa-solid fa-phone" style={{ color: 'var(--theme)' }}></i>
                                    <span style={{ fontFamily: "'Poppins', sans-serif", fontSize: '13px', color: 'var(--color-blue)', fontWeight: '600', whiteSpace: 'nowrap' }}>+91 1245784512</span>
                                </div>
                            </div>

                            <div className="header-call-item">
                                <a href="contact.html" className="theme-btn">
                                    Appointment
                                    <i className="fa-solid fa-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && (
                <div className="mobile-menu-dropdown" style={{
                    position: 'absolute',
                    top: '70px',
                    left: 0,
                    width: '100%',
                    backgroundColor: '#ffffff',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    zIndex: 999,
                    padding: '20px',
                    borderTop: '1px solid #f0f0f0'
                }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <li><a href="/" style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-blue)', textDecoration: 'none', display: 'block', padding: '8px 0', borderBottom: '1px solid #f5f5f5' }}>Home</a></li>
                        <li><a href="/about" style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-blue)', textDecoration: 'none', display: 'block', padding: '8px 0', borderBottom: '1px solid #f5f5f5' }}>About Us</a></li>
                        <li><a href="/service" style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-blue)', textDecoration: 'none', display: 'block', padding: '8px 0', borderBottom: '1px solid #f5f5f5' }}>Services</a></li>
                        <li><a href="/blog" style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-blue)', textDecoration: 'none', display: 'block', padding: '8px 0', borderBottom: '1px solid #f5f5f5' }}>Blog</a></li>
                        <li><a href="/contact" style={{ fontSize: '16px', fontWeight: '600', color: 'var(--color-blue)', textDecoration: 'none', display: 'block', padding: '8px 0' }}>Contact Us</a></li>
                        <li style={{ marginTop: '10px' }}>
                            <a href="/contact" className="theme-btn" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }}>
                                Appointment <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </header> 
        
        <style jsx="true">{`
            .mobile-menu-btn {
                display: none;
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
