import React from 'react';
import { StringInputProps, useFormValue } from 'sanity';

const pageDefaults = {
  home: {
    title: 'Eurovest | European Investment and Consultancy',
    desc: 'Eurovest offers premier investment consulting and portfolio management services across Europe.',
    keywords: 'investment, consulting, eurovest, finance, portfolio management, europe'
  },
  about: {
    title: 'About Us | Eurovest',
    desc: 'Learn more about Eurovest, our mission, values, and the expert team behind our premier investment services.',
    keywords: 'about eurovest, investment team, financial experts, mission, values, company history'
  },
  contact: {
    title: 'Contact Us | Eurovest',
    desc: 'Get in touch with Eurovest. Find our contact information, office locations, and reach out to our team of financial consultants.',
    keywords: 'contact eurovest, customer support, office location, contact form, financial consultation'
  },
  blog: {
    title: 'Blog & News | Eurovest',
    desc: 'Read the latest insights, news, and financial strategies from the Eurovest investment experts.',
    keywords: 'eurovest blog, financial news, investment insights, wealth management tips, market updates'
  }
} as const;

const programTitles = {
  'dominica-citizenship': 'Dominica Citizenship',
  'saint-kitts-nevis-citizenship': 'Saint Kitts & Nevis Citizenship',
  'vanuatu-citizenship': 'Vanuatu Citizenship',
  'saint-lucia-citizenship': 'Saint Lucia Citizenship',
  'nauru-citizenship': 'Nauru Citizenship',
  'grenada-citizenship': 'Grenada Citizenship',
  'spain-residency': 'Spain Residency',
  'greece-residency': 'Greece Residency',
  'portugal-residency': 'Portugal Residency',
  'usa-residency': 'USA Residency',
  'australia-residency': 'Australia Residency',
  'LMIA-Programs': 'LMIA Programs',
  'uk-skilled-worker-visa': 'UK Skilled Worker Visa',
  'uk-creative-worker-visa': 'UK Creative Worker Visa'
} as const;

export function DynamicSeoInput(props: StringInputProps) {
  const pageName = useFormValue(['pageName']) as keyof typeof pageDefaults | undefined;
const programSlug = useFormValue(['programSlug']) as keyof typeof programTitles | undefined;
  const fieldName = props.schemaType.name;

  let placeholder = '';

  if (pageName) {
    if (fieldName === 'metaTitle') placeholder = pageDefaults[pageName].title;
    if (fieldName === 'metaDescription') placeholder = pageDefaults[pageName].desc;
    if (fieldName === 'metaKeywords') placeholder = pageDefaults[pageName].keywords;
  } else if (programSlug) {
    const title = programTitles[programSlug];
    if (fieldName === 'metaTitle') placeholder = `${title} | Eurovest`;
    if (fieldName === 'metaDescription')
      placeholder = `Learn more about our ${title} services at Eurovest.`;
    if (fieldName === 'metaKeywords')
      placeholder = `${title}, eurovest services, investment program, finance`;
  } else {
    placeholder = 'Select a page or program above to see the default value...';
  }

  return props.renderDefault({
    ...props,
    elementProps: {
      ...props.elementProps,
      placeholder,
    },
  });
}