"use client";
import React, { useState, useEffect } from 'react';
import styles from './HeaderTop.module.css';

export default function HeaderTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            
            // Show only when scrolling up and not at the very top
            if (currentScrollY < lastScrollY && currentScrollY > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
            
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    return (
        <>
        {/*  Header-Top-Section Start  */}
        <div 
            style={{
                maxHeight: isVisible ? '100px' : '0',
                opacity: isVisible ? 1 : 0,
                overflow: 'hidden',
                transition: 'max-height 0.3s ease-in-out, opacity 0.3s ease-in-out',
                background: 'linear-gradient(135deg, #0a0e17, #131b2c)'
            }}
        >
            <div 
                className={styles.headerTopSection}
                style={{
                    background: 'transparent',
                    boxShadow: 'none',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
                }}
            >
                <div className={styles.containerFluid}>
                    <div className={styles.headerTopWrapper}>
                        <div className={styles.headerLeft}>
                            <ul className={styles.list}>
                                <li className={styles.style2}>
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
                        <div className={styles.headerRight}>
                            
                            <div className={styles.socialItem}>
                                <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
