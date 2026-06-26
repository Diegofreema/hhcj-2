'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, ImageIcon, FileText, Newspaper } from 'lucide-react';
import { FaNewspaper } from 'react-icons/fa';

const mediaOptions = [
  {
    icon: ImageIcon,
    title: 'Photo Gallery',
    description:
      'Browse our collection of photos from events, programs, and community activities',
    href: '/media/gallery',
  },
  {
    icon: FaNewspaper,
    title: 'News',
    description:
      'Check out our latest news and stay connected with the latest update',
    href: '/news',
  },
  {
    icon: Newspaper,
    title: 'Newsletter',
    description:
      'Subscribe to our newsletter for updates on our mission and initiatives',
    href: '/media/newsletter',
  },
  {
    icon: FileText,
    title: 'Publications',
    description: 'Access our reports, articles, and educational materials',
    href: '/media/publications',
  },
];

export default function MediaClient() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {mediaOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-6 bg-muted/50 border-futuristic rounded-lg hover:shadow-lg hover:shadow-primary/10 transition-smooth"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-smooth">
                  <Icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {option.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {option.description}
                </p>
                <Link
                  href={option.href}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-smooth font-semibold text-sm"
                >
                  Explore
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
