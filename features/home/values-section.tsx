'use client';

import { values } from '@/lib/constants/data';
import { motion } from 'framer-motion';

export function ValuesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Guided by faith and commitment to serve humanity with integrity and
            compassion
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group p-6 bg-background border-futuristic rounded-lg hover:shadow-lg hover:shadow-primary/20 transition-smooth"
              >
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-smooth">
                  <Icon className="text-[#2572DE]" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
