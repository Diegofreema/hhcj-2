'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Rural Education Initiative',
    category: 'Education',
    description:
      'Providing quality education to 2000+ students in rural communities',
    image: '/h-1.jpg',
    impact: '2000+ Students',
  },
  {
    id: 2,
    title: 'Community Health Centers',
    category: 'Healthcare',
    description: 'Operating 15 health centers providing free medical services',
    image: '/h-2.jpg',
    impact: '50,000+ Lives',
  },
  {
    id: 3,
    title: 'Vocational Training Program',
    category: 'Social Works',
    description: 'Empowering youth with skills for sustainable livelihoods',
    image: '/h-3.jpg',
    impact: '500+ Trained',
  },
];

export function ProjectsSection() {
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
              Our Projects
            </h2>
            <p className="text-muted-foreground">
              Making a real difference in communities worldwide
            </p>
          </div>
          <Link
            href="/our-works"
            className="hidden md:flex items-center gap-2 text-primary hover:text-primary-dark transition-smooth font-semibold"
          >
            View All Projects
            <ArrowRight size={20} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group bg-muted/50 border-futuristic rounded-lg overflow-hidden hover:shadow-lg hover:shadow-primary/10 transition-smooth"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-linear-to-t from-foreground/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-semibold text-sm">
                    {project.impact}
                  </span>
                  <ArrowRight
                    size={18}
                    className="text-primary group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
