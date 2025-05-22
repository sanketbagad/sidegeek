"use client"
import { useState } from "react"
import type React from "react"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check, X, Sparkles, ArrowUpRight, Star } from "lucide-react"
import { MotivationalQuote } from "@/components/motivational-quote"

export function Hero() {
  const [username, setUsername] = useState("")
  const [isUsernameAvailable, setIsUsernameAvailable] = useState<boolean | null>(null)
  const [isChecking, setIsChecking] = useState(false)

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim().toLowerCase()
    setUsername(value)

    if (value.length > 0) {
      setIsChecking(true)
      // Simulate checking username availability
      setTimeout(() => {
        setIsUsernameAvailable(value.length > 2 && !["admin", "test", "user"].includes(value))
        setIsChecking(false)
      }, 500)
    } else {
      setIsUsernameAvailable(null)
      setIsChecking(false)
    }
  }

  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="relative mb-4 inline-block">
                {/* Animated gradient border */}
                <div className="absolute -inset-[2px] rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-yellow-500 opacity-70 blur-[1px] animate-border-flow"></div>

                {/* Badge with stars */}
                <Badge className="relative bg-zinc-950/80 text-white hover:bg-zinc-900/80 border-0 backdrop-blur-sm px-4 py-2 rounded-full">
                  <span className="absolute -left-2 -top-1 text-yellow-400">
                    <Star className="h-3 w-3 fill-yellow-400" />
                  </span>
                  <span className="absolute -right-1 -bottom-1 text-yellow-400">
                    <Star className="h-2 w-2 fill-yellow-400" />
                  </span>
                  Launch Your Projects
                </Badge>
              </div>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                Share. Vote. Win.
              </span>
              <motion.span
                className="inline-block ml-2"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.8, duration: 0.5, type: "spring" }}
              >
                <Sparkles className="h-8 w-8 text-yellow-400" />
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-zinc-400 text-lg md:text-xl max-w-3xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              The premier platform for innovators and creators to showcase their work, receive valuable feedback, and
              win substantial rewards from our growing community of industry professionals.
            </motion.p>
          </div>

          <motion.div
            className="relative z-10 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Floating stars */}
            <div className="absolute -top-12 -left-8 text-yellow-400">
              <Star className="h-6 w-6 fill-yellow-400" />
            </div>
            <div className="absolute top-8 -right-10 text-yellow-400">
              <Star className="h-4 w-4 fill-yellow-400" />
            </div>
            <div className="absolute -bottom-4 left-1/4 text-yellow-400">
              <Star className="h-5 w-5 fill-yellow-400" />
            </div>

            {/* Sexy profile claim section - no card */}
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-0 rounded-2xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 backdrop-blur-sm border border-white/10 md:border-0 md:bg-transparent">
              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl blur-xl opacity-50 -z-10 hidden md:block"></div>

              <h3 className="text-lg font-bold text-white whitespace-nowrap">Claim your profile:</h3>

              <div className="flex flex-1 items-center w-full md:w-auto">
                <div className="text-zinc-400 mr-1 text-sm md:text-base">SideGeek.io/</div>
                <div className="relative flex-1">
                  <Input
                    type="text"
                    placeholder="yourusername"
                    className="bg-zinc-900/50 border-zinc-800 focus:border-purple-500 text-white placeholder:text-zinc-500 pr-10 h-10 rounded-xl transition-all duration-300 focus:ring-2 focus:ring-purple-500/20"
                    value={username}
                    onChange={handleUsernameChange}
                  />
                  {isChecking && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <div className="h-4 w-4 rounded-full border-2 border-t-transparent border-zinc-400 animate-spin"></div>
                    </div>
                  )}
                  {isUsernameAvailable === true && !isChecking && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-green-400">
                      <Check className="h-4 w-4" />
                    </div>
                  )}
                  {isUsernameAvailable === false && !isChecking && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-400">
                      <X className="h-4 w-4" />
                    </div>
                  )}
                </div>
              </div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="w-full md:w-auto">
                <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white h-10 px-6 rounded-xl font-medium whitespace-nowrap w-full md:w-auto">
                  Claim Now
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </motion.div>
            </div>

            <div className="mt-2 flex flex-col md:flex-row items-center justify-between">
              <p className="text-xs text-zinc-400">
                {isUsernameAvailable === true && username && "Username is available!"}
                {isUsernameAvailable === false && username && "Username is already taken."}
                {(isUsernameAvailable === null || !username) && "Secure your personal URL before someone else does."}
              </p>

              <div className="flex items-center gap-2 mt-2 md:mt-0">
                <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center text-sm border border-white/10">
                  <span className="font-bold text-white">$5</span>
                  <span className="ml-1 text-zinc-400">per submission</span>
                </div>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center">
              {/* Motivational Quote - now above the button */}
              <MotivationalQuote className="mb-6 max-w-lg" />

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="relative">
                {/* Stars around the button */}
                <div className="absolute -top-4 -left-4 text-yellow-400">
                  <Star className="h-4 w-4 fill-yellow-400" />
                </div>
                <div className="absolute -bottom-3 -right-3 text-yellow-400">
                  <Star className="h-3 w-3 fill-yellow-400" />
                </div>

                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl px-8 py-6 text-lg"
                >
                  Submit Your Project
                  <ArrowUpRight className="ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </div>

            <div className="mt-24 text-center">
              <motion.p
                className="text-zinc-500 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Trusted by creators from
              </motion.p>
              <div className="flex flex-wrap justify-center gap-8 opacity-70">
                {["Google", "Microsoft", "Adobe", "Figma", "Shopify"].map((company, i) => (
                  <motion.span
                    key={company}
                    className="text-zinc-400"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 + i * 0.1 }}
                  >
                    {company}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
