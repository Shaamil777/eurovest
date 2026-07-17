import React from 'react';
import styles from './HeaderTop.module.css';

export default function HeaderTop() {
    return (
        <>
        {/*  Header-Top-Section Start  */}
        <div className={styles.headerTopSection}>
            <div className={styles.containerFluid}>
                <div className={styles.headerTopWrapper}>
                    <div className={styles.headerLeft}>
                        <ul className={styles.list}>
                            <li className={styles.style2}>
                                <span>Help Line</span>
                                <i className="fa-solid fa-phone"></i>
                                <a href="tel:+093783575222">+91 00000 00000</a>
                            </li>
                            <li>
                                <i className="fa-solid fa-location-dot"></i>
                                123 streets, Calicut, India
                            </li>
                             <li>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:info@example.com">info@example.com</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.headerRight}>
                        
                        <div className={styles.socialItem}>
                            <a href="#"><i className="fa-brands fa-linkedin"></i></a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
