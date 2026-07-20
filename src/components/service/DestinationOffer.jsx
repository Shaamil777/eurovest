import React from 'react';
import Image from 'next/image';

export default function DestinationOffer() {
    return (
        <>
        {/* Destination-Offer Section Start  */}
        <section className="destination-offer-section section-padding fix">
            <div className="bg-image">
                <Image src="/assets/img/home-3/choose-us/bg.png" alt="img" fill style={{ objectFit: 'cover', zIndex: -1 }} />
            </div>
            <div className="container">
                <div className="section-title">
                    <span className="sub-title-2 theme">Countries we offer</span>
                    <h2 className="text-white">
                        Choose Your Immigration Destination
                    </h2>
                </div>
                <div className="destination-offer-wrapper-3 fade-up-anim row g-4 g-xl-4 row-cols-xl-5 row-cols-lg-4 row-cols-md-2 row-cols-1">
                    <div className="col destination-offer-item">
                        <div className="choose-us-image">
                            <Image src="/assets/img/home-3/choose-us/01.jpg" alt="img" width={300} height={400} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                        </div>
                        <div className="choose-us-content">
                            <div className="icon-item">
                                <div className="icon">
                                    <Image src="/assets/img/home-3/choose-us/icon-1.png" alt="img" width={50} height={50} style={{ width: 'auto', height: 'auto' }} />
                                </div>
                                <h5>
                                    <a href="country-details.html">Canada</a>
                                </h5>
                            </div>
                            <p>
                                Canada provides quality education, rich and global 
                            </p>
                        </div>
                    </div>
                    <div className="col destination-offer-item">
                        <div className="choose-us-image">
                            <Image src="/assets/img/home-3/choose-us/02.jpg" alt="img" width={300} height={400} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                        </div>
                        <div className="choose-us-content">
                            <div className="icon-item">
                                <div className="icon">
                                    <Image src="/assets/img/home-3/choose-us/icon-2.png" alt="img" width={50} height={50} style={{ width: 'auto', height: 'auto' }} />
                                </div>
                                <h5>
                                    <a href="country-details.html">South Korea</a>
                                </h5>
                            </div>
                            <p>
                                South Korea provides quality education, rich and global 
                            </p>
                        </div>
                    </div>
                    <div className="col destination-offer-item">
                        <div className="choose-us-image">
                            <Image src="/assets/img/home-3/choose-us/03.jpg" alt="img" width={300} height={400} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                        </div>
                        <div className="choose-us-content">
                            <div className="icon-item">
                                <div className="icon">
                                    <Image src="/assets/img/home-3/choose-us/icon-3.png" alt="img" width={50} height={50} style={{ width: 'auto', height: 'auto' }} />
                                </div>
                                <h5>
                                    <a href="country-details.html">France</a>
                                </h5>
                            </div>
                            <p>
                                France offers unique cultural experiences
                            </p>
                        </div>
                    </div>
                    <div className="col destination-offer-item">
                        <div className="choose-us-image">
                            <Image src="/assets/img/home-3/choose-us/04.jpg" alt="img" width={300} height={400} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                        </div>
                        <div className="choose-us-content">
                            <div className="icon-item">
                                <div className="icon">
                                    <Image src="/assets/img/home-3/choose-us/icon-2.png" alt="img" width={50} height={50} style={{ width: 'auto', height: 'auto' }} />
                                </div>
                                <h5>
                                    <a href="country-details.html">UK</a>
                                </h5>
                            </div>
                            <p>
                                UK provides quality education, rich and global 
                            </p>
                        </div>
                    </div>
                    <div className="col destination-offer-item">
                        <div className="choose-us-image">
                            <Image src="/assets/img/home-3/choose-us/05.jpg" alt="img" width={300} height={400} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                        </div>
                        <div className="choose-us-content">
                            <div className="icon-item">
                                <div className="icon">
                                    <Image src="/assets/img/home-3/choose-us/icon-3.png" alt="img" width={50} height={50} style={{ width: 'auto', height: 'auto' }} />
                                </div>
                                <h5>
                                    <a href="country-details.html">Germany</a>
                                </h5>
                            </div>
                            <p>
                                Germany provides quality education, rich and global 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
