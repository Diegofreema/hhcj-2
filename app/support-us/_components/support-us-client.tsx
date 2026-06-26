'use client';

import { motion } from 'framer-motion';
import { Heart, Users, TrendingUp, Gift } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageHero } from '@/features/shared/components/page-hero';

const supportOptions = [
  {
    icon: Heart,
    title: 'Make a Donation',
    description:
      'Your generous donation directly supports our education, healthcare, and community programs.',
    action: 'Donate Now',
  },
  {
    icon: Users,
    title: 'Become a Member',
    description:
      'Join our community of supporters and receive updates on our mission and impact.',
    action: 'Join Us',
  },
  {
    icon: TrendingUp,
    title: 'Corporate Partnership',
    description:
      'Partner with us to create sustainable impact through corporate social responsibility.',
    action: 'Partner With Us',
  },
  {
    icon: Gift,
    title: 'Sponsor a Program',
    description:
      'Sponsor specific programs like education scholarships or healthcare initiatives.',
    action: 'Sponsor',
  },
];

export default function SupportUsClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Support Us"
        description="Help us transform lives and communities"
      />

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Make a Difference
            </h2>
            <p className="text-muted-foreground">
              Your support enables us to continue our mission of serving
              humanity through education, healthcare, and spiritual guidance.
              Every contribution, no matter the size, makes a real impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="group p-8 bg-muted/50 border-futuristic rounded-lg hover:shadow-lg hover:shadow-primary/10 transition-smooth"
                >
                  <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-smooth">
                    <Icon className="text-foreground" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {option.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {option.description}
                  </p>
                  <Button className="w-full bg-foreground hover:bg-primary-dark text-white">
                    {option.action}
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Impact of Your Support
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-2">
                  10,000+
                </div>
                <p className="text-muted-foreground">Students Educated</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-2">
                  50,000+
                </div>
                <p className="text-muted-foreground">Lives Touched</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-foreground mb-2">
                  15+
                </div>
                <p className="text-muted-foreground">Healthcare Centers</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
