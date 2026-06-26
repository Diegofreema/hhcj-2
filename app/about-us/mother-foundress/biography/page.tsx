import { PageHero } from '@/features/shared/components/page-hero';
import { MotherFoundressBiographyClient } from './_components/biography-client';

export const metadata = {
  title: 'Biography of Mother Mary Charles Magdalen Walker - HHCJ',
  description:
    'The biography of our Mother Foundress, Mary Charles Magdalen Walker.',
};

export default function MotherFoundressBiographyPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Biography of Mother Mary Charles Magdalen Walker"
        description="Reading the life history of our Mother Foundress"
      />
      <MotherFoundressBiographyClient />
    </div>
  );
}
