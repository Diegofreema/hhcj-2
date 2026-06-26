'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { useListNews } from '../news/api/use-list-news';
import { NewsCard } from '../news/components/news-card';

const newsItems = [
  {
    id: 1,
    title: 'New Healthcare Initiative Launched',
    excerpt:
      'We are proud to announce the launch of our comprehensive healthcare program reaching 5000+ families',
    date: 'December 10, 2024',
    image: '/healthcare-initiative.jpg',
    slug: 'healthcare-initiative',
  },
  {
    id: 2,
    title: 'Educational Excellence Awards',
    excerpt:
      'Our students and educators recognized for outstanding achievements in academic excellence',
    date: 'December 5, 2024',
    image: '/education-awards.jpg',
    slug: 'education-awards',
  },
  {
    id: 3,
    title: 'Community Outreach Success',
    excerpt:
      'Record-breaking participation in our annual community service and outreach programs',
    date: 'November 28, 2024',
    image: '/community-outreach.jpg',
    slug: 'community-outreach',
  },
];

export function NewsSection() {
  const { data, isPending, isError } = useListNews({
    page: 1,
    limit: 3,
  });

  if (isPending) return null;
  if (isError) return null;
  if (!data?.news?.length) return null;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Latest News
            </h2>
            <p className="text-muted-foreground">
              Stay updated with our latest initiatives and achievements
            </p>
          </div>
          <Link
            href="/news"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark transition-smooth font-semibold"
          >
            View All News
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {data?.news.map((news, index) => (
            <NewsCard key={news._id} news={news} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 md:hidden text-center"
        >
          <Link
            href="/news"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-smooth font-semibold"
          >
            All News
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
