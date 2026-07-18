"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { usePreloader } from '@/context/PreloaderContext';

export default function PageReveal({ children }) {
    const { isPreloaderDone } = usePreloader();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={isPreloaderDone ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.98 }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
        >
            {children}
        </motion.div>
    );
}
