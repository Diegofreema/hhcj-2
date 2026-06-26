'use client';

import {
  afere,
  agroyesum,
  ancilla,
  atebubu,
  bekwai,
  berekum,
  funsi,
  haatso,
  konongo,
  kumasi,
  lasia,
  mim,
  modanna,
  nkoransa,
  nsoatre,
  obuasi,
  provincial,
  provisional2,
  regional,
  sefwi,
  suyana,
  techiman,
  tepa,
  wa,
} from '@/lib/constants/data';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import WriteUp from './write-ups';
const Title = ({ title }: { title: string }) => {
  return <p className="font-semibold text-2xl text-center">{title}</p>;
};

export default function GhanaClientPage() {
  const containerRef = useRef(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-100px' },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: '-100px' },
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* Hero Title Section */}
      <motion.section
        className="relative py-20 bg-linear-to-b from-background via-background to-transparent overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            variants={fadeInUp}
            initial="initial"
            animate="whileInView"
            viewport={{ once: true }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              THE CONGREGATION OF THE
              <span className="block text-primary mt-2">
                HANDMAIDS OF THE HOLY CHILD JESUS
              </span>
              <span className="block text-lg md:text-2xl font-normal text-muted-foreground mt-4">
                EARLY HISTORY IN GHANA
              </span>
            </h1>
          </motion.div>
        </div>
      </motion.section>

      {/* Side-by-Side Images Section */}
      <motion.section
        className="py-16 bg-background"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Image 1 */}
            <motion.div
              className="relative overflow-hidden rounded-xl border border-primary/20 shadow-lg"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-square md:aspect-auto md:h-96">
                <Image
                  src="/ghana-1.jpg"
                  alt="Early HHCJ Sisters in Ghana - Saltpond Community 1959"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Image 2 */}
            <motion.div
              className="relative overflow-hidden rounded-xl border border-primary/20 shadow-lg"
              variants={fadeInUp}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative aspect-square md:aspect-auto md:h-96">
                <Image
                  src="/ghana2.jpg"
                  alt="HHCJ Sisters engaged in educational work in Ghana"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Caption */}
          <motion.p
            className="text-center text-muted-foreground mt-8 max-w-3xl mx-auto text-sm md:text-base"
            variants={fadeInUp}
          >
            THE HISTORY OF THE CONGREGATION OF THE HANDMAIDS OF THE HOLY CHILD
            JESUS, EARLY HISTORY IN GHANA
          </motion.p>
        </div>
      </motion.section>

      {/* Initial Vocation Story Section */}
      <motion.section
        className="py-20 bg-linear-to-b from-background to-background"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-foreground mb-8 pb-4 border-b border-primary/20"
              variants={fadeInUp}
            >
              THE INITIAL VOCATION STORY/FIRST ASPIRANTS
            </motion.h2>

            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                Our Mother Foundress was a woman of deep faith and a great
                vision. Among other things, she wished for the Congregation to
                spread throughout the country of Nigeria. This vision of hers
                has gone beyond the shores of Nigeria. She entrusted the young
                Congregation to the care of the Holy Child Sisters who took over
                from her. As the young HHCJ Congregation took root by then the
                Holy Child Sisters, were already working in Ghana. Sister Mary
                Francis (Theresa Amissah) attended the Holy Child Teachers
                Training College in Cape Coast then.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                When she expressed the desire to become a religious, the Holy
                Child Sisters, who were our formators and superiors at the time,
                instead of admitting this young aspirant: Theresa Amissah into
                the Holy Child Congregation, generously and selflessly directed
                her to join the Handmaids of the Holy Child Jesus (HHCJ)
                Congregation in Nigeria. Sr. Mary Francis was therefore,
                admitted into the Congregation of the Handmaids of the Holy
                Child Jesus in 1951 after finishing her Teacher&apos;s Training
                education.
              </motion.p>

              <motion.div
                className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg"
                variants={fadeInUp}
              >
                <p className="text-muted-foreground leading-relaxed">
                  She was immediately followed by Sr. Mary Michael (Anna Nortey)
                  the same year and both of them were professed in December
                  1954. Sr. Mary Michael however, left the congregation before
                  her final vows in 1962.
                </p>
              </motion.div>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                In January 1954 three other Ghanaians in the persons of: Sisters
                Mary Pius Andrews, Maria Consolata Suapim, and Maria Dolores
                Inkoom followed up to Nigeria to begin their training as
                Religious. Sr. Mary Perpetua Osei Wusu, followed up with Sr.
                Mercedes Mensah in 1955. Sr. Margaret Mary Ntrakwah, followed in
                1959 with Sr. Mary Baptista Desbordes. This was the year we were
                also invited as a Congregation to come and work in Ghana and we
                responded same year, in 1959. As at this time we had just about
                four Professed Ghanaian Sisters.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                These pioneer Ghanaian Sisters were: Srs Mary Michael Nortey,
                Mary Pius Andrews, Maria Consolata and Maria Dolores Inkoom.
                Thus far all the Ghanaian Sisters who had joined the Handmaids
                were mainly from the Fanti tribe. Except Sr. Mary Michael who
                was Ga as well as Sr. Maria Perpetua Osei-Wusu who was Ashanti
                and Margaret Mary Ntrakwah who was a Denkyira. The inter-tribal
                character of the HHCJ is somewhat evident here from the onset.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                But all these later Sisters mentioned were still in Nigeria
                under formation. And so when these Sisters were professed and
                came home from Nigeria in 1960, Sr. Maria Perpetua Osei-Wusu
                toured round the Ashanti Region, it was the first vocation rally
                recorded among HHCJ in Ghana; from these tours three Ashanti
                girls were gotten in the persons of Agnes Alberta Antoh and
                Gladys Brobbey in 1961, Catherine Ofori in 1962.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                These aspirants were promptly sent to the novitiate in Nigeria.
                Upon the completion of their training, these newly professed
                Sisters of HHCJ returned from Nigeria and they lived in Saltpond
                their first home then (this was after we were invited and
                settled in Saltpond). This home came about when we received the
                invitation to come to Ghana, the Holy Child Sisters generously
                built and equipped a Convent in Saltpond, in the Central Region
                of Ghana, and donated it as a welcome gift to the Handmaids of
                the Holy Child Jesus. This became the first Convent, the
                foundation of the Handmaids of the Holy Child Jesus in Ghana.
                This was in January 1959.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                By Divine Providence, our presence in Ghana started inspiring
                more vocation into the congregation. And so when the Sisters
                zoomed into rigor we had the first aspirant from the north, Sr.
                Jean Frances Dabuo who lived with her parents in the Central
                Region that time. She was immediately dispatched for formation
                in Nigeria and almost at the same time Sr. Bernadette Honny also
                followed to Nigeria. After them more aspirants were inspired and
                these included Sr. Mary Dorothy Honny and Sr. Helen Amusu. About
                two years later Sr. Eugenia Atta Paidoo followed to Nigeria. She
                was also followed by Sr. Elizabeth Anderson and Sr. Monica Otoo.
                Sr. Beatrice Coffie and Sr. Theresa Barnie were the last two to
                be sent and trained in Nigeria.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                The 3rd General Chapter in Calabar in 1971 had decreed that a
                Novitiate should be started in Ghana when the number of
                vocations increased. That dream became a reality on 15th January
                1981. The pioneer-novices of this novitiate are Sr. Georgina
                Brenya, Sr. Elizabeth Agyeiwaa, Sr. Mary Agyeiwaa and Sr.
                Theresa Francisca Fordjour.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* First Community Section */}
      <motion.section
        className="py-20 bg-linear-to-b from-primary/5 to-background"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-foreground mb-8 pb-4 border-b border-primary/20"
              variants={fadeInUp}
            >
              FIRST COMMUNITY IN GHANA: SALTPOND COMMUNITY
            </motion.h2>

            <motion.h3
              className="text-2xl font-bold text-primary mb-6"
              variants={fadeInUp}
            >
              CENTRAL REGION – (CAPE COAST DIOCESE)
            </motion.h3>

            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                This is how our expansion to Ghana happened: by 1959 the
                Congregation in Nigeria had an experimental self-governing
                administration. Most Rev. William Porter, the then Archbishop of
                Cape Coast, made a memorandum of understanding with the young
                Congregation for the Ghanaian Sisters to be sent home to work
                after their religious/academic training, and so he was the first
                who invited the Handmaids to come and work in his Archdiocese.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                The experimental self-governing Superior General, Mother St.
                John Williams, a foundation member of the congregation,
                responded promptly to the invitation and sent one Nigerian and
                four Pioneer-Ghanaian Handmaids to Saltpond in the Archdiocese
                of Cape Coast which is in the Central Region of Ghana on 16TH
                January, 1959. The foundation members to this mission and the
                first members of the Saltpond Ghana community were: Mother Mary
                Gertrude Waturuocha, one of the Congregation&apos;s foundation
                members, led the delegation as their superior on the mission
                together with the Pioneer-Ghanaian Sisters: Srs Mary Michael
                Nortey, Mary Pius Andrews, Maria Consolata and Maria Dolores
                Inkoom.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                These Sisters worked tirelessly among the people of Ghana,
                especially among the children, the youth and the women. Mother
                Mary Gertrude and the four sisters carried out diversified areas
                of apostolate including teaching of catechism, home visitation,
                preparing people for the sacraments and instructing women on
                good Christian living and on their role as mothers and good
                wives, as it used to be done in Calabar while Mother Mary
                Charles Magdalene Walker was with them. As the first Superior of
                the mission, Mother Mary Gertrude was very loving, caring and
                motherly to the Sisters as well as the pupils under her care.
                The Sisters worked in the St. John the Baptist Catholic School.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                To have a good hold on the girls, they separated them from the
                boys in the mixed school as &quot;A&quot; and &quot;B&quot;
                schools in Saltpond. Again they put up a Hostel annex to the
                convent for girls far away and nearby alike who wished to be
                boarders. Mother was head of the Home Science Department while
                the other Sisters taught various classes in the school. This
                school proved to be the best in the overall Home Economics and
                Needle Work Exhibition which took place in the Anglican
                Girls&apos; Secondary School in October that same year, 1959.
                This attracted more parents to send their children to our
                school, St John the Baptist Catholic School, Saltpond.
              </motion.p>

              <motion.div
                className="bg-primary/5 border border-primary/30 rounded-lg p-8"
                variants={fadeInUp}
              >
                <h4 className="text-xl font-bold text-primary mb-4">
                  Catholic Women Association - Ghana Founded
                </h4>
                <p className="text-muted-foreground leading-relaxed">
                  As a woman enthusiast, Mother Gertrude founded the Catholic
                  Women Association (C.W.A.) in Ghana on June 17, 1959 in
                  Saltpond which spread rapidly to other parts of the
                  Archdiocese and Ghana as a whole. It soon became affiliated to
                  the World Union of Catholic Women&apos;s Organization
                  (W.U.C.W.O.). The Association has now spread to all the
                  catholic dioceses in Ghana.
                </p>
              </motion.div>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                In December 1959, Mother Mary Gertrude left Ghana for Nigeria as
                a delegate for the first HHCJ General Chapter. To show their
                love for her and their desire to have her back, the C.W.A.
                members bought for Mother, a return ticket to Ghana.
                Unfortunately for them, however, Mother Gertrude was elected the
                first substantive Superior General of the HHCJ Congregation.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                She came back however, and was given an official befitting
                welfare party and she was replaced by Mother St. John Williams
                on February 6, 1960 as Superior on the mission, she was one of
                the foundation members of the Congregation who served as the
                experimental Superior General. She came as the Mission Superior
                of the Community at Saltpond. Mother St. John continued the good
                works of Mother Mary Gertrude until 1966 when she too left Ghana
                finally to Nigeria. She was loved by all who came in contact
                with her. She was replaced by Sr. Mary Pius Andrews, a Ghanaian
                Handmaid, as the Mission Superior of the Saltpond community.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                On 26th April 1961, Mother Mary Gertrude made her maiden visit
                to Ghana as a Superior General to the Saltpond Community. She
                was accompanied by Sister Mary Francis Amissah, the first
                Ghanaian Handmaid. Later on 9th September, 1961, Sister Mary
                Francis Amissah, Sister Maria Consolata and Sister Maria Dolores
                went to Dunkwa-on-Offin still in the Central Region of Ghana
                also in the Archdiocese of Cape Coast to start a second HHCJ
                Community. Coincidentally, around this time the Nigerian civil
                war had started.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Biafran War Section */}
      <motion.section
        className="py-20 bg-background"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-foreground mb-8 pb-4 border-b border-primary/20"
              variants={fadeInUp}
            >
              THE BIAFRAN WAR IN NIGERIA AND HHCJ INTERIM FORMATION IN GHANA
            </motion.h2>

            <motion.p
              className="text-muted-foreground text-lg mb-4 font-semibold"
              variants={fadeInUp}
            >
              1966-1968
            </motion.p>

            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                The Nigerian/ Biafran civil war was a devastating experience for
                both natives and non-natives. Consequently, our novices were
                very much threatened not only for their lives but also the
                smooth running of their novitiate programme was threatened. The
                Sisters had to flee from the war to other places within Nigeria
                for safety, but thanks be to God, nothing happened to any of our
                Sisters. Lagos was safer since it was untouched by the war. The
                war was more a war between the East of Nigeria(Igbos)and the
                rest of Nigeria. Therefore, the Igbo Sisters were very more
                threatened and so were evacuated to Lagos along with the HHCJ
                Novices. But this interfered with the novices smooth training.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                So the Superior General contacted different Congregations with
                novitiates in and around Lagos for their settlement and training
                but to no avail. Fortunately, during this critical time there
                was a timely intervention from Ghana by the Archbishop of Cape
                Coast, Most Rev. John Kojo Amissah, who was ready to accommodate
                the HHCJ Novices among his Diocesan Congregation&apos;s (The
                Infant Jesus Sisters) Novitiate facility in Cape Coast. This
                Bishop was the blood brother of the Regional Superior at the
                time, Sr. Francis Amissah. He went to the extent of sending one
                of his priests from Ghana, Rev. Fr. Enoo, to inform the Superior
                General, Mother Mary Gertrude of this favour.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                The Novices in Lagos as well as those in Eriam were therefore
                transferred to Ghana for safety and smooth training. These
                novices included the Ghanaian aspirants who had gone to Nigeria
                for training. Sister Mary Genevieve Cudjoe who was the Novice
                Mistress in Nigeria could not accompany the Novices to Ghana.
                Sister Sylvia Edet who had just finished her studies in the
                Netherlands was to take care of the Novices in Ghana. After a
                short stay Sr. Edet returned to Nigeria. She was replaced by
                Sister Maria Immaculata Offiong. There were four sets of Novices
                who stayed in Ghana for about four years. When the civil war in
                Nigeria came to an end the HHCJ Novices stopped coming to Ghana
                for their training and they finally left to Nigeria in 1971
                after making their various first professions.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Second Community Section */}
      <motion.section
        className="py-20 bg-linear-to-b from-primary/5 to-background"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-foreground mb-8 pb-4 border-b border-primary/20"
              variants={fadeInUp}
            >
              SECOND HHCJ COMMUNITY
            </motion.h2>

            <motion.h3
              className="text-2xl font-bold text-primary mb-6"
              variants={fadeInUp}
            >
              DUNKWA-ON-OFFIN COMMUNITY
            </motion.h3>

            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                On 9th September, 1961, Sister Mary Francis Amissah, Sister
                Maria Consolata and Sister Maria Dolores went to Dunkwa-on-Offin
                also in the Archdiocese of Cape Coast to start the second
                Community. Sister Mary Francis Amissah became the first Superior
                This Second Community was put up by the generosity of the
                Archbishop John Kojo Amissah who succeeded Archbishop William
                Porter of the Archdiocese of Cape Coast. In September of the
                same year the Sisters took charge of the Catholic Girl&apos;s
                School which the Sisters created out of the St. Stephen Catholic
                mixed school in Dunkwa-on-Offin.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                These Sisters too carried out the same good works in the School
                as well as in the Parish as were done in Saltpond. A few more
                aspirants in the diocese showed interest in the religious life
                and were sent to Nigeria for their training to become religious.
                The Professed Sisters who lived in the two communities had to
                manage with their meagre income at the time.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                In later development, two other Sisters were transferred to
                Dunkwa-on-Offin Community – Sisters Margaret Mary Ntrakwah and
                Mary Dorothy Honny –they had a very difficult and trying time.
                They had to work extra hard to make ends meet. Their survival
                was due to the assistance of Divine Providence. They tried to
                make the best of the situation they found themselves in and
                lived happily.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                The Sisters lived in the two Communities until the Bishop of
                Kumasi Diocese at the time Most Rev. Peter K. Sarpong, invited
                some of them to start a foundation in Sunyani in 1973. (The
                diocese of Kumasi at the time comprised both the Ashanti and
                Brong Ahafo Regions). A few months after the Sisters went to
                Sunyani the diocese was divided and Sunyani became a Diocese.
                The Sisters who were there lived in a rented house until the
                Convent was built. The Sunyani community was the third community
                opened so far.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Setback Section */}
      <motion.section
        className="py-20 bg-background"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-foreground mb-8 pb-4 border-b border-red-500/30"
              variants={fadeInUp}
            >
              HHCJ FIRST SET-BACK IN GHANA
            </motion.h2>

            <motion.h3
              className="text-2xl font-bold text-red-500 mb-6"
              variants={fadeInUp}
            >
              WITHDRAWAL FROM SALTPOND/DUNKWA
            </motion.h3>

            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.div
                className="bg-red-500/5 border-l-4 border-red-500 p-6 rounded-r-lg"
                variants={fadeInUp}
              >
                <p className="text-muted-foreground leading-relaxed">
                  Meanwhile, the Archbishop of Cape Coast, Most Rev Kojo
                  Amissah, did not take it lightly at all when the Sisters moved
                  to Sunyani. He had wanted them to take up another apostolate
                  in the Archdiocese which the Sisters did not have the
                  personnel for at the time. So when the Archbishop of Cape
                  Coast, Most Rev. John Kojo Amissah heard about the Handmaids
                  expansion to the Sunyani Diocese, he became very furious and
                  hurt on the grounds that he had been inviting us for a long
                  time to go to Bibiani in his Archdiocese but we refused on the
                  grounds that we had no personnel.
                </p>
              </motion.div>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                He said that if we had the personnel to go to the Sunyani
                Diocese then, we should all move there and let our presence be
                felt there. As a result of this, we were asked to withdraw from
                Saltpond, our first convent, at the end of the 1974 academic
                year, with a warning that we would be withdrawn from Dunkwa the
                second convent as well and for that matter completely driven out
                of the Cape Coast diocese.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                Meanwhile, he had already started his own diocesan Congregation
                but the Sisters were probably not trained enough and also not
                many to undertake other apostolates. He was so angry that he
                asked the Sisters to leave Saltpond and join the Sisters in
                Dunkwa for a greater impact (Even though the Saltpond convent
                rightly belonged to the HHCJ he drove us out of our own
                property). It was a malicious idea he had when he said the
                Sisters were to join those in Dunkwa-on-Offin for &quot;a
                greater impact&quot; on the girls as they were few in number.
                The HHCJ were still too young and knew not their right
                therefore, did not know they could have refused to leave since
                he was not the one who built the Saltpond convent.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                It was too late when it dawned on them that, if the Archbishop
                was able to kick them out of a house he did not build how much
                more the house he built. Lo and behold the order came eventually
                that the Sisters should leave Dunkwa as well. This was the first
                setback and a big blow to the young Congregation but they forged
                ahead regardless, trusting in Divine Providence. Our Mother
                foundress never fought for anything, not even what she labored
                for and owned. Notwithstanding, we are in the 21st century, we
                have suffered enough, it is about time we know what our rights
                are and fight a justified course as may be required henceforth!
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Return Story Section */}
      <motion.section
        className="py-20 bg-linear-to-b from-primary/5 to-background"
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-4xl font-bold text-foreground mb-8 pb-4 border-b border-primary/20"
              variants={fadeInUp}
            >
              OUR RETURN STORY TO THE CENTRAL REGION AFTER OUR WITHDRAWAL
            </motion.h2>

            <motion.h3
              className="text-2xl font-bold text-primary mb-6"
              variants={fadeInUp}
            >
              WINNEBA COMMUNITY – (ANCILLA HOSTEL FACILITY)
            </motion.h3>

            <motion.div className="space-y-6" variants={staggerContainer}>
              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                Even though we were driven out from the Cape Coast Diocese in
                1974 we worked our way back into the Cape Coast diocese again in
                recent years. Ancilla Hostel has been the brain work of
                successive Provincial Superiors: The land was acquired by Sr.
                Bernadette Honny in 2007 through the help of Sr. Theresa Sarfo
                Pomaa. As the years went by the succeeding Provincial Superior,
                Sr. Germaine Ocansey began the construction work on the plot to
                a certain level. In the aftermath, Sr. Ignatia Safoaa Buaben,
                the immediate past Provincial Superior continued the
                construction work to completion in 2017.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                The Ancilla Hostel by its proximity to the South Campus of the
                Winneba University College of Education, was earmarked to be a
                hostel for the students at this University most of whom live
                around in rented homes some of which are not even completed.
                Nevertheless, at its completion, the members of the Knights and
                Ladies Auxiliary of St. John international were the first to
                hire the hostel and stayed a week for their regional conference
                which took place in Winneba. After them, the Pax – Romana
                members from the Catholic University College of Ghana, Fiapre
                also resided here for a programme at the University of
                Education, Winneba. Additionally, the 2017 &apos;28th December
                Day&apos; celebration of the Sisters of Ghana Province, was also
                held here, not only to mark this yearly event of the
                Congregation, but to also celebrate the achievement of this
                building project and our triumphant entry back into our place of
                rejection.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                After the 28th celebrations, subsequently, Sr. Christina Doggu,
                the then Provincial Vicar was missioned to begin a community in
                this hostel on the 25th of June, 2018 as Sister in-charge of
                this project. She was later accompanied by Sr. Jacinta
                Duruanyim, a newly professed missioned to Ghana. Sr.
                Christina&apos;s arrival was timely as she and the Sisters at
                the provincial house together with the Provincial Superior were
                feverishly cleaning and putting finishing touches to set up the
                rooms in readiness for the arrival of a group of white people
                volunteers from Europe, an NGO founded in Spain known as
                &quot;Yes We Help.&quot;
              </motion.p>

              <motion.div
                className="bg-primary/5 border border-primary/30 rounded-lg p-8"
                variants={fadeInUp}
              >
                <h4 className="text-xl font-bold text-primary mb-4">
                  Growth and Development
                </h4>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  The first group of 12 volunteers arrived in May. After that,
                  groups of over hundred volunteers arrived in succession for a
                  period of time till 6th of September, 2018; when the last
                  group left the hostel. On September 31st 2018, the first
                  students arrived to live in the hostel; by the 30th of
                  October, there were a total of seven students, resident in the
                  hostel so far.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The hostel is a four storey and has a capacity of about 150
                  students. On the 28th of September, more community member
                  arrived, Sr. Susana Akko. Sr. Susana who was to be the
                  superior and the matron of the hostel.
                </p>
              </motion.div>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                On the 29th of November, 2018 Sr. Lucy Dery arrived as another
                community member. They were then a pioneering community of four
                Sisters: Sr. Susana Akko, (house superior), Sr. Christina Doggu
                (hostel in-charge), Sr. Lucy Dery (assistant hostel in-charge)
                and Sr. Jacinta C. Duruanyim. The Parish Priest of the Sacred
                Heart parish, Winneba gave the community a tabernacle and a
                ciborium. He also gave us a wooden monstrance to facilitate our
                weekly and monthly adoration. The community is indebted to him.
                We had no convent yet so the ground floor of the hostel was
                converted as a convent set-up.
              </motion.p>

              <motion.p
                className="text-muted-foreground leading-relaxed text-lg"
                variants={fadeInUp}
              >
                In the later part of 2018/2019 academic year the number of
                students who were resident in the hostel had increased from 7 to
                a total of 30 students, most of whom were final year students.
                We began a rife advertisement of the hostel facility. Our
                efforts were rewarded as finally in the 2019/2020 academic year,
                we witnessed almost a full intake of the hostel to a total of
                about 100 students. During the holidays, the place is
                occasionally being used by individual guests and groups who use
                the place for their meetings/conferences.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Write ups */}
      <WriteUp title={suyana.title} texts={suyana.texts} />
      <WriteUp title={nsoatre.title} texts={nsoatre.texts} />
      <WriteUp title={ancilla.title} texts={ancilla.texts} />
      <WriteUp title={berekum.title} texts={berekum.texts} />
      <WriteUp
        title={'BEREKUM ANNEX'}
        texts={[
          'On the 25th of November, 2019 Sr. Judith Magbity moved with Sr. Roseline Henry Udoh to take residence at the Holy Family Hospital premises as the Nurses Administrator of the hospital till date.',
        ]}
      />
      <Title title=" COMMUNITIES IN THE ASHANTI REGION" />
      <WriteUp title={obuasi.title} texts={obuasi.texts} />
      <WriteUp title={bekwai.title} texts={bekwai.texts} />
      <WriteUp title={modanna.title} texts={modanna.texts} />
      <WriteUp title={kumasi.title} texts={kumasi.texts} />
      <WriteUp title={agroyesum.title} texts={agroyesum.texts} />
      <Title title="STILL IN ASHANTI REGION" />
      <WriteUp title={konongo.title} texts={konongo.texts} />

      <Title title="NORTHERN GHANA – UPPER WEST REGION" />
      <WriteUp title={funsi.title} texts={funsi.texts} />
      <WriteUp title={wa.title} texts={wa.texts} />
      <WriteUp title={lasia.title} texts={lasia.texts} />
      <Title title="COMMUNITIES IN BONO-EAST REGION" />
      <WriteUp title={lasia.title} texts={lasia.texts} />
      <WriteUp title={nkoransa.title} texts={nkoransa.texts} />
      <WriteUp title={techiman.title} texts={techiman.texts} />
      <WriteUp title={atebubu.title} texts={atebubu.texts} />
      <Title title="COMMUNITIES IN THE AHAFO REGION" />
      <WriteUp title={mim.title} texts={mim.texts} />
      <WriteUp title={tepa.title} texts={tepa.texts} />
      <Title title="COMMUNITIES IN THE WESTERN NORTH REGION" />
      <WriteUp title={sefwi.title} texts={sefwi.texts} />
      <WriteUp title={afere.title} texts={afere.texts} />
      <Title title="FOUNDATION IN GREATER REGION- ACCRA" />
      <WriteUp title={haatso.title} texts={haatso.texts} />
      <WriteUp title={provincial.title} texts={provincial.texts} />
      <Title title="GOVERNANCE-GHANA PROVINCE" />
      <WriteUp title={regional.title} texts={regional.texts} />
      <WriteUp title={provisional2.title} texts={provisional2.texts} />

      {/* Closing Section */}
      <motion.section
        className="py-20 bg-background text-center"
        variants={fadeInUp}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: '-100px' }}
      >
        <div className="container mx-auto px-4">
          <motion.div className="max-w-3xl mx-auto" variants={fadeInUp}>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto mb-8" />
            <p className="text-xl text-muted-foreground leading-relaxed">
              Through perseverance, faith, and Divine Providence, the HHCJ has
              not only recovered but thrived in Ghana, continuing its mission of
              education, healthcare, and spiritual care for the communities it
              serves.
            </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
