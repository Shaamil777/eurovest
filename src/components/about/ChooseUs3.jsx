import React from 'react';
import Link from 'next/link';

export default function ChooseUs3() {
    return (
        <>
            {/* Company Intro Section */}
            <section className="intro-section section-padding fix pb-0">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center">

                            <div className="section-title mb-4">
                                <span
                                    className="sub-title"
                                    style={{
                                        color: "white",
                                        backgroundColor: "rgb(6, 27, 57)",
                                        padding: "5px 20px",
                                        borderRadius: "30px",
                                        display: "inline-block",
                                        marginBottom: "15px",
                                    }}
                                >
                                    About EuroVest Consultancy
                                </span>

                                <h2>
                                    Building Your Future Through <span>Trusted Immigration Solutions</span>
                                </h2>
                            </div>

                            <p className="mb-4 text-muted">
                                At <strong>EuroVest Consultancy</strong>, we are committed to helping
                                individuals, families, skilled professionals, entrepreneurs, and
                                investors achieve their international ambitions through reliable
                                immigration and visa consultancy services. Whether your goal is to
                                work, study, invest, travel, or obtain permanent residency abroad,
                                our experienced immigration consultants provide personalized guidance
                                and practical solutions tailored to your unique requirements.
                            </p>

                            <p className="mb-4 text-muted">
                                We specialize in <strong>work visas</strong>, <strong>visitor visas</strong>,
                                <strong> residency by investment</strong>, <strong>citizenship by investment</strong>,
                                <strong> business immigration</strong>, and other global mobility
                                solutions. From eligibility assessment and document preparation to
                                application submission and post-approval assistance, we manage every
                                stage of the immigration process with professionalism, transparency,
                                and attention to detail, helping maximize your chances of a successful
                                outcome.
                            </p>

                            <p className="text-muted">
                                Our commitment goes beyond processing applications. We build lasting
                                relationships based on trust, integrity, and exceptional client
                                service. By staying up to date with the latest immigration policies,
                                visa regulations, and global migration programs, EuroVest Consultancy
                                delivers accurate, compliant, and dependable immigration advice that
                                empowers our clients to confidently pursue new opportunities around
                                the world.
                            </p>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}