import { ContactSection } from '@/features/home/contact-section';
import { EventsSection } from '@/features/home/event-section';
import { GallerySection } from '@/features/home/gallery-section';
import { HeroCarousel } from '@/features/home/home-carousel';
import { MotherFoundressSection } from '@/features/home/mission-foundress-section';
import { MissionVisionSection } from '@/features/home/mission-vision-section';
import { NewsSection } from '@/features/home/news-section';
import { ValuesSection } from '@/features/home/values-section';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <HeroCarousel />
      <MissionVisionSection />
      <ValuesSection />
      <EventsSection />
      <NewsSection />
      <MotherFoundressSection />
      {/* <ProjectsSection /> */}
      <GallerySection />
      <ContactSection />
    </div>
  );
}
