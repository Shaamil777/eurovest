import React from 'react';
import Link from 'next/link';

export default function BreadcrumbContact() {
    return (
        <>
        {/*  Breadcrumb-Wrapper Section Start  */}
        <section className="breadcrumb-wrapper fix bg-cover top-[20px]" style={{ backgroundImage: `url(assets/img/inner-page/breadcrumb.png)` }}>
            <div className="shape">
                <img src="assets/img/inner-page/shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="page-heading">
                    <h1 className="breadcrumb-title">CONTACT uS</h1>
                    <ul className="breadcrumb-list">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                          Contact Us
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
}
