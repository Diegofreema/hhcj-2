'use client';

import { ContactForm } from '@/features/shared/components/contact-form';
import { PageHero } from '@/features/shared/components/page-hero';
import { motion } from 'framer-motion';
import { MailCheck, MapPin, MessageSquare, Phone } from 'lucide-react';
import { FaEnvelope } from 'react-icons/fa';

const officeAddresses = [
  {
    name: 'Handmaids of the Holy Child Jesus (HHCJ) Generalate',
    address: 'Ifuho',
    city: 'Ikot Ekpene',
    state: 'Akwa Ibom State',
    phone: '+234 810 000 3496',
    region: 'Nigeria',
    postOffice: 'P. O. Box 155',
    email: 'ifuhandmaids@yahoo.com',
  },
  {
    name: 'Lagos',
    title: 'Provincial Secretary - North Western Province',
    address: 'No. 2 – 6 Somosu Street',
    city: 'Surulere',
    state: 'Lagos',
    phone: '+234 816 385 0409',
    region: 'Nigeria',
  },
  {
    name: 'Ghana',
    title: 'Provincial Secretary - Ghana Province',
    address: 'P. O. Box MS 162',
    city: 'Mile 7',
    state: 'Accra',
    phone: '+233 208168307',
    region: 'Ghana',
    postOffice: 'P. O. Box MS 162',
  },
  {
    name: 'Kenya',
    title: 'Convent HHCJ',
    address: 'Outspan',
    city: 'Outspan',
    state: 'Kenya',
    phone: '+254 715 097324',
    region: 'Kenya',
  },
  {
    name: 'Calabar',
    title: 'Provincial Secretary - South Eastern Province',
    address: 'P. O. Box 1452',
    city: 'Calabar',
    state: 'Cross River State',
    phone: '+234 813 801 4807',
    region: 'Nigeria',
  },
  {
    name: 'Fegge',
    title: 'Provincial Secretary - Central Eastern Province',
    address: 'P. O. Box 2687 Fegge',
    city: 'Onitsha',
    state: 'Anambra State',
    phone: '+234 803 324 6364',
    region: 'Nigeria',
  },
];

export function ContactUsClientPage() {
  return (
    <div className="min-h-screen bg-background">
      <PageHero
        title="Contact Us"
        description="We'd love to hear from you. Get in touch with us today."
      />

      {/* Office Addresses Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-foreground text-center mb-3">
              Our Offices
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Visit any of our offices around the world
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {officeAddresses.map((office, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-6 bg-linear-to-br from-primary/5 to-transparent border border-primary/20 rounded-xl hover:border-primary/40 hover:shadow-lg hover:shadow-primary/20 transition-smooth group"
                >
                  {/* Header with location badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-smooth">
                        {office.name}
                      </h3>
                      {office.title && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {office.title}
                        </p>
                      )}
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-primary/10 border border-primary/30 rounded-full"
                    >
                      <span className="text-xs font-semibold text-primary">
                        {office.region}
                      </span>
                    </motion.div>
                  </div>

                  {/* Address section */}
                  <div className="space-y-3 mb-6">
                    <div className="flex gap-3">
                      <MapPin
                        className="text-primary shrink-0 mt-1"
                        size={18}
                      />
                      <div className="text-sm text-foreground">
                        <p className="font-medium">{office.address}</p>
                        <p>{office.city}</p>
                        <p className="text-muted-foreground">{office.state}</p>
                      </div>
                    </div>

                    <div className="flex gap-3 items-center">
                      <Phone className="text-primary shrink-0" size={18} />
                      <a
                        href={`tel:${office.phone.replace(/\s+/g, '')}`}
                        className="text-sm font-medium text-primary hover:text-primary-dark transition-smooth"
                      >
                        {office.phone}
                      </a>
                    </div>
                    {office.email && (
                      <div className="flex gap-3 items-center">
                        <FaEnvelope
                          className="text-primary shrink-0"
                          size={18}
                        />
                        <a
                          href={`mailto:${office.email}`}
                          className="text-sm font-medium text-primary hover:text-primary-dark transition-smooth"
                        >
                          {office.email}
                        </a>
                      </div>
                    )}
                    {office.postOffice && (
                      <div className="flex gap-3 items-center">
                        <MailCheck
                          className="text-primary shrink-0"
                          size={18}
                        />
                        <p className="text-sm font-medium text-primary hover:text-primary-dark transition-smooth">
                          {office.postOffice}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Accent line */}
                  <div className="w-12 h-1 bg-linear-to-r from-primary to-primary/0 rounded-full group-hover:w-full transition-all duration-500" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Contact Form Section */}
          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 bg-muted/30 border border-primary/10 rounded-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <MessageSquare className="text-primary" size={28} />
                <h2 className="text-2xl font-bold text-foreground">
                  Send us a Message
                </h2>
              </div>

              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Optional) */}
      <section className="py-20 bg-muted/20 border-t border-primary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Find Us
          </h2>
          <div className="w-full h-96 bg-muted/50 border border-primary/10 rounded-lg overflow-hidden">
            <iframe
              width="100%"
              height="100%"
              title="HHCJ Foundation Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.1234567890!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjEiTiA3NMKwMDAnMjEuNiJX!5e0!3m2!1sen!2sus!4v1234567890"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
