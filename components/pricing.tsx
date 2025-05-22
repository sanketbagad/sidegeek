"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Trophy, Star, Zap } from "lucide-react"

export function Pricing() {
  const plans = [
    {
      title: "Weekly Winner",
      price: "$500",
      description: "The top voted project each week wins cash and premium software licenses.",
      features: [
        "$500 cash prize",
        "Featured on homepage for 7 days",
        "Premium software licenses ($2,000 value)",
        "Social media promotion",
        "Feedback from industry experts",
      ],
      icon: <Trophy className="h-6 w-6 text-yellow-400" />,
      color: "from-yellow-500/20 to-yellow-600/20",
      textColor: "text-yellow-400",
      featured: false,
    },
    {
      title: "Monthly Champion",
      price: "$1,000",
      description: "Monthly winners receive cash, mentorship sessions, and featured marketing exposure.",
      features: [
        "$1,000 cash prize",
        "Featured on homepage for 30 days",
        "1-on-1 mentorship with industry leaders",
        "Premium marketing package",
        "Investor introduction opportunities",
        "Exclusive networking events access",
      ],
      icon: <Star className="h-6 w-6 text-purple-400" />,
      color: "from-purple-500/20 to-purple-600/20",
      textColor: "text-purple-400",
      featured: true,
    },
    {
      title: "Community Choice",
      price: "Exposure",
      description: "Community favorites get featured on our homepage and partner websites.",
      features: [
        "Featured in community showcase",
        "Partner website promotion",
        "Social media spotlight",
        "Networking opportunities",
        "Community feedback compilation",
      ],
      icon: <Zap className="h-6 w-6 text-blue-400" />,
      color: "from-blue-500/20 to-blue-600/20",
      textColor: "text-blue-400",
      featured: false,
    },
  ]

  return (
    <section id="prizes" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none"></div>

      {/* Gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20 border-0 backdrop-blur-sm">
              Exciting Rewards
            </Badge>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Win amazing prizes every week
          </motion.h2>

          <motion.p
            className="text-zinc-400 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Top projects get recognized with substantial cash prizes, mentorship opportunities, and valuable exposure
            through our network of industry partners.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className={`relative ${plan.featured ? "md:-mt-8 md:mb-8" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
              whileHover={{ y: -5 }}
            >
              {plan.featured && (
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-t-3xl"></div>
              )}

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-zinc-900/90 to-zinc-900/70 backdrop-blur-sm border border-white/10 transform transition-all duration-300 hover:border-white/20"></div>

              {plan.featured && (
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0 px-3 py-1">
                    Most Popular
                  </Badge>
                </div>
              )}

              <div className={`relative p-8 ${plan.featured ? "pt-10" : ""}`}>
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-6`}
                >
                  {plan.icon}
                </div>

                <h3 className={`text-xl font-bold mb-2 ${plan.textColor}`}>{plan.title}</h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-3xl font-bold text-white">{plan.price}</span>
                  {plan.title === "Weekly Winner" && <span className="ml-2 text-zinc-400">per week</span>}
                  {plan.title === "Monthly Champion" && <span className="ml-2 text-zinc-400">per month</span>}
                </div>

                <p className="text-zinc-400 mb-6">{plan.description}</p>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="flex items-start">
                      <Check className="h-5 w-5 text-green-400 mr-2 shrink-0" />
                      <span className="text-zinc-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full rounded-xl ${
                    plan.featured
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      : "bg-white/10 hover:bg-white/20 text-white"
                  }`}
                  size="lg"
                >
                  Submit Your Project
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-zinc-400">
            All prizes are awarded based on community votes and expert panel reviews.
            <br />
            <a href="#" className="text-white underline hover:text-zinc-300">
              View complete rules and eligibility
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
