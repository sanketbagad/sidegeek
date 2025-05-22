"use client"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "Alex Johnson",
      role: "Founder, TechFlow",
      image: "/diverse-group.png",
      content:
        "SideGeek helped me get my SaaS product in front of thousands of potential users. The feedback was invaluable, and winning the monthly prize gave us the boost we needed to secure seed funding.",
      stars: 5,
    },
    {
      name: "Sarah Chen",
      role: "UI/UX Designer",
      image: "/diverse-woman-portrait.png",
      content:
        "As a designer, I was looking for honest feedback on my portfolio. The SideGeek community provided constructive criticism that helped me refine my work and land my dream job at a top tech company.",
      stars: 5,
    },
    {
      name: "Michael Rodriguez",
      role: "Indie Game Developer",
      image: "/developer-working.png",
      content:
        "I submitted my indie game to SideGeek and was blown away by the response. The platform's exposure helped me grow my user base by 300% in just two weeks. The $5 submission fee was the best investment I've ever made.",
      stars: 5,
    },
  ]

  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  return (
    <section className="py-24 relative overflow-hidden">
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
              Success Stories
            </Badge>
          </motion.div>

          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hear from our community
          </motion.h2>

          <motion.p
            className="text-zinc-400 text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover how creators and innovators have leveraged SideGeek to showcase their projects and achieve
            remarkable success.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-12 -left-12 text-zinc-800">
            <Quote className="h-24 w-24" />
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-zinc-900/90 to-zinc-900/70 backdrop-blur-sm border border-white/10"></div>

            <div className="relative p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-6">
                    <Avatar className="h-20 w-20 border-2 border-white/10">
                      <AvatarImage
                        src={testimonials[current].image || "/placeholder.svg"}
                        alt={testimonials[current].name}
                      />
                      <AvatarFallback>{testimonials[current].name.charAt(0)}</AvatarFallback>
                    </Avatar>
                  </div>

                  <div className="flex mb-6">
                    {[...Array(testimonials[current].stars)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  <p className="text-xl md:text-2xl text-white mb-8 italic">"{testimonials[current].content}"</p>

                  <div>
                    <h4 className="text-lg font-bold text-white">{testimonials[current].name}</h4>
                    <p className="text-zinc-400">{testimonials[current].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all ${i === current ? "bg-white w-6" : "bg-white/30"}`}
                    onClick={() => {
                      setCurrent(i)
                      setAutoplay(false)
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6">
            <button
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 text-white"
              onClick={() => {
                setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                setAutoplay(false)
              }}
            >
              <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6">
            <button
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full p-2 md:p-3 text-white"
              onClick={() => {
                setCurrent((prev) => (prev + 1) % testimonials.length)
                setAutoplay(false)
              }}
            >
              <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
