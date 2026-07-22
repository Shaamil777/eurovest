import BreadcrumbServiceDetails from "../../../../components/service-detailed/BreadcrumbServiceDetails";
import ServiceDetailsArea from "../../../../components/service-detailed/ServiceDetailsArea";
import { getServiceBySlug } from "../../../../data/servicesData";
import { notFound } from "next/navigation";
import { getServiceSeo } from "../../../../data/seoData";

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    if (!service) {
        return { title: 'Service Not Found | Eurovest' };
    }

    const seo = await getServiceSeo(slug);

    return {
        title: seo?.metaTitle || `${service.title} | Eurovest`,
        description: seo?.metaDescription || service.description || `Learn more about our ${service.title} services at Eurovest.`,
        keywords: seo?.metaKeywords || `${service.title}, eurovest services, investment program, finance`,
        robots: seo?.metaRobots || 'index, follow'
    };
}

export default async function ServiceDetails({ params }) {
    // In Next.js 15+, params is a promise and must be awaited
    const { slug } = await params;
    
    const service = getServiceBySlug(slug);

    if (!service) {
        return notFound();
    }

    return (
        <>
        <BreadcrumbServiceDetails title={service.title} />
        <ServiceDetailsArea serviceData={service} />
        </>
    )
}