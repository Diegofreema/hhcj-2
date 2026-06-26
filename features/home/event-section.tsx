'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useListEvents } from '../events/api/use-list-events';

export function EventsSection() {
  const { data, isPending, isError } = useListEvents({
    limit: 3,
    page: 1,
  });
  if (isPending) {
    return null;
  }
  if (isError) {
    return null;
  }

  if (!data?.events?.length) {
    return null;
  }
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-between mb-12"
        >
          <div>
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground">
              Join us in our mission and community activities
            </p>
          </div>
          <Link
            href="/events"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark transition-smooth font-semibold"
          >
            View All Events
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {data?.events?.map((event, index) => (
            <motion.div
              key={event._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-6 bg-muted/50 border-futuristic rounded-lg hover:shadow-lg hover:shadow-primary/10 transition-smooth"
            >
              <div className="flex items-center gap-2 text-primary mb-3">
                <Calendar size={18} />
                <span className="text-sm font-semibold">{event.date}</span>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {event.title}
              </h3>
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <MapPin size={16} />
                <span className="text-sm">{event.location}</span>
              </div>
              <p className="text-muted-foreground text-sm">
                {event.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 md:hidden text-center"
        >
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-primary hover:text-primary-dark transition-smooth font-semibold"
          >
            View All Events
            <ArrowRight size={20} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
