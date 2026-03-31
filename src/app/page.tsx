
import { Header } from '@/components/landing/Header';
import { Hero } from '@/components/landing/Hero';
import { Authority } from '@/components/landing/Authority';
import { Services } from '@/components/landing/Services';
import { Differentials } from '@/components/landing/Differentials';
import { About } from '@/components/landing/About';
import { CTASection } from '@/components/landing/CTASection';
import { Footer } from '@/components/landing/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Authority />
        <Services />
        <Differentials />
        <CTASection />
        <About />
      </main>
      <Footer />
    </div>
  );
}
