import React from 'react';

export default function ContactInfo() {
    return (
        <>
      {/* Error Section Start  */}
       <section className="contact-us-section-3 section-padding fix">
        <div className="container">
            <div className="row g-4">
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="contact-icon-item">
                        <div className="icon">
                            <i className="fa-solid fa-location-dot"></i>
                        </div>
                        <div className="content">
                            <p>Location</p>
                            <h6>
                                43 Sardinella, 3nd Land Walk, <br /> Orchard view, London, UK
                            </h6>
                        </div>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="contact-icon-item">
                        <div className="icon">
                           <i className="fa-solid fa-envelope"></i>
                        </div>
                        <div className="content">
                            <p>Email Address</p>
                            <h6>
                                <a href="mailto:supportinfo@gmail.com">supportinfo@gmail.com</a> <br />
                                 <a href="mailto:arluxhotelinfo.com">arluxhotelinfo.com</a>
                            </h6>
                        </div>
                    </div>
                </div>
                 <div className="col-xl-4 col-lg-6 col-md-6">
                    <div className="contact-icon-item">
                        <div className="icon">
                           <i className="fa-solid fa-phone"></i>
                        </div>
                        <div className="content">
                            <p>Email Address</p>
                            <h6>
                                 <a href="tel:Phone+88012342700">Phone +880 123 427 00</a> <br />
                                  <a href="tel:+00093880912">+000 938 809 12</a>
                            </h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </section>
        </>
    );
}
