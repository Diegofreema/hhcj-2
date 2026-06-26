import { NorthWesternClientPage } from './_components/client';

export const metadata = {
  title: 'North Western Province - HHCJ Foundation',
  description:
    'The History of the Congregation of the Handmaids of the Holy Child Jesus, North Western Province',
};

export default function NorthWesternProvincePage() {
  return (
    <div className="min-h-screen bg-background">
      <NorthWesternClientPage />
    </div>
  );
}
