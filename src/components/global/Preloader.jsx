"use client";
import React, { useState, useEffect } from 'react';
// import Link from 'next/link';

export default function Preloader() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 500);
        return () => clearTimeout(timer);
    }, []);

    if (!loading) return null;

    return (
        <>
        {/*  Preloader Start  */}
        <div id="preloader" className="preloader">
            <div className="animation-preloader">
                <div className="spinner">                
                </div>
                <div className="txt-loading">
                    <span data-text-preloader="V" className="letters-loading">
                        V
                    </span>
                     <span data-text-preloader="I" className="letters-loading">
                        I
                    </span>
                     <span data-text-preloader="S" className="letters-loading">
                        S
                    </span>
                    <span data-text-preloader="A" className="letters-loading">
                        A
                    </span>
                    <span data-text-preloader="W" className="letters-loading">
                        W
                    </span>
                     <span data-text-preloader="A" className="letters-loading">
                        A
                    </span>
                     <span data-text-preloader="Y" className="letters-loading">
                        Y
                    </span>
                </div>
                <p className="text-center">Loading</p>
            </div>
            <div className="loader">
                <div className="row">
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-left">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                    <div className="col-3 loader-section section-right">
                        <div className="bg"></div>
                    </div>
                </div>
            </div>
        </div>  

        </>
    );
}
