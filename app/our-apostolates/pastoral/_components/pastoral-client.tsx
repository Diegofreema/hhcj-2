'use client';

import { motion, Variants } from 'framer-motion';
import Image from 'next/image';
import {
  BookIcon,
  ChaliceIcon,
  HomeIcon,
  OrphanageIcon,
  PotIcon,
  PrisonIcon,
  PsychologyIcon,
  WomenEmpowermentIcon,
} from './icons';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const services = [
  {
    icon: HomeIcon,
    title: 'Home Visitation',
    description:
      'Bringing spiritual comfort and pastoral care to families and individuals in their homes',
  },
  {
    icon: ChaliceIcon,
    title: 'Communion Rounds',
    description: 'Communion rounds in collaboration with the Parish Priests',
  },
  {
    icon: PrisonIcon,
    title: 'Prison Apostolates',
    description:
      'Spiritual ministry and pastoral support for incarcerated individuals',
  },
  {
    icon: BookIcon,
    title: 'Catechesis',
    description:
      'Religious education and moral instruction for children and communities',
  },
  {
    icon: PotIcon,
    title: 'Cooking for mentally challenged',
    description:
      'We cook lessons for people with special needs to ensure they have a safe and enjoyable experience',
  },
  {
    icon: PsychologyIcon,
    title: 'Psychology counseling / therapy',
    description:
      'We offer psychological counseling and therapy services to help individuals manage their emotions and well-being',
  },
  {
    icon: OrphanageIcon,
    title: 'Orphanage care',
    description:
      'We care for orphans and children in need, providing them with the care and support they need',
  },
  {
    icon: WomenEmpowermentIcon,
    title: 'Women empowerment program.',
    description:
      'We work with women to empower them to reach their full potential and lead fulfilling lives',
  },
];

export function PastoralClientPage() {
  return (
    <div className="space-y-24 py-20">
      {/* Main Content Section */}
      <motion.section
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Content */}
          <motion.div className="space-y-6" variants={itemVariants}>
            <div className="space-y-4">
              <h2 className="text-4xl font-bold bg-linear-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Pastoral Ministry
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                In our pastoral ministry, we follow the gospel mandate to
                &quot;Go, teach all the nations&quot; and impart the gospel
                message to different classes of people. Since the young are the
                foundation on which to build a strong local Church, we take
                pains to organize Catechism classes for children in order to
                give them moral instructions and inculcate in them sound
                religious discipline.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We engage in Religious Education Programmes, Retreats,
                Workshops, Parish and Prison Ministries to foster spiritual
                growth and community building rooted in Christ&apos;s love and
                service.
              </p>
            </div>

            {/* Accent Line */}
            <div className="flex gap-2 pt-4">
              <motion.div
                className="h-1 w-12 bg-primary rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 48 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              />
              <div className="h-1 flex-1 bg-primary/20 rounded-full" />
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden shadow-2xl"
            variants={itemVariants}
          >
            <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent z-10" />
            <Image
              src="/ps.jpg"
              alt="Pastoral Ministry and Spiritual Care"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10">
          <div>
            <div
              className={
                'relative h-[400px] group overflow-hidden rounded-lg border-futuristic mb-6 bg-muted/50'
              }
            >
              <Image
                src={'/b.jpg'}
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
          <div className={''}>
            <div
              className={
                'relative h-[400px] group overflow-hidden rounded-lg border-futuristic mb-6 bg-muted/50'
              }
            >
              <Image
                src={'/b2.jpg'}
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
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="mb-12" variants={itemVariants}>
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Our Pastoral Services
          </h3>
          <p className="text-muted-foreground text-lg">
            We provide comprehensive pastoral care through these key ministries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group p-8 rounded-xl border border-primary/20 bg-linear-to-br from-white/50 to-primary/5 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                {/* Icon Container */}
                <motion.div
                  className="mb-6 inline-flex p-4 rounded-lg bg-linear-to-br from-primary to-cyan-400 text-white"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon />
                </motion.div>

                {/* Content */}
                <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Accent Line */}
                <motion.div className="mt-4 h-1 w-0 bg-linear-to-r from-primary to-cyan-400 rounded-full group-hover:w-12 transition-all duration-300" />
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Impact Section */}
      {/* <motion.section
        className="container mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'Communities Served', value: '50+' },
            { label: 'Catechism Classes', value: '100+' },
            { label: 'Spiritual Programs', value: 'Ongoing' },
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl border border-primary/20 bg-linear-to-br from-primary/10 to-cyan-400/10 text-center hover:border-primary/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-4xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section> */}
    </div>
  );
}
