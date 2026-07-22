import Hero from '@/components/home/Hero';

import { getPageSeo } from '@/data/seoData';

export async function generateMetadata() {
  const seo = await getPageSeo('home');
  return {
    title: seo?.metaTitle || 'Eurovest | European Investment and Consultancy',
    description: seo?.metaDescription || 'Eurovest offers premier investment consulting and portfolio management services across Europe.',
    keywords: seo?.metaKeywords || 'investment, consulting, eurovest, finance, portfolio management, europe',
    robots: seo?.metaRobots || 'index, follow'
  };
}
import About from '@/components/home/About';
import Service from '@/components/home/Service';
import ChooseUs from '@/components/home/ChooseUs';
import Feature from '@/components/home/Feature';
import Testimonial from '@/components/home/Testimonial';
import Video from '@/components/home/Video';
import FAQ from '@/components/home/FAQ';
import Counter from '@/components/home/Counter';

import News from '@/components/home/News';

import { getBlogs } from '@/data/blogsData';

export default async function Home() {
  const allBlogs = await getBlogs();
  const newsData = allBlogs.slice(0, 3).map((item: any, index: number) => ({
      ...item,
      delay: `.${3 + index * 2}s`
  }));

  return (
    <main>
      <Hero />
      <About />
      <Service />
      <ChooseUs />
      <Feature />
      <Testimonial />
      <Video />
      <FAQ />
      <Counter />
      <News newsData={newsData} />
    </main>
  );
}
