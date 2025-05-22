"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Rocket, ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string; description?: string }[]
}

const navItems: NavItem[] = [
  {
    label: "Features",
    href: "#features",
    children: [
      {
        label: "Project Showcase",
        href: "#showcase",
        description: "Share your work with our community",
      },
      {
        label: "Voting System",
        href: "#voting",
        description: "Get valuable feedback and votes",
      },
      {
        label: "Prize Pools",
        href: "#prizes",
        description: "Win up to $1000 in monthly prizes",
      },
    ],
  },
  { label: "Pricing", href: "#pricing" },
  {
    label: "Resources",
    href: "#resources",
    children: [
      { label: "Blog", href: "#blog" },
      { label: "Documentation", href: "#docs" },
      { label: "Community", href: "#community" },
    ],
  },
  { label: "Launchpad", href: "#launchpad" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  // Animation variants
  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: 0.08,
        delayChildren: 0.1,
        staggerDirection: 1,
        when: "beforeChildren",
      },
    },
  }

  const itemVariants = {
    closed: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  const dropdownVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
        staggerChildren: 0.03,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.3,
        ease: "easeOut",
        staggerChildren: 0.05,
        delayChildren: 0.05,
        staggerDirection: 1,
        when: "beforeChildren",
      },
    },
  }

  const dropdownItemVariants = {
    closed: {
      opacity: 0,
      x: -10,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  }

  // Toggle button variants
  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  }

  const Path = (props: any) => (
    <motion.path fill="transparent" strokeWidth="2" stroke="currentColor" strokeLinecap="round" {...props} />
  )

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-zinc-950/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <Rocket className="h-5 w-5" />
            </div>

            {/* Signature-like SideGeek logo with ink splatters */}
            <div className="relative overflow-visible">
              {/* Background glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20 blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>

              {/* Ink splatter effects */}
              <div className="absolute -top-3 -left-1 w-4 h-4 bg-purple-500/10 rounded-full blur-sm"></div>
              <div className="absolute -top-2 left-3 w-2 h-2 bg-blue-500/20 rounded-full blur-sm"></div>
              <div className="absolute top-1 -right-1 w-3 h-3 bg-purple-500/10 rounded-full blur-sm"></div>

              {/* Small ink dots */}
              <div className="absolute top-0 left-10 w-1 h-1 bg-purple-400/30 rounded-full"></div>
              <div className="absolute -bottom-1 right-3 w-1 h-1 bg-blue-400/30 rounded-full"></div>
              <div className="absolute -top-2 right-8 w-0.5 h-0.5 bg-purple-300/40 rounded-full"></div>

              {/* Ink drip effect */}
              <svg
                className="absolute -bottom-3 right-1 w-3 h-6 opacity-20 text-blue-400 transform rotate-12"
                viewBox="0 0 10 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 0C5 0 0 8 0 12C0 16 2.5 20 5 20C7.5 20 10 16 10 12C10 8 5 0 5 0Z" />
              </svg>

              {/* Signature-like logo text */}
<div className="relative ">
  <h1
   className="signature-font text-2xl"
  >
    <span className="inline-block signature-font text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-blue-400 drop-shadow-[0_1px_2px_rgba(80,80,160,0.15)]">
      SideGeek
    </span>
    {/* Ink splatter behind the last letter */}
    <span className="absolute -right-2 bottom-1 w-5 h-5 bg-purple-500/10 rounded-full blur-sm -z-10 animate-ink-spread"></span>
    {/* Signature flourish/underline with ink effect */}
    <span className="absolute -bottom-2 left-0 w-full h-[2.5px] pointer-events-none">
      <svg
        width="100%"
        height="10"
        viewBox="0 0 120 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="overflow-visible"
      >
        <path
          d="M2 7 Q 30 2 60 8 Q 90 14 118 5"
          stroke="url(#sig_underline)"
          strokeWidth="2"
          strokeLinecap="round"
          className="transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"
        />
        <defs>
          <linearGradient id="sig_underline" x1="0" y1="5" x2="120" y2="5" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9333EA" />
            <stop offset="0.5" stopColor="#FFFFFF" />
            <stop offset="1" stopColor="#3B82F6" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  </h1>
  {/* Larger ink splatter behind text */}
  <div className="absolute -right-3 -bottom-2 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500/5 to-blue-500/5 blur-md -z-10"></div>
