"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { serviceCategories } from '../../data/servicesData';

export default function MobileMenu({ isOpen, setIsOpen }) {
    const [expandedMenu, setExpandedMenu] = useState({});

    const toggleSubmenu = (menu) => {
        setExpandedMenu(prev => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };

    if (!isOpen) return null;

    return (
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
                <li><Link href="/" className="mobile-menu-link" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link href="/about" className="mobile-menu-link" onClick={() => setIsOpen(false)}>About Us</Link></li>
                
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
                                        <ul className="mobile-inner-submenu" style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '10px', marginBottom: '10px', borderLeft: '2px solid rgba(181, 133, 36, 0.3)', marginLeft: '5px' }}>
                                            {category.services.map((service, sIndex) => (
                                                <li key={sIndex}><Link href={`/service/${service.slug}`} style={{ color: 'var(--color-grey-text)', fontSize: '15px', display: 'block' }} onClick={() => setIsOpen(false)}>{service.title}</Link></li>
                                            ))}
                                        </ul>
                                    )}
                                </li>
                            ))}
                            <li>
                                <Link href="/tour-packages" className="mobile-submenu-link" style={{ textDecoration: 'none' }} onClick={() => setIsOpen(false)}>
                                    <span>Tour Packages</span>
                                </Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li><Link href="/blog" className="mobile-menu-link" onClick={() => setIsOpen(false)}>Blog</Link></li>
                <li><Link href="/contact" className="mobile-menu-link" style={{ borderBottom: 'none' }} onClick={() => setIsOpen(false)}>Contact Us</Link></li>
                <li style={{ marginTop: '10px' }}>
                    <Link href="/contact" className="theme-btn" style={{ width: '100%', textAlign: 'center', justifyContent: 'center' }} onClick={() => setIsOpen(false)}>
                        Appointment <i className="fa-solid fa-arrow-right" style={{ marginLeft: '10px' }}></i>
                    </Link>
                </li>
            </ul>
        </div>
    );
}
