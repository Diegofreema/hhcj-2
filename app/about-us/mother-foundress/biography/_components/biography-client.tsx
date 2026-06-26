'use client';

import { motion, Variants } from 'framer-motion';
import {
  BookOpen,
  Calendar,
  MapPin,
  Milestone,
  ScrollText,
  Ship,
  PenTool,
  Home,
  Anchor,
  Heart,
  Cross,
  Users,
  Scale,
  CheckCircle,
  FolderOpen,
  Church,
} from 'lucide-react';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
};

interface BiographySectionProps {
  title?: string;
  content: React.ReactNode;
  imageSrc?: string;
  imageAlt?: string;
  imageCaption?: string;
  reverse?: boolean; // If true, image is on the left (on desktop)
}

function BiographySection({
  title,
  content,
  imageSrc,
  imageAlt,
  imageCaption,
  reverse = false,
}: BiographySectionProps) {
  return (
    <motion.div
      className={`flex flex-col ${
        reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
      } gap-8 items-start mb-16`}
      variants={itemVariants}
    >
      <div className="flex-1 space-y-4">
        {title && <h3 className="text-2xl font-bold mb-4">{title}</h3>}
        <div className="text-muted-foreground leading-relaxed space-y-4">
          {content}
        </div>
      </div>

      {imageSrc && (
        <motion.div
          className="w-full lg:w-1/3 flex flex-col items-center"
          variants={imageVariants}
        >
          <div className="relative w-full aspect-4/3 rounded-xl overflow-hidden shadow-lg border border-primary/20 bg-muted/30">
            <Image
              src={imageSrc}
              alt={imageAlt || 'Biography Image'}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          {imageCaption && (
            <p className="mt-2 text-sm text-center text-muted-foreground italic">
              {imageCaption}
            </p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}

export function MotherFoundressBiographyClient() {
  return (
    <motion.div
      className="space-y-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Introduction / Personal Details Section */}
      <section className="py-20 bg-linear-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Important Dates & Events
              </h2>
              <p className="text-lg text-muted-foreground">
                In the Life of Mother Mary Charles Magdalen Walker, RSC (1881 –
                1966)
              </p>
              <p className="text-md text-primary font-medium mt-2">
                Foundress of the Congregation of the Handmaids of the Holy Child
                Jesus
              </p>
            </div>

            {/* Personal Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-muted/30 p-6 rounded-xl border border-primary/10">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary" /> Personal Details
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between border-b border-primary/5 pb-2">
                    <span className="font-medium">Maiden Name:</span>{' '}
                    <span>Margaret Mary Angela</span>
                  </li>
                  <li className="flex justify-between border-b border-primary/5 pb-2">
                    <span className="font-medium">Father:</span>{' '}
                    <span>Colonel Edward Walker</span>
                  </li>
                  <li className="flex justify-between border-b border-primary/5 pb-2">
                    <span className="font-medium">Mother:</span>{' '}
                    <span>Mary Josephine Walker (nee Woodhead)</span>
                  </li>
                  <li className="flex justify-between border-b border-primary/5 pb-2">
                    <span className="font-medium">Nationality:</span>{' '}
                    <span>English</span>
                  </li>
                  <li className="flex justify-between border-b border-primary/5 pb-2">
                    <span className="font-medium">Country of Origin:</span>{' '}
                    <span>England</span>
                  </li>
                </ul>
              </div>

              <div className="bg-muted/30 p-6 rounded-xl border border-primary/10">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" /> Vital Statistics
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex justify-between border-b border-primary/5 pb-2">
                    <span className="font-medium">Date of Birth:</span>{' '}
                    <span>16th March 1881</span>
                  </li>
                  <li className="flex justify-between border-b border-primary/5 pb-2">
                    <span className="font-medium">Place of Birth:</span>{' '}
                    <span>Brighton, Sussex</span>
                  </li>
                  <li className="flex justify-between border-b border-primary/5 pb-2">
                    <span className="font-medium">Baptism:</span>{' '}
                    <span>25th March 1881</span>
                  </li>
                  <li className="flex justify-between border-b border-primary/5 pb-2">
                    <span className="font-medium">First Holy Communion:</span>{' '}
                    <span>16th July 1893</span>
                  </li>
                  <li className="flex justify-between border-b border-primary/5 pb-2">
                    <span className="font-medium">Confirmation:</span>{' '}
                    <span>29th May 1894</span>
                  </li>
                </ul>
              </div>
            </div>

            <motion.div
              className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary mb-16"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                <Milestone className="w-5 h-5 text-primary" /> Early Education
              </h3>
              <p className="text-muted-foreground">
                Margaret Mary Angela attended a school run by the Society of the
                Holy Child Jesus in Mayfield, Sussex, England.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Timeline / Chronology Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center gap-3">
                <ScrollText className="w-8 h-8 text-primary" />
                Chronicle of Vocation & Mission
              </h2>
              <div className="h-1 w-24 bg-linear-to-r from-primary to-primary/50 rounded-full"></div>
            </div>

            <div className="space-y-16">
              {/* 1901 - 1904 */}
              <BiographySection
                title="1901 - 1904: Entering Religious Life"
                content={
                  <>
                    <p>
                      <strong className="text-foreground">
                        21st November 1901:
                      </strong>{' '}
                      Margaret Angela Walker entered the Congregation of the
                      Irish (later, Religious Sisters) Sisters of Charity at
                      Milltown, Dublin, Ireland with the hope of going on the
                      mission.
                    </p>
                    <p>
                      <strong className="text-foreground">
                        19th May 1902:
                      </strong>{' '}
                      She received the Habit of the Irish Sisters of Charity and
                      the name: Sister Mary Charles.
                    </p>
                    <p>
                      <strong className="text-foreground">
                        26th May 1904:
                      </strong>{' '}
                      Sister Mary Charles made her First Religious Profession in
                      the Congregation of the Irish Sisters of Charity. She also
                      discovered that these Sisters of Charity were no longer a
                      missionary congregation as they had severed all
                      relationship with the group in Australia because of
                      distance.
                    </p>
                  </>
                }
              />

              {/* 1904 - 1922 */}
              <BiographySection
                title="1904 - 1922: Teaching Apostolate in Ireland"
                content={
                  <>
                    <p className="mb-4">
                      From 1904 to April 1922, Sister Mary Charles was assigned
                      to the teaching apostolate in various locations:
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                      <li className="bg-muted/50 p-3 rounded-lg border border-primary/10">
                        <span className="block font-semibold text-foreground">
                          Basin Lane, Dublin
                        </span>
                        <span className="text-sm text-muted-foreground">
                          May 1904 – 17th July 1912
                        </span>
                      </li>
                      <li className="bg-muted/50 p-3 rounded-lg border border-primary/10">
                        <span className="block font-semibold text-foreground">
                          St. Vincent, Cork
                        </span>
                        <span className="text-sm text-muted-foreground">
                          Sept 1912 – Sept 1915
                        </span>
                      </li>
                      <li className="bg-muted/50 p-3 rounded-lg border border-primary/10">
                        <span className="block font-semibold text-foreground">
                          Foxford
                        </span>
                        <span className="text-sm text-muted-foreground">
                          Sept 1915 – July 1920
                        </span>
                      </li>
                      <li className="bg-muted/50 p-3 rounded-lg border border-primary/10">
                        <span className="block font-semibold text-foreground">
                          Bray – Ravenswell
                        </span>
                        <span className="text-sm text-muted-foreground">
                          Aug 1920 – April 1921
                        </span>
                      </li>
                    </ul>
                    <div className="bg-primary/5 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">A Scholar & Editor</h4>
                      <ul className="space-y-2 text-muted-foreground text-sm">
                        <li>
                          • Attended St. Mary’s College of Pedagogy and
                          graduated with Honours in 1912.
                        </li>
                        <li>
                          • Wrote <em>The Catechism Notes</em>, widely used in
                          Ireland, England, Wales, and Australia.
                        </li>
                        <li>
                          • Wrote <em>Caritas Christi Urget Nos</em> (1922),
                          published by Superior General Mother Agnes Gertrude,
                          RSC.
                        </li>
                      </ul>
                    </div>
                  </>
                }
              />

              {/* 1913 - 1921 */}
              <BiographySection
                title="1913 - 1921: Missionary Reawakening"
                content={
                  <div className="prose prose-muted text-muted-foreground">
                    <p>
                      Sister Mary Charles experienced a missionary reawakening
                      following a passionate appeal by Bishop Joseph Shanahan of
                      Southern Nigeria for Sisters to work among women and
                      children.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 mt-4">
                      <li>
                        Sister Mary Charles led six Sisters of Charity in
                        volunteering for Nigeria.
                      </li>
                      <li>
                        Opinions were divided: one adviser saw Nigeria as a
                        "white man's grave," while Mother Mary Arsenius, RSC,
                        supported the mission, citing the example of their
                        Foundress Mother Mary Aikenhead.
                      </li>
                      <li>
                        Although the 1921 RSC General Chapter did not
                        immediately send a community, a decree on November 1st,
                        1921, empowered the Superior General to accept
                        missionary works.
                      </li>
                      <li>
                        <strong>14th September 1921:</strong> Burning with zeal,
                        Sister Mary Charles begged for a definite "Yes" or "No"
                        from her Superior General, stating, "even at the extreme
                        cost, my vows would remain intact."
                      </li>
                      <li>
                        <strong>9th November 1921:</strong> After receiving a
                        discouraging response from the Archbishop of Dublin, she
                        requested permission to appeal directly to Bishop
                        Shanahan.
                      </li>
                    </ul>
                  </div>
                }
              />

              {/* 1922 - 1923 Part 1 */}
              <BiographySection
                title="1922 - 1923: The Path to Rome & Approval"
                content={
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          27th April 1922
                        </h4>
                        <p className="text-muted-foreground">
                          Posted to the Religious Sisters’ Convent at 9 Chiswick
                          Lane, London, under Cardinal Bourne.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          Divine Inspiration
                        </h4>
                        <p className="text-muted-foreground">
                          While at prayer, she received inspiration to consult
                          Cardinal Bourne. The Cardinal encouraged her to write
                          to the Holy Father through him.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                        <ScrollText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          18th October 1922
                        </h4>
                        <p className="text-muted-foreground">
                          She wrote a petition to Pope Pius XI to "consecrate
                          the rest of my life for evangelization of the Poor
                          Blacks of the Vicariate of Southern Nigeria."
                        </p>
                      </div>
                    </div>
                    <div className="bg-primary/10 p-4 rounded-xl border border-primary/20">
                      <h4 className="font-bold text-foreground mb-2">
                        11th June 1923 - The Approval
                      </h4>
                      <p className="text-muted-foreground">
                        Sister Mary Charles received a Rescript (dated 23rd May
                        1923) from the Sacred Congregation for Affairs of
                        Religious, Rome. Pope Pius XI permitted her to live out
                        of her Convent for missionary works in Nigeria.
                      </p>
                    </div>
                  </div>
                }
              />

              {/* 1923 Part 2 - Preparation and Departure */}
              <BiographySection
                title="June - September 1923: Preparation & Departure"
                content={
                  <div className="space-y-8">
                    {/* Letters */}
                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                        <PenTool className="w-5 h-5 text-primary" />
                      </div>
                      <div className="space-y-2">
                        <div className="mb-2">
                          <h4 className="font-semibold text-foreground">
                            6th June 1923
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            Informal letter to Mother Agnes Gertrude, RSC, about
                            the Rescript. She noted that Bishop Shanahan wished
                            her to use the name <strong>Sister Magdalen</strong>
                            .
                            <br />
                            <span className="italic text-xs text-muted-foreground/80">
                              (Note: In Nigeria she used Sister Magdalen, Sister
                              Mary Charles, and Sister Mary Charles Magdalen.
                              The HHCJ Congregation officially addresses her as
                              Mother Mary Charles Magdalen Walker.)
                            </span>
                          </p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            21st June 1923
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            Wrote again enclosing a copy of the Rescript.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Transfer and Final Prep */}
                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                        <Home className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          4th July 1923
                        </h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          Transferred to Assumption Sisters Convent (23
                          Kensington Square, London) for quiet preparation.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Got her tropical outfit and injections.</li>
                          <li>
                            Visited Mayfield Convent to finalize matters
                            regarding her late sister Magdalen and late father.
                          </li>
                        </ul>

                        <div className="mt-4 bg-muted/30 p-4 rounded-lg border-l-2 border-primary/30">
                          <h5 className="font-semibold text-sm mb-1">
                            12th July 1923 - Letter of Gratitude
                          </h5>
                          <p className="italic text-sm text-muted-foreground">
                            "...What I have done I had to do, as Magdalen said
                            to me when she was dying... Last night I asked our
                            Lord either to arrange that I need not get it or to
                            send me the means. Your letter with the cheque was
                            his answer..."
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Departure */}
                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                        <Ship className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          Journey to Nigeria
                        </h4>
                        <div className="space-y-4 mt-2">
                          <div>
                            <span className="text-sm font-semibold block text-foreground">
                              Before 12th Sept 1923
                            </span>
                            <p className="text-muted-foreground text-sm">
                              Said goodbye to her brother Charles and family in
                              Liverpool. Received Cardinal Bourne’s blessing.
                              Bishop Shanahan visited and saw her off.
                            </p>
                          </div>
                          <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                            <span className="text-sm font-semibold block text-foreground text-primary">
                              12th September 1923
                            </span>
                            <p className="text-muted-foreground text-sm">
                              Embarked on the <strong>SS Akabo</strong> for
                              Calabar.
                            </p>
                          </div>
                          <div>
                            <span className="text-sm font-semibold block text-foreground">
                              22nd Sept 1923 (Off S. Leone)
                            </span>
                            <p className="text-muted-foreground text-sm italic">
                              "...The first days were rough and I was laid up...
                              These weeks without Mass & H. Communion is a long
                              time, but I shall get three Masses daily in
                              Calabar..."
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* Arrival in Calabar */}
              <BiographySection
                title="October 1923: Arrival in Calabar"
                content={
                  <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                    <div className="flex items-start gap-4">
                      <div className="p-2 bg-primary/20 rounded-lg shrink-0">
                        <Anchor className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-foreground mb-2">
                          3rd October 1923
                        </h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Mother Mary Charles Magdalen Walker landed in Calabar
                          and was welcomed by Rev. Father Ronayne, the Parish
                          Priest of the Sacred Heart Church, Calabar, Miss Mary
                          Martin, an Irish Lady volunteer who was holding ford
                          in St, Joseph Girls School, Calabar, and the good
                          people of Calabar.
                        </p>
                      </div>
                    </div>
                  </div>
                }
              />
              {/* image of mother mary charles madalen */}
              <div className="flex justify-center gap-4 items-center flex-col">
                <div className="relative w-[200px] h-96">
                  <Image
                    src="/mother-blue.png"
                    alt="Mother Mary Charles Magdalen Walker arrival in Calabar"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h2>
                  Mother Mary Charles Magdalen Walker, RSC The Nun of Calabar
                </h2>
              </div>

              {/* 1923 - 1934: Major Highlights */}
              <BiographySection
                title="1923 – 1934: Ten Years of Uninterrupted Labour"
                content={
                  <div className="space-y-6">
                    <p>
                      For ten uninterrupted years, Mother Mary Charles Magdalen
                      Walker laboured in the Nigerian Mission - Vicariate of
                      Southern Nigeria - under Bishop Joseph Shanahan, CSSp, and
                      his successor, Bishop Charles Heerey, CSSp.
                    </p>
                    <div className="grid gap-4">
                      <div className="bg-muted/30 p-4 rounded-lg border border-primary/5">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-primary" /> St.
                          Joseph Girls School
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          From 1st January 1924, she took over management,
                          introduced the pupil/teacher system, dismissed male
                          teachers, and initiated the Montessori System. By
                          1926, the school was rated A+ at Government
                          inspection.
                        </p>
                      </div>

                      <div className="bg-muted/30 p-4 rounded-lg border border-primary/5">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Home className="w-4 h-4 text-primary" /> Foundation
                          of Mother House
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Obtained and began work on the 16 acres of land at 130
                          Calabar Road, which is the present HHCJ Mother House.
                        </p>
                      </div>

                      <div className="bg-muted/30 p-4 rounded-lg border border-primary/5">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Heart className="w-4 h-4 text-primary" /> Healthcare
                          & Social Work
                        </h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>
                            Fought against the killing of twins and banishment
                            of mothers; built twinneries at Anua and Ifuho.
                          </li>
                          <li>
                            Provided healthcare by nursing the sick in homes and
                            building Dispensaries at Ikot Ene and Anua.
                          </li>
                          <li>
                            Raised Anua Dispensary to a full-fledged Hospital in
                            1933.
                          </li>
                        </ul>
                      </div>

                      <div className="bg-muted/30 p-4 rounded-lg border border-primary/5">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Milestone className="w-4 h-4 text-primary" />{' '}
                          Expansion to Anua
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          After Easter 1929, she opened St. Philomena Girls
                          School, Our Lady of Divine Providence Convent, and a
                          Dispensary in Anua. This became a center for further
                          expansion into what is now Akwa Ibom State.
                        </p>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* 1929 - 1931: Invitation of SHCJ */}
              <BiographySection
                title="1929 - 1931: The Invitation extended to the Society of the Holy Child Jesus (SHCJ)"
                content={
                  <div className="space-y-6">
                    <p>
                      In 1929, Msgr. Arthur Hensley (later Cardinal), Apostolic
                      Legate to East and West Africa, visited Nigeria and was
                      amazed at the magnitude of Mother Walker's work. He
                      insisted she get a helper. Mother Walker opted to invite
                      the Society of the Holy Child Jesus (SHCJ).
                    </p>

                    <div className="border-l-2 border-primary/20 pl-4 space-y-4">
                      <div>
                        <h4 className="font-semibold text-foreground">
                          The Seven Invitation Letters (Oct 1929 - June 1930)
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          She sent a series of plea letters to Mother Mary
                          Amadeus, Superior General of SHCJ:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mt-2">
                          <li>
                            12th Oct 1929: First invitation with support from
                            Msgr. Hinsley.
                          </li>
                          <li>
                            15th Jan, 21st Jan (Feast of St. Agnes), May 4th,
                            May 29th, and 1st June 1930: Continued pleading and
                            giving practical directives.
                          </li>
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground">
                          20th September 1930 - Arrival
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Mother Mary Amadeus and her Vicar, Mother Mary
                          Genevieve France, SHCJ, arrived in Calabar. Mother
                          Walker hosted them for six months, touring her
                          establishments.
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground">
                          18th October 1930 - Pioneer Missionaries
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Three more SHCJ Sisters arrived: Mother Mary Edith,
                          Mother Mary Joachim (English Province), and Mother
                          Mary Lawrencia (American Province).
                        </p>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* Late 1930 Events */}
              <BiographySection
                title="Late 1930: Sacred Events"
                content={
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-primary/5 p-4 rounded-xl">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Cross className="w-5 h-5 text-primary" /> 23rd Nov 1930
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Mother Walker erected a <strong>Calvary</strong> (a
                        life-size bronze Crucifix) at 130 Calabar Road, at the
                        center where the estate roads met. It was solemnly
                        blessed by Bishop Heerey.
                      </p>
                    </div>

                    <div className="bg-primary/5 p-4 rounded-xl">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" /> 8th Dec 1930
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Attended the first Priestly Ordination of the Vicariate
                        of Southern Nigeria at Onitsha (Fr. John Cross Anjogu)
                        with her SHCJ visitors.
                      </p>
                    </div>
                  </div>
                }
              />

              {/* 1924 - 1931: Founding of the Congregation */}
              <BiographySection
                title="15th January 1931: Founding of the Congregation"
                content={
                  <div className="space-y-8">
                    <p className="text-lg font-medium text-primary">
                      Mother Mary Charles Magdalen Walker founded the
                      Congregation of the Handmaids of the Holy Child Jesus.
                    </p>
                    <p className="text-muted-foreground">
                      This historic event was the culmination of a journey of
                      discernment and preparation that began years earlier:
                    </p>

                    <div className="space-y-6 border-l-2 border-primary/20 pl-6">
                      <div className="relative">
                        <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary/50"></span>
                        <h4 className="font-semibold text-foreground">
                          18th December 1924
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Began to discern religious vocation in her girls. She
                          wrote to her Superior General, Mother Agnes Gertrude
                          Chamberlain, RSC, on the need to found a Native
                          Congregation of women to serve as teachers and
                          catechists.
                        </p>
                      </div>

                      <div className="relative">
                        <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary/50"></span>
                        <h4 className="font-semibold text-foreground">
                          April & June 1926
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Bishop Joseph Shanahan encouraged her to foster these
                          vocations. On 26th June, he wrote:
                        </p>
                        <blockquote className="mt-2 border-l-4 border-primary/30 pl-4 italic text-sm text-muted-foreground">
                          "...work towards the realization of the Native
                          Sisterhood. It has the blessing of the Holy Father and
                          therefore the blessing of God... God bless you and may
                          His blessing extend to your spiritual daughters..."
                        </blockquote>
                      </div>

                      <div className="relative">
                        <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary/50"></span>
                        <h4 className="font-semibold text-foreground">
                          1926: Formation of Community
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          She formed a Community with the girls seeking
                          religious life. In a letter dated 4th March 1926, she
                          described their life:
                        </p>
                        <blockquote className="mt-2 border-l-4 border-primary/30 pl-4 italic text-sm text-muted-foreground">
                          "...I follow our Rule in every detail without
                          difficulty. Five girls make all the spiritual duties
                          with me. At 5.20 each morning we are in the little
                          Oratory... Followed by morning Mass at 6.am"
                        </blockquote>
                      </div>

                      <div className="relative">
                        <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary/50"></span>
                        <h4 className="font-semibold text-foreground">
                          27th October 1927
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Bishop Shanahan again assured her that she was God’s
                          instrument:
                        </p>
                        <blockquote className="mt-2 border-l-4 border-primary/30 pl-4 italic text-sm text-muted-foreground">
                          "...God bless you and your children. May the living
                          strength of a mother’s heart take full possession of
                          and communicate itself in fullest measure to the
                          spiritual daughters born to you through the grace of
                          Jesus Christ..."
                        </blockquote>
                      </div>

                      <div className="relative">
                        <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary/50"></span>
                        <h4 className="font-semibold text-foreground">
                          29th August 1929
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Received a positive reply from Bishop Shanahan
                          approving a distinctive dress for her daughters.
                        </p>
                      </div>

                      <div className="relative">
                        <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary/50"></span>
                        <h4 className="font-semibold text-foreground">
                          January 1931: The Final Steps
                        </h4>
                        <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground mt-2">
                          <li>
                            <strong>7th Jan:</strong> Mother Walker took four of
                            the girls (who had lived with her for five years) to
                            Anua.
                          </li>
                          <li>
                            <strong>9th Jan:</strong> She put them on a five-day
                            retreat in preparation for the hooding.
                          </li>
                          <li>
                            <strong>14th Jan:</strong> She brought Mother Mary
                            Amadeus, SHCJ, and Mother Mary Lawrencia, SHCJ, from
                            Calabar to Anua to witness the ceremony of giving
                            the Aspirants distinctive dress.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* 15th January 1931: Establishment of the Handmaids’ Family */}
              <BiographySection
                title="15th January 1931: Establishment of the Handmaids’ Family"
                content={
                  <div className="space-y-6">
                    <p className="text-lg text-foreground font-medium">
                      Mother Mary Charles Magdalen Walker gave distinctive dress
                      to the Four Aspirants and thereby established the
                      Handmaids’ Family.
                    </p>
                    <p className="text-muted-foreground">
                      With God’s grace, four of the teachers with whom she had
                      lived in Community from 1926 emerged as pioneers of the
                      new family she brought into the Church - the Congregation
                      of the Handmaids of the Holy Child Jesus.
                    </p>

                    <div className="bg-muted/30 p-4 rounded-xl border border-primary/10">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" /> The Pioneers
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Thus, from its very cradle, the Congregation of the
                        Handmaids of the Holy Child Jesus had an inter-tribal
                        and international character.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>
                          <strong>Seated (Left to Right):</strong> Misses Lucy
                          William (Cameroon), Agnes Ugoaru (Umuahia - Nigeria),
                          Christiana Waturuocha (Ahiara-Mbise - Nigeria), and
                          Kathleen Bassey (Calabar-Nigeria).
                          <br />
                          <span className="italic opacity-80">
                            Religious names taken at clothing in 1937: Mary St.
                            John, Mary Aloysia, Mary Gertrude, Mary Ignatia.
                          </span>
                        </li>
                        <li>
                          <strong>Standing (Left to Right):</strong> Three
                          aspirants who also persevered as Handmaids: Sr.
                          Margaret Mary Okpala (Owerri), Sr. Angelica Ekong
                          (Okobo), and Sr. Magdalene Archibong (Calabar).
                        </li>
                      </ul>
                    </div>
                  </div>
                }
                imageSrc="/images/mother-foundress/founding-sisters.png"
                imageAlt="The Founding Sisters of the Handmaids of the Holy Child Jesus"
                imageCaption="The First Handmaids with Mother Mary Charles Magdalen Walker, RSC"
              />

              {/* Jan - Feb 1931: Post-Founding Activities */}
              <BiographySection
                title="January - February 1931: Post-Founding Activities"
                content={
                  <div className="space-y-8">
                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                        <Home className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          17th January 1931
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Mother Mary Charles Magdalen Walker invited Bishop
                          Joseph Shanahan to lay the foundation stone of the new
                          chapel in the new Convent site at 130 Calabar Road.
                          Attendance included Fathers Ronayne, Coulon,
                          Kilmartin, and James Moynagh (later first Bishop of
                          Calabar), the newly clothed Handmaids, the SHCJ
                          Sisters, and the local community.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                        <PenTool className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          18th January 1931 - Report to Europe
                        </h4>
                        <p className="text-muted-foreground text-sm italic mb-2">
                          Writing to Mother Mary Stanislaus, RSC (English
                          Provincial):
                        </p>
                        <blockquote className="border-l-4 border-primary/30 pl-4 italic text-sm text-muted-foreground bg-muted/30 p-3 rounded-r-lg">
                          "I came up here (Anua) on the 7th... On the 14th, Rev.
                          Mother M. Amadeus and Mother M. Lawrencia came up and
                          the next day we had a nice little ceremony of giving
                          the Aspirants dress. We have only four to start with,
                          but they are very gifted little souls – Sister
                          Kathleen, Sister Lucy, Sister Christiana and Sister
                          Agnes.”
                        </blockquote>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          21st January 1931
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Invited the Chiefs of Henshaw Town, Calabar, to meet
                          her visitors, presenting them as the people who
                          granted the new site at 130 Calabar Road.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                        <MapPin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          February 1931
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          Took her visitors on a tour of more of her
                          establishments west of Calabar.
                        </p>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* March - April 1931: Transitions & Farewells */}
              <BiographySection
                title="March - April 1931: Transitions & Farewells"
                content={
                  <div className="space-y-8">
                    {/* St. Joseph Feast */}
                    <div className="bg-primary/5 p-5 rounded-xl border border-primary/10">
                      <h4 className="font-bold text-foreground mb-2 flex items-center gap-2">
                        <Calendar className="w-5 h-5 text-primary" /> 19th March
                        1931 - Feast of St. Joseph
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        Celebrated as a great event, marking the first Mass in
                        the new Chapel at Calabar Road.
                      </p>
                      <div className="bg-background/50 p-4 rounded-lg border border-primary/10">
                        <h5 className="font-semibold text-sm mb-1 text-primary">
                          A Difficult Change
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Mother Amadeus, SHCJ, proposed renaming St. Joseph
                          Girls School to <strong>Holy Child</strong> as a
                          condition for assistance. The children protested,
                          feeling their "flag was pulled down." Mother Walker
                          tried to calm them, explaining that "St. Joseph was
                          always making way for the Holy Child," though the
                          children remained unhappy.
                        </p>
                      </div>
                    </div>

                    {/* Mission Superior Role */}
                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                        <Milestone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          2nd April 1931 - Mission Superior
                        </h4>
                        <p className="text-muted-foreground text-sm mb-2">
                          Mother Walker accepted to serve as mission Superior
                          for the SHCJ sisters (Mother Mary Amadeus left three
                          behind to learn from her).
                        </p>
                        <p className="text-muted-foreground text-sm">
                          She was now in charge of:
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground mt-1">
                          <li>
                            People: Girls, women, teachers, Handmaids, and Holy
                            Child Sisters.
                          </li>
                          <li>
                            Works: Evangelization, catechises, literacy, health
                            care, and social chores.
                          </li>
                          <li>
                            Duty: Sending monthly reports to Mother Amadeus in
                            Rome.
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Farewell */}
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                          <Ship className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            5th - 6th April 1931: Farewell
                          </h4>
                          <p className="text-muted-foreground text-sm mb-2">
                            <strong>Easter Sunday (5th):</strong> Farewell party
                            for Mother Amadeus and Mother Genevieve.
                          </p>
                          <p className="text-muted-foreground text-sm mb-2">
                            <strong>6th April:</strong> Mother Walker waved them
                            off at dawn as they returned to Liverpool. They had
                            spent over six months examining her missionary
                            enterprises.
                          </p>
                        </div>
                      </div>
                      <blockquote className="border-l-4 border-primary/30 pl-4 italic text-sm text-muted-foreground bg-muted/30 p-4 rounded-r-lg">
                        “God bless and have you in His Keeping all the way on
                        this journey... Every day of my life I will thank Him
                        for these months He has given us together…. I shall love
                        and work for your precious Three as though they were the
                        Three Blessed Exiles in Egypt.”
                        <br />
                        <span className="block mt-2 text-xs font-semibold not-italic text-primary">
                          — Mother Walker's parting message
                        </span>
                      </blockquote>
                    </div>
                  </div>
                }
              />

              {/* April 1931 - Dec 1933: Mission Superior */}
              <BiographySection
                title="April 1931 - December 1933: The Mission Superior"
                content={
                  <div className="space-y-8">
                    <p className="text-muted-foreground">
                      For over two years, Mother Mary Charles Magdalen Walker,
                      RSC, directed the Society of the Holy Child Jesus as its
                      Mission Superior. This role required her to manage two
                      distinct congregations simultaneously.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-muted/30 p-5 rounded-xl border border-primary/10">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary" /> Society of
                          the Holy Child Jesus (SHCJ)
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Responsibilities:</strong>
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Posting and assigning Sisters to ministries.</li>
                          <li>General care and well-being.</li>
                          <li>
                            Writing monthly reports to Superior General Mother
                            Amadeus in Rome on their adaptation to mission life.
                          </li>
                        </ul>
                      </div>

                      <div className="bg-muted/30 p-5 rounded-xl border border-primary/10">
                        <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                          <Users className="w-5 h-5 text-primary" /> The
                          Handmaids (HHCJ)
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Responsibilities:</strong>
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                          <li>Continuous formation.</li>
                          <li>
                            Enhancing religious, spiritual, apostolic, and
                            social life.
                          </li>
                          <li>
                            Organizing apostolic endeavors: teaching,
                            catechizing, medical care, and social work.
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                      <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Milestone className="w-5 h-5 text-primary" /> A Clash
                        of Charisms
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        This arrangement had its strengths (European
                        companionship) but also inherent weaknesses due to
                        differing charisms:
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-1">
                          <span className="font-semibold block text-primary">
                            Mother Walker (RSC)
                          </span>
                          <p className="text-muted-foreground">
                            <strong>All-embracing apostolate:</strong>{' '}
                            Education, medical, social, and
                            catechetical/pastoral.
                          </p>
                        </div>
                        <div className="space-y-1">
                          <span className="font-semibold block text-primary">
                            Holy Child Sisters (SHCJ)
                          </span>
                          <p className="text-muted-foreground">
                            <strong>Specialized apostolate:</strong> Higher
                            education. They were essentially class mistresses
                            focused on one subject.
                          </p>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-4 italic">
                        Mother Walker had to train the Holy Child Sisters in the
                        exercise of her broader, multi-faceted apostolate.
                      </p>
                    </div>

                    <div className="flex justify-center">
                      <motion.div
                        className="w-full max-w-md flex flex-col items-center"
                        variants={imageVariants}
                      >
                        <div className="relative w-full aspect-3/4 rounded-xl overflow-hidden shadow-lg border border-primary/20 bg-muted/30">
                          <Image
                            src="/images/mother-foundress/mother-mary-edith.png"
                            alt="Mother Mary Edith, SHCJ, caring for a baby orphan"
                            fill
                            className="object-cover transition-transform duration-500 hover:scale-105"
                          />
                        </div>
                        <p className="mt-2 text-sm text-center text-muted-foreground italic">
                          Mother Mary Edith, SHCJ, stroking a baby orphan to
                          sleep in its new native cot
                        </p>
                      </motion.div>
                    </div>
                  </div>
                }
              />

              {/* 1932 - 1933: Expansion & Formation */}
              <BiographySection
                title="1932 - 1933: Expansion & Spiritual Formation"
                content={
                  <div className="space-y-8">
                    {/* Schools & Hospitals */}
                    <div className="bg-muted/30 p-5 rounded-xl border border-primary/10">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Milestone className="w-5 h-5 text-primary" /> Growth of
                        the Work
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        <strong>2nd July 1933:</strong> In a letter to Mother de
                        Ricci, RSC, Mother Walker described the magnitude of the
                        mission:
                      </p>
                      <blockquote className="border-l-4 border-primary/30 pl-4 italic text-sm text-muted-foreground">
                        “The work has grown most wonderfully, thank God… We have
                        six boarding and day Schools, a hospital and
                        dispensary.”
                      </blockquote>
                    </div>

                    {/* Ifuho School */}
                    <div className="space-y-4">
                      <div className="flex gap-4 items-start">
                        <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                          <BookOpen className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">
                            August 1933 - St. Joseph Convent Primary School,
                            Ifuho
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            Opened St. Joseph Convent Primary School at Ifuho,
                            Ikot Ekpene (now Holy Child). Sister Kathleen Bassey
                            was sent as the pioneer Headmistress.
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-center my-6">
                        <motion.div
                          className="w-full max-w-2xl flex flex-col items-center"
                          variants={imageVariants}
                        >
                          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-primary/20 bg-muted/30">
                            <Image
                              src="/images/mother-foundress/st-joseph-ifuho-staff-pupils.png"
                              alt="St. Joseph Convent Primary School, Ifuho - Pioneer Staff and Pupils"
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <p className="mt-2 text-sm text-center text-muted-foreground italic">
                            Sister Kathleen Bassey with pioneer staff and
                            pupils.
                            <span className="block mt-1 text-xs text-primary font-semibold">
                              Note: The first kid in the first row from the left
                              became Mother Marie Anne Iwoh, HHCJ (3rd Superior
                              General).
                            </span>
                          </p>
                        </motion.div>
                      </div>
                    </div>

                    {/* Spiritual Formation */}
                    <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                      <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-primary" /> Spiritual
                        Formation of Handmaids
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        In 1932, Mother Walker began to focus more deeply on the
                        spiritual formation of the Handmaids. She corresponded
                        with Mother M. de Ricci, RSC, to obtain copies of the
                        Constitutions, Rule, Customs, and Novices’ Guide to help
                        formulate the HHCJ rule.
                      </p>
                      <blockquote className="italic text-sm text-muted-foreground bg-background/50 p-4 rounded-lg border border-primary/10">
                        "I am so grateful to you for your two most kind letters,
                        also for the copy of the Constitutions, the Rule,
                        Customs and Novices’ Guide. It may interest you to see
                        how few are the changes that will have to be made and
                        how many are only in the form of the wording… I thank
                        you for your sympathy and encouragement, and for your
                        prayers."
                      </blockquote>
                    </div>
                  </div>
                }
              />

              {/* 1932 - 1933: The Push for a Novitiate & Growing Tensions */}
              <BiographySection
                title="1932 - 1933: The Push for a Novitiate & Growing Tensions"
                content={
                  <div className="space-y-8">
                    <p className="text-muted-foreground">
                      Mother Walker was determined to establish a regular
                      Novitiate for the Handmaids, even if it meant personal
                      sacrifice.
                    </p>

                    <div className="space-y-6 border-l-2 border-primary/20 pl-6">
                      <div className="relative">
                        <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary/50"></span>
                        <h4 className="font-semibold text-foreground">
                          4th June & 7th Nov 1932
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Wrote to Mother Amadeus, SHCJ, emphasizing that "every
                          sacrifice should be made to give the Handmaids their
                          Spiritual year." She acknowledged this would mean less
                          revenue as their salaries would cease for two years.
                        </p>
                      </div>

                      <div className="relative">
                        <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary/50"></span>
                        <h4 className="font-semibold text-foreground">
                          5th June & 20th July 1933
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          Rome granted permission to Bishop Heerey for the
                          Native Congregation, pending the Latin translation of
                          the Constitution and approval of Novitiate buildings.
                          Mother Walker expressed anxiety over delays, fearing
                          "a true vocation could be tried beyond what was
                          prudent."
                        </p>
                      </div>
                    </div>

                    <div className="bg-destructive/5 p-6 rounded-xl border border-destructive/20">
                      <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Milestone className="w-5 h-5 text-destructive" /> The
                        Turning Point - August 1933
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        <strong>9th August 1933:</strong> In a letter to Mother
                        Amadeus, SHCJ, Mother Walker wrote:
                      </p>
                      <blockquote className="italic text-sm text-muted-foreground mb-4 border-l-4 border-destructive/30 pl-4">
                        “...I think you may take it that he [Bishop Heerey]
                        definitely wants me to give myself to the Native Sisters
                        for life and that there will be no question of my going
                        to Europe...”
                      </blockquote>
                      <p className="text-sm text-muted-foreground">
                        This phrase—"giving myself to the native Sisters and no
                        question of my going to Europe"—was seen by Mother
                        Amadeus as having serious repercussions on the mission
                        of the SHCJ in Nigeria.
                      </p>
                    </div>
                  </div>
                }
              />

              {/* Late 1933: The Crisis point & Departure */}
              <BiographySection
                title="Late 1933: The Crisis Point & Departure"
                content={
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-muted/30 p-5 rounded-xl border border-primary/10">
                        <h4 className="font-semibold text-foreground mb-2">
                          11th Sept 1933
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Decision not to Join SHCJ:</strong> Mother
                          Walker confirmed to Mother Amadeus that she would not
                          join the Society.
                        </p>
                        <blockquote className="italic text-xs text-muted-foreground border-l-2 border-primary/20 pl-2">
                          "...I do not think that a six months’ Novitiate would
                          make very much difference in character at my age."
                        </blockquote>
                      </div>

                      <div className="bg-muted/30 p-5 rounded-xl border border-primary/10">
                        <h4 className="font-semibold text-foreground mb-2">
                          14th Nov 1933
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          <strong>Refusal of Help:</strong> Received a cabled
                          negative reply from Mother de Ricci, RSC, to her
                          request for personnel (a Superior and Novice
                          Mistress).
                        </p>
                        <blockquote className="italic text-xs text-muted-foreground border-l-2 border-primary/20 pl-2">
                          "Cannot accept."
                        </blockquote>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" /> The Ultimatum
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        <strong>October 1933:</strong> Mother Genevieve, SHCJ
                        (Vicar General), arrived in Calabar with a clear message
                        for the Bishop:{' '}
                        <span className="italic">
                          "If she has refused to join us she can no longer work
                          with us... either she goes and we stay or she stays
                          and we go."
                        </span>
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                        <li>
                          Mother Walker was replaced as Superior by Mother Mary
                          Osmond, SHCJ.
                        </li>
                        <li>
                          Mother Walker offered to join the Handmaids so SHCJ
                          would have a monopoly on her works.
                        </li>
                        <li>Mother Genevieve insisted on the ultimatum.</li>
                      </ul>
                    </div>

                    <div className="bg-destructive/5 p-6 rounded-xl border-l-4 border-destructive">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-destructive/10 rounded-lg shrink-0">
                          <ScrollText className="w-6 h-6 text-destructive" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-foreground mb-2">
                            20th December 1933 - The Order to Leave
                          </h4>
                          <p className="text-muted-foreground leading-relaxed mb-4">
                            Mother Mary Charles Magdalen Walker received an
                            irrevocable order from Bishop Charles Heerey, CSSp,
                            to leave the Vicariate of Southern Nigeria on 1st
                            January 1934.
                          </p>
                          <blockquote className="italic text-muted-foreground border-l-4 border-destructive/20 pl-4 py-2 bg-background/50 rounded-r-lg">
                            “....Your desire to live and die in the mission, I
                            quite understand, but my order that you should leave
                            the mission is not at all revocable. I decide that
                            you should leave it now to relieve a situation that
                            you know too well is most delicate.”
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* Fr. Fegan's Prophecy */}
              <BiographySection
                title="Reflections: A Prophecy Fulfilled"
                content={
                  <div className="space-y-8">
                    <p className="text-muted-foreground">
                      At this painful moment, Mother Walker likely recalled the
                      prophecy of her spiritual director, Fr. Fegan.
                    </p>

                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <div className="flex-1 space-y-4">
                        <p className="text-sm text-muted-foreground">
                          In 1925, when Mother Walker wrote that "everything was
                          simply perfect," Fr. Fegan replied with a prophetic
                          warning about the future arrival of other Sisters:
                        </p>
                        <blockquote className="border-l-4 border-primary/30 pl-4 italic text-sm text-muted-foreground bg-muted/30 p-4 rounded-r-lg leading-relaxed">
                          “...But when the Sisters come out there may be need of
                          some great heroic effacement or other heroic act that
                          may send the cause on. Something like the heroic lie
                          of the real mother in the young Solomon’s judgment.
                          ‘No, no, it’s not my child. It is that woman’s child,
                          - don’t hurt the little thing...’ I don’t want you or
                          anyone to lie, but the story serves as illustrating my
                          point.”
                        </blockquote>
                        <p className="text-sm text-muted-foreground font-medium text-primary">
                          — Fr. Fegan, 14th September 1925
                        </p>
                      </div>

                      <div className="w-full md:w-1/3 flex justify-center">
                        <motion.div
                          className="w-full max-w-xs flex flex-col items-center"
                          variants={imageVariants}
                        >
                          <div className="relative w-48 aspect-3/4 rounded-xl overflow-hidden shadow-lg border border-primary/20 bg-muted/30">
                            <Image
                              src="/images/mother-foundress/fr-fegan.png"
                              alt="Fr. Fegan, Mother Walker's Spiritual Director"
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <p className="mt-2 text-sm text-center text-muted-foreground italic">
                            Fr. Fegan, spiritual director
                          </p>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* December 1933: The Sacrifice */}
              <BiographySection
                title="December 1933: The Sacrifice"
                content={
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      Mother Walker, the "real mother" hearing the cry "up the
                      Cross," responded with heroic effacement. She wrote
                      severally to Mother Mary Amadeus:
                    </p>
                    <blockquote className="border-l-4 border-primary/30 pl-4 italic text-sm text-muted-foreground bg-muted/30 p-4 rounded-r-lg">
                      “My desire to work and die on the Foreign Mission is as
                      great today as when I sent my petition to the Holy Father
                      in 1922… I cannot take back the consecration I have made
                      of my life to the Mission…As I may no longer work here … I
                      can best fulfil my intention by devoting my life to prayer
                      for the mission and a large share shall go to try to draw
                      blessings on the labours of the Society (of the Holy Child
                      Jesus) among my dear children and people here.”
                    </blockquote>
                    <p className="text-muted-foreground mt-4">
                      And again, displaying immense charity:
                    </p>
                    <blockquote className="border-l-4 border-primary/30 pl-4 italic text-sm text-muted-foreground bg-muted/30 p-4 rounded-r-lg">
                      “my love is unchanged, and I shall pray for you wherever I
                      am. God comfort you… surely your work here (Nigeria) will
                      be one of the chief objectives of my prayer. I shall try
                      to help to water what I have been allowed to sow”
                    </blockquote>
                    <p className="text-sm font-medium text-foreground mt-2">
                      She left without any rancour, or bigotry, or bitterness,
                      or chauvinism and God preserved her motherhood.
                    </p>
                  </div>
                }
              />

              {/* 1934: Departure & Sojourn in Cameroon */}
              <BiographySection
                title="1934: Departure & Sojourn in Cameroon"
                content={
                  <div className="space-y-8">
                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                        <Ship className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          1st January - July 1934
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Mother Walker sailed from Calabar to Cameroon,
                          intending a short rest at the Franciscan Missionary
                          Convent at Bojongo. Instead, she stayed for six months
                          to help the understaffed community.
                        </p>
                        <div className="bg-primary/5 p-4 rounded-lg mt-3">
                          <p className="text-sm text-muted-foreground italic">
                            "I went first to the help of a small community in
                            West Africa... They were utterly uneducated... I
                            worked between the two schools from 7 a.m. till 12,
                            taught the teachers from both classes from 2 p.m.
                            till 4 and helped the two Sisters either
                            individually or together in the evenings. Their
                            kindness to me I shall never forget."
                          </p>
                          <p className="text-xs text-right mt-1 text-primary font-medium">
                            — Mother Walker
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                        <Home className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          July 1934 - Return to England
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          On her journey back to England (accompanied by her
                          brother Charles), the boat stopped overnight in
                          Calabar. The Holy Child Sisters invited her to stay
                          the night in the Convent. She was welcomed with
                          jubilation by the staff and pupils, inspected the
                          compound, signed the School Log Book, and then
                          continued her journey home.
                        </p>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* 1934 - 1955: The Home Mission */}
              <BiographySection
                title="1934 - 1955: The Home Mission (England)"
                content={
                  <div className="space-y-8">
                    <p className="text-muted-foreground">
                      Honoring a promise made to her former Superior General not
                      to seek return to the RSC Congregation if the mission
                      failed, Mother Walker reported to Westminster Cathedral.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-muted/30 p-5 rounded-xl border border-primary/10">
                        <h4 className="font-semibold text-foreground mb-2">
                          Ministry
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Assigned to St. Budeaux, Devon, to help start a
                          Catholic School. She built the school, but after
                          recognition, it was handed over to Notre Dame Nuns.
                          She continued to serve in the Archdiocese of
                          Westminster until her health broke down during WWII.
                        </p>
                      </div>

                      <div className="bg-muted/30 p-5 rounded-xl border border-primary/10">
                        <h4 className="font-semibold text-foreground mb-2">
                          The Promise
                        </h4>
                        <blockquote className="italic text-xs text-muted-foreground border-l-2 border-primary/20 pl-2">
                          "When Mother Agnes Gertrude helped me to get out to
                          Nigeria... she made me promise that if I went out I
                          would never ask to be received back... I gave her this
                          promise."
                        </blockquote>
                        <p className="text-xs text-muted-foreground mt-2 font-medium">
                          — Letter to Sr. Mary Jarleth, 4th April 1945
                        </p>
                      </div>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-background rounded-full shrink-0">
                          <Heart className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-2">
                            A Final Request
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            In her 1945 letter, she humbly asked:
                          </p>
                          <blockquote className="italic text-foreground font-medium mb-4">
                            "What I want to know is; would it be an infringement
                            of this promise if I asked to be received as a
                            patient in the Hospice when I am dying?"
                          </blockquote>
                          <p className="text-sm text-muted-foreground">
                            Despite everything, she maintained a connection of
                            prayer:{' '}
                            <span className="italic">
                              "Please give my respectful love to dear Mother
                              General. I say many daily prayers for her and for
                              the Congregation."
                            </span>{' '}
                            (27th Nov 1946)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* 1948 - Early 1950s: St. Mary's Cottage */}
              <BiographySection
                title="1948 - Early 1950s: St. Mary's Cottage"
                content={
                  <div className="space-y-8">
                    {/* Correspondence */}
                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                        <PenTool className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          27th March 1948 - Letter from Worthing
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Writing to Sister Mary Jarleth (Bursar General) from
                          27 Madeira Avenue, Worthing, Mother Walker thanked the
                          Superior General for a gift of £15.
                        </p>
                        <blockquote className="italic text-xs text-muted-foreground border-l-2 border-primary/20 pl-2">
                          “I wish her (the Superior General) and the entire
                          Congregation every Easter blessing and happiness. Many
                          times daily I pray for all. Will you also give my
                          respectful love to Mother Agnes Joseph? I will not
                          forget her kindness to me.”
                        </blockquote>
                      </div>
                    </div>

                    {/* St. Mary's Cottage */}
                    <div className="bg-muted/30 p-6 rounded-xl border border-primary/10">
                      <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary" /> Haven at
                        Shoreham-by-Sea
                      </h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        When her health declined in the early 1950s and she
                        could no longer take responsibilities, her brothers
                        Charles and Henry built her a house in Shoreham-by-Sea,
                        Sussex, which she named{' '}
                        <strong>St. Mary’s Cottage</strong>.
                      </p>

                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-1 space-y-4">
                          <div>
                            <h5 className="font-medium text-foreground text-sm">
                              "Miss Walker" - A Hidden Saint
                            </h5>
                            <p className="text-sm text-muted-foreground">
                              Known locally as "Miss Walker," her extraordinary
                              sanctity could not be hidden. She attended Mass
                              daily in all weather and was extremely generous to
                              the poor.
                            </p>
                          </div>
                          <div>
                            <h5 className="font-medium text-foreground text-sm">
                              Apostolate of the Garden
                            </h5>
                            <p className="text-sm text-muted-foreground">
                              She planted flowers and fruits to give gratis to
                              the poor. She also taught catechism to
                              neighborhood children, preparing them for the
                              Sacraments.
                            </p>
                          </div>
                        </div>

                        <div className="w-full md:w-1/2 flex justify-center">
                          <motion.div
                            className="w-full max-w-sm flex flex-col items-center"
                            variants={imageVariants}
                          >
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg border border-primary/20 bg-muted/30">
                              <Image
                                src="/images/mother-foundress/st-marys-cottage-garden.png"
                                alt="Mother Walker (Miss Walker) in her garden with neighborhood children"
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                              />
                            </div>
                            <p className="mt-2 text-sm text-center text-muted-foreground italic">
                              Mother Walker ("Miss Walker") in her garden at St.
                              Mary's Cottage with neighborhood children
                            </p>
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* 1950 - 1953: Growing Closeness */}
              <BiographySection
                title="1950 - 1953: Deepening Ties & Loss"
                content={
                  <div className="space-y-8">
                    <p className="text-muted-foreground">
                      Mother Walker's letters to Sister Mary Jarleth reveal a
                      deepening bond with the RSC Congregation. She regularly
                      exchanged updates, received financial support (£26 gifts),
                      and prayed for the Congregation's works.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-semibold text-sm mb-1">
                            16th Nov 1950
                          </h4>
                          <blockquote className="italic text-xs text-muted-foreground border-l-2 border-primary/20 pl-2">
                            "...I love to get news of the Congregation,
                            especially such good news. It is wonderful to think
                            of such progress especially in these terribly
                            difficult times."
                          </blockquote>
                        </div>
                        <div className="bg-muted/30 p-4 rounded-lg">
                          <h4 className="font-semibold text-sm mb-1">
                            March 23rd 1952
                          </h4>
                          <blockquote className="italic text-xs text-muted-foreground border-l-2 border-primary/20 pl-2">
                            "I pray much for the Congregation and all its works,
                            especially for Chikuni." (Zambia mission)
                          </blockquote>
                        </div>
                      </div>

                      <div className="bg-destructive/5 p-4 rounded-lg border border-destructive/10">
                        <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                          <Cross className="w-4 h-4 text-destructive" /> Loss of
                          Brothers (1953)
                        </h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          In a letter dated Nov 7th, 1953, she recounts the
                          death of her brothers, Charles and Henry.
                        </p>
                        <p className="text-xs text-muted-foreground italic mb-2">
                          "They were not religious men but both had an innate
                          reverence... Charles gave most of his water to the
                          wounded and dying during the Palestine Campaign."
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Their declining health affected her own, as she often
                          went 60 hours without sleep caring for them.
                        </p>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* 1953 - 1955: Canonical Path to Return */}
              <BiographySection
                title="1953 - 1955: The Canonical Path to Return"
                content={
                  <div className="space-y-8">
                    {/* Investigation Phase 1 */}
                    <div className="bg-muted/30 p-5 rounded-xl border border-primary/10">
                      <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                        <ScrollText className="w-5 h-5 text-primary" /> Phase 1:
                        Canonical Impediment? (1953)
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        Superior General Mother M. Bernard Carew initiated an
                        investigation. Rev. J.R. McMahon SJ advised that
                        readmission would be illicit unless the Holy See granted
                        a dispensation.
                      </p>
                      <p className="text-sm text-muted-foreground italic">
                        Recommendation: She could be prayed for as a member upon
                        death but not accorded privileges or buried in the habit
                        unless treated as an extern guest.
                      </p>
                    </div>

                    {/* The Will */}
                    <div className="flex gap-4 items-start">
                      <div className="p-2 bg-muted rounded-md shrink-0 mt-1">
                        <PenTool className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">
                          January 6th 1955 - The Will
                        </h4>
                        <p className="text-sm text-muted-foreground mb-2">
                          Learning her cottage was worth over £2,000, Mother
                          Walker sought to leave everything to the RSC Mother
                          General. She asked Sister Jarleth for help finding
                          executors, fearing her family solicitors might prevent
                          the Church from inheriting.
                        </p>
                      </div>
                    </div>

                    {/* The Visit */}
                    <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                      <div className="flex items-start gap-4">
                        <div className="p-2 bg-background rounded-full shrink-0">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-2">
                            14th February 1955 - A Joyful Reunion
                          </h4>
                          <p className="text-sm text-muted-foreground mb-3">
                            The new Superior General, Mother Teresa Anthony, and
                            other RSC mothers visited St. Mary's Cottage.
                          </p>
                          <blockquote className="italic text-foreground font-medium mb-4">
                            "Mother General was so kind and easy to talk to...
                            it was a very happy day for me."
                          </blockquote>
                        </div>
                      </div>
                    </div>

                    {/* The Decision */}
                    <div className="bg-muted/50 p-6 rounded-xl border border-primary/20">
                      <h4 className="font-bold text-lg text-foreground mb-4 text-center">
                        The Door Opens
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="text-center">
                          <div className="text-primary font-bold text-xl mb-1">
                            Unanimous Vote
                          </div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                            4th Sept 1955
                          </div>
                          <p className="text-sm text-foreground">
                            Mother Teresa Anthony's Council voted unanimously in
                            favor of Miss Walker's return.
                          </p>
                        </div>
                        <div className="text-center">
                          <div className="text-primary font-bold text-xl mb-1">
                            Archbishop's Ruling
                          </div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wider mb-2">
                            20th Dec 1955
                          </div>
                          <p className="text-sm text-foreground">
                            Archbishop Morrogh Bernard confirmed the 1923
                            Rescript was{' '}
                            <strong>not a dispensation from vows</strong>. There
                            was "nothing against her returning" and no need for
                            a new novitiate.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* 1955: Archbishop McQuaid's Intervention */}
              <BiographySection
                title="1955: Archbishop McQuaid's Intervention"
                content={
                  <div className="space-y-8">
                    <p className="text-muted-foreground">
                      Mother Teresa Anthony, SG, RSC, approached Archbishop John
                      C. McQuaid of Dublin regarding Mother Walker's return. His
                      response was decisive and filled with charity.
                    </p>

                    <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                      <div className="flex flex-col md:flex-row gap-6 items-start">
                        <div className="flex-1 space-y-4">
                          <h4 className="font-bold text-foreground flex items-center gap-2">
                            <Scale className="w-5 h-5 text-primary" /> The
                            Juridical Ruling
                          </h4>
                          <blockquote className="italic text-muted-foreground bg-background/50 p-4 rounded-lg border border-primary/10">
                            "I should very much favour the charitable proposal
                            to receive back Sister M. Charles into one of your
                            houses. Juridically, she has never ceased to be a
                            member of your Congregation, despite the quite
                            illegal paragraph..."
                          </blockquote>

                          <h4 className="font-bold text-foreground flex items-center gap-2 mt-4">
                            <CheckCircle className="w-5 h-5 text-primary" /> No
                            New Novitiate
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            When asked if she should undergo another novitiate,
                            the Archbishop replied:
                          </p>
                          <blockquote className="italic text-foreground font-medium border-l-2 border-primary/20 pl-4">
                            “No, under no circumstance. Have her habit made and
                            get her into the house as soon as she comes”
                          </blockquote>
                          <p className="text-xs text-right mt-2 text-primary font-bold">
                            — J. McQuaid, Archbishop of Dublin
                          </p>
                        </div>

                        <div className="w-full md:w-1/3 flex justify-center">
                          {/* <motion.div
                            className="w-full max-w-xs flex flex-col items-center"
                            variants={imageVariants}
                          >
                            <div className="relative w-40 aspect-3/4 rounded-xl overflow-hidden shadow-lg border border-primary/20 bg-muted/30">
                              <Image
                                src="/images/mother-foundress/archbishop-mcquaid.png"
                                alt="Archbishop John C. McQuaid of Dublin"
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                              />
                            </div>
                            <p className="mt-2 text-sm text-center text-muted-foreground italic">
                              Archbishop John C. McQuaid
                            </p>
                          </motion.div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* 1956: The Return Home */}
              <BiographySection
                title="1956: The Return Home"
                content={
                  <div className="space-y-8">
                    <div className="bg-muted/30 p-5 rounded-xl border border-primary/10">
                      <h4 className="font-semibold text-foreground mb-4">
                        18th December 1955 - The Announcement
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Mother Teresa Anthony announced the return to the RSC
                        Family:
                      </p>
                      <blockquote className="italic text-sm text-muted-foreground border-l-2 border-primary/20 pl-4 mb-2">
                        "sister Mary Charles Walker, RSC, is to return... His
                        Grace’s comment was “that juridically she never ceased
                        to be a member of the Congregation”... She seems very
                        happy about the decision, thank God."
                      </blockquote>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-primary/10 rounded-full">
                            <Home className="w-4 h-4 text-primary" />
                          </div>
                          <h4 className="font-bold text-foreground">
                            18th January 1956
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground pl-8">
                          Returned to the Congregation at Milltown, Dublin. She
                          ceded "St. Mary's Cottage" to the RSC as a holiday
                          resort and was assigned to work in the Sacristy.
                        </p>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <div className="p-1.5 bg-primary/10 rounded-full">
                            <Ship className="w-4 h-4 text-primary" />
                          </div>
                          <h4 className="font-bold text-foreground">
                            26th June 1956
                          </h4>
                        </div>
                        <p className="text-sm text-muted-foreground pl-8">
                          Sent on mission to Chikuni, Zambia, to take charge of
                          the African Sisters (Handmaids of the Blessed Virgin
                          Mary).
                        </p>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* 1956 - 1966: Zambia Mission & Last Days */}
              <BiographySection
                title="1956 - 1966: Zambia Mission & The Final Chapter"
                content={
                  <div className="space-y-8">
                    <p className="text-muted-foreground">
                      In Zambia, Mother Walker formed the African Sisters with
                      such maturity that they were capable of standing on their
                      own. She also cared for African aspirants and made altar
                      breads for the Diocese of Monze until her death.
                    </p>

                    <div className="bg-muted/30 p-6 rounded-xl border border-primary/10">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <PenTool className="w-5 h-5 text-primary" /> Spiritual
                        Legacy & Writings
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h5 className="font-medium text-sm mb-2 text-primary">
                            On The Soul (1960)
                          </h5>
                          <blockquote className="italic text-xs text-muted-foreground border-l-2 border-primary/20 pl-4 space-y-2">
                            <p>
                              The soul is like a lake fed by hidden
                              <br />
                              Springs, the surface remaining still and
                              unruffled.
                            </p>
                            <p>
                              To desire only to please God.
                              <br />
                              To fear only to disappoint Him, means perfect
                              peace.
                            </p>
                          </blockquote>
                        </div>
                        <div>
                          <h5 className="font-medium text-sm mb-2 text-primary">
                            On Docility
                          </h5>
                          <blockquote className="italic text-xs text-muted-foreground border-l-2 border-primary/20 pl-4 space-y-2">
                            <p>
                              Be docile to thine Unseen Guide,
                              <br />
                              Love Him as He loves thee;
                              <br />
                              Time and obedience are enough
                              <br />
                              And thou a saint shall be.
                            </p>
                          </blockquote>
                        </div>
                      </div>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                      <h4 className="font-bold text-foreground mb-3">
                        23rd March 1962: A Letter to HHCJ
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        She wrote to Mother Mary Gertrude Waturuocha, HHCJ
                        Superior General, expressing her enduring love for the
                        Handmaids she was forced to leave:
                      </p>
                      <blockquote className="italic text-sm text-muted-foreground mb-2">
                        "…though I have not written to you, you have been in my
                        heart & prayers all these years (1934-1962)... I think
                        of, & pray for you all, from dear Mary Bassey... to
                        Lucy, Oga & little Mary among the youngest."
                      </blockquote>
                      <p className="text-xs text-muted-foreground font-medium mt-2">
                        "Ever devotedly yours in J.C., Sister M. Charles"
                      </p>
                    </div>

                    <div className="bg-muted/30 p-6 rounded-xl border border-primary/10">
                      <h4 className="font-bold text-foreground mb-3">
                        18th March 1965: A Continued Prayer
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        One year before she died, Mother Mary Charles assured
                        her daughters, the Handmaids, of her continued prayer
                        from Heaven. Reminding Mother Mary Gertrude that 25th
                        March would be the 85th Anniversary of her Baptism, she
                        wrote:
                      </p>
                      <blockquote className="italic text-sm text-foreground font-medium border-l-2 border-primary/20 pl-4 mb-2">
                        "Our Lord may come for me soon but you will always have
                        my loving prayer."
                      </blockquote>
                      <p className="text-xs text-muted-foreground font-medium mt-2">
                        "Devotedly yours in J.C., Sister Mary Charles."
                      </p>
                    </div>

                    <div className="bg-destructive/5 p-6 rounded-xl border border-destructive/20">
                      <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <Cross className="w-5 h-5 text-destructive" /> 27th
                        February 1966 - Consummatum Est
                      </h4>

                      <div className="flex flex-col md:flex-row gap-8 mb-6">
                        <div className="flex-1 space-y-4">
                          <p className="text-sm text-muted-foreground">
                            <strong>Sr. Marcella Callanan, RSC</strong>,
                            narrates the final days: "Every afternoon we brought
                            Sister a drink at 3.30 p.m... on the afternoon of
                            25th February 1966 we found Sr. M. Charles fast
                            asleep... She was quite confused and restless, and
                            was quite weak."
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Fr. John Halloran, SJ, anointed her. On Sunday 27th
                            February, Fr. Tom Cooney, SJ, sat and prayed with
                            her.
                          </p>
                          <p className="text-sm text-foreground font-medium">
                            "All that day she was very weak and she died
                            peacefully at about 7.00 p.m. (RIP) surrounded by
                            her community."
                          </p>
                          <p className="text-xs text-muted-foreground italic">
                            She was buried in the mission cemetery, Chikuni,
                            after a beautiful funeral service.
                          </p>
                        </div>

                        <div className="w-full md:w-1/3 flex flex-col items-center">
                          <div className="relative w-full aspect-3/4 rounded-xl overflow-hidden shadow-lg border border-primary/20 bg-muted/30">
                            <Image
                              src="/images/mother-foundress/mother-charles-final-days.png"
                              alt="Mother Mary Charles Magdalen Walker in her final years"
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <p className="mt-2 text-xs text-center text-muted-foreground italic">
                            Mother Mary Charles (right)
                          </p>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4">
                        Four days before her death, she wrote "Storm on the
                        Lake," blending her life's tempests with ultimate faith.
                        The last stanza was truly operative:
                      </p>
                      <div className="text-center italic text-sm text-muted-foreground bg-background/50 p-6 rounded-lg border border-destructive/10 mb-8">
                        <p className="mb-2">
                          "And so I await Thy coming, O my King
                          <br />
                          And Thou wilt to my darkness surely bring
                          <br />
                          All that I need – for my extremity
                          <br />
                          Gives to Thy love its opportunity.
                          <br />
                          My soul’s dark night in quietness shall await
                          <br />
                          The breaking of Thy dawn compassionate."
                        </p>
                      </div>

                      <div className="bg-background/80 p-6 rounded-xl border border-primary/20">
                        <h5 className="font-bold text-foreground mb-4 flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-primary" /> The Final
                          Resting Place
                        </h5>
                        <div className="flex flex-col md:flex-row gap-6 items-center">
                          <div className="relative w-full md:w-1/2 aspect-video rounded-lg overflow-hidden shadow-md border border-primary/10">
                            <Image
                              src="/images/mother-foundress/mother-charles-burial.png"
                              alt="Mother Mary Charles' Grave in Chikuni Mission Cemetery"
                              fill
                              className="object-cover hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          <div className="flex-1 space-y-2 text-sm text-muted-foreground">
                            <p>
                              <strong>27th February 1966</strong>
                            </p>
                            <p>
                              Mother Mary Charles Magdalen Walker, RSC, died and
                              was buried in a single grave in the{' '}
                              <strong>Chikuni Mission Cemetery</strong>, in the
                              Catholic Diocese of Monze, Zambia.
                            </p>
                            <p className="italic">
                              Bishop James Corboy of Monze performed the last
                              Rites.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />

              <div className="flex justify-center mt-12 mb-16">
                <div className="h-1 w-24 bg-primary/20 rounded-full"></div>
              </div>

              {/* 1980: The Process of Exhumation */}
              <BiographySection
                title="1980: The Quest for the Remains"
                content={
                  <div className="space-y-8">
                    <p className="text-muted-foreground">
                      In 1980, the Handmaids of the Holy Child Jesus began the
                      process of exhuming and bringing back the mortal remains
                      of Mother Mary Charles Magdalen Walker to Nigeria for
                      final burial. The Superior General, Mother Marie Therese
                      Akwe, HHCJ, sent{' '}
                      <strong>Sr. Mary Liguori Okure, HHCJ</strong>, to Chikuni,
                      Zambia, to ascertain the facts of her death and burial.
                    </p>
                    <div className="bg-muted/30 p-6 rounded-xl border border-primary/10">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-primary" /> Fact
                        Finding Mission
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Sister Mary Liguori Okure arrived at Chikuni on 1st
                        March 1980 and confirmed:
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-2">
                        <li>Died: 27th February 1966</li>
                        <li>
                          Buried: 1st March 1966 in Chikuni Mission Cemetery
                        </li>
                        <li>
                          Last Rites: Performed by Bishop James Corboy of Monze
                          (then an emeritus)
                        </li>
                      </ul>
                    </div>

                    <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                      <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Heart className="w-5 h-5 text-primary" /> The
                        Phenomenon of the Rose Petals
                      </h4>
                      <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                        <p>
                          After a Mass for the repose of Mother Walker's soul,
                          Sr. Mary Liguori Okure visited the cemetery with an
                          RSC Sister. She laid a wreath of white, red, and pink
                          roses prepared by the African RSC Sisters.
                        </p>
                        <p>
                          The following day, Sr. Mary Liguori returned alone to
                          pray. A gentle breeze blew three red rose petals from
                          the wreath onto the tombstone. She placed them back,
                          warning the wind not to scatter the wreath.
                        </p>
                        <p>
                          The breeze returned, blowing the{' '}
                          <strong>same three petals</strong> onto the tomb. As
                          she reached to pick them, she heard the words:
                        </p>
                        <blockquote className="italic text-foreground font-medium text-center border-y border-primary/20 py-3 my-4">
                          "Pick as gifts for the Foundation Members."
                        </blockquote>
                        <p>
                          Petrified and trembling, she eventually picked the
                          petals and placed them in her prayer book. Upon her
                          return, the significance became clear: although there
                          were four Foundation Members, Mother Mary Ignatia
                          Bassey had died in 1973, leaving exactly{' '}
                          <strong>three</strong> survivors to receive the gifts.
                        </p>
                        <p className="italic text-xs mt-2">
                          "The phenomenon shows that Mother Mary Charles
                          Magdalen Walker, RSC, is really with the Handmaids...
                          She is supernaturally alive."
                        </p>
                      </div>
                    </div>
                  </div>
                }
              />

              {/* 1981: The Mandate */}
              <BiographySection
                title="1981: The Mandate to Return Home"
                content={
                  <div className="bg-muted/30 p-6 rounded-xl border border-primary/10">
                    <p className="text-muted-foreground mb-4">
                      Viewing the rose petal incident as God's providential
                      intervention to clear away all doubt, the Congregation
                      moved forward.
                    </p>
                    <p className="text-foreground font-medium">
                      In 1981, Mother Marie Therese Akwe, Superior General HHCJ,
                      having obtained permission from Sr. Francis Rose O’Flynn,
                      RSC (Superior General RSC), mandated{' '}
                      <strong>Sister Mary Liguori Okure, HHCJ</strong> and{' '}
                      <strong>Sister Antoinette Mensah, HHCJ</strong> to go to
                      Zambia to exhume and bring back the mortal remains of the
                      Foundress for final burial in Calabar, Nigeria.
                    </p>
                  </div>
                }
              />
              {/* 1981: Exhumation and Return Journey */}
              <BiographySection
                title="1981: The Journey Home"
                content={
                  <div className="space-y-8">
                    {/* Oct 2: Exhumation */}
                    <div className="bg-muted/30 p-6 rounded-xl border border-primary/10">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <FolderOpen className="w-5 h-5 text-primary" /> 2nd
                        October 1981: The Exhumation
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        The remains were exhumed from the Chikuni Cemetery by
                        Brother Patrick SJ, presided over by Rev Fr. John
                        McDonald SJ. Fifteen years after burial in the bare
                        earth, the skeletal remains were complete, with stocking
                        still on the feet.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-2">
                        <li>
                          <strong>Lying in State:</strong> Convent Chapel of the
                          Sisters of Charity, Chikuni.
                        </li>
                        <li>
                          <strong>Mass of Thanksgiving:</strong> Celebrated by
                          Jesuit Fathers.
                        </li>
                        <li>
                          <strong>Official Handover:</strong> Sr. Mary Pius
                          Keane, RSC (Zambian Regional Superior) handed over the
                          remains to Sr. Mary Liguori Okure, HHCJ, at the
                          Offertory of the Mass.
                        </li>
                      </ul>
                    </div>

                    {/* The Journey */}
                    <div className="relative border-l-2 border-primary/20 pl-6 ml-2 space-y-8 py-2">
                      {/* Oct 3 */}
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                        <h5 className="font-bold text-foreground mb-1">
                          3rd October - Chikuni to Lusaka
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          The remains left Chikuni accompanied by Sr. M. Pius
                          Keane, RSC, and the HHCJ Sisters. They stayed
                          overnight at the RSC Regional Headquarters in Lusaka.
                        </p>
                      </div>

                      {/* Oct 9 */}
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                        <h5 className="font-bold text-foreground mb-1">
                          9th October - Farewell to Zambia
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          Mother Mary Charles left Lusaka by Pan Am for Nairobi
                          at 10:55 a.m. She was seen off by the Nigerian High
                          Commissioner, Secretaty to the Papal Nuncio, and RSC
                          Sisters.
                        </p>
                      </div>

                      {/* Oct 10 */}
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                        <h5 className="font-bold text-foreground mb-1">
                          10th October - Nairobi Stopover
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          After an overnight stop in Nairobi, Kenya, she
                          departed for Lagos, Nigeria at 6:00 p.m.
                        </p>
                      </div>

                      {/* Oct 11 */}
                      <div className="relative">
                        <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-background"></div>
                        <h5 className="font-bold text-foreground mb-1">
                          11th October - Arrival in Nigeria
                        </h5>
                        <div className="text-sm text-muted-foreground space-y-2">
                          <p>
                            Received in Lagos by Mother Mary Gertrude
                            Waturuocha, HHCJ.
                          </p>
                          <p>
                            <strong>Arrival in Calabar (7:30 p.m.):</strong> A
                            huge reception at Margaret Ekpo International
                            Airport. Bishop Brian Davis Usanga, Mother Marie
                            Therese Akwe, and a large number of Sisters from
                            across the region welcomed her.
                          </p>
                          <p>
                            A motorcade led her to the Sacred Heart Cathedral
                            for a Thanksgiving Mass concelebrated by the Bishop
                            and his Priests.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
              {/* 1981: Final Visits and Return */}
              <BiographySection
                title="1981: A Triumphant Return Tour"
                content={
                  <div className="space-y-8">
                    {/* Oct 12: Lying in State */}
                    <div className="bg-muted/30 p-6 rounded-xl border border-primary/10">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Church className="w-5 h-5 text-primary" /> 12th
                        October: Lying in State
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Thanksgiving Mass and lying in state at the Sacred Heart
                        Cathedral, Calabar. Priests, Religious, laity, and
                        school children visited in gratitude to God for all He
                        accomplished through her for Nigeria.
                      </p>
                    </div>

                    {/* Oct 13-15: Establishments Visit */}
                    <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                      <h4 className="font-bold text-foreground mb-4">
                        13th–15th October: Visiting Her Establishments
                      </h4>
                      <div className="space-y-6 text-sm text-muted-foreground">
                        {/* Oron & Anua */}
                        <div>
                          <p className="font-semibold text-foreground mb-1">
                            Tuesday, 13th October
                          </p>
                          <ul className="list-disc list-inside ml-2 space-y-1">
                            <li>
                              <strong>Oron:</strong> Welcomed at the beach by
                              past pupils.
                            </li>
                            <li>
                              <strong>Ndon Ebom:</strong> Bible Service in the
                              Parish Church.
                            </li>
                            <li>
                              <strong>Anua:</strong> Arrival at St. Joseph
                              Parish Church and HHCJ Convent. Concelebrated Holy
                              Mass and prayer vigil.
                            </li>
                          </ul>
                        </div>

                        {/* Edem Ekpat & Ifuho */}
                        <div>
                          <p className="font-semibold text-foreground mb-1">
                            Wednesday, 14th October
                          </p>
                          <ul className="list-disc list-inside ml-2 space-y-1">
                            <li>
                              <strong>Edem Ekpat:</strong> Thanksgiving Bible
                              Service where many women recalled their days with
                              Mother.
                            </li>
                            <li>
                              <strong>Ifuho (Ikot Ekpene):</strong> Stop at HHCJ
                              Novitiate and Juniorate. Pontifical Thanksgiving
                              High Mass at St. Anne's Cathedral by Cardinal
                              Dominic Ekandem. The Mass was sung by over 500
                              Seminarians.
                            </li>
                          </ul>
                        </div>

                        <blockquote className="italic text-foreground border-l-2 border-primary/20 pl-4 py-2 my-2">
                          "Cardinal Ekandem gave an impressive sermon based on
                          Mother Mary Charles Magdalen Walker’s person,
                          personality, character, vision... all of which he said
                          were worthy of immolation."
                        </blockquote>
                      </div>
                    </div>

                    {/* Oct 15: Return to Calabar */}
                    <div className="bg-muted/30 p-6 rounded-xl border border-primary/10">
                      <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Home className="w-5 h-5 text-primary" /> 15th October:
                        Back to Where it Began
                      </h4>
                      <p className="text-sm text-muted-foreground mb-3">
                        Mother Mary Charles arrived at{' '}
                        <strong>130 Calabar Road Convent</strong>, her first
                        establishment from where she had left Nigeria in 1934.
                      </p>
                      <ul className="space-y-2 text-sm text-muted-foreground list-disc list-inside ml-2">
                        <li>
                          Led by the Charles Walker International Nur/Primary
                          School Band.
                        </li>
                        <li>
                          Welcomed by past pupils (now grandmothers) and
                          hundreds of Handmaids.
                        </li>
                        <li>
                          In solemn procession, she was led into the Convent
                          Chapel.
                        </li>
                      </ul>
                      <p className="text-sm text-foreground italic mt-4 font-medium border-t border-primary/10 pt-4">
                        "I love everyone - people and land. My desire is to
                        live, die and be buried here among my people."
                      </p>
                    </div>
                  </div>
                }
              />
              {/* 1981: Re-interment */}
              <BiographySection
                title="16th October 1981: The Final Resting Place"
                imageSrc="/images/mother-foundress/mother-charles-reinterment.png"
                imageAlt="Re-interment Mass of Mother Mary Charles Magdalen Walker, RSC"
                content={
                  <div className="space-y-6">
                    <p className="text-muted-foreground leading-relaxed">
                      On this historic day,{' '}
                      <strong>Mother Mary Charles Magdalen Walker, RSC</strong>,
                      Foundress of the Congregation of the Handmaids of the Holy
                      Child Jesus, was solemnly re-interred at the{' '}
                      <strong>
                        HHCJ Mother House, 130 Calabar Road, Calabar
                      </strong>
                      , Cross River State, Nigeria.
                    </p>
                    <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                      <h4 className="font-bold text-foreground mb-3 flex items-center gap-2">
                        <Cross className="w-5 h-5 text-primary" /> A Pontifical
                        High Mass
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        The mass was concelebrated by the Ordinary of Calabar,{' '}
                        <strong>Most Rev. Dr. Brian D. Usanga</strong>, and all
                        the Priests present, marking the fulfillment of her wish
                        to rest among her people.
                      </p>
                    </div>
                    <p className="text-center font-serif text-lg italic text-primary mt-8">
                      "I have fought the good fight, I have finished the race, I
                      have kept the faith."
                    </p>
                  </div>
                }
              />

              {/* Conclusion */}
              <BiographySection
                title="A Legacy Fulfilled"
                imageSrc="/images/mother-foundress/mother-charles-final-rites.png"
                imageAlt="Final Rites performed by Bishop Brian Davis Usanga"
                content={
                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      In October 1981, the Final Rites for Mother Mary Charles
                      Magdalen Walker were performed by{' '}
                      <strong>Bishop Brian Davis Usanga</strong>, Catholic
                      Bishop of Calabar (later the first Metropolitan Archbishop
                      of Calabar Ecclesiastical Province).
                    </p>
                    <div className="bg-muted/30 p-6 rounded-xl border border-primary/10 text-center">
                      <p className="text-foreground font-medium italic mb-2">
                        "Mother M. Gertrude Waturuocha, a Foundation Member
                        HHCJ, is fully satisfied."
                      </p>
                      <Heart className="w-5 h-5 text-primary mx-auto mt-4" />
                    </div>
                    <div className="flex justify-center mt-8">
                      <span className="font-bold text-primary tracking-widest text-xl border-y-2 border-primary/20 py-2 px-8">
                        Ad Maiorem Dei Gloriam (AMDG)
                      </span>
                    </div>
                  </div>
                }
              />

              {/* Legacy */}
              <BiographySection
                title="The Journey of a Soul"
                content={
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-2 border-primary/20">
                        <Image
                          src="/images/mother-foundress/mother-charles-resting-place-interior.png"
                          alt="Mother Mary Charles' Resting Place Interior"
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-2 border-primary/20">
                        <Image
                          src="/images/mother-foundress/mother-charles-resting-place-exterior.png"
                          alt="Mother Mary Charles' Resting Place Exterior"
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    </div>
                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                      <p className="text-xl font-serif text-foreground leading-relaxed">
                        "Here she lies in the Convent she herself established in
                        1932."
                      </p>
                      <p className="text-2xl font-bold text-primary italic">
                        "This is indeed, the journey of a soul – the journey of
                        love!"
                      </p>
                    </div>
                  </div>
                }
              />

              {/* Posthumous Honours */}
              <BiographySection
                title="Posthumous Honours & Legacy"
                content={
                  <div className="space-y-8">
                    {/* 2004: Centenary */}
                    <div className="bg-muted/30 p-6 rounded-xl border border-primary/10">
                      <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                        <Milestone className="w-5 h-5 text-primary" /> 26th May
                        2004: A Centenary of Grace
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        The{' '}
                        <strong>
                          Cross River Tourism Development Initiative (CRITODIN)
                        </strong>{' '}
                        celebrated the 100th anniversary of Mother Mary Charles’
                        1st Religious Profession (1904-2004).
                      </p>
                      <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
                        <li>
                          Efforts were made to open her legacy as a tourist
                          attraction.
                        </li>
                        <li>
                          Renovations included planting flowers, repainting the
                          resting place and Calvary crucifix, and installing
                          interlocking stones.
                        </li>
                      </ul>
                    </div>

                    {/* 2016: Pope Francis */}
                    <div className="bg-primary/5 p-6 rounded-xl border-l-4 border-primary">
                      <div className="flex flex-col md:flex-row gap-6 items-center">
                        <div className="flex-1 space-y-4">
                          <h4 className="font-bold text-foreground flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-primary" /> 30th
                            November 2016: A Royal Encounter
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            <strong>Mother Leonie Martha O’Karaga, HHCJ</strong>{' '}
                            (Superior General), met with{' '}
                            <strong>Pope Francis</strong> at the Vatican.
                          </p>
                          <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground ml-2">
                            <li>
                              She spoke of the Congregation's foundation in 1931
                              and invited the Pope to the 85th Anniversary
                              celebration in Calabar.
                            </li>
                            <li>
                              Presented the book{' '}
                              <em>
                                "The Journey of Love: Life and work of Mother
                                Mary Charles Magdalen Walker, RSC"
                              </em>{' '}
                              by Sr. Dr. Mary Liguori Okure, HHCJ.
                            </li>
                            <li>
                              The Pope received the book with joy, blessing
                              Mother Leonie-Martha and the entire Congregation.
                            </li>
                          </ul>
                        </div>
                        <div className="w-full md:w-1/3">
                          <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-primary/20">
                            <Image
                              src="/images/mother-foundress/mother-charles-pope-book.png"
                              alt="Pope Francis receives the biography from Mother Leonie-Martha O’Karaga, HHCJ"
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <p className="text-xs text-center text-muted-foreground mt-2 italic">
                            Pope Francis receiving "The Journey of Love" from
                            Mother Leonie-Martha, HHCJ (Rome, 2016)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* 2016: Pope Francis Study */}
                    <div className="bg-muted/30 p-6 rounded-xl border border-primary/10">
                      <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
                        <div className="flex-1 space-y-4">
                          <h4 className="font-bold text-foreground flex items-center gap-2">
                            <BookOpen className="w-5 h-5 text-primary" /> A
                            Personal Interest
                          </h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            It was a great date for Mother Mary Charles when{' '}
                            <strong>
                              Pope Francis began to study her life
                            </strong>
                            .
                          </p>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            In the image, the Pope, book in hand, is seeking to
                            identify the author of{' '}
                            <em>"The Journey of Love"</em> in a group of
                            Handmaids at the General Audience. He points out{' '}
                            <strong>Mother Leonie-Martha, HHCJ</strong>,
                            acknowledging the work and the legacy.
                          </p>
                        </div>
                        <div className="w-full md:w-1/3">
                          <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg border border-primary/20">
                            <Image
                              src="/images/mother-foundress/mother-charles-pope-study.png"
                              alt="Pope Francis studying the biography and pointing out the author"
                              fill
                              className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                          </div>
                          <p className="text-xs text-center text-muted-foreground mt-2 italic">
                            Pope Francis identifying the author, Mother
                            Leonie-Martha, HHCJ
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
