import React from 'react';
// import Link from 'next/link'; // Uncomment if using next/link for <a> tags

export default function Faq() {
    return (
        <>
        {/* Faq Section Start  */}
        <section className="faq-section section-padding fix">
            <div className="container">
                <div className="faq-wrapper">
                    <div className="row g-4">
                        <div className="col-lg-5">
                            <div className="faq-content">
                            <div className="section-title mb-0">
                                <span className="sub-title wow fadeInUp">Visa FAQs</span>
                                <h2 className="split-text-right split-text-in-right">
                                    Got Questions? We’ve Got Answers
                                </h2>
                            </div>
                            <p className="text">
                                We understand students often have many questions about studying abroad. Our experts provide clear.
                            </p>
                             <a href="contact.html" className="theme-btn">
                                contact us
                                <i className="fa-solid fa-arrow-right"></i>
                            </a>
                        </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="faq-items">
                                <div className="accordion" id="accordionExample">
                                    <div className="accordion-item wow fadeInUp" data-wow-delay=".2s">
                                        <h5 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                How long does the student visa process usually take?
                                            </button>
                                        </h5>
                                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                   Yes, we guide students in identifying suitable scholarships, preparing strong applications, and increasing chances.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow fadeInUp" data-wow-delay=".8s">
                                        <h5 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Do you assist with scholarship applications as well?
                                            </button>
                                        </h5>
                                        <div id="collapseOne" className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                    Yes, we guide students in identifying suitable scholarships, preparing strong applications, and increasing chances.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow fadeInUp" data-wow-delay=".4s">
                                        <h5 className="accordion-header" id="headingthree">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapsethree" aria-expanded="false"
                                                aria-controls="collapsethree">
                                               Will you guide me in preparing for the visa interview?
                                            </button>
                                        </h5>
                                        <div id="collapsethree" className="accordion-collapse collapse"
                                            aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                   Yes, we guide students in identifying suitable scholarships, preparing strong applications, and increasing chances.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                                        <h5 className="accordion-header" id="headingfour">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                data-bs-target="#collapsefour" aria-expanded="false"
                                                aria-controls="collapsefour">
                                           Do you offer post-arrival support for students?
                                            </button>
                                        </h5>
                                        <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour"
                                            data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p>
                                                   Yes, we guide students in identifying suitable scholarships, preparing strong applications, and increasing chances.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    );
}
