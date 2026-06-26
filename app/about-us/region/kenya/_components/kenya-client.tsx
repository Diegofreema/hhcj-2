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

const timeline: Array<{ date: string; title: string; description: string }> = [
  {
    date: 'Jan 4, 1989',
    title: 'Arrival in Kenya',
    description:
      'Four Sisters—Sr. Mary Chokpa, Sr. Augustina Eke, Sr. Agnes Nnodi, and Sr. Christina Odoh—arrived in Eldoret at the invitation of Rt. Rev. John Njenga.',
  },
  {
    date: 'Sep 13, 1989',
    title: 'First Convent Opened',
    description:
      'HHCJ Kaptagat Community in Eldoret Diocese was officially and canonically opened.',
  },
  {
    date: 'May 9, 1990',
    title: 'Second Community: Bura, Taita',
    description:
      'Sisters Patricia Okwuo, Rosemary Chiemeke, and Agnes Nnodu established HHCJ Bura Community and served at St. Mary’s TTC.',
  },
  {
    date: '1994–1995',
    title: 'Expansion to Majengo, Eldoret',
    description:
      'With Bishop Cornelius Korir’s encouragement, Sisters took over a nursery school; HHCJ Majengo Convent opened March 3, 1995.',
  },
  {
    date: '1998',
    title: 'Projects in Eldoret',
    description:
      'Ancilla Vocational Institute, Our Lady of Assumption Academy, St. Brigitta’s Hospital and diocesan projects expanded the mission.',
  },
  {
    date: '1999',
    title: 'Vocation Boom',
    description:
      'First four Kenyan aspirants sent to Nigeria for formation; steady vocations followed, leading to many professed Kenyan Sisters.',
  },
  {
    date: 'Feb 4, 2000',
    title: 'Kalimoni Community, Nairobi',
    description:
      'Dispensary and girls’ boarding facility taken over; later grew into a Level 4 hospital and a rehabilitation home for street boys.',
  },
  {
    date: 'Apr 23, 2003–2005',
    title: 'Kiembeni Community, Mombasa',
    description:
      'Convent and vocational centre established in Kiembeni; Bura Community closed thereafter.',
  },
  {
    date: 'Jun 25, 2008',
    title: 'Kenya Region Inaugurated',
    description:
      'HHCJ Kenya Mission elevated and officially inaugurated as a Region; Sr. Rosemary Chiemeke became first Regional Superior.',
  },
  {
    date: 'Present',
    title: 'Growth Across Dioceses',
    description:
      'Active presence in Eldoret, Mombasa, Nairobi, Kakamega, Ngong, and Singida (TZ) with 10 convents.',
  },
];

const stats: Array<{ label: string; value: number; suffix?: string }> = [
  { label: 'Convents', value: 10 },
  { label: 'Dioceses Served', value: 6 },
  {
    label: 'Years of Mission',
    value: new Date().getFullYear() - 1989,
    suffix: '+',
  },
];

const dioceses = [
  'Eldoret',
  'Mombasa',
  'Nairobi',
  'Kakamega',
  'Ngong',
  'Singida (TZ)',
];

const leadership: Array<{ name: string; role: string }> = [
  { name: 'Sister Juliana Mose, HHCJ', role: 'Regional Superior' },
  { name: 'Sister Luciana Agba, HHCJ', role: '1st Councillor' },
  { name: 'Sister Stella Cherobon, HHCJ', role: '2nd Councillor' },
  { name: 'Sister Marietta Mutio, HHCJ', role: '3rd Councillor' },
];

