"use client";
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
// import Link from 'next/link'; // Uncomment if using next/link for <a> tags

const servicesData = [
    {
        id: '01',
        title: 'Work Permit',
        description: 'Expert work permit and work visa assistance for a smooth overseas employment journey.',
        image: '/assets/img/home-1/service/WP.webp',
        isActive: false,
        delay: 0.2
    },
    {
        id: '02',
        title: 'Visitor and Residency Visa',
        description: 'Reliable support for visitor visas, residency visas, and permanent residency (PR) applications.',
        image: '/assets/img/home-1/service/Visa.webp',
        isActive: true,
        delay: 0.3
    },
    {
        id: '03',
        title: 'Immigration Consulting',
        description: 'Professional immigration consulting with personalized visa guidance and application support.',
        image: '/assets/img/home-1/service/IC.webp',
        isActive: false,
        delay: 0.4
    },
    {
        id: '04',
        title: 'Business Investment',
        description: 'Explore business investment, Residency by Investment, and Citizenship by Investment opportunities.',
        image: '/assets/img/home-1/service/BI.webp',
        isActive: false,
        delay: 0.5
    },
    {
        id: '05',
        title: 'Tour Packages',
        description: 'Customized international tour packages with complete tourist visa and travel assistance.',
        image: '/assets/img/home-1/service/TP.webp',
        isActive: false,
        delay: 0.6
    }
];

export default function Service() {
    const handleMouseMove = (e) => {
        const item = e.currentTarget;
        
        // Use requestAnimationFrame to sync with browser render cycle
        requestAnimationFrame(() => {
            const image = item.querySelector('.image-hover');
            if (image) {
                const rect = item.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                // Reset top/left and use ONLY transform for buttery smooth GPU acceleration
                image.style.top = '0px';
                image.style.left = '0px';
                image.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
            }
        });
    };

    return (
        <>
         {/* Service Section Start  */}
        <div className="service-section section-padding fix">
            <div className="container">
                <div className="section-title text-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="sub-title"
                        style={{ color: 'white', backgroundColor: 'rgb(6, 27, 57)', padding: '5px 20px', borderRadius: '30px', display: 'inline-block' }}
                    >
                        Our Expert Services
                    </motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className=""
                    >
                        Comprehensive <span style={{ color: 'var(--theme)' }}>Immigration & Visa </span>Services
                    </motion.h2>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="mt-3"
                        style={{ maxWidth: '800px', margin: '0 auto', color: '#64748b' }}
                    >
                        From work permits and visitor visas to business investment and immigration consulting, we provide trusted visa solutions for individuals, families, and businesses worldwide.
                    </motion.p>
                </div>
            </div>
            
            {servicesData.map((service, index) => (
                <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: service.delay }}
                    viewport={{ once: true, margin: "-50px" }}
                    className={`service-wrapper ${service.isActive ? 'active' : ''}`}
                >
                    <div className="container">
                        <div className="service-item" onMouseMove={handleMouseMove}>
                             <div className="image-hover d-none d-md-block bg-cover" style={{ backgroundImage: `url("${service.image}")` }}></div>
                            <div className="left-item">
                                <h5 className="number">{service.id}</h5>
                                <h3 style={{ textTransform: 'none' }}>
                                    <a href="/contact" style={{ textTransform: 'none' }}>{service.title}</a>
                                </h3>
                            </div>
                            <div className="right-item">
                                <p style={{ textTransform: 'none' }}>
                                    {service.description}
                                </p>
                                <a href="/contact" className="service-btn">Enquire Now <i className="fa-solid fa-arrow-right"></i></a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        </>
    );
}
