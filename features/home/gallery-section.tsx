'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useListGallery } from '../gallery/api/use-list-gallery';
import { GalleryImage } from '../gallery/components/gallery-image';

export function GallerySection() {
  const { data, isPending, isError } = useListGallery({ limit: 6, page: 1 });
  if (isPending) return null;
  if (isError) return null;
  if (!data?.images?.length) return null;
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Photo Gallery
            </h2>
            <p className="text-muted-foreground">
              Moments from our mission and community work
            </p>
          </div>
          <Link
            href="/media/gallery"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark transition-smooth font-semibold"
          >
            View Gallery
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {data.images.map((item, index) => (
            <GalleryImage key={item._id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
