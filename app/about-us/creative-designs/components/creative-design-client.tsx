'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import { PageHero } from '@/features/shared/components/page-hero';

export function CreativeDesignClient() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const services = [
    'Chasubles',
    'Albs',
    'Surplices',
    'Miters',
    'Copes',
    'Dalmatics',
    'Altar cloth and linen',
    'Choir robes',
    'Mass servers wear',
  ];

  const specializations = [
    'Church logos',
    'Customized T-shirts',
    'Embroidered symbols',
    'Religious emblems',
    'Agbada, senators and other designs',
  ];

  const whyChoose = [
    'Quality craftmanship',
    'Professional embroidery',
    'Liturgical understanding',
    'Customization',
    'Durable materials',
    'Passion and creativity',
  ];

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Ancilla Creative Design"
        description="Beautifully Crafted Liturgical Garments & Embroidery Services"
      />

      {/* Main Content Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-3xl mx-auto">
            At Ancilla Creative Design, we specialize in creating beautifully
            crafted liturgical garments that honor the dignity of worship and
            richness of tradition. With a deep sense of reverence for the
            church&apos;s heritage, we sew and design garments that reflect
            beauty, devotion and excellence. Our work is guided by passion,
            elevated by creativity and reflected with skill. Every stitch is
            made with care, every design is crafted with meaning. Every garment
            produced supports and enriches the sacred liturgy.
          </p>
        </motion.div>

        {/* Image Gallery Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
          variants={containerVariants}
        >
          {[
            {
              src: '/a.jpeg',
              alt: 'Liturgical Vestments and Chasubles',
            },
            {
              src: '/b.jpeg',
              alt: 'Embroidery and Monogram Work',
            },
            {
              src: '/c.jpeg',
              alt: 'Altar Cloth and Religious Linens',
            },

            {
              src: '/d.jpeg',
              alt: 'Choir Robes and Ceremonial Vestments',
            },
            {
              src: '/e.jpeg',
              alt: 'Choir Robes and Ceremonial Vestments',
            },
            {
              src: '/f.jpeg',
              alt: 'Choir Robes and Ceremonial Vestments',
            },
            {
              src: '/g.jpeg',
              alt: 'Choir Robes and Ceremonial Vestments',
            },
            {
              src: '/h.jpeg',
              alt: 'Choir Robes and Ceremonial Vestments',
            },
            {
              src: '/i.jpeg',
              alt: 'Choir Robes and Ceremonial Vestments',
            },
            {
              src: '/j.jpeg',
              alt: 'Choir Robes and Ceremonial Vestments',
            },
          ].map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg h-96 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Image
                src={image.src || '/placeholder.svg'}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance"
        >
          Our Services
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3">
              <span className="w-1 h-8 bg-primary rounded-full"></span>
              Liturgical Vestments
            </h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-foreground/80"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-3">
              <span className="w-1 h-8 bg-primary rounded-full"></span>
              Professional Embroidery
            </h3>
            <p className="text-foreground/80 mb-8">
              With our professional monogram machine, we design and stitch:
            </p>
            <ul className="space-y-4 mb-8">
              {specializations.map((spec, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-foreground/80"
                >
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/20 text-primary text-sm shrink-0 mt-0.5">
                    ✓
                  </span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
            <p className="text-foreground/80 text-sm">
              Our embroidery is crisp, durable, and elegant—perfect for
              vestments, linen, bags, uniforms and special garments.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Why Choose Us */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance"
        >
          Why Choose Ancilla Creative Designs
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-6"
          variants={containerVariants}
        >
          {whyChoose.map((reason, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative p-6 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>
              <div className="relative">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {reason}
                </h3>
                <div className="h-1 w-12 bg-primary rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-balance"
        >
          Where to Find Us
        </motion.h2>

        <motion.div
          className="bg-linear-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-lg p-8 md:p-12"
          variants={itemVariants}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-foreground">
                    Location
                  </h3>
                  <p className="text-foreground/80">
                    Generalate of the Handmaids of the Holy Child Jesus
                    <br />
                    Ifuho, Aba road
                    <br />
                    Ikot Ekpene
                    <br />
                    Akwa Ibom State, Nigeria
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      Phone
                    </h3>
                    <a
                      href="tel:08100908362"
                      className="text-primary hover:underline block"
                    >
                      08100908362
                    </a>
                    <a
                      href="tel:09168048411"
                      className="text-primary hover:underline block"
                    >
                      09168048411
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">
                      Email
                    </h3>
                    <a
                      href="mailto:ancillasew@gmail.com"
                      className="text-primary hover:underline break-all"
                    >
                      ancillasew@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
