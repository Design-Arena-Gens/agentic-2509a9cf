import { Hero } from '../components/Hero';
import { FeatureGrid } from '../components/FeatureGrid';
import { MarketSection } from '../components/MarketSection';
import { Testimonials } from '../components/Testimonials';
import { Pricing } from '../components/Pricing';
import { Footer } from '../components/Footer';

export default function Page() {
  return (
    <main className="min-h-screen relative">
      <Hero />
      <FeatureGrid />
      <MarketSection />
      <Testimonials />
      <Pricing />
      <Footer />
    </main>
  );
}
