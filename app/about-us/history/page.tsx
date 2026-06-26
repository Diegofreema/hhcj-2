import {Metadata} from "next";
import {PageHero} from "@/features/shared/components/page-hero";

export const metadata: Metadata = {
    title: "History of HHCJ - HHCJ Foundation",
    description: "The rich history and heritage of the HHCJ Foundation",
}

export default function HistoryPage() {
    return (
        <div className="min-h-screen bg-background">


            <PageHero title="History of HHCJ" description="Our journey of faith and service"/>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto space-y-8">
                        <div className={'space-y-4'}>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Our Founding</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The Congregation of the Handmaids of the Holy Child Jesus (HHCJ) was founded by Sister
                                Mary Charles Magdalen Walker, an Irish Sister of Charity (now Religious Sisters of
                                Charity), who arrived in Nigeria in 1923 at the invitation of Bishop Joseph Shanahan,
                                CSSp. Her mission was to assist in the work of evangelization, particularly in the
                                education of women. Mother Mary Charles Magdalen Walker embodied the spirit of being
                                “all things to all people” as she took on multiple roles—educator, medical worker,
                                evangelist, and social worker—to uplift the communities she served.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                The desire to establish an indigenous religious congregation became a reality when four
                                young women, whom she taught at St. Joseph’s Convent School in Calabar, expressed a
                                desire to follow in her footsteps. On January 15, 1931, these four women—Lucy Williams
                                (Sister St. John from Cameroon), Kathleen Bassey (Sister Mary Ignatia from Calabar),
                                Agnes Ugoaru (Sister Mary Aloysia from Umuahia), and Christiana Waturuocha (Sister Mary
                                Gertrude from Mbaise)—were received as postulants, and the congregation was named the
                                Handmaids of the Holy Child Jesus.
                            </p>
                        </div>

                        <div className={'space-y-4'}>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Growth and Expansion</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                The Congregation’s cradle is in Calabar, Nigeria, where it nurtured and sustained its
                                international and inter-tribal characteristics, as reflected by its founding members.
                                The Congregation was canonically erected in April 1937 by Bishop James Moynah, SPS, the
                                Prefect of Calabar Prefecture. The Society of the Holy Child Jesus guided the formation
                                and growth of the young congregation. The first religious profession of vows took place
                                on April 21, 1940.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                The Congregation achieved autonomy on December 28, 1959, with Mother Mary Gertrude
                                Waturuocha, one of the founding members, serving as the first Superior General. On
                                February 29, 1971, Pope Paul VI granted the Congregation “Decretum Laudis” (Decree of
                                Praise), elevating it to a Congregation of Pontifical Right. Today, HHCJ has members
                                from Nigeria, Cameroon, Togo, Ghana, Sierra Leone, England, and Kenya, and operates
                                houses in Nigeria, Ghana, Cameroon, Togo, Sierra Leone, Kenya, Italy, Germany, the
                                United Kingdom, the United States, Canada, Grenada, and Tanzania.
                            </p>
                            <p className="text-muted-foreground leading-relaxed">
                                In response to its growth in membership and geographical reach, the 7th General Chapter
                                of the Congregation (March 8-26, 1996) mandated the division into Provinces for
                                effective administration and apostolic ministry. Consequently, four Provinces were
                                created: Central Eastern Province, Ghana Province, North Western Province, and South
                                Eastern Province. At the 9th General Chapter (March 1-18, 2008), the Kenya Region was
                                also established.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl font-bold text-foreground mb-4">Who can become a handmaid?</h2>
                            <p className="text-muted-foreground leading-relaxed">
                                An unmarried baptized young woman of good character, with a strong desire to follow
                                Christ’s way of life in union with Mary, the first Handmaid. She should have good
                                health, average intelligence, sound judgment, and a good sense of humor. She must be
                                able to live peacefully with all kinds of people and participate in community life with
                                joy and readiness to forgive.
                            </p>
                        </div>
                        <div>
                            <strong>Qualification:</strong>
                            <ul className={'list-disc list-inside'}>
                                <li>
                                    Minimum Qualification: Five credits in WASSCE/GCE/SSCE/NABTEB
                                </li>
                                <li>
                                    Any good professional training
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
