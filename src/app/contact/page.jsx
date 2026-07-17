import React from "react";
import BreadcrumbContact from "../../components/contact/BreadcrumbContact";
import ContactForm from "../../components/contact/ContactForm";
import ContactInfo from "../../components/contact/ContactInfo";
import Map from "../../components/contact/Map";

export default function Contact() {
    return (
        <>
        <BreadcrumbContact />   
        <ContactInfo />
        <ContactForm />
        <Map />
        </>
    );
}