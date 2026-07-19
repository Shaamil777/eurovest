"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2200);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: '#0f172a', // sleek dark blue/slate color
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 999999,
                        overflow: 'hidden'
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        exit={{ opacity: 0, scale: 1.1 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        {/* You can replace this text with the EuroVest logo */}
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
                            style={{ display: 'flex', alignItems: 'center', gap: '15px' }}
                        >
                            <img src="/assets/img/logo/logo.png" alt="EuroVest Logo" style={{ maxHeight: '60px', maxWidth: '90vw', height: 'auto', objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                            {/* Fallback text if logo is missing/doesn't invert well:
                                <h1 style={{ color: '#ffffff', fontSize: '3.5rem', fontWeight: '700', letterSpacing: '0.1em', margin: 0 }}>EUROVEST</h1>
                            */}
                        </motion.div>
                        
                        <motion.div
                            style={{
                                width: '150px',
                                height: '2px',
                                backgroundColor: 'rgba(255,255,255,0.2)',
                                marginTop: '30px',
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: '2px'
                            }}
                        >
                            <motion.div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: '#ffffff'
                                }}
                                initial={{ x: '-100%' }}
                                animate={{ x: '100%' }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 1.5,
                                    ease: "easeInOut"
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
