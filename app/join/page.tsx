"use client"
import { useState } from "react"
import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { ChevronDown, Mail, Lock, User, AtSign, Eye, EyeOff, Github, Twitter, ChromeIcon as Google } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Navbar } from "@/components/navbar"
import { MinimalFooter } from "@/components/minimal-footer"
import { MotivationalQuote } from "@/components/motivational-quote"
import { cn } from "@/lib/utils"

export default function JoinPage() {
  const [activeAccordion, setActiveAccordion] = useState<"signup" | "signin" | null>(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  })
  const [signinData, setSigninData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  // Toggle accordion
  const toggleAccordion = (accordion: "signup" | "signin") => {
    setActiveAccordion(activeAccordion === accordion ? null : accordion)
  }

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    if (activeAccordion === "signup") {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      })
    } else {
      setSigninData({
        ...signinData,
        [name]: type === "checkbox" ? checked : value,
      })
    }
  }

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (activeAccordion === "signup") {
      console.log("Sign up data:", formData)
      // Handle sign up logic here
    } else {
      console.log("Sign in data:", signinData)
      // Handle sign in logic here
    }
  }

  // Animation variants
  const accordionVariants = {
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        height: { duration: 0.3, ease: "easeInOut" },
        opacity: { duration: 0.2 },
      },
    },
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        height: { duration: 0.4, ease: "easeInOut" },
        opacity: { duration: 0.3, delay: 0.1 },
      },
    },
  }

  const formItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-zinc-950 to-black text-white">
      {/* Header */}
      <Navbar />

      <main className="flex-1 pt-24 md:pt-32">
        <div className="container px-4 md:px-6 max-w-5xl mx-auto">
          {/* Page Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                Join SideGeek
              </span>
            </h1>
          </motion.div>

          {/* Quote Section */}
          <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative p-6 md:p-8 rounded-2xl overflow-hidden">
              {/* Background with ink splatter effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-blue-900/20 backdrop-blur-sm border border-white/10 rounded-2xl"></div>

              {/* Ink splatter decorations */}
              <div className="absolute top-0 left-10 w-20 h-20 bg-purple-500/5 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-10 w-20 h-20 bg-blue-500/5 rounded-full blur-xl"></div>
              <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-purple-400/20 rounded-full"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400/20 rounded-full"></div>

              <div className="relative">
                <MotivationalQuote className="text-lg md:text-xl" />
              </div>
            </div>
          </motion.div>

          {/* Accordion Forms */}
          <motion.div
            className="max-w-md mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {/* Sign Up Accordion */}
            <div className="mb-4">
              <button
                onClick={() => toggleAccordion("signup")}
                className={cn(
                  "w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300",
                  activeAccordion === "signup"
                    ? "bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-white/10"
                    : "bg-zinc-900/50 hover:bg-zinc-900/80 border border-white/5",
                )}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mr-3">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-lg">Create an Account</span>
                </div>
                <motion.div animate={{ rotate: activeAccordion === "signup" ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="h-5 w-5 text-zinc-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeAccordion === "signup" && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={accordionVariants}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-6 bg-zinc-900/30 border border-t-0 border-white/5 rounded-b-xl">
                      <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                          {/* Full Name */}
                          <motion.div variants={formItemVariants} initial="hidden" animate="visible" custom={0}>
                            <Label htmlFor="name" className="text-zinc-300 mb-1.5 block">
                              Full Name
                            </Label>
                            <div className="relative">
                              <Input
                                id="name"
                                name="name"
                                type="text"
                                placeholder="John Doe"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 pl-10 h-11 rounded-xl transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                              />
                              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                            </div>
                          </motion.div>

                          {/* Email */}
                          <motion.div variants={formItemVariants} initial="hidden" animate="visible" custom={1}>
                            <Label htmlFor="email" className="text-zinc-300 mb-1.5 block">
                              Email Address
                            </Label>
                            <div className="relative">
                              <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="you@example.com"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 pl-10 h-11 rounded-xl transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                              />
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                            </div>
                          </motion.div>

                          {/* Username */}
                          <motion.div variants={formItemVariants} initial="hidden" animate="visible" custom={2}>
                            <Label htmlFor="username" className="text-zinc-300 mb-1.5 block">
                              Username
                            </Label>
                            <div className="relative">
                              <Input
                                id="username"
                                name="username"
                                type="text"
                                placeholder="coolcreator"
                                value={formData.username}
                                onChange={handleInputChange}
                                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 pl-10 h-11 rounded-xl transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                              />
                              <AtSign className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                            </div>
                          </motion.div>

                          {/* Password */}
                          <motion.div variants={formItemVariants} initial="hidden" animate="visible" custom={3}>
                            <Label htmlFor="password" className="text-zinc-300 mb-1.5 block">
                              Password
                            </Label>
                            <div className="relative">
                              <Input
                                id="password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 pl-10 pr-10 h-11 rounded-xl transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                              />
                              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                          </motion.div>

                          {/* Confirm Password */}
                          <motion.div variants={formItemVariants} initial="hidden" animate="visible" custom={4}>
                            <Label htmlFor="confirmPassword" className="text-zinc-300 mb-1.5 block">
                              Confirm Password
                            </Label>
                            <div className="relative">
                              <Input
                                id="confirmPassword"
                                name="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={formData.confirmPassword}
                                onChange={handleInputChange}
                                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 pl-10 pr-10 h-11 rounded-xl transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                              />
                              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                              <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                              >
                                {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                          </motion.div>

                          {/* Terms and Conditions */}
                          <motion.div
                            variants={formItemVariants}
                            initial="hidden"
                            animate="visible"
                            custom={5}
                            className="flex items-start space-x-2"
                          >
                            <Checkbox
                              id="agreeTerms"
                              name="agreeTerms"
                              checked={formData.agreeTerms}
                              onCheckedChange={(checked) =>
                                setFormData({ ...formData, agreeTerms: checked as boolean })
                              }
                              className="mt-1 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                            />
                            <Label htmlFor="agreeTerms" className="text-sm text-zinc-400 font-normal leading-tight">
                              I agree to the{" "}
                              <Link href="#" className="text-white underline hover:text-purple-400">
                                Terms of Service
                              </Link>{" "}
                              and{" "}
                              <Link href="#" className="text-white underline hover:text-purple-400">
                                Privacy Policy
                              </Link>
                            </Label>
                          </motion.div>

                          {/* Submit Button */}
                          <motion.div
                            variants={formItemVariants}
                            initial="hidden"
                            animate="visible"
                            custom={6}
                            className="pt-2"
                          >
                            <Button
                              type="submit"
                              className="w-full h-11 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-medium"
                            >
                              Create Account
                            </Button>
                          </motion.div>

                          {/* Social Sign Up */}
                          <motion.div variants={formItemVariants} initial="hidden" animate="visible" custom={7}>
                            <div className="relative flex items-center justify-center mt-2 mb-4">
                              <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-zinc-700"></div>
                              </div>
                              <div className="relative px-4 bg-zinc-900/30 text-xs text-zinc-500">Or continue with</div>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                              <Button
                                type="button"
                                variant="outline"
                                className="bg-zinc-800/50 border-zinc-700 text-white hover:bg-zinc-700/50 hover:text-white"
                              >
                                <Google className="h-4 w-4 mr-2" />
                                Google
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                className="bg-zinc-800/50 border-zinc-700 text-white hover:bg-zinc-700/50 hover:text-white"
                              >
                                <Twitter className="h-4 w-4 mr-2" />
                                Twitter
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                className="bg-zinc-800/50 border-zinc-700 text-white hover:bg-zinc-700/50 hover:text-white"
                              >
                                <Github className="h-4 w-4 mr-2" />
                                GitHub
                              </Button>
                            </div>
                          </motion.div>
                        </div>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Sign In Accordion */}
            <div>
              <button
                onClick={() => toggleAccordion("signin")}
                className={cn(
                  "w-full p-4 rounded-xl flex items-center justify-between transition-all duration-300",
                  activeAccordion === "signin"
                    ? "bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-white/10"
                    : "bg-zinc-900/50 hover:bg-zinc-900/80 border border-white/5",
                )}
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mr-3">
                    <Lock className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-medium text-lg">Already have an account?</span>
                </div>
                <motion.div animate={{ rotate: activeAccordion === "signin" ? 180 : 0 }} transition={{ duration: 0.3 }}>
                  <ChevronDown className="h-5 w-5 text-zinc-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {activeAccordion === "signin" && (
                  <motion.div
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={accordionVariants}
                    className="overflow-hidden"
                  >
                    <div className="p-4 pt-6 bg-zinc-900/30 border border-t-0 border-white/5 rounded-b-xl">
                      <form onSubmit={handleSubmit}>
                        <div className="space-y-4">
                          {/* Email */}
                          <motion.div variants={formItemVariants} initial="hidden" animate="visible" custom={0}>
                            <Label htmlFor="signin-email" className="text-zinc-300 mb-1.5 block">
                              Email or Username
                            </Label>
                            <div className="relative">
                              <Input
                                id="signin-email"
                                name="email"
                                type="text"
                                placeholder="you@example.com"
                                value={signinData.email}
                                onChange={handleInputChange}
                                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 pl-10 h-11 rounded-xl transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                              />
                              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                            </div>
                          </motion.div>

                          {/* Password */}
                          <motion.div variants={formItemVariants} initial="hidden" animate="visible" custom={1}>
                            <div className="flex items-center justify-between mb-1.5">
                              <Label htmlFor="signin-password" className="text-zinc-300">
                                Password
                              </Label>
                              <Link href="#" className="text-xs text-purple-400 hover:text-purple-300 hover:underline">
                                Forgot password?
                              </Link>
                            </div>
                            <div className="relative">
                              <Input
                                id="signin-password"
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={signinData.password}
                                onChange={handleInputChange}
                                className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-zinc-500 pl-10 pr-10 h-11 rounded-xl transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
                              />
                              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
                              <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                              >
                                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                              </button>
                            </div>
                          </motion.div>

                          {/* Remember Me */}
                          <motion.div
                            variants={formItemVariants}
                            initial="hidden"
                            animate="visible"
                            custom={2}
                            className="flex items-center space-x-2"
                          >
                            <Checkbox
                              id="rememberMe"
                              name="rememberMe"
                              checked={signinData.rememberMe}
                              onCheckedChange={(checked) =>
                                setSigninData({ ...signinData, rememberMe: checked as boolean })
                              }
                              className="data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600"
                            />
                            <Label htmlFor="rememberMe" className="text-sm text-zinc-400 font-normal">
                              Remember me for 30 days
                            </Label>
                          </motion.div>

                          {/* Submit Button */}
                          <motion.div
                            variants={formItemVariants}
                            initial="hidden"
                            animate="visible"
                            custom={3}
                            className="pt-2"
                          >
                            <Button
                              type="submit"
                              className="w-full h-11 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-medium"
                            >
                              Sign In
                            </Button>
                          </motion.div>

                          {/* Social Sign In */}
                          <motion.div variants={formItemVariants} initial="hidden" animate="visible" custom={4}>
                            <div className="relative flex items-center justify-center mt-2 mb-4">
                              <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-zinc-700"></div>
                              </div>
                              <div className="relative px-4 bg-zinc-900/30 text-xs text-zinc-500">Or continue with</div>
                            </div>

                            <div className="grid grid-cols-3 gap-3">
                              <Button
                                type="button"
                                variant="outline"
                                className="bg-zinc-800/50 border-zinc-700 text-white hover:bg-zinc-700/50 hover:text-white"
                              >
                                <Google className="h-4 w-4 mr-2" />
                                Google
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                className="bg-zinc-800/50 border-zinc-700 text-white hover:bg-zinc-700/50 hover:text-white"
                              >
                                <Twitter className="h-4 w-4 mr-2" />
                                Twitter
                              </Button>
                              <Button
                                type="button"
                                variant="outline"
                                className="bg-zinc-800/50 border-zinc-700 text-white hover:bg-zinc-700/50 hover:text-white"
                              >
                                <Github className="h-4 w-4 mr-2" />
                                GitHub
                              </Button>
                            </div>
                          </motion.div>
                        </div>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <MinimalFooter />
    </div>
  )
}
