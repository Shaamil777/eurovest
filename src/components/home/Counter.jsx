import React from 'react';
// import Link from 'next/link'; // Uncomment if using next/link for <a> tags

export default function Counter() {
    return (
        <>
        {/* Counter Section Start  */}
        <section className="counter-section section-padding pb-0 fix bg-cover" style={{ backgroundImage: `url("/assets/img/home-1/feature/bg-2.jpg")` }}>
            <div className="shape">
                <img src="/assets/img/home-1/feature/shape-2.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title bg-2 wow fadeInUp" style={{ color: 'white', backgroundColor: 'rgb(6, 27, 57)', padding: '5px 20px', borderRadius: '30px', display: 'inline-block' }}>Did You Know</span>
                    <h2 className="text-white split-text-right split-text-in-right">
                       Our Achievements in Numbers
                    </h2>
                </div>
            </div>
            <div className="counter-wrapper">
                 <div className="container">
                    <div className="counter-main-item">
                        <div className="counter-item style-2">
                            <h2><span className="odometer" data-count="1">00</span>k+</h2>
                            <h5>Students Guided</h5>
                            <p>
                                Successfully assisted over a thousand students worldwide.
                            </p>
                        </div>
                        <div className="counter-item style-2">
                            <h2><span className="odometer" data-count="50">00</span>+</h2>
                            <h5>Countries Covered</h5>
                            <p>
                                Helping students apply to universities 
                                in more than 50 countries.
                            </p>
                        </div>
                        <div className="counter-item style-2">
                            <h2><span className="odometer" data-count="95">00</span>%</h2>
                            <h5>Visa Success Rate</h5>
                            <p>
                               Inspired students to reach their goals globally
                            </p>
                        </div>
                        <div className="counter-item">
                            <h2><span className="odometer" data-count="10">00</span>+</h2>
                            <h5>Visa Success Rate</h5>
                            <p>
                            Trusted experts in global education consulting.
                            </p>
                        </div>
                    </div>
                 </div>
            </div>
        </section>

        </>
    );
}
