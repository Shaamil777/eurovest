import Hero from '@/components/home/Hero';
import About from '@/components/home/About';
import Service from '@/components/home/Service';
import Feature from '@/components/home/Feature';
import Testimonial from '@/components/home/Testimonial';
import Video from '@/components/home/Video';
import FAQ from '@/components/home/FAQ';
import Counter from '@/components/home/Counter';
import VisaConsultency from '@/components/home/VisaConsultency';
import Brand from '@/components/home/Brand';
import News from '@/components/home/News';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Feature />
      <Testimonial />
      <Video />
      <FAQ />
      <Counter />
      <VisaConsultency />
      <Brand />
      <News />
    </main>
  );
}
