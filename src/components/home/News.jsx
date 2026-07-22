"use client";
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.5, ease: "easeOut" } 
    }
};

export default function News({ newsData }) {
    const noProfileImg = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23ccc'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z'/%3E%3C/svg%3E";

    return (
        <>
        {/* News Section Start  */}
        <section className="news-section section-padding fix">
            <div className="container">
                <div className="section-title-area">
                    <div className="section-title">
                        <motion.span 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="sub-title" style={{ color: 'white', backgroundColor: 'rgb(6, 27, 57)', padding: '5px 20px', borderRadius: '30px', display: 'inline-block' }}>Visa Tips & Guides</motion.span>
                        <motion.h2 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                          <span> IMMIGRATION NEWS </span>& VISA GUIDES
                        </motion.h2>
                    </div>
                    <Link href="/blog" className="theme-btn">
                        view all articies
                        <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                </div>
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="row"
                >
                    {newsData && newsData.length > 0 ? (
                        newsData.map((item) => (
                            <motion.div 
                                variants={itemVariants}
                                key={item.id} 
                                className="col-xl-4 col-lg-6 col-md-6"
                            >
                                <div className="news-card-item">
                                    <div className="news-image">
                                        <img src={item.image} alt="img" />
                                        <div className="news-layer-wrapper">
                                            <div className="news-layer-image" style={{ backgroundImage: `url("${item.image}")` }}></div>
                                            <div className="news-layer-image" style={{ backgroundImage: `url("${item.image}")` }}></div>
                                            <div className="news-layer-image" style={{ backgroundImage: `url("${item.image}")` }}></div>
                                            <div className="news-layer-image" style={{ backgroundImage: `url("${item.image}")` }}></div>
                                        </div>
                                    </div>
                                    <div className="news-content">
                                        <div className="list">
                                            <span>{item.date}</span>
                                        </div>
                                        <h3>
                                            <Link href={`/blog/${item.slug}`}>
                                                {item.title}
                                            </Link>
                                        </h3>
                                        <div className="news-bottom">
                                            <div className="info-item">
                                                <img src={noProfileImg} alt="img" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
                                                <span>By {item.author}</span>
                                            </div>
                                            <Link href={`/blog/${item.slug}`} className="link-btn">View Articles<i className="fa-solid fa-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <h3>No news available at the moment.</h3>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>

        </>
    );
}
