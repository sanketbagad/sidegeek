"use client"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Rocket, Vote, Trophy, ArrowRight, Zap, Users, BarChart } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Rocket className="h-6 w-6 text-purple-400" />,
      title: "Submit Your Project",
      description:
        "Share your creation with our community of makers, creators, and industry professionals for just $5 per submission.",
      color: "from-purple-500/20 to-purple-600/20",
      textColor: "text-purple-400",
    },
    {
      icon: <Vote className="h-6 w-6 text-blue-400" />,
      title: "Get Votes & Feedback",
      description: "Receive detailed insights and upvotes from the SideGeek community to refine and improve your work.",
      color: "from-blue-500/20 to-blue-600/20",
      textColor: "text-blue-400",
    },
    {
      icon: <Trophy className="h-6 w-6 text-yellow-400" />,
      title: "Win Exciting Prizes",
      description:
        "Top projects win weekly and monthly prizes up to $1000, plus exclusive opportunities with our partners.",
      color: "from-yellow-500/20 to-yellow-600/20",
      textColor: "text-yellow-400",
    },
    {
      icon: <Zap className="h-6 w-6 text-green-400" />,
      title: "Boost Your Visibility",
      description:
        "Get featured on our homepage and social media channels, reaching thousands of potential users and investors.",
      color: "from-green-500/20 to-green-600/20",
      textColor: "text-green-400",
    },
    {
      icon: <Users className="h-6 w-6 text-pink-400" />,
      title: "Join Our Community",
      description: "Connect with like-minded creators, collaborate on projects, and build your professional network.",
      color: "from-pink-500/20 to-pink-600/20",
      textColor: "text-pink-400",
    },
    {
      icon: <BarChart className="h-6 w-6 text-orange-400" />,
      title: "Track Your Progress",
      description: "Monitor your project's performance with detailed analytics and insights on user engagement.",
      color: "from-orange-500/20 to-orange-600/20",
      textColor: "text-orange-400",
    },
  ]

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="mb-4 bg-white/10 text-white hover:bg-white/20 border-0 backdrop-blur-sm">
              How It Works
            </Badge>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Launch your project in three simple steps
          </motion.h2>

          <motion.p
            className="text-zinc-400 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SideGeek streamlines the process of showcasing your work, gathering valuable feedback, and competing for
            substantial prizes.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i + 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-zinc-900/90 to-zinc-900/70 backdrop-blur-sm border border-white/10 transform transition-all duration-300 group-hover:border-white/20"></div>

              <div className="relative p-8">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6`}
                >
                  {feature.icon}
                </div>

                <h3 className={`text-xl font-bold mb-3 ${feature.textColor}`}>{feature.title}</h3>
                <p className="text-zinc-400 mb-6">{feature.description}</p>

                <div className="flex items-center text-sm font-medium text-zinc-300 group-hover:text-white transition-colors">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
