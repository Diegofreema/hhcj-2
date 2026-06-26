'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PageHero } from '@/features/shared/components/page-hero';
import Image from 'next/image';

const missions = [
  {
    name: 'England Mission',
    description: 'Our presence and work in England',
    href: '/our-works/missionary/england',
  },
  {
    name: 'USA Mission',
    description: 'Our presence and work in the United States',
    href: '/our-works/missionary/usa',
  },
  {
    name: 'Germany Mission',
    description: 'Our presence and work in Germany',
    href: '/our-works/missionary/germany',
  },
  {
    name: 'Italy Mission',
    description: 'Our presence and work in Italy',
    href: '/our-works/missionary/italy',
  },
  {
    name: 'Cameroon Mission',
    description: 'Our presence and work in Cameroon',
    href: '/our-works/missionary/cameroon',
  },
];

export default function MissionaryClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Missionary Apostolate"
        description="Global mission work across continents"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6 text-balance">
                Missionary Apostolate Ministry
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  As members of the Church which is missionary in nature, we
                  undertake missionary apostolate by readily and willingly going
                  forth to manifest God&apos;s love in His people, even &quot;to
                  the ends of the earth&quot;. In our missionary apostolic
                  activities, we try to adapt to local conditions and identify
                  with the people, after the example of Mother Mary Charles
                  Walker, our Foundress.
                </p>
                <div className="pt-6 border-t border-primary/20">
                  <p className="text-sm font-semibold text-primary mb-2">
                    Our Commitment
                  </p>
                  <p>
                    We are dedicated to spreading compassion, faith, and service
                    across diverse communities worldwide, embodying the
                    missionary spirit and transforming lives through love and
                    spiritual guidance.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-96"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent rounded-xl blur-xl"></div>
              <Image
                src="/h-2.jpg"
                alt="Missionary apostolate - spreading God's love"
                className="relative w-full h-96 object-cover rounded-xl border-futuristic shadow-lg shadow-primary/20"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Global Presence
            </h2>
            <p className="text-muted-foreground">
              We have established missions across multiple continents, serving
              diverse communities and spreading our message of compassion and
              service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {missions.map((mission, index) => (
              <motion.div
                key={mission.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-6 bg-muted/50 border-futuristic rounded-lg hover:shadow-lg hover:shadow-primary/10 transition-smooth"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {mission.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {mission.description}
                </p>
                <Link
                  href={mission.href}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-smooth font-semibold text-sm"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
