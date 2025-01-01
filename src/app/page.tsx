import { Banner } from '@/components/Banner';
import { CallToAction } from '@/components/CallToAction';
import { FAQs } from '@/components/FAQs';
import { Features } from '@/components/Features';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { LogoTicker } from '@/components/LogoTicker';
import { Navbar } from '@/components/Navbar';
import { ProductShowcase } from '@/components/ProductShowcase';
import { Analytics } from "@vercel/analytics/react"
export default function Home() {
  return (
    <>
       <Analytics />
      <Banner />
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <ProductShowcase />
      <FAQs />
      <CallToAction />
      <Footer />
    </>
  );
}
