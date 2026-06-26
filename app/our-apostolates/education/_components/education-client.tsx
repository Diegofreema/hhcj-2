'use client';

import { Button } from '@/components/ui/button';
import AnimatedContent from '@/features/shared/components/animated-content';
import { motion, Variants } from 'framer-motion';
import { BookOpen, GraduationCap, Heart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const nurseryPrimarySchools = [
  'Ancilla International Nursery/Primary School, Ikot Ansa, Calabar. Nigeria',
  'Charles Walker International Nursery/Primary School, Calabar. Nigeria',
  'Handmaids Int. Nursery/Primary School, Obudu. Nigeria',
  'Handmaids Infant Jesus Nursery/Primary School, Oron, Akwa Ibom State. Nigeria',
  'Madonna Montessori Nursery and Primary School, Calabar. Nigeria',
  'Handmaids Prince of Peace Montessori Nursery/Primary School, Anua. Nigeria',
  'Ancilla Nursery and Basic School, Nunya. Nigeria',
  'Handmaids Assumpta N/B School, Aladimma. Nigeria',
  'Handmaids Assumpta N/B School, Owerri. Nigeria',
  'Handmaids Infant Jesus N/B School, Awka. Nigeria',
  'Handmaids Montessori N/B Sch, Iyiowa OdoEkpe. Nigeria',
  'Handmaids Montessori N/P School, Ogidi, Onitsha. Nigeria',
  'Handmaids N/B School, Azuiyiokwu. Abakaliki. Nigeria',
  'Handmaids Nursery and Basic School, Iboko. Nigeria',
  'Handmaids Nursery and Basic School, Isuochi. Nigeria',
  'Handmaids Nursery and Basic School, Obube. Nigeria',
  'Handmaids Nursery and Basic School, Ututu. Nigeria',
  'Handmaids Schools, Igwurita. Nigeria',
  'Handmaids Day-Care, Aguda, Lagos. Nigeria',
  'Handmaids Int. Catholic School, Aguda, Lagos. Nigeria',
  'Handmaids N/P School, Ibiade, Ijebu Ode. Nigeria',
  'Handmaids Nursery and Primary School, Idi-Ayunre. Nigeria',
  'Handmaids Nursery School, Garki, Area III, Abuja. Nigeria',
  'Ancilla Catholic Academy, Outspan, Kenya',
  'Ancilla Primary and Junior High School, Accra. Ghana',
  'Handmaids Preparatory and Junior High, Nsoatre. Ghana',
  'Ancilla Montessori, Tepa. Ghana',
  'Ancilla Primary School, Wa. Ghana',
  'Ancilla Preparatory, Atwima-Boko. Ghana',
];

const secondarySchools = [
  "Ancilla Girls' College, Calabar. Nigeria",
  "Annunciation Girls' Juniorate, Moniaya, Ogoja. Nigeria",
  "Assumption Girls' Juniorate, Ndon Ebom, Akwa Ibom State. Nigeria",
  'Charles Walker Vocational Training School, Anua, Uyo. Akwa Ibom State. Nigeria',
  "Handmaid Girls' College, Obudu. Nigeria",
  'Holy Child Secondary School, Ikom, Cross River state. Nigeria',
  'Infant Jesus Model Secondary School, Oron, Akwa IBom State. Nigeria',
  "Loreto Girls' Juniorate, Eriam-Afaha Obong, Abak, Akwa Ibom State. Nigeria",
  'Mother Ignatia Vocational Centre, Ikot Ansa, Calabar. Nigeria',
  'Handmaids Juniorate, Amumara, Mbaise. Nigeria',
  "Handmaids Girls' Model Sec. School, Area G, Owerri. Nigeria",
  "Handmaids Girls' Secondary School, Amansea, Anambra State. Nigeria",
  "Handmaids Girls' Secondary School, Obube, Imo State. Nigeria",
  'School Acquisition Center, Isuochi. Nigeria',
  'HHCJ Assumpta Girls Model Sec. Sch. Owerri. Nigeria',
  'Ganaka International Schools, Jos. Nigeria',
  'Handmaids Girls Secondary School, Kuje, Abuja. Nigeria',
  'Handmaids Secondary School, Idi-Ayunre. Nigeria',
  'Handmaids Secondary School, Ijebu-Ode. Nigeria',
  'Ancilla Catholic Comprehensive College, Wosing, Bali, Mezam Division, Bamenda, North West Region, Cameroon',
  'Ancilla Vocational Training Institute, Majengo. Kenya',
  'Ancilla Vocational College, Kiembeni. Kenya',
  'Centre de Formation Professionelle Hoteliere, Lome, Togo',
];

// const stats = [
//   { number: 10000, label: 'Students Benefited', icon: GraduationCap },
//   { number: 55, label: 'Schools Established', icon: BookOpen },
//   { number: 5, label: 'Countries Served', icon: Users },
//   { number: 100, label: 'Years of Service', icon: Award },
// ];

export function EducationClientPage() {
  return (
    <motion.div
      className="w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      {/* Mission Section with Image */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid lg:grid-cols-2 gap-4 items-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="order-2 lg:order-1">
              <Image
                src="/education.png"
                alt="Education and Formation"
                className="md:w-2/3 w-full h-auto rounded-xl shadow-2xl"
                width={200}
                height={200}
              />
            </motion.div>

            <motion.div variants={itemVariants} className="order-1 lg:order-2">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                Education/Formation of the Young
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  The Handmaids of the Holy Child Jesus are generally known as
                  devoted teachers and educational administrators. This has
                  earned us a reputation for competent educational management at
                  all levels. We form the whole person, in morals, discipline,
                  virtues and academics.
                </p>
                <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-foreground">
                  &quot;Be constant in training children in what is right, what
                  will help them to be good citizens of their nation, to be good
                  Christians, God fearing, God loving, at all times&quot;
                  <span className="block text-sm mt-2 not-italic font-semibold">
                    — Mother Foundress
                  </span>
                </blockquote>
                <p>
                  Through Education at all levels, ranging from Nursery Schools
                  to Universities, we share in the teaching ministry of Christ
                  as we teach, train and prepare our students/pupils to meet the
                  challenges of life and not just to obtain the Certificates.
                  Our ministry extends to special Schools for the handicapped
                  children and adults.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-linear-to-r from-primary/5 to-primary/10 border-t border-b border-primary/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  variants={itemVariants}
                >
                  <div className="mb-4 p-4 rounded-full bg-primary/10">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>

                  <CountUp
                    to={stat.number}
                    className="text-4xl font-bold text-foreground mb-2"
                  />
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section> */}

      {/* Schools Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div variants={containerVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-4xl font-bold text-foreground mb-16 text-center"
            >
              Handmaids Schools Network
            </motion.h2>

            {/* Nursery/Primary Schools */}
            <motion.div variants={itemVariants} className="mb-16">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  Nursery & Primary Schools
                </h3>
                <div className="w-16 h-1 bg-linear-to-r from-primary to-primary/50 rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {nurseryPrimarySchools.map((school, index) => (
                  <AnimatedContent
                    key={index}
                    className="p-4 rounded-lg bg-linear-to-r from-background to-primary/5 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                    delay={0.2 * index}
                    duration={0.5}
                  >
                    <div className="flex gap-3">
                      <BookOpen className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <p className="text-sm text-foreground">{school}</p>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </motion.div>

            {/* Secondary & Vocational Schools */}
            <motion.div variants={itemVariants}>
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  Secondary & Vocational Schools
                </h3>
                <div className="w-16 h-1 bg-linear-to-r from-primary to-primary/50 rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {secondarySchools.map((school, index) => (
                  <AnimatedContent
                    key={index}
                    className="p-4 rounded-lg bg-linear-to-r from-background to-primary/5 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                    delay={0.1 * index}
                    duration={0.5}
                  >
                    <div className="flex gap-3">
                      <GraduationCap className="w-5 h-5 text-primary shrink-0 mt-1" />
                      <p className="text-sm text-foreground">{school}</p>
                    </div>
                  </AnimatedContent>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-linear-to-r from-primary/10 to-primary/5 border-t border-primary/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <div className="inline-block p-4 rounded-full bg-primary/10 mb-6">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Join Our Mission
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Become part of our community of educators and caregivers
                dedicated to transforming lives through quality education and
                holistic development. We welcome individuals called to serve in
                the teaching ministry of Christ.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="https://hhcj.netpro.software">
                <Button className="bg-primary cursor-pointer hover:bg-primary/90 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300">
                  Register to Become a Handmaid
                </Button>
              </Link>
              <Link className="cursor-pointer" href="/contact-us">
                <Button
                  variant="outline"
                  className="px-8 cursor-pointer  py-6 text-lg rounded-lg border-primary/50 hover:bg-primary/5 bg-transparent"
                >
                  Contact Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