</div>
              {/* Animated ink splatter on hover */}
              <motion.div
                className="absolute -right-4 -bottom-3 w-6 h-6 rounded-full bg-gradient-to-r from-purple-500/0 to-blue-500/0 blur-md -z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                whileHover={{
                  opacity: 0.15,
                  scale: 1.2,
                  transition: { duration: 0.8 },
                }}
              ></motion.div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <div>
                    <button
                      className={cn(
                        "px-3 py-2 text-sm font-medium rounded-xl transition-all",
                        activeDropdown === item.label
                          ? "text-white bg-white/10"
                          : "text-zinc-400 hover:text-white hover:bg-white/5",
                      )}
                      onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    >
                      <span className="flex items-center">
                        {item.label}
                        <motion.div
                          variants={iconVariants}
                          animate={activeDropdown === item.label ? "open" : "closed"}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown className="ml-1 h-4 w-4" />
                        </motion.div>
                      </span>
                    </button>

                    <AnimatePresence>
                      {activeDropdown === item.label && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-64 rounded-xl bg-zinc-900/90 backdrop-blur-lg border border-white/10 shadow-xl z-50"
                        >
                          <div className="p-3">
                            {item.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-4 py-3 rounded-lg hover:bg-white/5 transition-colors"
                                onClick={() => setActiveDropdown(null)}
                              >
                                <div className="font-medium text-white">{child.label}</div>
                                {child.description && (
                                  <div className="text-xs text-zinc-400 mt-1">{child.description}</div>
                                )}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium rounded-xl transition-all",
                      "text-zinc-400 hover:text-white hover:bg-white/5",
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-3">
              <Link href="/join">
                <Button size="sm" className="rounded-xl px-4 bg-white text-black hover:bg-zinc-200 transition-colors">
                  Join
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button - Enhanced with custom animation */}
            <motion.button
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-white bg-white/5 hover:bg-white/10 transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              aria-label="Toggle menu"
            >
              <svg width="23" height="23" viewBox="0 0 23 23">
                <AnimatePresence mode="wait">
                  {mobileMenuOpen ? (
                    <motion.g
                      key="close"
                      initial={{ opacity: 0, rotate: -45 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: 45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Path d="M 3 16.5 L 20 16.5" />
                      <Path d="M 3 12 L 20 12" />
                      <Path d="M 3 7.5 L 20 7.5" />
                    </motion.g>
                  ) : (
                    <motion.g
                      key="menu"
                      initial={{ opacity: 0, rotate: 45 }}
                      animate={{ opacity: 1, rotate: 0 }}
                      exit={{ opacity: 0, rotate: -45 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Path
                        initial={{ rotate: 45, y: 8 }}
                        animate={{ rotate: 0, y: 0 }}
                        transition={{ duration: 0.2 }}
                        d="M 3 16.5 L 20 16.5"
                      />
                      <Path
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        d="M 3 12 L 20 12"
                      />
                      <Path
                        initial={{ rotate: -45, y: -8 }}
                        animate={{ rotate: 0, y: 0 }}
                        transition={{ duration: 0.2 }}
                        d="M 3 7.5 L 20 7.5"
                      />
                    </motion.g>
                  )}
                </AnimatePresence>
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu with smoother animations */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="md:hidden bg-zinc-950/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
          >
            <div className="container px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.div key={item.label} variants={itemVariants} custom={index}>
                    {item.children ? (
                      <div className="space-y-2">
                        <motion.button
                          className="flex items-center justify-between w-full px-4 py-3 text-white font-medium rounded-xl hover:bg-white/5 transition-colors"
                          onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                          whileTap={{ scale: 0.98 }}
                        >
                          {item.label}
                          <motion.div
                            variants={iconVariants}
                            animate={activeDropdown === item.label ? "open" : "closed"}
                            transition={{ duration: 0.3 }}
                          >
                            <ChevronDown className="h-4 w-4" />
                          </motion.div>
                        </motion.button>

                        <AnimatePresence>
                          {activeDropdown === item.label && (
                            <motion.div
                              initial="closed"
                              animate="open"
                              exit="closed"
                              variants={dropdownVariants}
                              className="pl-4 space-y-1 overflow-hidden"
                            >
                              {item.children.map((child, childIndex) => (
                                <motion.div key={child.label} variants={dropdownItemVariants} custom={childIndex}>
                                  <Link
                                    href={child.href}
                                    className="block px-4 py-3 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                                    onClick={() => {
                                      setActiveDropdown(null)
                                      setMobileMenuOpen(false)
                                    }}
                                  >
                                    <div className="font-medium">{child.label}</div>
                                    {child.description && (
                                      <div className="text-xs text-zinc-500 mt-1">{child.description}</div>
                                    )}
                                  </Link>
                                </motion.div>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <motion.div whileHover={{ x: 5 }} whileTap={{ scale: 0.98 }}>
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    )}
                  </motion.div>
                ))}

                <motion.div variants={itemVariants} className="pt-4 border-t border-white/10 flex flex-col space-y-3">
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link href="/join" className="w-full block">
                      <Button
                        size="lg"
                        className="w-full rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      >
                        Join
                      </Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
