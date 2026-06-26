'use client';

import { motion, Variants } from 'framer-motion';
import {
  Globe,
  Radiation as Graduation,
  Heart,
  Stethoscope,
  Users,
} from 'lucide-react';
import Image from 'next/image';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
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

export function MotherFoundressLifeClient() {
  return (
    <motion.div
      className="space-y-0"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
    >
      {/* Birth and Parentage Section */}
      <section className="py-20 bg-linear-to-br from-background via-background to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-2">
                Birth and Parentage
              </h2>
              <div className="h-1 w-24 bg-linear-to-r from-primary to-primary/50 rounded-full"></div>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Born into a deeply faithful family, Mary Charles Magdalen Walker
                was shaped by an environment of prayer, charity, and devotion to
                spiritual service. Her parents instilled in her the values of
                compassion, justice, and unwavering commitment to serving those
                in need—principles that would define her entire life mission.
              </p>
              <p className="text-lg">
                The Central Leadership of the Congregation is led by an elected
                Superior General and Leadership Team. The Ministry of the
                Leadership Team relies solely on the inspiration of the Holy
                Spirit and the example of Jesus, the servant leader for
                guidance. They serve to promote love, peace and justice.
              </p>
              <p className="text-lg">
                Its international and inter-tribal nature continues as members,
                who are drawn from all parts of Nigeria, Cameroon, Togo, Ghana,
                Sierra Leone, England and Kenya. Presently, the Congregation has
                houses in Nigeria, Ghana, Cameroon, Togo, Sierra Leone, Kenya,
                Italy, Germany, London, the United States of America, Canada and
                Grenada.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Religious Vocation and Publications Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={itemVariants}
          >
            {/* Image */}
            <motion.div
              className="order-2 lg:order-1 flex justify-center"
              variants={imageVariants}
            >
              <div className="w-full flex justify-center flex-col items-center">
                <div className="relative  h-[300px] text-center w-[300px] rounded-xl overflow-hidden shadow-2xl border border-primary/20">
                  <Image
                    src="/mother.jpeg"
                    alt="Mother Mary Charles Magdalen Walker"
                    fill
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-primary/30 to-transparent"></div>
                </div>
                <p className="text-lg text-center font-semibold text-foreground mb-3">
                  Mother Mary Charles Magdalen Walker, RSC (Servant of God)
                </p>
                <p className="text-center text-sm">
                  FOUNDRESS OF THE CONGREGATION OF THE HANDMAIDS OF THE HOLY
                  CHILD JESUS
                </p>
              </div>
            </motion.div>

            {/* Text */}
            <motion.div className="order-1 lg:order-2" variants={itemVariants}>
              <div className="mb-6">
                <h2 className="text-3xl font-bold text-foreground mb-2">
                  Religious Vocation and Publications
                </h2>
                <div className="h-1 w-20 bg-linear-to-r from-primary to-primary/50 rounded-full"></div>
              </div>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  She was admitted into the Congregation of the Religious
                  Sisters of Charity in Ireland in 1901 and in 1904, she made
                  her first religious profession of vows. She was later
                  appointed teacher and head-teacher in many schools in Ireland
                  for twenty years.
                </p>
                <p>
                  During this time, she was opportune to author two books:{' '}
                  <em>Caritas Christi Urget Nos</em> (the Charity of Christ
                  Urges Us) and the Catechism Notes. These books were used for
                  many years in schools in Ireland, England and Australia. The
                  books also helped her in education, formation, evangelisation
                  and Christianisation in Southern Nigeria.
                </p>
                <p>
                  Besides, she also published many articles in various European
                  Journals. One of her articles worthy of note is
                  &apos;Education of Girls in Southern Nigeria&apos;, published
                  in the International Review of the Missions.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Appeal to Become Missionary Section */}
      <section className="py-20 bg-linear-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-4xl mx-auto" variants={itemVariants}>
            <div className="mb-8">
              <h2 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
                <Globe className="w-8 h-8 text-primary" />
                Appeal to Become a Missionary in Africa
              </h2>
              <div className="h-1 w-24 bg-linear-to-br from-primary to-primary/50 rounded-full"></div>
            </div>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg border-l-4 border-primary pl-6 italic bg-primary/5 py-4 rounded">
                &apos;If sisters fail to render assistance, the evangelization
                of women and children would forever remain unattended to, as
                priests were unable to carry out this ministry.&apos; - Bishop
                Joseph Shanahan CSSp.
              </p>
              <p className="text-lg">
                In 1919, following the withdrawal of the Sisters of St. Joseph
                of Cluny, a French Religious Institute, from the Vicariate of
                Southern Nigeria, Bishop Joseph Shanahan CSSp. made a special
                appeal to the Religious Sisters of Charity, Dublin, for Sisters
                to serve in this vital mission.
              </p>
              <p className="text-lg">
                This appeal lingered on with much discernment for many years.
                Eventually, Mother Mary Charles Magdalen Walker had to write to
                Pope Pius XI, requesting for permission to work among the blacks
                of the Vicariate of the Southern Nigeria. This request was
                granted on the 11th of June, 1923.
              </p>
              <p className="text-lg">
                Consequently, she left for the missions in Nigeria. She arrived
                Calabar on the 3rd of October, 1923. On arrival, she was given a
                warm reception at the beach by the people of Calabar despite the
                torrents of rain.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Missionary Activities Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div className="max-w-5xl mx-auto" variants={itemVariants}>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                Missionary Activities and Achievements
              </h2>
              <div className="h-1 w-24 bg-linear-to-br from-primary to-primary/50 rounded-full"></div>
            </div>

            <div className="space-y-6 mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mother Mary Charles Walker&apos;s first assignment was to teach
                in St Joseph Girl&apos;s School under Miss M. Martin who was
                then in charge of administration in the school. Sister Magdalen
                Walker (as she was known) took over the management of St. Joseph
                Girl&apos;s School at Calabar in 1924, which at the time was at
                the point of being closed down by the Government as a result of
                lack of teachers and poor management.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With remarkable vision and determination, she quickly adopted
                the student-teacher system to meet up with the challenge of
                insufficient teachers and also introduced the Montessori Method
                of education. These innovations led to the achievement of high
                standards. This prompted Bishop Joseph Shanahan, CSSp on the
                19th November, 1927 to write a congratulatory and appreciation
                letter to her.
              </p>
            </div>
            <div className="mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-3">
                <Heart className="w-8 h-8 text-primary" />
                The Montessori Method
              </h2>
              <span>Training of Girls and Women’s Literacy</span>
              <div className="h-1 w-24 bg-linear-to-br from-primary to-primary/50 rounded-full"></div>
            </div>

            <div className="space-y-6 mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mother Mary Charles Magdalen Walker, our Foundress operated
                Montessori Method in St. Joseph Girls’ School, Calabar and
                clearly stated that Montessori Method was different from
                Kindergarten since it develops different qualities in children,
                trains the whole child through learning skills. She organised
                the school so well with Montessori Method that in 1926, it was
                classified A+ by Government Inspectors.About the training of
                girls, Mother said “I want to take hold of great multitude of
                our girls, and ground them in the elements of Christianity and
                civilized womanhood” (MCMW) as found in her article: “Education
                of Girls in Southern Nigeria.” Here, she explained the need for
                training in self-control, earnestness, reliability and
                responsibility. She said in another place “the Native girl is
                capable of excelling in every virtue, only time, patience and
                opportunity are required.”
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                She enlarged the curriculum of her schools from the three “R”s
                to include Domestic Science, Home Management, Needle Work and
                Crafts for women with the aim to provide a comprehensive
                education with firm character formation. Mother planned and
                established vocational school for girls who had passed school
                age and those preparing for marriage. Their curriculum included
                Horticulture, Domestic Science, Crafts, Needle Work and Raffia
                Work. Mother made literacy available to women not only in
                Calabar but also in other towns and villages of the Vicariate.
                As such, she established convent schools at Asong, Ndon Ebom,
                Eman Uruan, Ikot Ekpenyong, Ikot Ansa, Ifuho, Essene and Edem
                Ekpat.
              </p>
            </div>

            {/* Activities Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* Training of Teachers */}
              <motion.div
                className="p-6 bg-linear-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl hover:border-primary/50 transition-colors duration-300"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Graduation className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Training of Teachers
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      “Every Teacher is a Catechist and Apostle” (MCMW). One of
                      the greatest challenges that faced the Vicariate of
                      Southern Nigeria was lack of female teachers. Mother
                      opened a teacher training college in Calabar to train
                      women to become qualified teachers. Hence, she wrote in
                      1929, “there is a large school in Calabar which will be a
                      training school for teachers of the whole Efik and Ibibio
                      land.”
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Pastoral Work */}
              <motion.div
                className="p-6 bg-linear-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl hover:border-primary/50 transition-colors duration-300"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Pastoral Work
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Through pastoral works and teaching of catechism, Mother
                      was able to reach out to evangelise and bring Christianity
                      to women, children and others who came in contact with
                      her.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Social Work */}
              <motion.div
                className="p-6 bg-linear-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl hover:border-primary/50 transition-colors duration-300"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Social Work
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mother arrived at the time when twins and their mothers
                      were ostracised from their communities. Through her love
                      and compassion, she accepted them as children of God and
                      provided homes for them.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Medical Services */}
              <motion.div
                className="p-6 bg-linear-to-br from-primary/10 to-transparent border border-primary/20 rounded-xl hover:border-primary/50 transition-colors duration-300"
                variants={itemVariants}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <Stethoscope className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      Medical Services
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Mother arrived at the time when twins and their mothers
                      were ostracised from their communities. Through her love
                      and compassion, she accepted them as children of God and
                      provided homes for them.
                    </p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Legacy Impact Section */}
      <section className="py-20 bg-linear-to-br from-primary/10 via-background to-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Mother Mary Charles Magdalen Walker – the Foundress of the
              Congregation of the Handmaids of the Holy Child Jesus (15th
              January, 1931)
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Mother Mary Charles Magdalen Walker, RSC had a unique grace to
              inspire and nurture religious vocation. This was manifested in her
              founding of the first native sisterhood in Nigeria with four of
              her girls. Thus, on 15th January 1931, after five years of
              aspirancy and formation, the first indigenous Congregation in West
              Africa named Handmaids of the Holy Child Jesus was founded by
              Mother Mary Charles Magdalen Walker, RSC.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              The Congregation is international and missionary in character. The
              congregation presently has the numerical strength of over nine
              hundred Sisters. These carry out the same apostolates as
              introduced to them by Mother Mary Charles Magdalen Walker, the
              Foundress. in different countries which include, Nigeria,
              Cameroon, Ghana, Kenya, Sierra Leone, Togo, USA, Canada, England,
              Germany, Italy and Grenada.
            </p>
          </motion.div>
        </div>
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            variants={itemVariants}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              The Last Journey
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              By God’s special grace, Mother worked in Southern Nigeria for ten
              uninterrupted years. Later, providence took her to Zambia where
              she continued her work of evangelization. She died on the 27th
              February, 1966. Mother had wished to live, work and die in
              Nigeria. Hence her daughters, the Handmaids of the Holy Child
              Jesus went to Zambia in 1981 and exhumed her remains. She was
              thereby laid to rest at Mother House of the Handmaids of the Holy
              Child Jesus in No. 130 Calabar Road, Calabar, Cross River State
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
