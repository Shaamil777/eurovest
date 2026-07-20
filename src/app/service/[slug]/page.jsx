import BreadcrumbServiceDetails from "../../../components/service-detailed/BreadcrumbServiceDetails";
import ServiceDetailsArea from "../../../components/service-detailed/ServiceDetailsArea";
import { getServiceBySlug } from "../../../data/servicesData";
import { notFound } from "next/navigation";

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