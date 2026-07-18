"use client";
import React from 'react';
import { PreloaderProvider } from '@/context/PreloaderContext';

export default function Providers({ children }) {
    return (
        <PreloaderProvider>
            {children}
        </PreloaderProvider>
    );
}
