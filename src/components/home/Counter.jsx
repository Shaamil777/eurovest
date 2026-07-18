import React from 'react';
// import Link from 'next/link'; // Uncomment if using next/link for <a> tags

export default function Counter() {
    return (
        <>
        {/* Counter Section Start  */}
        <section className="counter-section section-padding pb-0 fix bg-cover" style={{ backgroundImage: `url("/assets/img/home-1/feature/bg-2.png")` }}>
            <div className="shape">
                <img src="/assets/img/home-1/feature/shape-2.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title bg-2 wow fadeIn" style={{ color: 'white', backgroundColor: 'rgb(6, 27, 57)', padding: '5px 20px', borderRadius: '30px', display: 'inline-block' }}>Our Success</span>
                    <h2 className="text-white wow fadeIn">
                       Our Achievements in <span>Numbers</span>
                    </h2>
                </div>
            </div>
            <div className="counter-wrapper">
                 <div className="container">
                    <div className="counter-main-item">
                        <div className="counter-item style-2">
                            <h2><span className="odometer" data-count="1">10</span>k+</h2>
                            <h5>Successful Clients</h5>
                            <p>
                                Successfully assisted 5,000+ clients with immigration services, work permits, and visa applications worldwide.
                            </p>
                        </div>
                        <div className="counter-item style-2">
                            <h2><span className="odometer" data-count="50">10</span>+</h2>
                            <h5>Countries Served</h5>
                            <p>
                                Providing trusted visa consulting and immigration solutions across 10+ global destinations.
                            </p>
                        </div>
                        <div className="counter-item style-2">
                            <h2><span className="odometer" data-count="95">99</span>%</h2>
                            <h5>Visa Success Rate</h5>
                            <p>
                               A proven visa approval rate through expert documentation and personalized immigration guidance.
                            </p>
                        </div>
                        <div className="counter-item">
                            <h2><span className="odometer" data-count="10">99</span>+</h2>
                            <h5>Immigration Experts</h5>
                            <p>
                            Experienced immigration consultants delivering reliable visa support and global mobility solutions.
                            </p>
                        </div>
                    </div>
                 </div>
            </div>
        </section>

        </>
    );
}
