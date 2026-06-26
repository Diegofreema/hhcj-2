'use client';

import { motion } from 'framer-motion';
import LightRays from './ligth-rays';
import SplitText from './animated-text';

interface PageHeroProps {
  title: string;
  description: string;
}

export function PageHero({ title, description }: PageHeroProps) {
  return (
    <section className=" bg-linear-to-r from-foreground to-foreground/90 relative">
      <div style={{ width: '100%', height: '400px', position: 'relative' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        <div className="container mx-auto px-4 py-16 md:py-24 absolute top-[20%] left-[50%] -translate-x-[50%] z-40 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center flex flex-col"
          >
            <SplitText
              text={title}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <SplitText
              text={description}
              className="text-lg text-white/80 max-w-2xl mx-auto"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
