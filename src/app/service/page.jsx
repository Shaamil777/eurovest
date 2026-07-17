import BreadcrumbService from "../../components/service/BreadcrumbService";
import DestinationOffer from "../../components/service/DestinationOffer";
import ServiceList from "../../components/service/ServiceList";
import ServiceVisa from "../../components/service/ServiceVisa";
import Testimonial from "../../components/service/Testimonial";

export default function Service(){
    return (
        <>
        <BreadcrumbService/>
        <ServiceVisa/>
        <ServiceList/>
        <DestinationOffer/>
        <Testimonial/>
        </>
    )
}