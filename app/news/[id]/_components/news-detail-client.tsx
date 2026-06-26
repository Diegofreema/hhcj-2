'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, ArrowLeft, Loader2, X } from 'lucide-react';
import { useGetSingleNews } from '@/features/news/api/use-get-single-news';
import { url } from '@/lib/constants/constants';

interface NewsDetailClientProps {
  id: string;
}

export default function NewsDetailClient({ id }: NewsDetailClientProps) {
  const { data, isLoading, isError, refetch } = useGetSingleNews(id);

  const formatDate = (dateString: string) => {
    try {
      return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }).format(new Date(dateString));
    } catch (e) {
      return dateString;
    }
  };

  if (isLoading) {
    return (
      <main className="min-h-screen bg-background">
        <div className="flex justify-center items-center py-40">
          <Loader2 className="h-10 w-10 animate-spin text-primary" />
        </div>
      </main>
    );
  }

  if (isError || !data?.news) {
    return (
      <main className="min-h-screen bg-background">
        <div className="text-center py-40">
          <div className="inline-flex items-center justify-center p-4 bg-red-100 rounded-full mb-4">
            <X className="h-8 w-8 text-red-500" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">
            Something went wrong
          </h3>
          <p className="text-muted-foreground text-lg mb-6">
            Failed to load news article.
          </p>
          <button
            onClick={() => refetch()}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-smooth"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  const news = data.news;
  const imageSrc =
    news.images && news.images.length > 0
      ? `${url}${news.images[0].url}`
      : '/placeholder.svg';

  return (
    <main className="min-h-screen bg-background">
      {/* Back Button */}
      <section className="py-6 bg-background border-b border-futuristic sticky top-0 z-40 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth font-semibold"
          >
            <ArrowLeft size={20} />
            Back to News
          </Link>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={news.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-background via-background/50 to-transparent" />

        {/* Category Badge */}
        {news.newsTag && (
          <div className="absolute top-8 right-8">
            <span className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-full shadow-lg">
              {news.newsTag}
            </span>
          </div>
        )}
      </section>

      {/* Article Content */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Date */}
            <div className="flex items-center gap-2 text-muted-foreground text-sm mb-6">
              <Calendar size={16} />
              <span>{formatDate(news.createdAt)}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8 leading-tight">
              {news.title}
            </h1>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none text-foreground prose-headings:text-foreground prose-p:text-muted-foreground prose-a:text-primary prose-strong:text-foreground prose-ul:text-muted-foreground prose-ol:text-muted-foreground"
              dangerouslySetInnerHTML={{ __html: news.content }}
            />

            {/* Additional Images */}
            {news.images && news.images.length > 1 && (
              <div className="mt-12 space-y-6">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Gallery
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {news.images.slice(1).map((image) => (
                    <div
                      key={image._id}
                      className="relative h-64 rounded-lg overflow-hidden"
                    >
                      <Image
                        src={image.url}
                        alt={image.originalName}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.article>
        </div>
      </section>

      {/* Back to News CTA */}
      <section className="py-12 bg-muted/30 border-t border-futuristic">
        <div className="container mx-auto px-4 text-center">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-smooth font-semibold"
          >
            <ArrowLeft size={20} />
            View All News
          </Link>
        </div>
      </section>
    </main>
  );
}
