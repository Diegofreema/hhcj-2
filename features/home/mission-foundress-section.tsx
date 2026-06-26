'use client';

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const quotes = [
  {
    id: 1,
    text: 'Service to others is service to God. Let us dedicate ourselves to the welfare of those in need.',
    author: 'Mother Foundress',
  },
  {
    id: 2,
    text: 'Education is the key to transformation. Through knowledge and faith, we empower generations.',
    author: 'Mother Foundress',
  },
  {
    id: 3,
    text: 'Compassion without action is merely sentiment. We must live our faith through service.',
    author: 'Mother Foundress',
  },
];

export function MotherFoundressSection() {
  return (
    <section className="py-20 bg-linear-to-r from-foreground to-foreground/90">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-2">
            Mother Foundress Wisdom
          </h2>
          <p className="text-white/80">
            Inspirational sayings from our beloved Mother Foundress
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {quotes.map((quote, index) => (
            <motion.div
              key={quote.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg hover:bg-white/15 transition-smooth"
            >
              <Quote className="text-white mb-4" size={32} />
              <p className="text-white text-lg leading-relaxed mb-4 italic">
                "{quote.text}"
              </p>
              <p className="text-white/70 font-semibold">— {quote.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
