import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Breadcrumb() {
    return (
        <>
        {/*  Breadcrumb-Wrapper Section Start  */}
        <section className="breadcrumb-wrapper top-[20px] fix bg-cover" style={{ backgroundImage: `url("/assets/img/inner-page/breadcrumb.png")` }}>
            <div className="shape">
                <Image src="/assets/img/inner-page/shape.png" alt="img" width={200} height={200} style={{ width: 'auto', height: 'auto' }} />
            </div>
            <div className="container">
                <div className="page-heading">
                    <h1 className="breadcrumb-title">About Us</h1>
                    <ul className="breadcrumb-list">
                        <li>
                            <Link href="/">Home</Link>
                        </li>
                        <li>
                            <i className="fa-solid fa-chevron-right"></i>
                        </li>
                        <li>
                           About Us
                        </li>
                    </ul>
                </div>
            </div>
        </section>

        </>
    );
}
