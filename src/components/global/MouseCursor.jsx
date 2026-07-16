"use client";
import React, { useEffect, useRef } from 'react';
// import Link from 'next/link';

export default function MouseCursor() {
    const cursorOuterRef = useRef(null);
    const cursorInnerRef = useRef(null);

    useEffect(() => {
        const cursorOuter = cursorOuterRef.current;
        const cursorInner = cursorInnerRef.current;
        
        if (!cursorOuter || !cursorInner) return;

        let isVisible = false;

        const onMouseMove = (e) => {
            if (!isVisible) {
                cursorOuter.style.visibility = 'visible';
                cursorInner.style.visibility = 'visible';
                isVisible = true;
            }
            
            cursorOuter.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
            cursorInner.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        };

        const onMouseOver = (e) => {
            if (e.target.closest('a, button, .theme-btn, .swiper-button-next, .swiper-button-prev')) {
                cursorOuter.classList.add('cursor-hover');
                cursorInner.classList.add('cursor-hover');
            }
        };

        const onMouseOut = (e) => {
            if (e.target.closest('a, button, .theme-btn, .swiper-button-next, .swiper-button-prev')) {
                cursorOuter.classList.remove('cursor-hover');
                cursorInner.classList.remove('cursor-hover');
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseover', onMouseOver);
        document.addEventListener('mouseout', onMouseOut);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseover', onMouseOver);
            document.removeEventListener('mouseout', onMouseOut);
        };
    }, []);

    return (
        <>
        {/*  GT MouseCursor Start  */}
        <div ref={cursorOuterRef} className="mouseCursor cursor-outer"></div>
        <div ref={cursorInnerRef} className="mouseCursor cursor-inner"></div>
        </>
    );
}
