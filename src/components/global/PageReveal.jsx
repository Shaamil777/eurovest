"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { usePreloader } from '@/context/PreloaderContext';

export default function PageReveal({ children }) {
    const { isPreloaderDone } = usePreloader();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isPreloaderDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
            {children}
        </motion.div>
    );
}
