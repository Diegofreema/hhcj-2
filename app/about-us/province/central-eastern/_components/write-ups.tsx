import React from 'react';
import { motion } from 'framer-motion';

export const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6 },
};

export const staggerContainer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true, margin: '-100px' },
  transition: { staggerChildren: 0.15, delayChildren: 0.2 },
};

type Props = {
  title?: string;
  texts: string[];
  className?: string;
};

const WriteUp = ({ texts, title, className = '' }: Props) => {
  return (
    <motion.section
      className={`py-12 md:py-20 ${className}`}
      variants={staggerContainer}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: '-100px' }}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {title && (
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-foreground mb-8 pb-4 border-b border-primary/20"
              variants={fadeInUp}
            >
              {title}
            </motion.h2>
          )}

          <motion.div className="space-y-6" variants={staggerContainer}>
            {texts.map((text, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-muted-foreground leading-relaxed text-lg"
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default WriteUp;
