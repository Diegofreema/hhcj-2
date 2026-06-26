import { PageHero } from '@/features/shared/components/page-hero';
import { HealthcareClientPage } from './_components/healthcare-component';

export const metadata = {
  title: 'Healthcare - HHCJ Foundation',
  description: 'Our healthcare programs and services',
};

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Healthcare"
        description="Providing compassionate healthcare services"
      />
      <HealthcareClientPage />
    </div>
  );
}
