'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import Particles from '../shared/components/particle';

const heroSlides = [
  {
    id: 1,
    heading: 'Welcome',
    title: 'HHCJ Media Spreading the gospel and inspiring lives.',
    description:
      'Explore our social media pages, stay connected, inspired and informed',
    image: '/media.jpg',
    cta: { text: 'Follow us', href: '/about-us/contact' },
  },
  {
    id: 2,
    title: 'HHCJ Community outreach and services',
    description:
      'HHCJ making positive impact in our community health and wellness initiative',
    image: '/out-reach.jpg',
    cta: { text: 'Our Works', href: '/our-works/education' },
  },
  {
    id: 3,
    title: 'HHCJ Empowering women and children',
    description:
      'Providing faith based education, Good health and wellness, Pastoral services to uplift and inspire',
    image: '/empower.jpg',
    cta: { text: 'Healthcare', href: '/our-works/healthcare' },
  },
  {
    id: 4,
    title: 'Celebrating 100 years of faith and empowerment',
    description:
      'Join the Handmaids of the Holy Child Jesus in our mission Transform Lives ',
    image: '/100.JPG',
    cta: { text: 'Support us', href: '/support-us' },
  },
];

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [autoplay]);

  const next = () => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
    setAutoplay(false);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setAutoplay(false);
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-foreground">
      <Particles
        particleColors={['#ffffff', '#ffffff']}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
      />
      <AnimatePresence mode="wait">
        {heroSlides.map(
          (slide, index) =>
            index === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <Image
                  src={slide.image || '/placeholder.svg'}
                  alt={slide.title}
                  fill
                  className="object-cover"
                  priority
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-linear-to-r from-foreground/20 via-foreground/40 to-transparent" />

                {/* Content */}
                <div className="absolute inset-0 flex items-center justify-start">
                  <div className="container mx-auto px-4 md:px-8 max-w-2xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.6 }}
                      className="space-y-6"
                    >
                      <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                        {slide.title}
                      </h1>

                      <p className="text-lg md:text-xl text-white/90 max-w-xl">
                        {slide.description}
                      </p>
                      <motion.a
                        href={slide.cta.href}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-block px-8 py-3 bg-foreground hover:bg-primary-dark text-white font-semibold rounded-lg transition-smooth"
                      >
                        {slide.cta.text}
                      </motion.a>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ),
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-smooth backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 p-2 md:p-3 bg-white/20 hover:bg-white/40 text-white rounded-full transition-smooth backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {heroSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => {
              setCurrent(index);
              setAutoplay(false);
            }}
            className={`h-2 rounded-full transition-all ${
              index === current ? 'bg-primary w-8' : 'bg-white/40 w-2'
            }`}
            whileHover={{ scale: 1.2 }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
