import ItalyClientPage from './_components/italy-client';

export const metadata = {
  title: 'Italy Mission – HHCJ',
  description:
    'History and apostolic presence of the Handmaids of the Holy Child Jesus in Italy, rooted in Love & Service.',
};

export default function ItalyPage() {
  return (
    <div className="min-h-screen bg-background">
      <ItalyClientPage />
    </div>
  );
}
