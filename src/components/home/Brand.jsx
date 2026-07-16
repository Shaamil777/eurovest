import React from 'react';
// import Link from 'next/link'; // Uncomment if using next/link for <a> tags

export default function Brand() {
    return (
        <>
        {/* Brand Section Start  */}
        <div className="brand-section fix">
            <div className="container">
                 <div className="brand-wrapper style-1">
                    <div className="brand-item">
                        <div className="swiper brand-slider">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="brand-image text-center">
                                        <img src="/assets/img/home-1/brand/01.png" alt="img" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="brand-image text-center">
                                        <img src="/assets/img/home-1/brand/02.png" alt="img" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="brand-image text-center">
                                        <img src="/assets/img/home-1/brand/03.png" alt="img" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="brand-image text-center">
                                        <img src="/assets/img/home-1/brand/04.png" alt="img" />
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="brand-image text-center">
                                        <img src="/assets/img/home-1/brand/05.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </div>

        </>
    );
}
