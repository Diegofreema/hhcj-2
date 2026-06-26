'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-2">
            Get In Touch
          </h2>
          <p className="text-muted-foreground">
            We would love to hear from you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.5 }}
            className="text-center"
          >
            <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
              <Mail className="text-[#2572DE]" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Email
            </h3>
            <a
              href="mailto:info@hhcj.org"
              className="text-[#2572DE] hover:text-[#2572DE]/80 transition-smooth"
            >
              info@hhcj.org
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-center"
          >
            <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
              <Phone className="text-[#2572DE]" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Phone
            </h3>
            <a
              href="tel:+2348037938596"
              className="text-[#2572DE] hover:text-[#2572DE]/80 transition-smooth"
            >
              +2348037938596
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <div className="p-4 bg-primary/10 rounded-lg w-fit mx-auto mb-4">
              <MapPin className="text-[#2572DE]" size={28} />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Address
            </h3>
            <p className="text-[#2572DE]">
              The Secretary General, HHCJ Generalate HHCJ Ifuho P. O. Box 155
              Ikot Ekpene, Nigeria
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
