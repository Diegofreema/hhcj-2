import { Metadata } from 'next';
import MotherFoundressSayingsClient from './_components/sayings-client';

export const metadata: Metadata = {
  title: 'Mother Foundress Sayings - HHCJ Foundation',
  description: 'Inspirational wisdom from our Mother Foundress',
};

export default function MotherFoundressSayingsPage() {
  return <MotherFoundressSayingsClient />;
}
