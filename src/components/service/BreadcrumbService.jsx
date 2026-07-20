import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BreadcrumbService() {
    return (
        <>
        {/*  Breadcrumb-Wrapper Section Start  */}
        <section className="breadcrumb-wrapper fix bg-cover" style={{ backgroundImage: `url(/assets/img/inner-page/breadcrumb.jpg)` }}>
            <div className="shape">
                <Image src="/assets/img/inner-page/shape.png" alt="img" width={200} height={200} style={{ width: 'auto', height: 'auto' }} />
            </div>
            <div className="container">
                <div className="page-heading">
                    <h1 className="breadcrumb-title">Services</h1>
                    <ul className="breadcrumb-list">
                        <li>
                            <Link href="/">Home</Link>
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
