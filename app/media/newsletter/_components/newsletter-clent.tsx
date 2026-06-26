'use client';

import { motion } from 'framer-motion';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { PageHero } from '@/features/shared/components/page-hero';

export default function NewsletterClient() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Newsletter"
        description="Stay updated with our latest news and initiatives"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-8 bg-muted/50 border-futuristic rounded-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={28} />
                </div>
                <h2 className="text-2xl font-bold text-foreground">
                  Subscribe to Our Newsletter
                </h2>
              </div>

              <p className="text-muted-foreground mb-6">
                Get the latest updates on our programs, events, and impact
                stories. Join thousands of supporters who receive our monthly
                newsletter.
              </p>

              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interests">Areas of Interest</Label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-foreground">Education</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-foreground">
                        Healthcare
                      </span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-foreground">
                        Community Service
                      </span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="checkbox" className="rounded" />
                      <span className="text-sm text-foreground">Events</span>
                    </label>
                  </div>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white"
                >
                  Subscribe Now
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t border-border/40 space-y-3">
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Monthly updates on our mission
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Impact stories and success stories
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-primary" />
                  <span className="text-sm text-muted-foreground">
                    Exclusive event invitations
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
