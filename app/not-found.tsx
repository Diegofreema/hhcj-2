'use client';

import { motion } from 'framer-motion';
import { Home, ArrowLeft, Search } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-primary/5 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Animated 404 Number */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative">
            <motion.h1
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              transition={{
                repeat: Infinity,
                repeatType: 'reverse',
                duration: 2,
                ease: 'easeInOut',
              }}
              className="text-[150px] md:text-[200px] font-bold text-primary/20 leading-none"
            >
              404
            </motion.h1>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className="p-6 bg-primary/10 rounded-full backdrop-blur-sm">
                <Search className="text-primary" size={48} />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Error Message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-8"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg mb-2">
            Oops! The page you're looking for seems to have wandered off.
          </p>
          <p className="text-muted-foreground">
            Don't worry, even the best explorers get lost sometimes.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Link href="/">
            <Button className="bg-primary hover:bg-primary-dark text-white px-8 py-6 text-base group">
              <Home
                className="mr-2 group-hover:scale-110 transition-transform"
                size={20}
              />
              Back to Home
            </Button>
          </Link>
          <Link href="/about-us">
            <Button variant="outline" className="px-8 py-6 text-base group">
              <ArrowLeft
                className="mr-2 group-hover:-translate-x-1 transition-transform"
                size={20}
              />
              Go Back
            </Button>
          </Link>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-4 max-w-md mx-auto"
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                delay: 0.8 + i * 0.1,
                duration: 0.5,
              }}
              className="h-2 bg-primary/20 rounded-full"
            />
          ))}
        </motion.div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-primary/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute bottom-20 right-10 w-32 h-32 bg-primary/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -15, 0],
            x: [0, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/4 w-24 h-24 bg-primary/5 rounded-full blur-xl"
        />
      </div>
    </div>
  );
}
