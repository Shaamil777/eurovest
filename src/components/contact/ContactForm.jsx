import React from 'react';

export default function ContactForm() {
    return (
        <>
        {/* Contact Section3 Start  */}
        <section className="contact-section-3 section-padding fix pt-0">
            <div className="container">
                <div className="contact-from-wrapper">
                    <h5 className="text-center">Send Us Message</h5>
                    <p className="text-center mt-3 mb-5">&quot;Have questions about visas or immigration? Send us a message today and our expert team will respond quickly.&quot;</p>
                    <div className="row g-4">
                        <div className="col-xl-12">
                             <form action="contact.php" id="contact-form1" method="POST" className="contact-form-items">
                                <div className="row g-4">
                                    <div className="col-lg-4">
                                        <div className="form-clt">
                                            <span>Your Name</span>
                                            <input type="text" name="name" id="name331" placeholder="Your name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-clt">
                                            <span>Your Email</span>
                                            <input type="text" name="name" id="email11" placeholder="Your email" />
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="form-clt">
                                            <span>Your Phone</span>
                                            <input type="text" name="name" id="name22" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-clt">
                                            <span>Your Address</span>
                                            <input type="text" name="name" id="name24" placeholder="Address Now" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-clt">
                                            <span>Your Date</span>
                                            <input type="text" name="name" id="name25" placeholder="Date" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-clt">
                                            <textarea name="message" id="message1" placeholder="Type your message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <button type="submit" className="theme-btn style-2">
                                       SEND MESSAGE
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
