import Breadcrumb from '@/components/about/Breadcrumb';

import { getPageSeo } from '@/data/seoData';

export async function generateMetadata() {
  const seo = await getPageSeo('about');
  return {
    title: seo?.metaTitle || 'About Us | Eurovest',
    description: seo?.metaDescription || 'Learn more about Eurovest, our mission, values, and the expert team behind our premier investment services.',
    keywords: seo?.metaKeywords || 'about eurovest, investment team, financial experts, mission, values, company history',
    robots: seo?.metaRobots || 'index, follow'
  };
}
import ChooseUs3 from '@/components/about/ChooseUs3';
import About2 from '@/components/about/About2';
import ChooseUs2 from '@/components/about/ChooseUs2';
import News2 from '@/components/about/News2';

export default function AboutPage() {
  return (
    <main>
      <Breadcrumb />
      <ChooseUs3 />
      <About2 />
      <ChooseUs2 />
      <News2 />
    </main>
  );
}
