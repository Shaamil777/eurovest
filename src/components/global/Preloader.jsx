"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePreloader } from '@/context/PreloaderContext';

export default function Preloader() {
    const [loading, setLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const { setIsPreloaderDone } = usePreloader();

    useEffect(() => {
        let isLoaded = document.readyState === 'complete';
        
        const handleLoad = () => {
            isLoaded = true;
        };

        if (!isLoaded) {
            window.addEventListener('load', handleLoad);
        }

        let start = null;
        let animationFrameId;
        const duration = 1600; // Counter animation time

        const step = (timestamp) => {
            if (!start) start = timestamp;
            const elapsed = timestamp - start;
            
            // Custom easeOut formula for smooth progress
            const t = Math.min(elapsed / duration, 1);
            const easeOutQuart = 1 - Math.pow(1 - t, 4);
            
            let currentProgress = Math.floor(easeOutQuart * 100);
            
            if (elapsed >= duration) {
                if (isLoaded) {
                    currentProgress = 100;
                    setProgress(currentProgress);
                    setTimeout(() => {
                        setLoading(false);
                        setIsPreloaderDone(true);
                    }, 200);
                    return;
                } else {
                    currentProgress = 99; // Hold at 99% until window is fully loaded
                }
            }
            
            setProgress(currentProgress);
            animationFrameId = window.requestAnimationFrame(step);
        };
        
        animationFrameId = window.requestAnimationFrame(step);

        return () => {
            window.removeEventListener('load', handleLoad);
            if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    key="preloader"
                    initial={{ y: 0 }}
                    exit={{ y: "-100%" }}
                    transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }} 
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: '#080d17', // Very deep, premium slate/navy
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 999999,
                        overflow: 'hidden'
                    }}
                >
                    <motion.div
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '40px'
                        }}
                    >
                        {/* Logo Reveal Container */}
                        <div style={{ position: 'relative', overflow: 'hidden' }}>
                            <img 
                                src="/assets/img/preloader/logo.png" 
                                alt="EuroVest Logo Silhouette" 
                                style={{ 
                                    height: '75px', 
                                    width: 'auto', 
                                    objectFit: 'contain',
                                    opacity: 0.08, // Barely visible silhouette
                                    filter: 'brightness(0) invert(1)',
                                    transform: 'translateZ(0)' // Hardware acceleration
                                }} 
                            />
                            
                            <motion.img 
                                src="/assets/img/preloader/logo.png" 
                                alt="EuroVest Logo Fill" 
                                style={{ 
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    height: '75px', 
                                    width: 'auto', 
                                    objectFit: 'contain',
                                    filter: 'brightness(0) invert(1)',
                                    transform: 'translateZ(0)' 
                                }} 
                                animate={{ clipPath: `inset(${100 - progress}% 0 0 0)` }}
                                transition={{ type: 'tween', ease: 'linear', duration: 0.05 }}
                            />
                        </div>

                        {/* Typography Counter */}
                        <div style={{ overflow: 'hidden' }}>
                            <motion.div 
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                                style={{ 
                                    color: '#ffffff', 
                                    fontSize: '0.85rem', 
                                    fontWeight: '400',
                                    letterSpacing: '0.15em',
                                    fontFamily: '"Inter", system-ui, -apple-system, sans-serif',
                                    fontVariantNumeric: 'tabular-nums', // Prevents width jitter
                                    opacity: 0.7,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    minWidth: '60px'
                                }}
                            >
                                {progress}%
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
