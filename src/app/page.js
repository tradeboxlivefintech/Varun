import Hero from '@/components/homepage/herosection/Hero';
import About from '@/components/homepage/aboutsection/About';
import Services from '@/components/homepage/servicesection/Services';
import WhyChoose from '@/components/homepage/whysection/WhyChoose';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyChoose />
      <Services />
    </>
  );
}
