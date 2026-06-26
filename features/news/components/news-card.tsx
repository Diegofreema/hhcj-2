import { createExcerpt } from '@/lib/utils';
import { NewsType } from '../types';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { url } from '@/lib/constants/constants';
interface NewsCardProps {
  news: NewsType;
  index: number;
}

export const NewsCard = ({ news, index }: NewsCardProps) => {
  // Safe image access
  const imageSrc =
    news.images && news.images.length > 0
      ? `${url}${news.images[0].url}`
      : '/placeholder.svg';

  // Format Date
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

  const excerpt = createExcerpt(news.content, 30);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group bg-muted/50 border border-futuristic rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-smooth"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <Image
          src={imageSrc}
          alt={news.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Category Badge */}
        {news.newsTag && (
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full shadow-lg">
              {news.newsTag}
            </span>
          </div>
        )}
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
          <Calendar size={16} />
          <span>{formatDate(news.createdAt)}</span>
        </div>
        <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-smooth line-clamp-2">
          {news.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
          {excerpt}
        </p>
        <Link
          href={`/news/${news._id}`} // Assuming ID based routing
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-smooth font-semibold text-sm group/link"
        >
          Read More
          <ArrowRight
            size={16}
            className="group-hover/link:translate-x-1 transition-transform"
          />
        </Link>
      </div>
    </motion.article>
  );
};
