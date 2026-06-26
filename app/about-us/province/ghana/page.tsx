import GhanaClientPage from './_components/ghana-client';

export const metadata = {
  title: 'Ghana Province History - HHCJ Foundation',
  description: 'The early history and development of the HHCJ in Ghana',
};

export default function GhanaProvincePage() {
  return (
    <div className="min-h-screen bg-background">
      <GhanaClientPage />
    </div>
  );
}
