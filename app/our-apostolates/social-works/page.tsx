import { PageHero } from '@/features/shared/components/page-hero';
import { SocialWorksClient } from './_component/social-works-client';

export const metadata = {
  title: 'Social Works - HHCJ Foundation',
  description: 'Our social development and community programs',
};

export default function SocialWorksPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Social Works"
        description="Community development and social empowerment"
      />
      <SocialWorksClient />
    </div>
  );
}
