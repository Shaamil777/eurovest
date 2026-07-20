import React from 'react';
import Link from 'next/link';

export default function Video() {
    return (
        <>
        {/* Video Section Start  */}
        <section className="video-section bg-cover">
            <video autoPlay loop muted playsInline className="video-bg">
                <source src="https://ex-coders.com/vdo/visa.mp4" type="video/mp4" />
            </video>
        </section>

        </>
    );
}
