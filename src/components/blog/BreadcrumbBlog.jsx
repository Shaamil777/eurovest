import React from 'react';
// import Link from 'next/link';

export default function BreadcrumbBlog() {
    return (
        <>
        {/*  Breadcrumb-Wrapper Section Start  */}
        <section className="breadcrumb-wrapper fix bg-cover" style={{ backgroundImage: `url(assets/img/inner-page/breadcrumb.jpg)` }}>
            <div className="shape">
                <img src="assets/img/inner-page/shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="page-heading">
                    <h1 className="breadcrumb-title">Our BLOG</h1>
                    <ul className="breadcrumb-list">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                           Our Blog
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
}
