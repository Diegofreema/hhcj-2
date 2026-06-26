'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import SplitText from '@/features/shared/components/animated-text';
import CountUp from '@/features/shared/components/count-up';
import { PageHero } from '@/features/shared/components/page-hero';
import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-100px' },
  transition: { staggerChildren: 0.15, delayChildren: 0.2 },
};

const locations = [
  'San Maurizio (Cologno Monzese)',
  'Trezzano sul Naviglio (Milan)',
  'Rome – Mission House',
];

const apostolates: Array<{ title: string; description: string }> = [
  {
    title: 'Education',
    description:
      'Teaching and formation from nursery to higher education; catechesis and pastoral accompaniment. Preparing students with confidence and compassion.',
  },
  {
    title: 'Healthcare',
    description:
      'Christ’s healing ministry across clinics, hospitals and community settings; medical care, emotional support, and spiritual guidance.',
  },
  {
    title: 'Social Work',
    description:
      'Justice, dignity, and self-sufficiency for vulnerable populations; family support, employment opportunities, and empowerment of women and youth.',
  },
];

const gallery = [
  {
    src: '/italy.jpg',
    caption: 'Community life – Italy Mission',
  },
  {
    src: '/italy2.jpg',
    caption: 'Missionary gathering – Italy',
  },
  { src: '/italy3.jpg', caption: 'Sisters in fellowship' },
  { src: '/italy4.jpg', caption: 'Pilgrimage – Rome' },
  { src: '/italy5.jpg', caption: 'Basilica visit – Rome' },
  { src: '/italy6.jpg', caption: 'Mission house community' },
];

export default function ItalyClientPage() {
  const years = new Date().getFullYear() - 1991;
  return (
    <div className="w-full">
      <PageHero
        title="HHCJ Italian Mission"
        description="Rooted in Love & Service — since April 1991"
      />

      <motion.section
        className="py-16 bg-background"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={fadeInUp}
          >
            <SplitText
              text="A Brief History of the Italian Mission"
              tag="h2"
              className="text-4xl font-bold text-foreground mb-4"
            />
            <SplitText
              text="Serving with compassion in Italy — education, healthcare, and social work."
              tag="p"
              className="text-muted-foreground"
            />
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto mt-10 space-y-6"
            variants={staggerContainer}
          >
            <motion.p
              className="text-muted-foreground leading-relaxed text-lg"
              variants={fadeInUp}
            >
              The Italian Mission has its roots in the selfless service of our
              Handmaid Sisters, who arrived in April 1991 at the invitation of
              Monsignor Luigi Olgiati, parish priest of Sesto San Giovanni.
              Initially, the Sisters took over the management of a nursery
              school and provided nursing care at the La Pelucca geriatric
              institute, responding to the needs of the local community.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed text-lg"
              variants={fadeInUp}
            >
              Over time, the mission evolved, and we are now present in San
              Maurizio (Cologno Monzese), Trezzano sul Naviglio in Milan, and
              Rome where we have the Mission House.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-linear-to-b from-primary/5 to-background"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-foreground mb-8 pb-4 border-b border-primary/20"
            variants={fadeInUp}
          >
            Apostolate — Love & Service
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {apostolates.map((a) => (
              <motion.div
                key={a.title}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">{a.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {a.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-background"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-foreground mb-8 pb-4 border-b border-primary/20"
            variants={fadeInUp}
          >
            Presence & Locations
          </motion.h2>
          <motion.div
            className="flex flex-wrap gap-3"
            variants={staggerContainer}
          >
            {locations.map((l) => (
              <motion.span
                key={l}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary"
              >
                {l}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-linear-to-b from-primary/5 to-background"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-foreground mb-8 pb-4 border-b border-primary/20"
            variants={fadeInUp}
          >
            Impact at a Glance
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-muted-foreground text-sm">
                  Years in Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CountUp
                  to={years}
                  className="text-4xl font-bold text-primary"
                />
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-muted-foreground text-sm">
                  Cities of Presence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CountUp to={3} className="text-4xl font-bold text-primary" />
              </CardContent>
            </Card>
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-muted-foreground text-sm">
                  Core Apostolates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CountUp to={3} className="text-4xl font-bold text-primary" />
              </CardContent>
            </Card>
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-background"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold text-foreground mb-8 pb-4 border-b border-primary/20"
            variants={fadeInUp}
          >
            Photo Gallery
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.map((g) => (
              <motion.div
                key={g.src}
                className="relative overflow-hidden rounded-xl border border-primary/20 shadow-lg"
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative aspect-square">
                  <Image
                    src={g.src}
                    alt="HHCJ missionary life in Italy"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={false}
                  />
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{g.caption}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-linear-to-b from-primary/5 to-background"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-lg p-8 text-center"
            variants={fadeInUp}
          >
            <SplitText
              text="“Love & Service”"
              tag="h3"
              className="text-2xl font-semibold text-primary mb-4"
            />
            <p className="text-muted-foreground">
              Guided by Gospel values, we work collaboratively with local Church
              leaders, communities, and laity to build a more just and
              compassionate society.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
