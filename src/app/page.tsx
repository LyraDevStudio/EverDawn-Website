import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { FeaturesGrid } from '@/components/sections/FeaturesGrid';
import { StepList } from '@/components/sections/StepList';
import { Gallery } from '@/components/sections/Gallery';
import { CommunityCtas } from '@/components/sections/CommunityCtas';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { Footer } from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <FeaturesGrid />
        <StepList />
        <Gallery />
        <CommunityCtas />
        <FaqAccordion />
      </main>
      <Footer />
    </>
  );
}