export default function KenyaClientPage() {
  return (
    <div className="w-full">
      <PageHero
        title="HHCJ Kenya Region"
        description="A journey of mission and growth, 1989 — present"
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
              text="A Brief History"
              tag="h2"
              className="text-4xl font-bold text-foreground mb-4"
            />
            <SplitText
              text="The Handmaids of the Holy Child Jesus in Kenya"
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
              The Handmaids of the Holy Child Jesus arrived in Kenya on January
              4, 1989, invited by Rt. Rev. Bishop John Njenga of Eldoret. The
              pioneering Sisters—Sr. Mary Chokpa, Sr. Augustina Eke, Sr. Agnes
              Nnodi, and Sr. Christina Odoh—embraced temporary roles as nurses,
              teachers, and catechists until the first convent was opened on
              September 13, 1989 at Kaptagat, Eldoret Diocese.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed text-lg"
              variants={fadeInUp}
            >
              In May 1990, the Archdiocese of Mombasa welcomed a second group of
              missionaries to St. Mary’s TTC, Bura, where HHCJ Bura Community
              was established. Under Sisters Patricia Okwuo and Louise
              Onyeanusi, the mission grew steadily, expanding its reach to
              communities across Kenya.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed text-lg"
              variants={fadeInUp}
            >
              By 1994, with permission to run an existing nursery school in
              Majengo parish, the mission extended to Eldoret town. HHCJ Majengo
              Convent was blessed on March 3, 1995. Subsequent years saw
              flourishing projects including Ancilla Vocational Training
              Institute, Our Lady of Assumption Academy, and St. Brigitta’s
              Catholic Hospital.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed text-lg"
              variants={fadeInUp}
            >
              Growing visibility inspired local vocations: in 1999 the first
              Kenyan aspirants began formation in Nigeria, followed by a steady
              yearly stream to Nigeria or Ghana, culminating in many professed
              Kenyan Sisters today.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed text-lg"
              variants={fadeInUp}
            >
              In 2000, the Congregation was missioned to Kalimoni in the Nairobi
              Archdiocese, taking over a dispensary and girls’ boarding
              facility. These evolved into a Level 4 hospital and a
              rehabilitation home for street boys, offering shelter, healing,
              and family reintegration.
            </motion.p>
            <motion.p
              className="text-muted-foreground leading-relaxed text-lg"
              variants={fadeInUp}
            >
              On April 23, 2003, permission was granted to develop a youth
              vocational centre and convent in Kiembeni, Mombasa, with official
              opening on April 23, 2005. In 2008, the Kenya Mission was elevated
              to regional status; on June 25, 2008, the Kenya Region was
              officially inaugurated, marking a milestone of growth and
              maturity.
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
            Our Journey in Pictures
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: '/kenya.jpg', alt: 'HHCJ Kenya Mission' },
              { src: '/kenya1.jpg', alt: 'Sisters at Work' },
              { src: '/kenya2.jpg', alt: 'Community Outreach' },
              { src: '/kenya3.jpg', alt: 'Educational Programs' },
              { src: '/kenya4.jpg', alt: 'Healthcare Services' },
            ].map((image, index) => (
              <motion.div
                key={image.src}
                variants={fadeInUp}
                className="relative h-[300px] group overflow-hidden rounded-lg border border-primary/20 bg-muted/50"
              >
                <Image
                  src={image.src}
                  fill
                  alt={image.alt}
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
          <motion.h2
            className="text-4xl font-bold text-foreground mb-8 pb-4 border-b border-primary/20"
            variants={fadeInUp}
          >
            Milestones Timeline
          </motion.h2>
          <motion.div
            className="relative max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-primary/20" />
            <div className="space-y-10">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.title + idx}
                  className="grid md:grid-cols-2 gap-6 items-start"
                  variants={fadeInUp}
                >
                  <div className="md:text-right">
                    <p className="text-sm text-muted-foreground">{item.date}</p>
                    <p className="text-xl font-semibold text-foreground">
                      {item.title}
                    </p>
                  </div>
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
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
            Impact at a Glance
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((s, i) => (
              <Card key={s.label + i} className="border-primary/20">
                <CardHeader>
                  <CardTitle className="text-muted-foreground text-sm">
                    {s.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CountUp
                    to={s.value}
                    className="text-4xl font-bold text-primary"
                  />
                </CardContent>
              </Card>
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
          <motion.h2
            className="text-4xl font-bold text-foreground mb-8 pb-4 border-b border-primary/20"
            variants={fadeInUp}
          >
            Dioceses Served
          </motion.h2>
          <motion.div
            className="flex flex-wrap gap-3"
            variants={staggerContainer}
          >
            {dioceses.map((d) => (
              <motion.span
                key={d}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary"
              >
                {d}
              </motion.span>
            ))}
          </motion.div>
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
            Current Leadership Team
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((l) => (
              <motion.div
                key={l.name}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="border-primary/20">
                  <CardHeader>
                    <CardTitle className="text-xl">{l.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{l.role}</p>
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
          <motion.div
            className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-lg p-8 text-center"
            variants={fadeInUp}
          >
            <SplitText
              text="“The work of God must be done at all costs, no matter the inconvenience.”"
              tag="h3"
              className="text-2xl font-semibold text-primary mb-4"
            />
            <p className="text-muted-foreground">
              Inspired by our Mother Foundress, the Kenya Region continues in
              faith and service.
            </p>
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        className="py-20 bg-background text-center"
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
      >
        <div className="container mx-auto px-4">
          <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8" />
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            United in mission, the Handmaids serve communities through
            education, healthcare, and pastoral care across Kenya and beyond.
          </p>
        </div>
      </motion.section>
    </div>
  );
}
