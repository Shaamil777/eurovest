import React from 'react';

export default function BreadcrumbService() {
    return (
        <>
        {/*  Breadcrumb-Wrapper Section Start  */}
        <section className="breadcrumb-wrapper fix bg-cover" style={{ backgroundImage: `url(assets/img/inner-page/breadcrumb.jpg)` }}>
            <div className="shape">
                <img src="assets/img/inner-page/shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="page-heading">
                    <h1 className="breadcrumb-title">Services</h1>
                    <ul className="breadcrumb-list">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                           Services
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
}
