'use client';

import type React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Logo } from '@/components/ui/logo';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-foreground text-white" id={'footer'}>
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-2">Join Our Community</h3>
              <p className="text-white/70">
                Subscribe to receive updates about our mission and initiatives
              </p>
            </motion.div>

            <motion.form
              onSubmit={handleSubscribe}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex gap-2"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                required
              />
              <Button
                type="submit"
                className="bg-white hover:bg-white/30 text-black whitespace-nowrap"
              >
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </Button>
            </motion.form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* About */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0, duration: 0.5 }}
            className={'space-y-3'}
          >
            <Logo white />
            <p className="text-white/70 text-sm leading-relaxed">
              The Congregation of the Handmaids of the Holy Child Jesus is an
              international Congregation of Sisters, founded by Mother Mary
              Charles Magdalen Walker, a religious Sister of Charity who came to
              Nigeria in 1923.
            </p>
            <Button className="w-full bg-white hover:bg-white/30 text-black">
              Donate ❤️
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-white/70 hover:text-primary transition-smooth"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-white/70 hover:text-primary transition-smooth"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/our-works"
                  className="text-white/70 hover:text-primary transition-smooth"
                >
                  Our Works
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-white/70 hover:text-primary transition-smooth"
                >
                  Events
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Our Works */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <h4 className="text-lg font-bold mb-4">Our Works</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/our-works/education"
                  className="text-white/70 hover:text-primary transition-smooth"
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  href="/our-works/healthcare"
                  className="text-white/70 hover:text-primary transition-smooth"
                >
                  Healthcare
                </Link>
              </li>
              <li>
                <Link
                  href="/our-works/social-works"
                  className="text-white/70 hover:text-primary transition-smooth"
                >
                  Social Works
                </Link>
              </li>
              <li>
                <Link
                  href="/media/gallery"
                  className="text-white/70 hover:text-primary transition-smooth"
                >
                  Gallery
                </Link>
              </li>
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Mail size={16} className="text-white mt-1 shrink-0" />
                <a
                  href="mailto:info@hhcj.org"
                  className="text-white/70 hover:text-white transition-smooth"
                >
                  info@hhcj.org
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Phone size={16} className="text-white mt-1 shrink-0" />
                <a
                  href="tel:+2348037938596"
                  className="text-white/70 hover:text-primary transition-smooth"
                >
                  +2348037938596
                </a>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-white mt-1 shrink-0" />
                <p className="text-white/70">
                  The Secretary General, HHCJ Generalate HHCJ Ifuho P. O. Box
                  155 Ikot Ekpene, Nigeria
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex justify-center gap-4 mb-8 pb-8 border-b border-white/10"
        >
          <a
            href="https://www.facebook.com/profile.php?id=100084253731044"
            className="p-2 bg-white hover:bg-primary rounded-full transition-smooth"
            aria-label="Facebook"
          >
            <FaFacebookF size={20} color="blue" />
          </a>
          <a
            href="https://www.youtube.com/@handmaidsmedia"
            className="p-2 bg-white hover:bg-primary rounded-full transition-smooth"
            aria-label="Twitter"
          >
            <FaYoutube size={20} color="red" />
          </a>
        </motion.div>

        {/* Copyright */}
        <div className="text-center text-white/60 text-sm">
          <p>
            &copy; {new Date().getFullYear()} The Handmaids of the Holy Child
            Jesus Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
