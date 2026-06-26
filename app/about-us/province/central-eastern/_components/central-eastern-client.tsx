'use client';

import React from 'react';
import { motion } from 'framer-motion';
import WriteUp, { fadeInUp, staggerContainer } from './write-ups';
import Image from 'next/image';

const SectionTitle = ({ title }: { title: string }) => (
  <motion.h2
    className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center"
    variants={fadeInUp}
  >
    {title}
  </motion.h2>
);

const Card = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    className={`bg-card text-card-foreground rounded-lg shadow-md p-6 border border-border ${className}`}
    variants={fadeInUp}
    whileHover={{ y: -5, transition: { duration: 0.2 } }}
  >
    {children}
  </motion.div>
);

export default function CentralEasternClient() {
  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative py-24 bg-linear-to-b from-primary/10 via-background to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-4 text-center z-10 relative">
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate="whileInView"
            viewport={{ once: true }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              CENTRAL EASTERN PROVINCE
              <span className="block text-xl md:text-2xl font-normal text-muted-foreground mt-4">
                Handmaids of the Holy Child Jesus
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
              Inaugurated on August 26, 1997, to the glory of God.
            </p>
          </motion.div>
        </div>
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </motion.section>

      {/* Featured Futuristic Images */}
      <motion.section
        className="container mx-auto px-4 py-12 md:py-20 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] max-w-6xl bg-primary/5 blur-[120px] rounded-full -z-10 pointer-events-none" />

        <div
          className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center"
          style={{ perspective: '1000px' }}
        >
          {/* Image 1 */}
          <motion.div
            className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 ring-1 ring-primary/20 shadow-[0_0_40px_rgba(var(--primary),0.15)] group"
            initial={{ opacity: 0, x: -50, rotateY: -10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
            whileHover={{ scale: 1.02, rotateY: -5, rotateX: 2, z: 20 }}
          >
            <div className="absolute inset-0 bg-linear-to-tr from-primary/40 via-transparent to-transparent z-10 opacity-50 mix-blend-overlay group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/10 to-transparent z-10" />

            <div className="absolute bottom-8 left-8 z-20 overflow-hidden">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex items-center gap-4"
              >
                <span className="w-16 h-[2px] bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]"></span>
                <span className="text-sm font-medium tracking-[0.2em] uppercase text-foreground">
                  Heritage
                </span>
              </motion.div>
            </div>

            <Image
              src="/eastern-1.jpg"
              alt="Central Eastern Province Heritage"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              priority
            />

            {/* Glowing accents */}
            <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 -translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 ring-1 ring-primary/20 shadow-[0_0_40px_rgba(var(--primary),0.15)] group md:translate-y-16"
            initial={{ opacity: 0, x: 50, rotateY: 10 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              type: 'spring',
              bounce: 0.3,
              delay: 0.2,
            }}
            whileHover={{ scale: 1.02, rotateY: 5, rotateX: 2, z: 20 }}
          >
            <div className="absolute inset-0 bg-linear-to-bl from-primary/40 via-transparent to-transparent z-10 opacity-50 mix-blend-overlay group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/10 to-transparent z-10" />

            <div className="absolute bottom-8 right-8 z-20 overflow-hidden flex flex-col items-end">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex items-center gap-4 flex-row-reverse"
              >
                <span className="w-16 h-[2px] bg-primary shadow-[0_0_10px_rgba(var(--primary),0.8)]"></span>
                <span className="text-sm font-medium tracking-[0.2em] uppercase text-foreground">
                  Progression
                </span>
              </motion.div>
            </div>

            <Image
              src="/eastern-2.jpg"
              alt="Central Eastern Province Progression"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
            />

            {/* Glowing accents */}
            <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-primary/60 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0"></div>
          </motion.div>
        </div>
      </motion.section>

      {/* Introduction & History */}
      <WriteUp
        texts={[
          'Central Eastern Province of the Congregation of the Handmaids of the Holy Child Jesus was inaugurated on the 26th day of August, 1997 to the glory of God, at the Maria Assumpta Cathedral, Owerri by the then Superior General, Mother Mary Langley. And mass was officiated by the Archbishop of Owerri, Most Rev. Dr. A.J.V Obinna. The inauguration was preceded by an annual retreat and a two day seminar/workshop which took place at the Seat of Wisdom Seminary, Ulakwo.',
          'At the beginning of the Province, Central Eastern Province consisted of 250 sisters that were spread in 12 Dioceses, (136 finally professed and 36 temporally professed living and working in the Provinces). The remaining 78 sisters were either studying abroad or on mission outside the Province. As at 29th December, 2022, sisters numbered 242 (204 finally professed and 38 temporary professed sisters). At present, there are 32 temporally professed, 221 finally professed, and 62 inactive sisters (old, young, sick).',
          'At their first Provincial Council Meeting which took place from 26th to 28th September 2000, Sr. Celestina Anukam was appointed the Provincial Secretary and Sr. Francisca Opara, the Provincial Bursar while Sr. Irene Agbor was appointed sister in-charge of Temporal Professed.',
          'The first Provincial Chapter took place at Maria Assumpta Pastoral Centre, from August 21st to August 26th 2000. At the end of the, the new provincial team included: <br/>Sister Maria Providentia Igwe - Provincal Superior <br/>Sister Philomena Madu - Provincial Vicar <br/>Sister Bibiana Okoro - First Councilor <br/>Sister Stella Chibuoke - Second Councilor <br/>Sister Margaretta (SH) Isinenyi - Third Councilor',
          'Sr. Magaretta (SH) Isinenyi was not present at the installation as she was on mission in Kenya. She came back to begin her work as a Councilor in January, 2001. After the first council meeting, Sr. Celestina Anukam was retained as a Provincial Secretary while Sr. Francisca Opara was appointed as the Provincial Bursar. Sr. Bernadette Ezenyi became the Liaison General Councilor until after the General Chapter in March, 2002 when Sr. Regina Essiet took over from her as the Liaison General Councilor.',
          'The team had their recollection at Okpuno Retreat Centre from 6th – 8th October, 2000. This recollection was marked with hooding of five postulants on the 7th of October, 2000, on the feast of our Lady of the Holy Rosary.',
        ]}
      />

      {/* Pioneer Council */}
      <motion.section
        className="py-20 bg-muted/30"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <SectionTitle title="Pioneer Provincial Council Members" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: 'Sister Maria Providentia Igwe',
                role: 'Provincial Superior',
              },
              { name: 'Sister Philomena Madu', role: 'Provincial Vicar' },
              { name: 'Sister Viviene Okereke', role: 'Councilor' },
              { name: 'Sister Patricia Osineme', role: 'Councilor & Bursar' },
            ].map((member, index) => (
              <Card key={index} className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {member.name[0]}
                  </span>
                </div>
                <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Committees */}
      <motion.section
        className="py-20"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <SectionTitle title="Committees" />
          <p className="text-center text-muted-foreground mb-10 max-w-2xl mx-auto">
            Various Committees were formed to help in the smooth running of the
            Province.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="overflow-x-auto rounded-lg border border-border shadow-xs">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th className="px-6 py-3">Committee</th>
                    <th className="px-6 py-3">Chairperson</th>
                    <th className="px-6 py-3">Councilor In-Charge</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      committee: 'Formation',
                      chair: 'Sr. Philomena Okonkwo',
                      councilor: 'Sr. Philomena Madu',
                    },
                    {
                      committee: 'Education',
                      chair: 'Sr. Roseline Anyanwu',
                      councilor: 'Sr. Philomena Madu',
                    },
                    {
                      committee: 'Ceremonial',
                      chair: 'Sr. Theresa Nwanruo',
                      councilor: 'Sr. Viviene Okereke',
                    },
                    {
                      committee: 'Health care/ Delivery',
                      chair: 'Sr. Gertrude Iheanacho',
                      councilor: 'Sr. Viviene Okereke',
                    },
                    {
                      committee: 'Finance/Fund Raising',
                      chair: 'Sr. Victoria Anyaechie',
                      councilor: 'Sr. Patricia Osineme',
                    },
                    {
                      committee: 'Project',
                      chair: 'Sr. Stella Nworji',
                      councilor: 'Sr. Domina Okere',
                    },
                    {
                      committee: 'Editorial Board',
                      chair: 'Sr. Theresa Nwanuro (Editor)',
                      councilor: '-',
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="bg-background border-b border-border hover:bg-muted/20"
                    >
                      <td className="px-6 py-4 font-medium">{row.committee}</td>
                      <td className="px-6 py-4">{row.chair}</td>
                      <td className="px-6 py-4">{row.councilor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <Card>
                <h3 className="font-bold text-xl mb-2">
                  Additional Committees
                </h3>
                <p className="text-muted-foreground">
                  Later on in years, two other committees were formed to address
                  evolving needs:
                </p>
                <ul className="mt-4 space-y-2 list-disc list-inside text-muted-foreground">
                  <li>Heritage Committee</li>
                  <li>Justice & Peace Committee</li>
                </ul>
              </Card>
              <Card>
                <h3 className="font-bold text-xl mb-2">Zones</h3>
                <p className="text-muted-foreground mb-4">
                  Communities in the Province were initially grouped into three
                  zones: Okigwe, Owerri, and Awka.
                </p>
                <p className="text-muted-foreground">
                  By the end of 2003, Ahiara, Port Harcourt, and Abakaliki zones
                  were added. In 2023, Bomadi and Enugu zones were created for
                  proximity.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Life & Apostolates */}
      <motion.section
        className="py-20 bg-primary/5"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionTitle title="Spiritual & Community Life" />
              <div className="space-y-6 text-muted-foreground text-lg">
                <p>
                  According to LG 40, our vocation is primarily a call to
                  holiness. The sisters allow the Eucharistic presence of Christ
                  and his word in the sacred scriptures to animate, guide and
                  direct their lives in their quest for holiness.
                </p>
                <p>
                  Sisters of Central Eastern Province appreciate community
                  living and work together to uphold it. They participate
                  actively in community exercises and avail themselves of
                  workshops/seminars organized both at the zonal and provincial
                  levels.
                </p>
                <p className="font-medium text-foreground">
                  In summary, there is spiritual, physical and structural growth
                  in our communities and there is healthy competition on how to
                  make one’s community better.
                </p>
              </div>
            </div>
            <div>
              <SectionTitle title="Our Apostolates" />
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  {
                    title: 'Education',
                    desc: "Teaching, training & preparing pupils and students to meet life's challenges.",
                  },
                  {
                    title: 'Medical',
                    desc: 'Serving the sick and suffering with love, patience and sympathy in hospitals and clinics.',
                  },
                  {
                    title: 'Social Services',
                    desc: 'Prison Apostolate, Motherless Babies Homes, and economic empowerment of women.',
                  },
                  {
                    title: 'Pastoral',
                    desc: 'Serving as Eucharistic ministers, advisers to pious societies, and catechism teachers.',
                  },
                ].map((item, idx) => (
                  <Card key={idx} className="h-full">
                    <h4 className="font-bold text-lg mb-2 text-primary">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Formation */}
      <WriteUp
        title="Formation"
        texts={[
          'The Province has a formation team that is responsible for the recruitment of aspirants and candidates into the congregation through the Province. Our formation is very effective; the members screen our candidates, give them orientation before they are posted to communities and monitor their progress when they are on live-in-experience.',
          'The young professed sisters have defined programme they follow through the sister that is in-charge of them. There is ongoing formation for all the sisters in the Province through retreats and seminars. Some of these seminars are organized at zonal and provincial levels.',
          'At the creation of the Province, there was no formation house for the Pre-Novices and so Pre-Novices from all the Provinces were together at Eriam until 15th September, 2001 when a Pre-novitiate was established at Owerri.',
        ]}
      />

      {/* Governance Timeline */}
      <motion.section
        className="py-20 bg-background"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <SectionTitle title="Governance Timeline" />
          <div className="relative border-l-2 border-primary/20 ml-4 md:ml-10 space-y-12">
            {[
              {
                period: '1997 – 2000',
                team: [
                  'Sr. Providential Igwe - Provincial Superior',
                  'Sr. Philomena Madu - Provincial Vicar',
                  'Sr. Viviene Okereke - First Councilor',
                  'Sr. Domina Okere - Second Councilor',
                  'Sr. Patricia Osineme - Third Councilor & Bursar',
                  'Sr. Celestina Anukam - Provincial Secretary',
                ],
              },
              {
                period: '2000 – 2003',
                team: [
                  'Sr. Provindentia Igwe - Provincial Superior',
                  'Sr. Philomena Madu - Provincial Vicar',
                  'Sr. Bibiana Okoro - First Councilor',
                  'Sr. Stella Chibuoke - Second Councilor',
                  'Sr. Margaretta Isinenyi - Third Councilor',
                  'Sr. Celestina Anukam - Provincial Secretary',
                  'Sr. Francisca Opara - Provincial Bursar',
                ],
              },
              {
                period: '2003 – 2006',
                team: [
                  'Sr. Marth Kalu - Provincial Superior',
                  'Sr. Stella Chibuoke - Provincial Vicar',
                  'Sr. Stella Maris Nworji - First Councilor',
                  'Sr. Ann Obiora - Second Councilor',
                  'Sr. Patricia Madufor - Third Councilor',
                  'Sr. Rosemary Edom - Provincial Secretary',
                  'Sr. Virginia Obike - Provincial Bursar',
                ],
              },
              {
                period: '2006 – 2009',
                team: [
                  'Sr. Justina Obiajunwa - Provincial Superior',
                  'Sr. Caroline Muo - Provincial Vicar',
                  'Sr. Patricia Madufor - First Councilor',
                  'Sr. Eunice Okafor - Second Councilor',
                  'Sr. Domina Okere - Third Councilor',
                  'Sr. Rosemary Edom - Provincial Secretary',
                  'Sr. Virginia Obike - Provincial Bursar',
                ],
              },
              {
                period: '2009 – 2013',
                team: [
                  'Sr. Philomena Madu - Provincial Superior',
                  'Sr. Caroline Muo - Provincial Vicar',
                  'Sr. Eunice Okafor - First Councilor',
                  'Sr. Mary Okwuosa - Second Councilor',
                  'Sr. Brigid Kpeden - Third Councilor',
                  'Sr. Fidelia Osonwa - Provincial Secretary',
                  'Sr. Priscilla Ogbonna - Provincial Bursar',
                ],
              },
              {
                period: '2013 – 2016',
                team: [
                  'Sr. Philomena Madu - Provincial Superior',
                  'Sr. Mary Okwunosa - Provincial Vicar',
                  'Sr. Brigid Kpeden - First Councilor',
                  'Sr. Florence Ugochukwu - Second Councilor',
                  'Sr. Eucharia Ekpo - Third Councilor',
                  'Sr. Fidelia Osonwa - Provincial Secretary',
                  'Sr. Mary Uzoma - Provincial Bursar',
                ],
              },
              {
                period: '2016 – 2019',
                team: [
                  'Sr. Eunice Okafor - Provincial Superior',
                  'Sr. Stella Maris Nworji - Provincial Vicar',
                  'Sr. Virginia Obike - First Councilor',
                  'Sr. Clarice Orji - Second Councilor',
                  'Sr. Fidelia Osonwa - Third Councilor',
                  'Sr. Geraldine Emegw - Provincial Secretary',
                  'Sr. Mary Uzoma - Provincial Bursar',
                ],
              },
              {
                period: '2019 – 2022',
                team: [
                  'Sr. Eunice Okafor - Provincial Superior',
                  'Sr. Stella Maris Nworji - Provincial Vicar',
                  'Sr. Virgina Obike - First Councilor',
                  'Sr. Clarice Orji - Second Councilor',
                  'Sr. Fidelia Osonwa - Third Councilor',
                  'Sr. Geraldine Emenyeonu - Provincial Secretary',
                  'Sr. Mary Uzoma - Provincial Bursar',
                ],
              },
            ].map((era, index) => (
              <motion.div
                key={index}
                className="relative pl-8 md:pl-12"
                variants={fadeInUp}
              >
                <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background" />
                <h3 className="text-xl font-bold text-primary mb-2">
                  {era.period}
                </h3>
                <ul className="space-y-1 text-muted-foreground">
                  {era.team.map((member, i) => (
                    <li key={i}>{member}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 bg-destructive/5 border-l-4 border-destructive p-6 rounded-r-lg"
            variants={fadeInUp}
          >
            <p className="text-muted-foreground">
              It was a great shock for the Province when one of the councilors,
              Sr. Virginia Obike died in a ghastly motor accident on 12th April,
              2001. At the end of the 11th General Chapter, Sr. Fidelia Osonwa,
              a serving Councilor was appointed the Secretary General of the
              Congregation.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* New Foundations */}
      <motion.section
        className="py-20 bg-muted/30"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <SectionTitle title="New Foundations" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: 'HHCJ Convent Aladinma, Owerri',
                date: '27th February, 2005',
              },
              {
                name: 'HHCJ Convent, Alor Anambra',
                date: '20th September, 2021',
              },
              {
                name: 'HHCJ Pre-Novitiate, Owerri',
                date: '15th September, 2001',
              },
              {
                name: 'HHCJ Convent Iyiowaidaekpe, Anambra',
                date: 'September, 1999',
              },
              {
                name: 'HHCJ Convent Amansea, Anambra',
                date: '7th October, 2007',
              },
              { name: 'HHCJ Convent, AKOKWA', date: '11th November, 1997' },
              { name: 'HHCJ Convent, Neni', date: '6th September, 1997' },
              {
                name: 'HHCJ Convent Igwuruta, River State',
                date: '30th September, 2013',
              },
              {
                name: 'HHCJ Convent Bomadi, Balyelsa',
                date: '12th February, 2013',
              },
              { name: 'HHCJ Convent Immiringi, Bayelsa', date: '2011' },
              {
                name: 'HHCJ Convent, Independent Layout',
                date: '28th April, 2009',
              },
              { name: 'HHCJ Ancilla Medical Center', date: 'March, 2002' },
              {
                name: 'HHCJ Convent Immiringi Annex, Bayelsa',
                date: 'Unknown',
              },
              {
                name: 'HHCJ Convent Oroigwe, River',
                date: '17th December, 2017',
              },
              {
                name: 'HHCJ Convent Amarata, Bayelsa',
                date: '15th September, 2019',
              },
              {
                name: 'HHCJ Convent Udo, Mbaise, Imo',
                date: '14th September, 2023',
              },
            ].map((foundation, idx) => (
              <Card key={idx} className="flex flex-col justify-between">
                <h4 className="font-semibold text-sm mb-1">
                  {foundation.name}
                </h4>
                <span className="text-xs text-muted-foreground bg-muted w-fit px-2 py-1 rounded-sm">
                  {foundation.date}
                </span>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        className="py-20"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Projects Established After Provincialization
              </h3>
              <ul className="space-y-3">
                {[
                  'HHCJ Assumpta Girls’ Model Sec. School, Prefab Aladinma, Owerri',
                  'Handmaids Girls’ Secondary School, Area G, Owerri',
                  'Handmaids N/P. School, Isiochi',
                  'Handmaids N/P. School, Azuiyiokwu',
                  'Ancilla N/P. School, Nunya',
                  'Ancilla Home, Emekuku',
                  'Handmaids, N/P Sch., Obube',
                  'Handmaids Schools for the Sighted & Visually Impaired, Igwurita',
                  'Handmaids Day Care, N/P. School, Independence L/out, Enugu',
                  'Bread Factory, Provincialate, Ogidi',
                  'Altar Bread factory, Pre-Novitiate, Owerri',
                  'Handmaids Inclusive N/P. and Secondary, Amaechi, Ezzamgbo',
                  'Ancilla Bookshop, Awka',
                  'Ancilla Ventures, Ogidi',
                  'Handmaids Montessori N/P. School, Ogidi',
                ].map((p, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-muted-foreground">{p}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">
                Diocesan Projects Managed by the Province
              </h3>
              <ul className="space-y-3">
                {[
                  'Holy Spirit N/P School, Omagba',
                  'Holy Child N/P School, Fegge',
                  'St. Mary’s N/P School, Alor',
                  'St. John’s N/P. School, Neni',
                  'Holy Innocent N/P. School, Umuchukwu',
                  'St. Paul’s N/P. School, Eke',
                  'St. Rose’s N/P school, Ihitte, Mbaise',
                  'St. Barnabas Jubilee N/P. School, Akokwa',
                  'St. Brendan Secondary School, Bomadi',
                  'St. kizito N/P. and Secondary, Immiringi Annex',
                  'CKC Hospital, Immiringi',
                  'St. John N/P. School, Port Harcourt',
                  'Fatima N/P. School, Borokiri, Port Harcourt',
                  'St. Matthias Catholic Group of Schools, Amarata, Yanegua',
                  'All saints Model N/P. School, Udo, Mbaise',
                  'Lucius Memorial Secondary School, Udo, Mbaise',
                ].map((p, i) => (
                  <motion.li
                    key={i}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span className="text-muted-foreground">{p}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Conclusion */}
      <WriteUp
        texts={[
          'Since the creation of the Province, a number of sisters were dismissed and some have been called to eternity.',
          'We thank God for the creation of the Province which has brought a lot progress and development to the Congregation. We thank all the past and present Superior Generals and Councils, and present Provincial Superiors and their Councils and all those who have contributed to growth of the Province; the Bishops, Benefactors, Benefactresses, Affiliates, Philanthropies and members of our Families.',
          'Despite all the progress and achievement made, there were some challenges encountered but by the special grace of God, we are able to scale through to the glory of God.',
        ]}
      />
    </div>
  );
}
