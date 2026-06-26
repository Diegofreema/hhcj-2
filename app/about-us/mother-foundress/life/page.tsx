import { PageHero } from '@/features/shared/components/page-hero';
import { MotherFoundressLifeClient } from './_component/life-client';

export const metadata = {
  title: 'Life of Mary Charles Magdalen Walker - HHCJ Foundation',
  description: 'The life and legacy of our Mother Foundress',
};

export default function MotherFoundressLifePage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Life of Mary Charles Magdalen Walker"
        description="A journey of faith, service, and transformative mission"
      />
      <MotherFoundressLifeClient />
    </div>
  );
}
