"use client";
import React from 'react';
import { motion } from 'framer-motion';

const brands = [
    "/assets/img/home-1/brand/01.png",
    "/assets/img/home-1/brand/02.png",
    "/assets/img/home-1/brand/03.png",
    "/assets/img/home-1/brand/04.png",
    "/assets/img/home-1/brand/05.png"
];

// Duplicate multiple times for smooth infinite scroll across large screens
const duplicatedBrands = [...brands, ...brands, ...brands];

export default function Brand() {
    return (
        <>
        {/* Brand Section Start  */}
        <div className="brand-section fix" style={{ padding: '60px 0' }}>
            <div className="container">
                 <div className="brand-wrapper style-1">
                    <div className="brand-item" style={{ overflow: 'hidden', width: '100%' }}>
                        <motion.div
                            initial={{ x: 0 }}
                            animate={{ x: "-33.33%" }}
                            transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                            style={{ display: 'flex', gap: '80px', width: 'fit-content', alignItems: 'center' }}
                        >
                            {duplicatedBrands.map((src, index) => (
                                <div key={index} className="brand-image text-center" style={{ flexShrink: 0, width: '150px' }}>
                                    <img src={src} alt="brand" style={{ maxWidth: '100%', objectFit: 'contain', filter: 'grayscale(100%) opacity(0.6)', transition: 'all 0.3s' }} 
                                         onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%) opacity(1)'; }}
                                         onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%) opacity(0.6)'; }}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                 </div>
            </div>
        </div>
        </>
    );
}
