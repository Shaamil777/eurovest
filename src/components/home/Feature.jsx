"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const destinations = [
    {
        id: 'ca',
        name: 'Canada',
        desc: 'Express Entry, Work Permit, PR, Visitor Visa',
        flag: 'ca', // flagcdn code
    },
    {
        id: 'uk',
        name: 'United Kingdom',
        desc: 'Skilled Worker Visa, Student Visa, Visitor Visa, Business Visa',
        flag: 'gb',
    },
    {
        id: 'au',
        name: 'Australia',
        desc: 'Skilled Migration, Work Visa, Student Visa, PR',
        flag: 'au',
    },
    {
        id: 'pl',
        name: 'Poland',
        desc: 'Work Permit, Residence Permit, EU Blue Card',
        flag: 'pl',
    },
    {
        id: 'pt',
        name: 'Portugal',
        desc: 'D2 Visa, Work Permit, Residency, Business Visa',
        flag: 'pt',
    },
    {
        id: 'eu',
        name: 'Europe',
        desc: 'Schengen Visa, Study Abroad, Work Visa, Business Visa',
        flag: 'eu',
    }
];

export default function Feature() {
    return (
        <>
            <section className="feature-destinations-section section-padding" style={{ backgroundColor: '#ffffff', overflow: 'hidden' }}>
                <div className="container">
                    <div className="row align-items-center">

                        {/* Left Column: Content */}
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="content-wrapper pe-lg-4">

                                <span
                                    className="sub-title"
                                    style={{ color: 'var(--color-blue)', backgroundColor: 'rgba(6, 27, 57, 0.05)', padding: '8px 24px', borderRadius: '30px', display: 'inline-flex', alignItems: 'center', gap: '8px', fontWeight: '600', marginBottom: '20px' }}
                                >
                                    Explore Destinations <i className="fa-solid fa-arrow-right" style={{ color: 'var(--theme)' }}></i>
                                </span>

                                <h2
                                    className="section-title mb-4"
                                    style={{ fontSize: '48px', fontWeight: '800', lineHeight: '1.2', color: 'var(--color-blue)', textTransform: 'uppercase' }}
                                >
                                    YOUR GATEWAY TO<br />GLOBAL <span style={{ color: 'var(--theme)' }}>IMMIGRATION</span>
                                </h2>

                                <div
                                    style={{ height: '3px', backgroundColor: 'var(--theme)', marginBottom: '30px', width: '80px' }}
                                ></div>

                                <p
                                    style={{ color: '#666', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px', maxWidth: '90%' }}
                                >
                                    We provide trusted immigration solutions to the world&apos;s leading destinations. Choose your dream country and let us handle the rest of your journey.
                                </p>

                                <div className="destinations-grid mt-4">
                                    {destinations.map((dest, idx) => (
                                        <div
                                            key={idx}
                                            className="dest-item d-flex align-items-center"
                                        >
                                            <div className="flag-circle shadow-sm">
                                                <img src={`https://flagcdn.com/w160/${dest.flag}.png`} alt={`${dest.name} flag`} />
                                            </div>
                                            <div className="dest-info flex-grow-1 ms-4">
                                                <h4 style={{ margin: 0, fontSize: '19px', fontWeight: '800', color: 'var(--color-blue)', letterSpacing: '-0.5px' }}>{dest.name}</h4>
                                                <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#64748b', lineHeight: '1.5' }}>{dest.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                            </div>
                        </div>

                        {/* Right Column: Map */}
                        <div className="col-lg-6">
                            <div
                                className="map-container relative left-0 md:left-[10%]"
                            >
                                <Image src="/assets/img/home-1/feature/worldmap.png" alt="World Map" width={1000} height={500} className="w-100 scale-100 md:scale-[1]" style={{ width: '100%', height: 'auto', opacity: 1 }} />
                            </div>
                        </div>

                    </div>
                </div>

                <style jsx="true">{`
                .destinations-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 30px;
                }
                
                @media (max-width: 767px) {
                    .destinations-grid {
                        grid-template-columns: 1fr;
                    }
                    .map-container {
                        margin-top: 50px;
                    }
                }
                
                .dest-item {
                    background: #ffffff;
                    border-radius: 16px;
                    padding: 15px 20px;
                    transition: all 0.3s ease;
                    cursor: pointer;
                    border: 1px solid rgba(0,0,0,0.03);
                    box-shadow: 0 4px 15px rgba(0,0,0,0.02);
                }
                
                .dest-item:hover {
                    box-shadow: 0 10px 30px rgba(6, 27, 57, 0.08);
                    transform: translateY(-3px);
                    border-color: rgba(6, 27, 57, 0.1);
                }
                
                .dest-item:hover .flag-circle {
                    transform: scale(1.08);
                    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
                }
                
                .flag-circle {
                    width: 55px;
                    height: 55px;
                    min-width: 55px;
                    border-radius: 50%;
                    overflow: hidden;
                    border: 3px solid #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                    background: #fff;
                }
                
                .flag-circle img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                
                .map-container {
                    position: relative;
                    width: 100%;
                }
                
                @media (min-width: 1200px) {
                    /* Desktop / Large Screen size (Edit these values to adjust map on large screens) */
                    .map-container {
                        transform: scale(1.4) translateX(20%);
                        transform-origin: center right;
                    }
                }

                @media (min-width: 992px) and (max-width: 1199px) {
                    /* MacBook / Small Desktop size (Edit these values to adjust map on MacBooks) */
                    .map-container {
                        transform: scale(1.2) translateX(10%);
                        transform-origin: center right;
                    }
                }
                
                @media (min-width: 768px) and (max-width: 991px) {
                    /* iPad / Tablet size (Edit these values to adjust map on tablets) */
                    .map-container {
                        transform: scale(1.05) translateX(-8%);
                        transform-origin: center right;
                        margin-top: 30px;
                    }
                }
                
                .map-pin-group {
                    position: absolute;
                    transform: translate(-50%, -100%);
                    display: flex;
                    align-items: center;
                    z-index: 5;
                    cursor: pointer;
                }
                
                .pin-marker {
                    width: 20px;
                    height: 26px;
                    background-color: var(--color-blue);
                    border-radius: 50% 50% 50% 0;
                    transform: rotate(-45deg);
                    position: relative;
                    box-shadow: 0 5px 15px rgba(6, 27, 57, 0.4);
                    transition: all 0.3s ease;
                }
                
                .pin-marker::after {
                    content: '';
                    position: absolute;
                    width: 8px;
                    height: 8px;
                    background: var(--theme);
                    border-radius: 50%;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                }
                
                .map-pin-group:hover .pin-marker {
                    transform: rotate(-45deg) scale(1.2);
                    background-color: var(--theme);
                }
                
                .map-pin-group:hover .pin-marker::after {
                    background: #fff;
                }
                
                .pin-label {
                    background: #ffffff;
                    padding: 8px 16px;
                    border-radius: 30px;
                    font-size: 13px;
                    font-weight: 600;
                    color: var(--color-blue);
                    box-shadow: 0 5px 20px rgba(0,0,0,0.08);
                    position: absolute;
                    left: 25px;
                    top: -15px;
                    white-space: nowrap;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    transition: all 0.3s ease;
                }
                
                .pin-label .dot {
                    width: 6px;
                    height: 6px;
                    background: var(--theme);
                    border-radius: 50%;
                    display: inline-block;
                }
                
                .map-pin-group:hover .pin-label {
                    transform: translateX(10px);
                    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
                }
            `}</style>
            </section>
        </>
    );
}
