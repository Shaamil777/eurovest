import React from 'react';
import { serviceCategories } from '../../data/servicesData';
import Image from 'next/image';

export default function ServiceList() {
    const allServices = serviceCategories.flatMap(category => category.services);

    return (
        <>
       {/* Service Section Start  */}
        <section className="service-section section-padding fix section-bg-1">
            <div className="container">
                <div className="section-title text-center">
                    <span className="sub-title" style={{ color: 'white', backgroundColor: 'rgb(6, 27, 57)', padding: '5px 20px', borderRadius: '30px', display: 'inline-block', marginBottom: '15px' }}>What We Offer</span>
                    <h2 className="">
                        Our Immigration Services
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-12">
                        {allServices.map((service, index) => {
                            const isEven = index % 2 !== 0;
                            return (
                                <div className={`service-main-item-3 ${isEven ? 'style-2' : ''} fade-up-anim`} key={service.slug}>
                                    {!isEven ? (
                                        <>
                                            <div className="service-left">
                                                <div className="service-image">
                                                    <Image src={service.mainImage || "/assets/img/home-3/service/01.jpg"} alt={service.title} width={400} height={300} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                                                </div>
                                                <div className="content">
                                                    <h3>
                                                        <a href={`/service/${service.slug}`}>{service.title}</a>
                                                    </h3>
                                                    <p>
                                                        {service.shortDescription}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="service-button">
                                                <a href={`/service/${service.slug}`} className="theme-btn">
                                                    read more
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </a>
                                            </div>
                                        </>
                                    ) : (
                                        <>
                                            <div className="service-button">
                                                <a href={`/service/${service.slug}`} className="theme-btn">
                                                    read more
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </a>
                                            </div>
                                            <div className="service-left">
                                                <div className="content">
                                                    <h3>
                                                        <a href={`/service/${service.slug}`}>{service.title}</a>
                                                    </h3>
                                                    <p>
                                                        {service.shortDescription}
                                                    </p>
                                                </div>
                                                <div className="service-image">
                                                    <Image src={service.mainImage || "/assets/img/home-3/service/02.jpg"} alt={service.title} width={400} height={300} style={{ width: '100%', height: 'auto', objectFit: 'cover' }} />
                                                </div>
                                            </div>
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
