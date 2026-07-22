import React from "react";

import { getPageSeo } from '@/data/seoData';

export async function generateMetadata() {
  const seo = await getPageSeo('contact');
  return {
    title: seo?.metaTitle || 'Contact Us | Eurovest',
    description: seo?.metaDescription || 'Get in touch with Eurovest. Find our contact information, office locations, and reach out to our team of financial consultants.',
    keywords: seo?.metaKeywords || 'contact eurovest, customer support, office location, contact form, financial consultation',
    robots: seo?.metaRobots || 'index, follow'
  };
}
import BreadcrumbContact from "../../../components/contact/BreadcrumbContact";
import ContactForm from "../../../components/contact/ContactForm";
import ContactInfo from "../../../components/contact/ContactInfo";
import Map from "../../../components/contact/Map";

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
