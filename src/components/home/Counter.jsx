"use client";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

export default function Counter() {
    return (
        <>
        {/* Counter Section Start  */}
        <section className="counter-section section-padding pb-0 fix bg-cover" style={{ backgroundImage: `url("/assets/img/home-1/feature/bg-2.png")` }}>
            <div className="shape">
                <Image src="/assets/img/home-1/feature/shape-2.png" alt="img" width={200} height={200} style={{ width: 'auto', height: 'auto' }} />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="sub-title bg-2" style={{ color: 'white', backgroundColor: 'rgb(6, 27, 57)', padding: '5px 20px', borderRadius: '30px', display: 'inline-block' }}>Our Success</motion.span>
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-white">
                       Our Achievements in <span>Numbers</span>
                    </motion.h2>
                </div>
            </div>
            <div className="counter-wrapper">
                 <div className="container">
                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        className="counter-main-item"
                    >
                        <motion.div variants={itemVariants} className="counter-item style-2">
                            <h2><span className="odometer" data-count="1">1000</span>+</h2>
                            <h5>Successful Clients</h5>
                            <p>
                                Successfully assisted 300 clients with immigration services, work permits, and visa applications worldwide.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="counter-item style-2">
                            <h2><span className="odometer" data-count="50">10</span>+</h2>
                            <h5>Countries Served</h5>
                            <p>
                                Providing trusted visa consulting and immigration solutions across 10+ global destinations.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="counter-item style-2">
                            <h2><span className="odometer" data-count="95">99</span>%</h2>
                            <h5>Visa Success Rate</h5>
                            <p>
                               A proven visa approval rate through expert documentation and personalized immigration guidance.
                            </p>
                        </motion.div>
                        <motion.div variants={itemVariants} className="counter-item">
                            <h2><span className="odometer" data-count="10">99</span>+</h2>
                            <h5>Immigration Experts</h5>
                            <p>
                            Experienced immigration consultants delivering reliable visa support and global mobility solutions.
                            </p>
                        </motion.div>
                    </motion.div>
                 </div>
            </div>
        </section>

        </>
    );
}
