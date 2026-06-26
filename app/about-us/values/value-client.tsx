'use client';

import { PageHero } from '@/features/shared/components/page-hero';
import { values } from '@/lib/constants/data';
import { motion } from 'framer-motion';
import {
  HandHelping,
  HandIcon,
  Handshake,
  Heart,
  HospitalIcon,
  Lightbulb,
  Shield,
  ThumbsUpIcon,
  Users,
} from 'lucide-react';
import Image from 'next/image';

export default function ValuesClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Our Core Values"
        description="The principles that guide our mission"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className={'container mx-auto px-4 max-w-3xl mb-5 mt-10'}>
            <div
              className={
                'relative h-[400px] w-[300px] mb-10 mx-auto  overflow-hidden rounded-lg border-futuristic  bg-muted/50'
              }
            >
              <Image
                src={'/values.jpg'}
                fill
                alt={'our-team'}
                className={
                  'object-cover group-hover:scale-110 transition-transform duration-500'
                }
              />

              {/* Overlay effect */}
              <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group p-6 bg-muted/50 border-futuristic flex flex-col items-center justify-center rounded-lg hover:shadow-lg hover:shadow-primary/10 transition-smooth"
                >
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="text-foreground" size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
