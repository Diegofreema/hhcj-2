import { PageHero } from '@/features/shared/components/page-hero';
import { EducationClientPage } from './_components/education-client';

export const metadata = {
  title: 'Education - HHCJ Foundation',
  description:
    'Our comprehensive educational programs and initiatives across multiple levels',
};

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Education & Formation"
        description="Shaping minds, building futures, transforming lives"
      />
      <EducationClientPage />
    </div>
  );
}
