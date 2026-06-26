'use client';

import Countries from '@/components/countries';
import { motion } from 'framer-motion';
import { Eye, Target } from 'lucide-react';

export function MissionVisionSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Mission */}
          <motion.div
            variants={itemVariants}
            className="border-futuristic p-8 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-smooth"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="text-[#2572DE]" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">
                Our Mission
              </h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Just like our Foundress, we are passionate about service, service
              in love especially to the poor, women and children. In our
              different apostolates, each Handmaid strives daily to continue the
              life of our Foundress by committed caregiving in education,
              medical, pastoral and social work in tune with the signs of the
              time.
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            variants={itemVariants}
            className="border-futuristic p-8 rounded-xl hover:shadow-lg hover:shadow-primary/10 transition-smooth"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Eye className="text-[#2572DE]" size={28} />
              </div>
              <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
            </div>
            <div>
              <p className="text-muted-foreground leading-relaxed">
                We pledge to transform ourselves individually, assist in
                transforming one another because we believe once we are able to
                do this; the World will be transformed through us
              </p>
              <blockquote className={'mt-6 border-l-2 pl-6 italic'}>
                Transformation of our Communities and the World in Christ
              </blockquote>
            </div>
          </motion.div>
        </motion.div>
      </div>
      <Countries />
    </section>
  );
}
