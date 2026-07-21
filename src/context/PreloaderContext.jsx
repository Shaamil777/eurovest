"use client";
import React, { createContext, useState, useContext, useEffect } from 'react';

const PreloaderContext = createContext();

export const PreloaderProvider = ({ children }) => {
    const [isPreloaderDone, setIsPreloaderDone] = useState(false);

    // State is now controlled by Preloader.jsx to perfectly sync with the exit animation
    // No more hardcoded timers here.

    return (
        <PreloaderContext.Provider value={{ isPreloaderDone, setIsPreloaderDone }}>
            {children}
        </PreloaderContext.Provider>
    );
};

export const usePreloader = () => useContext(PreloaderContext);
