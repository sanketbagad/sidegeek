"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { InteractiveSteps } from "@/components/interactive-steps"
import { Pricing } from "@/components/pricing"
import { Testimonials } from "@/components/testimonials"
import { CtaSection } from "@/components/cta-section"
import { MinimalFooter } from "@/components/minimal-footer"
import { FloatingHelp } from "@/components/floating-help"

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-zinc-950 to-black text-white">
      {/* Header */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Interactive Steps Section */}
        <InteractiveSteps />

        {/* Pricing Section */}
        <Pricing />

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <CtaSection />

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gradient-to-b from-black to-zinc-950">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Badge className="bg-white/10 text-white hover:bg-white/20 border-0 backdrop-blur-sm">FAQ</Badge>
              <motion.h2
                className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                Frequently asked questions
              </motion.h2>
              <motion.p
                className="max-w-[700px] text-zinc-400 md:text-xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                Everything you need to know about SideGeek and how it works.
              </motion.p>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-4">
              {[
                {
                  question: "How do I submit my project to SideGeek?",
                  answer:
                    "Submitting your project is easy! Simply create an account, click on 'Submit Project', pay the $5 submission fee, and follow our guided process to share your work with our community of creators and industry professionals.",
                },
                {
                  question: "Is it free to join SideGeek?",
                  answer:
                    "Yes, creating an account on SideGeek is completely free. We only charge a small $5 fee per project submission to ensure quality content and fund our prize pools. This affordable fee helps maintain a high standard while keeping the platform accessible.",
                },
                {
                  question: "How are winners selected?",
                  answer:
                    "Winners are selected through a combination of community votes (70% weight) and evaluation by our panel of industry judges (30% weight). This balanced approach ensures that projects are recognized both for their popularity and their technical/creative merit.",
                },
                {
                  question: "What types of projects can I submit?",
                  answer:
                    "SideGeek welcomes a wide variety of projects including web applications, mobile apps, design work, hardware projects, games, AI tools, and more. Our platform is designed to showcase innovation across all digital and physical domains.",
                },
                {
                  question: "How often are prizes awarded?",
                  answer:
                    "We award prizes on a weekly and monthly basis. Weekly winners are announced every Monday, with $500 cash prizes plus software licenses. Our larger monthly prizes of $1,000 plus mentorship opportunities are awarded at the end of each month.",
                },
                {
                  question: "Can I submit multiple projects?",
                  answer:
                    "You can submit as many projects as you like, with each submission requiring the $5 fee. Many of our most successful creators regularly submit multiple projects to maximize their exposure and chances of winning our substantial prizes.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.05 * i + 0.2 }}
                >
                  <Card className="overflow-hidden shadow-lg border-white/10 bg-gradient-to-r from-zinc-900/90 to-zinc-900/70 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <h3 className="text-lg font-semibold text-white">{item.question}</h3>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="rounded-full h-8 w-8 text-zinc-400 hover:text-white"
                        >
                          <ChevronRight className="h-5 w-5" />
                        </Button>
                      </div>
                      <p className="mt-2 text-zinc-300">{item.answer}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-12 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <p className="text-zinc-400">
                Still have questions?{" "}
                <Link href="#" className="text-white hover:underline">
                  Contact our support team
                </Link>
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <MinimalFooter />

      {/* Floating Help Widget */}
      <FloatingHelp />
    </div>
  )
}
