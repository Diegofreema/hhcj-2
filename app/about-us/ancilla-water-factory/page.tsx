'use client';

import { WaterFactory } from '@/app/our-apostolates/social-works/_component/water-factory';
import { PageHero } from '@/features/shared/components/page-hero';
import { motion, Variants } from 'framer-motion';
import { MapPin, Phone } from 'lucide-react';

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
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

export default function AncillaWaterFactoryPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Ancilla Water Factory"
        description="Serving the community with clean and healthy water since 2005"
      />

      <motion.section
        className="py-16 md:py-24 max-w-5xl mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Introduction */}
        <motion.div
          className="prose prose-lg dark:prose-invert max-w-none mb-16"
          variants={itemVariants}
        >
          <p className="lead text-xl text-muted-foreground mb-6">
            Ancilla Water Venture was established in 2005, under the
            Administration of Mother Mary Langley, HHCJ, of Blessed memory, with
            Sister Catherine Ikwueke, as the pioneer Administrator. Over the
            years, it was been managed by many Sisters.
          </p>
          <p className="text-muted-foreground">
            The factory has grown though it is still yielding in these
            departments: Production (Bottle and Sachet), transportation and
            administration. We have external distributers (Marketers) who
            partner with the factory.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Working Hours */}
          <motion.div
            className="bg-muted/30 p-8 rounded-2xl border border-border/50"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              Factory Working Hours
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The Factory starts at 6:45am every day and closes at 5pm, from
                Monday through Saturday. But for contingent reasons of demand in
                supply, we often times schedule for overtime duty hours to
                enable us meet up with supplies to our customers.
              </p>
              <p>
                On the other hand, the Sisters working at the Factory, reports
                to duty at 8am on the working days. The Sisters serve as
                Administrators and are also involved in working with the staff
                at the Departments of Production to learn the skills involved in
                water production.
              </p>
            </div>
          </motion.div>

          {/* Moral Standards */}
          <motion.div
            className="bg-primary/5 p-8 rounded-2xl border border-primary/10"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Moral Standards
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                The factory has tried to maintain some high standard of
                discipline both in morals and in neatness. A high standard of
                hygiene has also been maintained within the factory and in
                handling of our product, since we handle human life.
              </p>
              <p>
                The staff begin their day with Morning Devotion and it lasts for
                about 15 to 20 minutes. A schedule is made to enable the staff
                take turns in leading prayers on monthly basis.
              </p>
              <blockquote className="border-l-4 border-primary pl-4 italic my-4 text-foreground/80">
                The management of Ancilla Water Factory try their best to make
                sure the factory and its environs are kept neat to produce clean
                and healthy water for human consumption because ‘‘Cleanliness is
                next to Godliness’.
              </blockquote>
            </div>
          </motion.div>
        </div>

        {/* Departments */}
        <motion.div className="mb-20" variants={itemVariants}>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Production Departments
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group hover:bg-muted/50 transition-colors p-8 rounded-2xl border border-border">
              <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6 text-blue-600 dark:text-blue-400 font-bold text-xl">
                A
              </div>
              <h3 className="text-xl font-bold mb-3">
                Sachet Production Department
              </h3>
              <p className="text-muted-foreground">
                This is the section that takes care of the Sachet production of
                water.
              </p>
            </div>

            <div className="group hover:bg-muted/50 transition-colors p-8 rounded-2xl border border-border">
              <div className="h-12 w-12 bg-cyan-100 dark:bg-cyan-900/30 rounded-full flex items-center justify-center mb-6 text-cyan-600 dark:text-cyan-400 font-bold text-xl">
                B
              </div>
              <h3 className="text-xl font-bold mb-3">
                Bottle Production Department
              </h3>
              <p className="text-muted-foreground">
                This is the section that takes care of the Bottle production of
                water.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center mb-20 relative overflow-hidden"
          variants={itemVariants}
        >
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Quality You Can Trust
            </h2>
            <p className="text-primary-foreground/90 text-lg mb-8">
              Due to the quality of the Ancilla Water, many super markets,
              stores and eateries patronise us. You can call and order for your
              water for parties, meetings, weddings, funerals and any other
              occasion.
            </p>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="max-w-xl mx-auto text-center"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-bold mb-8">Contact Us</h2>
          <div className="bg-card p-8 rounded-2xl shadow-sm border border-border">
            <h4 className="font-semibold text-lg mb-6">The Manager</h4>
            <div className="space-y-6">
              <div className="flex flex-col items-center gap-2">
                <div className="h-10 w-10 bg-muted rounded-full flex items-center justify-center text-primary">
                  <MapPin size={20} />
                </div>
                <p className="text-muted-foreground">
                  Ancilla Water Factory
                  <br />
                  Generalate HHCJ
                  <br />
                  P. O. Box 155
                  <br />
                  Ifuho, Ikot Ekpene
                  <br />
                  Nigeria
                </p>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="h-10 w-10 bg-muted rounded-full flex items-center justify-center text-primary">
                  <Phone size={20} />
                </div>
                <a
                  href="tel:+2349164403108"
                  className="text-lg font-medium hover:text-primary transition-colors"
                >
                  +234 9164403108
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>

      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="mb-12" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Our water factory
            </h2>
            <div className="h-1 w-20 bg-linear-to-br from-primary to-primary/50 rounded-full" />
          </motion.div>
          <WaterFactory />
        </div>
      </motion.section>
    </div>
  );
}
