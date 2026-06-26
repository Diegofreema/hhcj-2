import KenyaClientPage from './_components/kenya-client';

export const metadata = {
  title: 'Kenya Region History - HHCJ',
  description:
    'A modern, animated overview of the HHCJ Kenya Region: milestones, impact, dioceses, and leadership.',
};

export default function KenyaPage() {
  return (
    <div className="min-h-screen bg-background">
      <KenyaClientPage />
    </div>
  );
}
