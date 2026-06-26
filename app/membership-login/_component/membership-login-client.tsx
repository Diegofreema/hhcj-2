"use client"


import {motion} from "framer-motion"
import {Lock} from "lucide-react"
import {PageHero} from "@/features/shared/components/page-hero";
import {MemberLoginForm} from "@/app/membership-login/_component/member-login-form";

export default function MembershipLoginPageClient() {
    return (
        <div className="min-h-screen bg-background">

            <PageHero title="Membership Login" description="Access your member account"/>

            <section className="py-20 bg-background">
                <div className="container mx-auto px-4">
                    <div className="max-w-md mx-auto">
                        <motion.div
                            initial={{opacity: 0, y: 20}}
                            whileInView={{opacity: 1, y: 0}}
                            viewport={{once: true}}
                            transition={{duration: 0.6}}
                            className="p-8 bg-muted/50 border-futuristic rounded-lg"
                        >
                            <div className="flex items-center justify-center mb-6">
                                <div className="p-3 bg-primary/10 rounded-lg">
                                    <Lock className="text-primary" size={32}/>
                                </div>
                            </div>

                            <h2 className="text-2xl font-bold text-foreground text-center mb-6">Member Login</h2>

                            <MemberLoginForm/>


                        </motion.div>

                        <motion.div
                            initial={{opacity: 0}}
                            whileInView={{opacity: 1}}
                            viewport={{once: true}}
                            transition={{delay: 0.2, duration: 0.6}}
                            className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg text-center"
                        >
                            <p className="text-sm text-muted-foreground">
                                For membership inquiries, please contact us at{" "}
                                <a href="mailto:members@hhcj.org"
                                   className="text-primary hover:text-primary-dark font-semibold">
                                    members@hhcj.org
                                </a>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

        </div>
    )
}
