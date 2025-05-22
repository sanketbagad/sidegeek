"use client"
import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"

interface MotivationalQuoteProps {
  quote?: string
  className?: string
}

export function MotivationalQuote({ quote, className = "" }: MotivationalQuoteProps) {
  const quotes = [
    "Great things start with one small step.",
    "Your next project could change everything.",
    "Innovation distinguishes between a leader and a follower.",
    "The best way to predict the future is to create it.",
    "Dreams don't work unless you do.",
    "Every masterpiece started as a rough draft.",
    "Launch now, perfect later.",
    "The journey of a thousand miles begins with a single click.",
  ]

  const displayQuote = quote || quotes[Math.floor(Math.random() * quotes.length)]

  return (
    <motion.div
      className={`relative text-center ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative px-8 py-2">
        {/* Quote mark - top left */}
        <div className="absolute -top-2 left-0 text-purple-400/40">
          <Quote className="h-6 w-6" />
        </div>

        {/* Quote mark - bottom right (rotated) */}
        <div className="absolute -bottom-2 right-0 text-blue-400/40 transform rotate-180">
          <Quote className="h-6 w-6" />
        </div>

        <p className="text-base md:text-lg italic font-medium">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-white to-blue-300">
            {displayQuote}
          </span>
        </p>
      </div>

      {/* Decorative star */}
      <div className="flex items-center justify-center mt-1">
        <div className="h-px w-8 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent"></div>
        <Star className="h-3 w-3 mx-1 text-yellow-400 fill-yellow-400" />
        <div className="h-px w-8 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent"></div>
      </div>
    </motion.div>
  )
}
