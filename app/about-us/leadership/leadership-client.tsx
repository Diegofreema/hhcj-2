'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { PageHero } from '@/features/shared/components/page-hero';

const teamOverview = {
  intro:
    'The Central Leadership of the Congregation is lead by an elected Superior General and Leadership Team.  The Ministry of the Leadership Team relies solely on the inspiration of the Holy Spirit and the example of Jesus, the servant leader for guidance.  They serve to promote love, peace and justice.',
  description:
    'Its international and inter-tribal nature continues as members, who are drawn from all parts of Nigeria, Cameroon, Togo, Ghana, Sierra Leone, England and Kenya.  Presently, the Congregation has houses in Nigeria, Ghana, Cameroon, Togo, Sierra Leone, Kenya, Italy, Germany, London, the United States of America, Canada and Grenada.',
};

const leaders = [
  {
    id: 1,
    name: 'Mother Mary Ignatia Bassey',
    image: '/ig.png',
  },
  {
    id: 2,
    name: 'Mother Mary Aloysia Ugoaru',
    image: '/al.jpg',
  },
  {
    id: 3,
    name: 'Mother Mary Gertrude Waturuocha',
    image: '/ma.jpg',
  },
  {
    id: 4,
    name: 'Mother Mary St. John Williams',
    image: '/jo.jpg',
  },

  {
    id: 5,
    name: 'Mother Germaine Ocansey, HHCJ',
    image: '/supreme.jpg',
    title: 'SUPERIOR GENERAL OF THE CONGREGATION',
    description: 'OF THE HANDMAIDS OF THE HOLY CHILD JESUS',
  },
  // {
  //   id: 6,
  //   name: 'Sister Gloriamary Agumagu, HHCJ',
  //   image: '/gl.jpg',
  //   title: 'HHCJ U.S.A',
  //   description: 'MISSION SUPERIOR',
  // },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export default function LeadershipClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Our Leadership"
        description="Meet the dedicated leaders guiding our mission"
      />

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="py-20 bg-linear-to-b from-background to-muted/30 space-y-5"
      >
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center space-y-6">
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-foreground"
            >
              Our Leadership Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              {teamOverview.intro}
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-muted-foreground leading-relaxed"
            >
              {teamOverview.description}
            </motion.p>
            {/* Animated divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="h-1 w-24 mx-auto bg-linear-to-r  from-transparent via-primary to-transparent"
            />
          </div>
        </div>
      </motion.section>
      <div className={'container mx-auto px-4 max-w-3xl mb-5 mt-10'}>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-muted-foreground leading-relaxed text-center font-bold text-xl mt-5"
        >
          Mother Mary Charles Magdalen Walker, RSC (Servant of God)
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-muted-foreground leading-relaxed text-center font-semibold text-md"
        >
          FOUNDRESS OF THE CONGREGATION OF THE HANDMAIDS OF THE HOLY CHILD JESUS
        </motion.p>

        <div
          className={
            'relative h-64 w-[200px] mb-10 mx-auto group overflow-hidden rounded-lg border-futuristic  bg-muted/50'
          }
        >
          <Image
            src={'/mother.jpeg'}
            fill
            alt={'our-team'}
            className={
              'object-cover group-hover:scale-110 transition-transform duration-500'
            }
          />

          {/* Overlay effect */}
          <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </div>
      <section className="py-20 bg-background space-y-5">
        <div className={'container mx-auto px-4 max-w-3xl mb-5'}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className=" text-muted-foreground leading-relaxed text-center font-bold text-3xl"
          >
            FOUNDATION MEMBERS OF THE
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-muted-foreground leading-relaxed text-center font-semibold text-2xl"
          >
            CONGREGATION HANDMAIDS OF THE HOLY CHILD JESUS
          </motion.p>
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {leaders.map((leader) => (
              <motion.div key={leader.id} className="group flex flex-col">
                {/* Image container with hover effects */}
                <div className="relative h-64 overflow-hidden rounded-lg border-futuristic mb-6 bg-muted/50">
                  <Image
                    src={leader.image || '/placeholder.svg'}
                    alt={leader.name}
                    fill
                    className="object-fill group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay effect */}
                  <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Text content */}
                <div className="flex-1 space-y-2">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg font-bold text-foreground"
                  >
                    {leader.name}
                  </motion.h3>
                  {leader.title && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                      className="text-primary font-semibold text-sm"
                    >
                      {leader.title}
                    </motion.p>
                  )}
                  {leader.description && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-muted-foreground text-sm leading-relaxed"
                    >
                      {leader.description}
                    </motion.p>
                  )}
                </div>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ delay: 0.25, duration: 0.5 }}
                  className="mt-4 h-0.5 w-0 group-hover:w-full bg-linear-to-r  from-primary to-primary/50 transition-all duration-300 origin-left"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <div className={'container mx-auto px-4  mb-5 mt-10'}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-muted-foreground leading-relaxed text-center font-bold text-3xl"
          >
            Our Team
          </motion.p>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <LeadershipTeamImage
              src={'/north.jpeg'}
              alt={'our-team'}
              title={'The North Western Leadership Team'}
            />
            <LeadershipTeamImage
              src={'/center.jpg'}
              alt={'our-team'}
              title={'The Central Administration'}
            />
            <LeadershipTeamImage
              src={'/italy.jpg'}
              alt={'our-team'}
              title={'The Italian Mission Team'}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

type LeadershipTeamImageProps = {
  src: string;
  alt: string;
  title: string;
};

const LeadershipTeamImage = ({ src, alt, title }: LeadershipTeamImageProps) => {
  return (
    <div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-muted-foreground leading-relaxed text-center font-semibold text-2xl"
      >
        {title}
      </motion.p>

      <div
        className={
          'relative h-[400px] group overflow-hidden rounded-lg border-futuristic mb-6 bg-muted/50'
        }
      >
        <Image
          src={src}
          fill
          alt={alt}
          className={
            'object-cover group-hover:scale-110 transition-transform duration-500'
          }
        />

        {/* Overlay effect */}
        <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </div>
  );
};
