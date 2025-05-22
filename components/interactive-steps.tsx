"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Rocket, Vote, Trophy, ArrowRight, Check, Pause, Play } from "lucide-react"

export function InteractiveSteps() {
  const [activeStep, setActiveStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [isHovering, setIsHovering] = useState(false)
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null)

  const steps = [
    {
      number: 1,
      title: "Submit Your Project",
      description:
        "Share your creation with our community of makers, creators, and industry professionals for just $5 per submission.",
      icon: <Rocket className="h-8 w-8 text-white" />,
      color: "from-purple-600 to-purple-500",
      gradientBg: "from-purple-600/20 to-purple-500/5",
      details: [
        "Fill out a simple submission form",
        "Upload screenshots or demos",
        "Set your project goals",
        "Pay the $5 submission fee",
      ],
    },
    {
      number: 2,
      title: "Get Votes & Feedback",
      description: "Receive detailed insights and upvotes from the SideGeek community to refine and improve your work.",
      icon: <Vote className="h-8 w-8 text-white" />,
      color: "from-blue-600 to-blue-500",
      gradientBg: "from-blue-600/20 to-blue-500/5",
      details: [
        "Engage with community comments",
        "Track your upvote count",
        "Receive expert feedback",
        "Implement suggested improvements",
      ],
    },
    {
      number: 3,
      title: "Win Exciting Prizes",
      description:
        "Top projects win weekly and monthly prizes up to $1000, plus exclusive opportunities with our partners.",
      icon: <Trophy className="h-8 w-8 text-white" />,
      color: "from-yellow-500 to-yellow-400",
      gradientBg: "from-yellow-500/20 to-yellow-400/5",
      details: [
        "Weekly winners announced every Monday",
        "Monthly champions featured prominently",
        "Cash prizes up to $1000",
        "Networking opportunities with investors",
      ],
    },
  ]

  // Auto-play functionality
  useEffect(() => {
    const startAutoPlay = () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current)
      }

      autoPlayTimerRef.current = setTimeout(() => {
        if (isAutoPlaying && !isHovering) {
          setActiveStep((prev) => (prev + 1) % steps.length)
        }
      }, 5000) // Change step every 5 seconds
    }

    if (isAutoPlaying && !isHovering) {
      startAutoPlay()
    }

    return () => {
      if (autoPlayTimerRef.current) {
        clearTimeout(autoPlayTimerRef.current)
      }
    }
  }, [activeStep, isAutoPlaying, isHovering, steps.length])

  // Animation variants
  const cardVariants = {
    initial: {
      opacity: 0,
      y: 20,
      rotateX: -5,
      scale: 0.95,
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      rotateX: 5,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  const detailsVariants = {
    initial: { opacity: 0, x: -10 },
    animate: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.4,
      },
    }),
    exit: { opacity: 0, x: 10 },
  }

  // Progress calculation
  const progressPercentage = ((activeStep + 1) / steps.length) * 100

  return (
    <section
      id="how-it-works"
      className="py-24 relative overflow-hidden"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none"></div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-purple-500/50 animate-float-slow"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-blue-500/50 animate-float-medium"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 rounded-full bg-yellow-500/50 animate-float-fast"></div>

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

        {/* Step indicators with progress bar */}
        <div className="flex justify-center mb-12 relative">
          {/* Progress bar */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-1 bg-zinc-800 rounded-full"
            style={{ width: `${Math.max(16, steps.length * 80)}px` }}
          >
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-purple-600 via-blue-600 to-yellow-500"
              initial={{ width: 0 }}
              animate={{ width: `${progressPercentage}%` }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </div>

          <div className="flex items-center relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                <motion.button
                  className={`relative rounded-full flex items-center justify-center w-12 h-12 text-lg font-bold ${
                    activeStep >= index ? `bg-gradient-to-r ${step.color} text-white` : "bg-zinc-800 text-zinc-400"
                  }`}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  {activeStep > index ? <Check className="h-6 w-6" /> : step.number}

                  {/* Pulse effect for active step */}
                  {activeStep === index && (
                    <motion.span
                      className="absolute inset-0 rounded-full bg-white"
                      initial={{ opacity: 0.3, scale: 1 }}
                      animate={{ opacity: 0, scale: 1.5 }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                    />
                  )}
                </motion.button>

                {index < steps.length - 1 && (
                  <div
                    className={`w-16 h-1 mx-2 ${
                      activeStep > index ? `bg-gradient-to-r ${steps[index + 1].color}` : "bg-zinc-800"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Auto-play controls */}
        <div className="flex justify-center mb-8">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10"
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="h-4 w-4 mr-2" /> Pause
              </>
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" /> Auto-play
              </>
            )}
          </Button>
        </div>

        {/* Active step content with enhanced animations */}
        <div className="max-w-4xl mx-auto perspective-1000">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="transform-gpu"
            >
              {/* Enhanced 3D card */}
              <div
                className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl group"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${steps[activeStep].gradientBg} opacity-30`}></div>

                {/* Animated background pattern */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px] animate-grid-flow pointer-events-none"></div>

                {/* Glow effect */}
                <div
                  className={`absolute -inset-px bg-gradient-to-r ${steps[activeStep].color} opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-700`}
                ></div>

                {/* Card content */}
                <div className="relative p-8 md:p-10 backdrop-blur-sm">
                  <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                    >
                      <motion.div
                        initial={{ rotate: -10, scale: 0.9 }}
                        animate={{ rotate: 0, scale: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        {steps[activeStep].icon}
                      </motion.div>
                    </div>

                    <div className="flex-1">
                      <motion.h3
                        className="text-2xl font-bold mb-4 text-white"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                      >
                        Step {steps[activeStep].number}: {steps[activeStep].title}
                      </motion.h3>

                      <motion.p
                        className="text-zinc-300 text-lg mb-6"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        {steps[activeStep].description}
                      </motion.p>

                      <ul className="space-y-3 mb-8">
                        {steps[activeStep].details.map((detail, i) => (
                          <motion.li
                            key={i}
                            className="flex items-start"
                            variants={detailsVariants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            custom={i}
                          >
                            <div
                              className={`mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${steps[activeStep].color} shadow-glow-sm`}
                            >
                              <Check className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-zinc-300">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex justify-between items-center">
                        <Button
                          variant="outline"
                          className="border-white/10 text-white hover:bg-white/5 backdrop-blur-sm"
                          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                          disabled={activeStep === 0}
                        >
                          Previous Step
                        </Button>

                        <Button
                          className={`bg-gradient-to-r ${steps[activeStep].color} text-white shadow-glow-sm hover:shadow-glow-md transition-shadow`}
                          onClick={() => {
                            if (activeStep < steps.length - 1) {
                              setActiveStep(activeStep + 1)
                            }
                          }}
                        >
                          {activeStep < steps.length - 1 ? (
                            <>
                              Next Step
                              <ArrowRight className="ml-2 h-4 w-4" />
                            </>
                          ) : (
                            "Get Started Now"
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Step dots for mobile */}
        <div className="flex justify-center mt-8 gap-2">
          {steps.map((_, i) => (
            <button
              key={i}
              className={`w-2 h-2 rounded-full transition-all ${i === activeStep ? "w-6 bg-white" : "bg-white/30"}`}
              onClick={() => setActiveStep(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
