import React from 'react';
import { serviceCategories } from '../../data/servicesData';

export default function ServiceVisa() {
    // For ServiceVisa, let's take the first 3 services (or just map all of them if desired).
    // Let's map all services to keep it consistent, or take a specific category like visas.
    // The previous hardcoded had 3 items. I'll just map up to 3 items as an example, or all of them.
    // Since it's visa focused, let's just grab all services for now and let the user filter if needed.
    // I'll map all services but use the style classes as before.
    const allServices = serviceCategories.flatMap(category => category.services).slice(0, 3); // Showing first 3 for design fit

    return (
        <>
        {/* Service-Visa Section Start  */}
        <section className="service-visa-section fix">
            <div className="container">
                <div className="service-visa-wrapper">
                    {allServices.map((service, index) => (
                        <div className={`service-visa-items ${index !== 0 ? 'style-2' : ''}`} key={service.slug}>
                            <div className="top-item">
                                <h4 className="number">{String(index + 1).padStart(2, '0')}</h4>
                                <h3>
                                    <a href={`/service/${service.slug}`}>{service.title}</a>
                                </h3>
                            </div>
                            <p>
                                {service.shortDescription.substring(0, 70)}...
                            </p>
                            <a href={`/service/${service.slug}`} className="service-button">Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    );
}
