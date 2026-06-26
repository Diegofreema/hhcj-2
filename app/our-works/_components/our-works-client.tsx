'use client';

import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';
import { PageHero } from '@/features/shared/components/page-hero';

export default function OurWorksClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Our Works"
        description="Transforming lives through dedicated service and compassion"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <div className="p-6 bg-primary/10 rounded-full w-fit mx-auto mb-6">
              <Construction className="text-primary" size={64} />
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Coming Soon..
            </h2>
            <p className="text-muted-foreground text-lg">
              We're working hard to bring you an inspiring showcase of our works
              and projects. Check back soon to see how we're making a difference
              in communities around the world.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
