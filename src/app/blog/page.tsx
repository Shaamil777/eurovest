import React from 'react';

import { getPageSeo } from '@/data/seoData';

export async function generateMetadata() {
  const seo = await getPageSeo('blog');
  return {
    title: seo?.metaTitle || 'Blog & News | Eurovest',
    description: seo?.metaDescription || 'Read the latest insights, news, and financial strategies from the Eurovest investment experts.',
    keywords: seo?.metaKeywords || 'eurovest blog, financial news, investment insights, wealth management tips, market updates',
    robots: seo?.metaRobots || 'index, follow'
  };
}
import Breadcrumb from '../../components/blog/BreadcrumbBlog';
import NewsGrid from '../../components/blog/NewsGrid';
import NewsStandard from '../../components/blog/NewsStandard';


export default function Blog() {
    return (
        <>
        <Breadcrumb />
        <NewsGrid />
        <NewsStandard />
        </>
    );
}