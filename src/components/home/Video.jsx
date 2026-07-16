import React from 'react';
// import Link from 'next/link'; // Uncomment if using next/link for <a> tags

export default function Video() {
    return (
        <>
        {/* Video Section Start  */}
        <section className="video-section bg-cover">
            <video autoPlay loop muted playsInline className="video-bg">
                <source src="https://ex-coders.com/vdo/visa.mp4" type="video/mp4" />
            </video>
            <div className="text-image">
                <img src="/assets/img/home-1/feature/text.png" alt="img" />
            </div>
             <div className="text-image-2">
                <img src="/assets/img/home-1/feature/text-2.png" alt="img" />
            </div>
            <div className="container">
                <div className="video-content">
                    <div className="shape">
                        <img src="/assets/img/home-1/feature/Vector.png" alt="img" />
                    </div>
                    <h2 className="split-text-right split-text-in-right">VIDEO <br /> PLAY GALLARY</h2>
                </div>
            </div>
        </section>

        </>
    );
}
