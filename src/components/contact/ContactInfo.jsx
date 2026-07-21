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
                                Saeed Nayel Alnuaimi Building, <br />
1st Floor, Office 22, <br />
Al Maswsou'ah 4 Street, <br />
Sanaiya, Al Ain, UAE
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
                                <a href="mailto:info@eurovest-dummy.com">info@eurovest-dummy.com</a>
                                <br />
                                <a href="mailto:info@eurovest-dummy.com">info@eurovest-dummy.com</a>
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
                            <p>Phone Number</p>
                            <h6>
                                 <a href="tel:+1234567890">+123 456 7890</a>
                                 <br />
                                 <a href="tel:+1234567890">+123 456 7890</a>
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
