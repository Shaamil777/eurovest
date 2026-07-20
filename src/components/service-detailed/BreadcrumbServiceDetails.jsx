import React from 'react';

export default function BreadcrumbServiceDetails({ title = "Service Details" }) {
    return (
        <>
        {/*  Breadcrumb-Wrapper Section Start  */}
        <section className="breadcrumb-wrapper fix bg-cover top-[20px]" style={{ backgroundImage: `url(/assets/img/inner-page/breadcrumb.png)` }}>
            <div className="shape">
                <img src="/assets/img/inner-page/shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="page-heading">
                    <h1 className="breadcrumb-title">{title}</h1>
                    <ul className="breadcrumb-list">
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                           {title}
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        </>
    );
}
