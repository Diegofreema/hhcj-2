'use client';

import AnimatedContent from '@/features/shared/components/animated-content';
import Stack from '@/features/shared/components/stack-cards';
import { useWindowSize } from '@/features/shared/hooks/use-window-size';
import { services } from '@/lib/constants/data';
import { motion } from 'framer-motion';
import { Heart, Stethoscope, Users } from 'lucide-react';
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { staggerChildren: 0.1, delayChildren: 0.2 },
};

const facilityCategories = [
  {
    title: 'Hospitals',
    icon: Stethoscope,
    facilities: [
      'Calabar Hospital, Calabar, Nigeria',
      'Holy Child Hospital, Ikom, Nigeria',
      'Ancilla Hospital, Obudu, Nigeria',
      'Ndon Ebom Maternity Hospital, Akwa Ibom, Nigeria',
      'Ikon Hospital, Cameroon',
    ],
  },
  {
    title: 'Clinics & Dispensaries',
    icon: Heart,
    facilities: [
      'Primary Health Care Centers (Multiple locations)',
      'Community Health Clinics across Nigeria',
      'Mobile Health Clinics for remote areas',
      'Maternal & Child Health Centers',
      'Specialized Clinics in Kenya and Ghana',
    ],
  },
  {
    title: 'Specialized Services',
    icon: Users,
    facilities: [
      'Maternity Homes providing maternal care',
      'Homes for the Aged with dedicated nursing',
      'Hospice Services for the terminally ill',
      'Home-Based Nursing Programs',
      'Health Education & Preventive Care Programs',
    ],
  },
];
const images = [
  {
    id: 1,
    img: '/p.jpeg',
  },
  {
    id: 2,
    img: '/p1.jpg',
  },
  {
    id: 3,
    img: '/p2.jpg',
  },
];
export function HealthcareClientPage() {
  const windowSize = useWindowSize();
  const windowWidth = windowSize?.width || 0;
  const isLargeScreen = windowWidth >= 1024;
  const isTablet = windowWidth >= 500 && windowWidth < 1024;

  console.log({ windowSize });
  const height = isLargeScreen || isTablet ? 500 : 300;
  const width = isLargeScreen || isTablet ? 500 : 300;

  return (
    <div className="bg-background">
      {/* Main Healthcare Section with Image */}
      <motion.section
        className="py-20 bg-linear-to-b from-background via-background to-primary/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div
              className="space-y-6"
              variants={fadeInUp}
              initial="initial"
              whileInView="whileInView"
            >
              <div className="space-y-4">
                <motion.h2
                  className="text-4xl md:text-5xl font-bold text-foreground leading-tight"
                  variants={fadeInUp}
                >
                  Our <span className="text-primary">Healthcare</span> Mission
                </motion.h2>
                <motion.div
                  className="h-1 w-20 bg-linear-to-r from-primary to-primary/50"
                  variants={fadeInUp}
                />
              </div>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                variants={fadeInUp}
              >
                Our health facilities, like all other apostolates, are faith
                based, providing medical care for all, without discrimination.
                The goal is to provide affordable basic health care for the
                people of the area and its environs, especially the women and
                children, the poor and the under privileged.
              </motion.p>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                variants={fadeInUp}
              >
                Our hospitals are non-governmental and non-profit facilities.
                Through medical services, we participate in the healing ministry
                of Christ and serve the sick and suffering with love, patience
                and sympathy through improved health-care services in Clinics,
                Dispensaries, Primary Health Care Programmes, Maternity Homes,
                Homes for the aged, hospice and hospitals.
              </motion.p>

              <motion.p
                className="text-lg text-muted-foreground leading-relaxed"
                variants={fadeInUp}
              >
                Home-based nursing is also within our ministry, as we work for
                the spiritual and material well-being of all without
                discrimination.
              </motion.p>

              {/* Key Stats */}
              {/* <motion.div
                className="grid grid-cols-2 gap-4 pt-6"
                variants={staggerContainer}
                initial="initial"
                whileInView="whileInView"
              >
                <motion.div
                  className="bg-primary/10 border border-primary/20 rounded-lg p-4"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(0, 179, 255, 0.15)',
                  }}
                >
                  <p className="text-3xl font-bold text-primary">15+</p>
                  <p className="text-sm text-muted-foreground">
                    Healthcare Facilities
                  </p>
                </motion.div>
                <motion.div
                  className="bg-primary/10 border border-primary/20 rounded-lg p-4"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: 'rgba(0, 179, 255, 0.15)',
                  }}
                >
                  <p className="text-3xl font-bold text-primary">50K+</p>
                  <p className="text-sm text-muted-foreground">
                    People Served Annually
                  </p>
                </motion.div>
              </motion.div> */}
            </motion.div>

            <Stack cardsData={images} cardDimensions={{ height, width }} />
          </div>
        </div>
      </motion.section>

      {/* Healthcare Facilities */}
      <motion.section
        className="py-20 bg-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our <span className="text-primary">Healthcare</span> Facilities
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-linear-to-r from-primary to-primary/50" />
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {facilityCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-linear-to-r from-white/5 to-white/10 border border-primary/20 rounded-xl p-8 hover:border-primary/40 transition-all"
                  whileHover={{
                    y: -10,
                    boxShadow: '0 20px 40px rgba(0, 179, 255, 0.1)',
                  }}
                  variants={fadeInUp}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-primary/20 rounded-lg">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <ul className="space-y-3">
                    {category.facilities.map((facility, idx) => (
                      <motion.li
                        key={idx}
                        className="flex gap-3 text-muted-foreground hover:text-primary transition-colors"
                        whileHover={{ x: 5 }}
                      >
                        <span className="text-primary font-bold shrink-0">
                          →
                        </span>
                        <span>{facility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Offered */}
      <motion.section
        className="py-20 bg-linear-to-b from-primary/5 to-background"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Services We <span className="text-primary">Provide</span>
            </h2>
            <div className="flex justify-center">
              <div className="h-1 w-24 bg-linear-to-r from-primary to-primary/50" />
            </div>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {services.map((service, index) => (
              <AnimatedContent
                key={index}
                className="bg-white/5 border border-primary/20 rounded-lg p-6  hover:border-primary/40 transition-all"
                delay={0.1 * index}
                duration={0.5}
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.desc}</p>
              </AnimatedContent>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-16 bg-linear-to-r from-primary/10 via-background to-primary/10 border-y border-primary/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h3
            className="text-3xl font-bold text-foreground mb-4"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            Join Our Healthcare Mission
          </motion.h3>
          <motion.p
            className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            whileInView="whileInView"
          >
            We&apos;re always looking for healthcare professionals, volunteers,
            and supporters to help us extend quality healthcare to underserved
            communities.
          </motion.p>
          <motion.button
            className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}
