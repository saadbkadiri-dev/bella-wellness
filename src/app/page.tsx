import HeroSection from '@/components/home/HeroSection';
import IntroStrip from '@/components/home/IntroStrip';
import ServicesGrid from '@/components/home/ServicesGrid';
import WhyBellaPillars from '@/components/home/WhyBellaPillars';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <IntroStrip />
      <ServicesGrid />
      <WhyBellaPillars />
    </main>
  );
}
