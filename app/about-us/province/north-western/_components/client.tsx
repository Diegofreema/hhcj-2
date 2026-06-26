'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card } from '@/components/ui/card';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function NorthWesternClientPage() {
  return (
    <div className="w-full">
      {/* Hero Section with Title */}
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative py-16 bg-linear-to-r from-background via-background to-primary/5"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
              The History of the Congregation of the Handmaids of the Holy Child
              Jesus
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-semibold">
              North Western Province
            </p>
          </div>
        </div>
      </motion.section>

      {/* Side by Side Images Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-background"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg border border-primary/20"
            >
              <Image
                src="/north.jpeg"
                alt="HHCJ Sisters gathering in North Western Province"
                width={500}
                height={400}
                className="w-full h-80 object-cover"
              />
              <p className="text-center text-sm text-muted-foreground p-4 bg-muted/50">
                THE HISTORY OF THE CONGREGATION OF THE HANDMAIDS OF THE HOLY
                CHILD JESUS, NORTH WESTERN PROVINCE
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg border border-primary/20"
            >
              <Image
                src="/history-2.jpg"
                alt="Community service and apostolate in North Western Province"
                width={500}
                height={400}
                className="w-full h-80 object-cover"
              />
              <p className="text-center text-sm text-muted-foreground p-4 bg-muted/50">
                THE HISTORY OF THE CONGREGATION OF THE HANDMAIDS OF THE HOLY
                CHILD JESUS, NORTH WESTERN PROVINCE
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Main Content Sections */}
      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="py-16 bg-muted/30"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Establishment Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Establishment of the Province
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                The 7th General Chapter held at Eriam in March, 1996 decreed
                that the Congregation be organized in Provinces for a more
                Effective Administration and Apostolic Ministry. As a result of
                this mandate, the following Provinces were created:
                North-Western Province, South-Eastern Province, Central Eastern
                Province, and Ghana Province.
              </p>
            </motion.div>

            {/* Province Information Card */}
            <motion.div variants={itemVariants}>
              <Card className="p-8 border-primary/20 bg-background">
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  North-Western Province Inauguration
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The North-Western Province of the Handmaids of the Holy Child
                  Jesus was erected on the 18th of August, 1997 at St.
                  Paul&apos;s Catholic Church, Gwagwalada, Abuja, Nigeria with
                  the headquarters located at 2-6 Somosu Street, Aguda,
                  Surulere, Lagos.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  This event was carried out after the First Provincial Assembly
                  held at Gwagwalada, Abuja on the 15th of August–September,
                  1997. The then Superior General, Mother Mary Langley, HHCJ
                  presented an opening address.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The North Western Province was made up of Communities in the
                  Archdioceses and Dioceses of Lagos, Abuja, Lokoja, Ilorin,
                  Ijebu-Ode, Idah, Makurdi, Minna and Ondo. The Province had the
                  total number of ninety-six Professed Sisters living in
                  eighteen Communities of the Congregation at her inauguration.
                  The North western Province is multi-culture with Sisters from
                  different parts of the country.
                </p>
              </Card>
            </motion.div>

            {/* First Leadership Team */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-3xl font-bold text-foreground mb-6">
                The First Leadership Team (18th August 1997)
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="font-semibold text-foreground">
                    Sr. Emmanuella Ladipo, HHCJ
                  </p>
                  <p className="text-muted-foreground">Provincial Superior</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="font-semibold text-foreground">
                    Sr. Beatrice Azide, HHCJ
                  </p>
                  <p className="text-muted-foreground">Provincial Vicar</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="font-semibold text-foreground">
                    Sr. Mary Tuku, HHCJ
                  </p>
                  <p className="text-muted-foreground">Provincial Councillor</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="font-semibold text-foreground">
                    Sr. Justina Obiajunwa, HHCJ
                  </p>
                  <p className="text-muted-foreground">Provincial Councillor</p>
                </div>
                <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                  <p className="font-semibold text-foreground">
                    Sr. Dorothy Okpanachi, HHCJ
                  </p>
                  <p className="text-muted-foreground">Provincial Councillor</p>
                </div>
              </div>
            </motion.div>

            {/* Provincial Chapters */}
            <motion.div variants={itemVariants} className="space-y-8">
              <h3 className="text-3xl font-bold text-foreground">
                Provincial Chapters
              </h3>

              {/* First Provincial Chapter */}
              <Card className="p-6 border-primary/20 bg-background">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground">
                      First Provincial Chapter (26th July – 1st August 2000)
                    </h4>
                    <p className="text-primary font-semibold mt-2">
                      Theme: Towards Building a More Effective Community
                      Centered on Gospel Witnessing
                    </p>
                    <div className="mt-4 grid md:grid-cols-2 gap-3">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Emmanuella Ladipo, HHCJ
                        </span>{' '}
                        - Provincial Superior
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Beatrice Azide, HHCJ
                        </span>{' '}
                        - Provincial Vicar
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Justina Obiajunwa, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Mary Tuku, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Dorothy Okpanachi, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Second Provincial Chapter */}
              <Card className="p-6 border-primary/20 bg-background">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground">
                      Second Provincial Chapter (8th – 17th July 2023)
                    </h4>
                    <p className="text-primary font-semibold mt-2">
                      Theme: Living Out Our Charism and Mission in Accordance to
                      the Signs of the Times
                    </p>
                    <div className="mt-4 grid md:grid-cols-2 gap-3">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Dorothy Okpanachi, HHCJ
                        </span>{' '}
                        - Provincial Superior
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Justina Obiajunwa, HHCJ
                        </span>{' '}
                        - Provincial Vicar
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Francisca Josephine Nzeke, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Grace Ushie, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Ngozi Frances Uti, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Third Provincial Chapter */}
              <Card className="p-6 border-primary/20 bg-background">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground">
                      Third Provincial Chapter (30th July – 6th August 2006)
                    </h4>
                    <p className="text-primary font-semibold mt-2">
                      Theme: Passion for Christ, Passion for Humanity: Handmaids
                      as Signs and Instrument of Gods Compassionate Love and
                      Reconciliation
                    </p>
                    <div className="mt-4 grid md:grid-cols-2 gap-3">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Dorothy Okpanachi, HHCJ
                        </span>{' '}
                        - Provincial Superior
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Grace Ushie, HHCJ
                        </span>{' '}
                        - Provincial Vicar
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Rosemary Ukata, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Cicilia Oboh, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Josephine Ngama, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Fourth Provincial Chapter */}
              <Card className="p-6 border-primary/20 bg-background">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground">
                      Fourth Provincial Chapter (27th July – 3rd August 2009)
                    </h4>
                    <p className="text-primary font-semibold mt-2">
                      Theme: Towards the Renewal of Our Religious Commitments
                    </p>
                    <div className="mt-4 grid md:grid-cols-2 gap-3">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Justina Obiajunwa, HHCJ
                        </span>{' '}
                        - Provincial Superior
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Anthonia Uche, HHCJ
                        </span>{' '}
                        - Provincial Vicar
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Rosemary Ukata, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Oshieza Ann Otonoku, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Agnes Ijoko, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Fifth Provincial Chapter */}
              <Card className="p-6 border-primary/20 bg-background">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground">
                      Fifth Provincial Chapter (1st – 6th August 2013)
                    </h4>
                    <p className="text-primary font-semibold mt-2">
                      Theme: Understanding, Owing and Prophetic Living of Our
                      Identity as Handmaids
                    </p>
                    <div className="mt-4 grid md:grid-cols-2 gap-3">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Ngozi Frances Uti, HHCJ
                        </span>{' '}
                        - Provincial Superior
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Oshieza Ann Otonoku, HHCJ
                        </span>{' '}
                        - Provincial Vicar
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Agnes Ijoko, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Patience Amadike, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Philomina Akem, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Sixth Provincial Chapter */}
              <Card className="p-6 border-primary/20 bg-background">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground">
                      6th Provincial Chapter (17th – 24th September 2016)
                    </h4>
                    <p className="text-primary font-semibold mt-2">
                      Theme: And Love is the Answer: Re-Birthing the
                      All-Embracing Charity of our Mother Foundress
                    </p>
                    <div className="mt-4 grid md:grid-cols-2 gap-3">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Osheiza Ann Otonoku, HHCJ
                        </span>{' '}
                        - Provincial Superior
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Grace Ushie, HHCJ
                        </span>{' '}
                        - Provincial Vicar
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Patience Amadike, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Philomina Akem, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Callista Umeh, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Seventh Provincial Chapter */}
              <Card className="p-6 border-primary/20 bg-background">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground">
                      7th Provincial Chapter (22nd – 30th August 2019)
                    </h4>
                    <p className="text-primary font-semibold mt-2">
                      Theme: Call to Conversion in the Living Out of Our Mission
                      Statement
                    </p>
                    <div className="mt-4 grid md:grid-cols-2 gap-3">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Osheiza Ann Otonoku, HHCJ
                        </span>{' '}
                        - Provincial Superior
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Callista Umeh, HHCJ
                        </span>{' '}
                        - Provincial Vicar
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Jane Onyeneri, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Cordelia Nwefo, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Mary Okolo, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Eighth Provincial Chapter */}
              <Card className="p-6 border-primary/20 bg-background">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0"></div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-foreground">
                      8th Provincial Chapter (22nd – 30th September 2022)
                    </h4>
                    <p className="text-primary font-semibold mt-2">
                      Theme: Synodality in the Life, Vision and Mission of the
                      Handmaids in the 21st Century
                    </p>
                    <div className="mt-4 grid md:grid-cols-2 gap-3">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Jane Onyeneri, HHCJ
                        </span>{' '}
                        - Provincial Superior
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Cordelia Nwefo, HHCJ
                        </span>{' '}
                        - Provincial Vicar
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Mary Okolo, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. MaryElizabeth Adedeji, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-semibold">
                          Sr. Anthonia Onuegbu, HHCJ
                        </span>{' '}
                        - Provincial Councillor
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
