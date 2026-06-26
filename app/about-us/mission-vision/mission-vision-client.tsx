'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageHero } from '@/features/shared/components/page-hero';

export function MissionVisionClientPage() {
  const missionVisionData = [
    {
      id: 'mission',
      title: 'Our Mission',
      content:
        'Just like our Foundress, we are passionate about service, service in love especially to the poor, women and children. In our different apostolates, each Handmaid strives daily to continue the life of our Foundress by committed caregiving in education, medical, pastoral and social work in tune with the signs of the times.\n' +
        '\n' +
        '“Faithful to Gospel values, and the charism of our Foundress and attentive to the signs of the times, we, the Handmaids of the Holy Child Jesus, commit ourselves to the transformation of lives through our prophetic witness of vowed life, community living, participatory leadership and apostolic ministry with a special option for the poor, women and children”.',
      image: '/mission.jpg',
      alignment: 'left',
    },
    {
      id: 'vision',
      title: 'Our Vision',
      content:
        'We pledge to transform ourselves individually, assist in transforming one another because we believe once we are able to do this; the World will be transformed through us “Transformation of our Communities and the World in Christ”',
      image: '/vision.jpg',
      alignment: 'right',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Mission and Vision"
        description="Our commitment to transforming lives"
      />
      {/* <CHANGE> Replaced simple layout with side-by-side image + text design */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {missionVisionData.map((section) => (
              <motion.div
                key={section.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid md:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  section.alignment === 'right' ? 'md:grid-flow-dense' : ''
                }`}
              >
                {/* Image */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: section.alignment === 'left' ? -40 : 40,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className={`relative h-80 rounded-lg overflow-hidden border-futuristic shadow-lg ${
                    section.alignment === 'right' ? 'md:col-start-2' : ''
                  }`}
                >
                  <Image
                    src={section.image || '/placeholder.svg'}
                    alt={section.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-background/40 to-transparent" />
                </motion.div>

                {/* Text content */}
                <motion.div
                  initial={{
                    opacity: 0,
                    x: section.alignment === 'left' ? 40 : -40,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className={`space-y-6 ${
                    section.alignment === 'right' ? 'md:col-start-1' : ''
                  }`}
                >
                  {/* Animated title with underline */}
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                      {section.title}
                    </h2>
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, duration: 0.7 }}
                      className="h-1 w-20 bg-linear-to-r from-primary to-primary/50 origin-left"
                    />
                  </div>

                  {/* Content text */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="text-lg text-muted-foreground leading-relaxed"
                  >
                    {section.content}
                  </motion.p>

                  {/* Accent elements */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex gap-3 pt-4"
                  >
                    <div className="h-12 w-1 bg-linear-to-b from-primary to-primary/30 rounded-full" />
                    <div className="flex flex-col justify-center">
                      <p className="text-sm font-semibold text-primary">
                        Guiding Principle
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Core to all we do
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
