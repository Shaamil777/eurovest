"use client";
import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { serviceCategories } from '../../data/servicesData';

export default function Header() {
    const pathname = usePathname();
    const headerRef = useRef(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [expandedMenu, setExpandedMenu] = useState({});

    const toggleSubmenu = (menu) => {
        setExpandedMenu(prev => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };

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
                                <a href="/" className="header-logo-2">
                                    <img src="/assets/img/logo/logo.png" alt="logo-img" style={{ maxWidth: '225px', paddingRight:'15px'}} />
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
                                                <a href="#">Services</a>
                                                <ul className="submenu">
                                                    {serviceCategories.map((category, index) => (
                                                        <li className="has-dropdown" key={index}>
                                                            <a href="#">{category.categoryName} <i className="fas fa-angle-right"></i></a>
                                                            <ul className="submenu">
                                                                {category.services.map((service, sIndex) => (
                                                                    <li key={sIndex}><a href={`/service/${service.slug}`}>{service.title}</a></li>
                                                                ))}
                                                            </ul>
                                                        </li>
                                                    ))}
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
                    borderTop: '1px solid #f0f0f0',
                    maxHeight: 'calc(100vh - 70px)',
                    overflowY: 'auto'
                }}>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                        <li><a href="/" className="mobile-menu-link">Home</a></li>
                        <li><a href="/about" className="mobile-menu-link">About Us</a></li>
                        
                        {/* Services Collapsible */}
                        <li>
                            <div className="mobile-menu-link" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer', borderBottom: expandedMenu.services ? 'none' : '1px solid #f5f5f5' }} onClick={() => toggleSubmenu('services')}>
                                <span>Services</span>
                                <i className={`fas fa-angle-${expandedMenu.services ? 'up' : 'down'}`}></i>
                            </div>
                            
                            {expandedMenu.services && (
                                <ul style={{ listStyle: 'none', padding: '10px 0 15px 15px', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', borderBottom: '1px solid #f5f5f5' }}>
                                    {serviceCategories.map((category, index) => (
                                        <li key={index}>
                                            <div className="mobile-submenu-link" onClick={() => toggleSubmenu(category.id)}>
                                                <span>{category.categoryName}</span>
                                                <i className={`fas fa-angle-${expandedMenu[category.id] ? 'up' : 'down'}`}></i>
                                            </div>
                                            {expandedMenu[category.id] && (
                                                <ul className="mobile-inner-submenu">
                                                    {category.services.map((service, sIndex) => (
                                                        <li key={sIndex}><a href={`/service/${service.slug}`}>{service.title}</a></li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>

                        <li><a href="/blog" className="mobile-menu-link">Blog</a></li>
                        <li><a href="/contact" className="mobile-menu-link" style={{ borderBottom: 'none' }}>Contact Us</a></li>
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
