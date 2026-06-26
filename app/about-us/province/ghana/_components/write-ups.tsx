import React from 'react';
import { motion } from 'framer-motion';
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
type Props = {
  title: string;
  texts: string[];
};

const WriteUp = ({ texts, title }: Props) => {
  return (
    <motion.section
      className="py-20 bg-linear-to-b from-primary/5 to-background"
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-4xl font-bold text-foreground mb-8 pb-4 border-b border-primary/20"
            variants={fadeInUp}
          >
            {title}
          </motion.h2>

          <motion.div className="space-y-6" variants={staggerContainer}>
            {texts.map((text, index) => (
              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
                key={index}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WriteUp;
