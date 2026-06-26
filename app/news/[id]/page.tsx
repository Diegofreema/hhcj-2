import NewsDetailClient from './_components/news-detail-client';

interface NewsDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { id } = await params;
  return <NewsDetailClient id={id} />;
}
