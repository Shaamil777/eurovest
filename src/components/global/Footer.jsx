"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
    return (
        <div className="footer-wrapper" style={{ padding: '0 20px 20px 20px', backgroundColor: '#ffffff', marginTop: '40px' }}>
            <footer className="footer-main" style={{ 
                backgroundColor: '#0f172a', // Very dark, modern slate blue
                color: '#f1f5f9', 
                fontFamily: '"Inter", sans-serif',
                borderRadius: '32px',
                padding: '70px 50px 30px 50px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 50px rgba(0,0,0,0.08)'
            }}>
                {/* Decorative background element */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    right: '-10%',
                    width: '60%',
                    height: '150%',
                    background: 'radial-gradient(ellipse at center, rgba(37,99,235,0.12) 0%, rgba(15,23,42,0) 70%)',
                    pointerEvents: 'none',
                    zIndex: 0
                }}></div>

                <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px' }}>
                    <div className="row justify-content-between g-5">
                        {/* Main Brand Column */}
                        <div className="col-lg-4">
                            <div>
                                <Image src="/assets/img/logo/logo.png" alt="EuroVest Logo" width={250} height={70} style={{ width: '100%', height: 'auto', maxWidth: '250px' }} />
                            </div>
                            <h3 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '20px', color: '#fff', letterSpacing: '-0.5px' }}>
                                Let&apos;s build your global future.
                            </h3>
                            <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: '1.6', marginBottom: '35px', maxWidth: '380px' }}>
                                Expert immigration services blending deep technology with local context for shared prosperity globally.
                            </p>
                            
                            <div style={{ marginTop: '20px' }}>
                                <a href="https://wa.me/911245784512?text=Hello%2C%20I%20am%20interested%20in%20your%20services." target="_blank" rel="noopener noreferrer" style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '14px 28px',
                                    background: '#25D366',
                                    borderRadius: '12px',
                                    color: '#fff',
                                    fontWeight: '600',
                                    textDecoration: 'none',
                                    fontSize: '15px',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = '#20b958'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                                onMouseLeave={(e) => { e.currentTarget.style.background = '#25D366'; e.currentTarget.style.transform = 'translateY(0)'; }}
                                >
                                    <i className="fa-brands fa-whatsapp" style={{ fontSize: '20px' }}></i>
                                    Chat with us on WhatsApp
                                </a>
                            </div>
                        </div>

                        {/* Navigation Columns */}
                        <div className="col-lg-7">
                            <div className="footer-nav-container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap', gap: '30px' }}>
                                
                                {/* Platform */}
                                <div className="footer-nav-col" style={{ flex: '1 1 150px' }}>
                                    <h6 style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '25px', color: '#64748b' }}>Platform</h6>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                        {[
                                            { name: 'Home', href: '/' },
                                            { name: 'About Us', href: '/about' },
                                            { name: 'Our Services', href: '/#services-section' },
                                            { name: 'Why EuroVest', href: '/#choose-us-section' },
                                            { name: 'Contact', href: '/contact' }
                                        ].map((link, i) => (
                                            <li key={i}>
                                                <Link href={link.href} style={{
                                                    color: '#e2e8f0',
                                                    fontSize: '15px',
                                                    textDecoration: 'none',
                                                    transition: 'opacity 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                                >{link.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Resources */}
                                <div className="footer-nav-col" style={{ flex: '1 1 150px' }}>
                                    <h6 style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '25px', color: '#64748b' }}>Resources</h6>
                                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                        {[
                                            { name: 'Blogs and News', href: '/blog' },
                                            { name: 'Help Centre', href: '/contact' },
                                            { name: 'Immigration FAQ', href: '/#faq' }
                                        ].map((link, i) => (
                                            <li key={i}>
                                                <Link href={link.href} style={{
                                                    color: '#e2e8f0',
                                                    fontSize: '15px',
                                                    textDecoration: 'none',
                                                    transition: 'opacity 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
                                                onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                                                >{link.name}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Connect */}
                                <div className="footer-nav-col" style={{ flex: '1 1 200px' }}>
                                    <h6 style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '25px', color: '#64748b' }}>Connect</h6>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                                        <a href="mailto:contact@eurovest.com" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '12px', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'} onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}>
                                            <i className="fa-regular fa-envelope" style={{ color: '#3b82f6', fontSize: '18px' }}></i> contact@eurovest.com
                                        </a>
                                        <a href="tel:+911245784512" style={{ color: '#e2e8f0', textDecoration: 'none', fontSize: '15px', display: 'flex', alignItems: 'center', gap: '12px', transition: 'color 0.3s ease' }} onMouseEnter={(e) => e.currentTarget.style.color = '#3b82f6'} onMouseLeave={(e) => e.currentTarget.style.color = '#e2e8f0'}>
                                            <i className="fa-solid fa-phone" style={{ color: '#3b82f6', fontSize: '18px' }}></i> +91 1245784512
                                        </a>
                                        <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                                            {['twitter', 'linkedin-in', 'instagram'].map((icon, i) => (
                                                <a key={i} href="#" style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '50%',
                                                    backgroundColor: 'rgba(255,255,255,0.06)',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: '#fff',
                                                    textDecoration: 'none',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#3b82f6'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                                                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.transform = 'scale(1)'; }}
                                                >
                                                    <i className={`fa-brands fa-${icon}`}></i>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>

                    {/* Integrated Bottom Bar */}
                    <div className="footer-bottom-bar" style={{
                        marginTop: '60px',
                        paddingTop: '30px',
                        borderTop: '1px solid rgba(255,255,255,0.08)',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        flexWrap: 'wrap',
                        gap: '20px'
                    }}>
                        <p style={{ margin: 0, fontSize: '13px', color: '#64748b' }}>
                            &copy; {new Date().getFullYear()} EuroVest. All rights reserved.
                        </p>
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', gap: '25px', flexWrap: 'wrap' }}>
                            {[
                                { name: 'Terms of Service', href: '/terms-of-service' },
                                { name: 'Privacy Policy', href: '/privacy-policy' }
                            ].map((link, i) => (
                                <li key={i}>
                                    <Link href={link.href} style={{
                                        color: '#64748b',
                                        textDecoration: 'none',
                                        fontSize: '13px',
                                        transition: 'color 0.3s ease'
                                    }}
                                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                                    onMouseLeave={(e) => e.currentTarget.style.color = '#64748b'}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    );
}
