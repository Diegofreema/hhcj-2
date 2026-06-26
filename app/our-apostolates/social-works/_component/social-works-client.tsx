'use client';
import { Card } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import { motion, Variants } from 'framer-motion';
import { Phone } from 'lucide-react';
import Image from 'next/image';
import { useRef } from 'react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

const images = ['/s1.jpg', '/s2.jpg', '/s.jpg'];

export function SocialWorksClient() {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));
  return (
    <div className="space-y-16">
      {/* Social Apostolates Section */}
      <motion.section
        className="py-16 bg-linear-to-br  from-background via-background to-primary/5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div className="space-y-6" variants={itemVariants}>
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
                  Social Apostolates & Community Empowerment
                </h2>
                <div className="h-1 w-20 bg-linear-to-br from-primary to-primary/50 rounded-full mb-6" />
              </div>

              <p className="text-lg text-muted-foreground leading-relaxed">
                In our social apostolates, we imitate the love, sympathy, and
                concern of Christ as we serve the under-privileged in our
                society, such as the orphans, single parents, unwanted babies,
                prisoners, mentally ill and other marginalized persons.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                We engage in Economic empowerment of women at all levels and
                encourage personal and community effort for self-help. We also
                engage in Agricultural programmes, small-scale industries for
                self-reliance and creation of job opportunities for the
                unemployed poor of our society.
              </p>

              <div className="bg-primary/10 border border-primary/20 rounded-lg p-6 space-y-4">
                <h3 className="text-xl font-semibold text-foreground">
                  Our Key Initiatives
                </h3>
                <ul className="space-y-3">
                  {[
                    'Home for the orphans',
                    'Schools for the physically challenged',
                    'Care of the Handicapped',
                    'Psycho-spiritual Counselling/Retreats',
                    'Ancilla Water Factory',
                    'Center for Women studies and Intervention (CWSI)',
                    'Sewing centers',
                  ].map((initiative, index) => (
                    <li key={index} className="flex gap-3 items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                      <span className="text-muted-foreground">
                        {initiative}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-card border border-border rounded-lg p-4 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Counselling/Retreats
                    </p>
                    <p className="font-semibold text-foreground">08028846096</p>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Water Factory
                    </p>
                    <p className="font-semibold text-foreground">08032623689</p>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 col-span-2 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">CWSI</p>
                    <p className="font-semibold text-foreground">08036700282</p>
                  </div>
                </div>
                <div className="bg-card border border-border rounded-lg p-4 col-span-2 flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Ancilla creative design
                    </p>
                    <p className="font-semibold text-foreground">08100908362</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Image */}
            <motion.div className="relative" variants={itemVariants}>
              <Carousel
                className="w-full "
                plugins={[plugin.current]}
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
                opts={{
                  loop: true,
                }}
              >
                <CarouselContent className=" w-full">
                  {images.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="h-96 md:h-full min-h-96"
                    >
                      <div className="relative h-96 md:h-full min-h-96 rounded-xl overflow-hidden border border-primary/20 shadow-2xl">
                        <Image
                          src={item}
                          alt="Social works and community empowerment"
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-transparent" />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Caption */}
              <motion.div
                className="mt-6 bg-card border border-border rounded-lg p-6"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <p className="text-muted-foreground leading-relaxed italic">
                  The center works towards mainstreaming of gender equality by
                  helping the offenders to strengthen their thoughts and build
                  their spirit of acceptance and offers new knowledge. CWSI has
                  legal activities in a bid to curtail extreme manifestations of
                  marginalization, enslavement and helplessness of any gender.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CWSI Services Sections */}
      <motion.section
        className="py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-4">
          <motion.div className="mb-12" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
              Center for Women Studies & Intervention (CWSI)
            </h2>
            <div className="h-1 w-20 bg-linear-to-br from-primary to-primary/50 rounded-full" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Human Rights Intervention */}
            <motion.div variants={itemVariants}>
              <Card className="bg-linear-to-br  from-card to-primary/5 border-primary/20 h-full hover:border-primary/40 transition-all duration-300 overflow-hidden group">
                <div className="h-1 bg-linear-to-br from-primary to-primary/50 group-hover:from-primary group-hover:to-transparent transition-all" />
                <div className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <div className="w-6 h-6 bg-linear-to-br  from-primary to-primary/50 rounded" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Human Rights Intervention
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    CWSI works to uphold the dignity of each person especially
                    the women and the girl-child who are subjected to all kinds
                    of violence. We provide support, advocacy, and intervention
                    to ensure their rights are protected and respected.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Gender Equality */}
            <motion.div variants={itemVariants}>
              <Card className="bg-linear-to-br  from-card to-primary/5 border-primary/20 h-full hover:border-primary/40 transition-all duration-300 overflow-hidden group">
                <div className="h-1 bg-linear-to-br from-primary to-primary/50 group-hover:from-primary group-hover:to-transparent transition-all" />
                <div className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <div className="w-6 h-6 bg-linear-to-br  from-primary to-primary/50 rounded" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Gender Equality & Education
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Education is a matter of right, not just privilege. CWSI
                    helps bridge this gap through various programs including
                    skill acquisition, adult education, and economic empowerment
                    to ensure equal opportunities.
                  </p>
                </div>
              </Card>
            </motion.div>

            {/* Prison Decongestion */}
            <motion.div variants={itemVariants}>
              <Card className="bg-linear-to-br  from-card to-primary/5 border-primary/20 h-full hover:border-primary/40 transition-all duration-300 overflow-hidden group">
                <div className="h-1 bg-linear-to-br from-primary to-primary/50 group-hover:from-primary group-hover:to-transparent transition-all" />
                <div className="p-8 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <div className="w-6 h-6 bg-linear-to-br  from-primary to-primary/50 rounded" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    Prison Decongestion
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    As a means of bringing succor to the downtrodden, CWSI
                    ventured into prison apostolate in January 2013. We work to
                    support and rehabilitate prisoners while advocating for
                    humane treatment and reintegration.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Additional Areas */}
          <motion.div
            className="mt-12 bg-linear-to-br from-primary/10 via-transparent to-primary/10 border border-primary/20 rounded-xl p-8"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Other Areas of CWSI Focus
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: 'Skill Acquisition',
                  desc: 'Vocational training and skills development programs',
                },
                {
                  title: 'Migration Challenges',
                  desc: 'Support for migrants and trafficking prevention',
                },
                {
                  title: 'Economic Rights',
                  desc: 'Economic empowerment and financial independence',
                },
                {
                  title: 'Adult Education',
                  desc: 'Literacy and continuing education programs',
                },
                {
                  title: 'Woman Dignity',
                  desc: "Protecting and promoting women's dignity and rights",
                },
                {
                  title: 'Community Support',
                  desc: 'Comprehensive support systems for vulnerable groups',
                },
              ].map((area, index) => (
                <div key={index} className="space-y-2">
                  <p className="font-semibold text-foreground flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    {area.title}
                  </p>
                  <p className="text-sm text-muted-foreground ml-4">
                    {area.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="py-16 bg-linear-to-br from-primary/10 to-primary/5 border-t border-b border-primary/20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-3xl font-bold text-foreground">
              Join Us in Our Mission
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Together, we can make a difference in the lives of the
              marginalized and vulnerable. Contact us to learn more about how
              you can support our social apostolates.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
