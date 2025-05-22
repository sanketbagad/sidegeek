"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Star } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative">
        <motion.div
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-zinc-900/70 backdrop-blur-sm"></div>
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]"></div>

          {/* Floating stars */}
          <div className="absolute top-6 left-6 text-yellow-400">
            <Star className="h-6 w-6 fill-yellow-400" />
          </div>
          <div className="absolute bottom-8 right-8 text-yellow-400">
            <Star className="h-4 w-4 fill-yellow-400" />
          </div>
          <div className="absolute top-1/2 right-12 text-yellow-400">
            <Star className="h-5 w-5 fill-yellow-400" />
          </div>

          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="grid gap-8 md:grid-cols-2 items-center">
              <div className="space-y-6">
                <Badge className="bg-white/10 text-white hover:bg-white/20 border-0 backdrop-blur-sm">
                  Limited Time Offer
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                  Ready to launch your next big idea?
                </h2>
                <p className="text-zinc-300 text-lg">
                  Join SideGeek today for just $5 per submission and become part of a thriving community of creators.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["First 100 users", "Premium support", "No hidden fees"].map((item, i) => (
                    <Badge key={i} variant="outline" className="bg-white/5 border-zinc-800 backdrop-blur-sm">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="flex flex-col space-y-4 md:items-end">
                <motion.div whileHover={{ scale: 1.03 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
                  <Button
                    size="lg"
                    className="w-full md:w-auto bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl px-8 py-6 text-lg"
                  >
                    Get Started Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>
                <p className="text-sm text-zinc-400">No credit card required</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
