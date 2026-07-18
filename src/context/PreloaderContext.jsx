"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';

const PreloaderContext = createContext();

export const PreloaderProvider = ({ children }) => {
    const [isPreloaderDone, setIsPreloaderDone] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsPreloaderDone(true);
        }, 2200); // 2.2s aligns with the preloader animation timeline
        return () => clearTimeout(timer);
    }, []);

    return (
        <PreloaderContext.Provider value={{ isPreloaderDone, setIsPreloaderDone }}>
            {children}
        </PreloaderContext.Provider>
    );
};

export const usePreloader = () => useContext(PreloaderContext);
