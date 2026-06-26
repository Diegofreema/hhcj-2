import { Metadata } from 'next';
import { MissionVisionClientPage } from '@/app/about-us/mission-vision/mission-vision-client';

export const metadata: Metadata = {
  title: 'Mission and Vision - HHCJ Foundation',
  description: 'Our mission and vision for a better world',
};

export default function MissionVisionPage() {
  return <MissionVisionClientPage />;
}
