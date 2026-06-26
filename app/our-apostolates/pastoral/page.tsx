import { PageHero } from '@/features/shared/components/page-hero';
import { PastoralClientPage } from './_components/pastoral-client';

export const metadata = {
  title: 'Pastoral Apostolates - HHCJ Foundation',
  description: 'Our spiritual and pastoral programs',
};

export default function PastoralPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Pastoral Apostolates"
        description="Spiritual guidance and pastoral care"
      />

      <PastoralClientPage />
    </div>
  );
}
