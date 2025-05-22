"use client"
import { useState, useRef, useEffect } from "react"
import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import {
  Download,
  Share2,
  ExternalLink,
  X,
  Bookmark,
  Search,
  Filter,
  TrendingUp,
  Award,
  Clock,
  Zap,
  Star,
  SlidersHorizontal,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  ChevronUp,
  Home,
  Layout,
  PlusCircle,
  User,
  Bell,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Navbar } from "@/components/navbar"
import { MinimalFooter } from "@/components/minimal-footer"
import { cn } from "@/lib/utils"
import { ShareImagePreview } from "@/components/share-image-preview"
import { toast } from "@/components/ui/use-toast"

// Mock data for projects
const projectsData = [
  {
    id: "1",
    slug: "taskflow-ai",
    title: "TaskFlow AI",
    description: "AI-powered task management system that prioritizes your work automatically.",
    shortDescription: "AI-powered task management system",
    creator: "Alex Johnson",
    creatorImage: "/diverse-person-portrait.png",
    creatorUsername: "alexj",
    category: "Productivity",
    tags: ["AI", "Task Management", "Productivity"],
    upvotes: 128,
    hasUpvoted: false,
    comments: 24,
    weekNumber: 21,
    weekYear: 2025,
    weekDates: "May 19 - May 25",
    createdAt: "2 days ago",
    images: ["/task-management-dashboard.png", "/placeholder-yei4c.png", "/task-management-app-calendar.png"],
    featured: true,
    trending: true,
    longDescription:
      "TaskFlow AI is a revolutionary task management system that uses artificial intelligence to automatically prioritize your work based on deadlines, importance, and your personal work patterns. The system learns from your behavior to suggest the optimal time for deep work, meetings, and breaks. With integrations for all major productivity tools, TaskFlow AI becomes your personal productivity assistant that adapts to your unique workflow.",
    techStack: ["React", "Node.js", "TensorFlow", "MongoDB"],
    website: "https://taskflow-ai.example.com",
    github: "https://github.com/example/taskflow-ai",
  },
  {
    id: "2",
    slug: "ecotrack",
    title: "EcoTrack",
    description: "Personal carbon footprint tracker with actionable insights to reduce your environmental impact.",
    shortDescription: "Personal carbon footprint tracker",
    creator: "Mia Chen",
    creatorImage: "/woman-portrait.png",
    creatorUsername: "miachen",
    category: "Sustainability",
    tags: ["Climate", "Carbon Footprint", "Sustainability"],
    upvotes: 95,
    hasUpvoted: false,
    comments: 18,
    weekNumber: 21,
    weekYear: 2025,
    weekDates: "May 19 - May 25",
    createdAt: "3 days ago",
    images: ["/placeholder-z15eg.png", "/sustainability-app-dashboard.png", "/eco-friendly-app-interface.png"],
    featured: false,
    trending: true,
    longDescription:
      "EcoTrack helps you understand and reduce your carbon footprint through personalized tracking and actionable recommendations. The app analyzes your daily activities including transportation, food consumption, energy usage, and shopping habits to calculate your environmental impact. EcoTrack then provides tailored suggestions to help you make more sustainable choices and tracks your progress over time, gamifying the experience of reducing your carbon footprint.",
    techStack: ["Flutter", "Firebase", "Python", "TensorFlow"],
    website: "https://ecotrack.example.com",
    github: "https://github.com/example/ecotrack",
  },
  {
    id: "3",
    slug: "soundscape",
    title: "SoundScape",
    description: "AI-generated ambient soundscapes that adapt to your environment and mood.",
    shortDescription: "Adaptive AI-generated soundscapes",
    creator: "James Wilson",
    creatorImage: "/thoughtful-man-portrait.png",
    creatorUsername: "jamesw",
    category: "Audio",
    tags: ["AI", "Music", "Wellness"],
    upvotes: 76,
    hasUpvoted: false,
    comments: 12,
    weekNumber: 21,
    weekYear: 2025,
    weekDates: "May 19 - May 25",
    createdAt: "4 days ago",
    images: ["/audio-app-interface.png", "/sound-generation-app.png", "/ambient-music-app.png"],
    featured: false,
    trending: false,
    longDescription:
      "SoundScape uses artificial intelligence to generate unique ambient soundscapes that adapt in real-time to your environment, activities, and emotional state. By analyzing factors like time of day, weather, heart rate (via wearable integration), and even your calendar, SoundScape creates the perfect audio environment for focus, relaxation, or creativity. The app features an extensive library of base sounds that the AI combines and modulates to create endless variations of soothing or energizing soundscapes.",
    techStack: ["React Native", "TensorFlow.js", "Web Audio API", "Node.js"],
    website: "https://soundscape.example.com",
    github: "https://github.com/example/soundscape",
  },
  {
    id: "4",
    slug: "nutriplan",
    title: "NutriPlan",
    description: "Personalized nutrition and meal planning app based on your health goals and dietary restrictions.",
    shortDescription: "Personalized nutrition planning",
    creator: "Sarah Ahmed",
    creatorImage: "/woman-hijab-portrait.png",
    creatorUsername: "saraha",
    category: "Health",
    tags: ["Nutrition", "Health", "AI"],
    upvotes: 112,
    hasUpvoted: false,
    comments: 31,
    weekNumber: 20,
    weekYear: 2025,
    weekDates: "May 12 - May 18",
    createdAt: "8 days ago",
    images: ["/nutrition-app-interface.png", "/placeholder-3ybsq.png", "/healthy-food-app.png"],
    featured: true,
    trending: false,
    longDescription:
      "NutriPlan creates personalized meal plans and nutrition recommendations based on your unique health profile, dietary preferences, and wellness goals. The app analyzes factors like your age, weight, activity level, allergies, and food preferences to generate meal plans that are both healthy and enjoyable. NutriPlan also features a smart shopping list generator, recipe database, and progress tracking to help you maintain a balanced diet with minimal effort.",
    techStack: ["Vue.js", "Django", "PostgreSQL", "TensorFlow"],
    website: "https://nutriplan.example.com",
    github: "https://github.com/example/nutriplan",
  },
  {
    id: "5",
    slug: "codebuddy",
    title: "CodeBuddy",
    description: "AI programming assistant that helps you write better code with real-time suggestions and reviews.",
    shortDescription: "AI programming assistant",
    creator: "David Park",
    creatorImage: "/asian-man-portrait.png",
    creatorUsername: "davidp",
    category: "Developer Tools",
    tags: ["AI", "Programming", "Productivity"],
    upvotes: 203,
    hasUpvoted: false,
    comments: 47,
    weekNumber: 20,
    weekYear: 2025,
    weekDates: "May 12 - May 18",
    createdAt: "9 days ago",
    images: ["/ai-code-editor.png", "/programming-assistant-app.png", "/developer-tool-interface.png"],
    featured: true,
    trending: true,
    longDescription:
      "CodeBuddy is an intelligent programming assistant that integrates with your favorite code editors to provide real-time code suggestions, identify potential bugs, and offer performance optimizations. Using advanced machine learning models trained on billions of lines of high-quality code, CodeBuddy understands context and intent to provide relevant assistance without disrupting your workflow. The tool also offers automated code reviews, documentation generation, and can even explain complex code snippets in plain English.",
    techStack: ["TypeScript", "Python", "TensorFlow", "VS Code Extension API"],
    website: "https://codebuddy.example.com",
    github: "https://github.com/example/codebuddy",
  },
  {
    id: "6",
    slug: "dreamscape-vr",
    title: "DreamScape VR",
    description: "Collaborative virtual reality environment for architects and designers to prototype spaces together.",
    shortDescription: "Collaborative VR for architects",
    creator: "Michael Rodriguez",
    creatorImage: "/latino-man-portrait.png",
    creatorUsername: "michaelr",
    category: "Design",
    tags: ["VR", "Architecture", "Collaboration"],
    upvotes: 89,
    hasUpvoted: false,
    comments: 22,
    weekNumber: 19,
    weekYear: 2025,
    weekDates: "May 5 - May 11",
    createdAt: "15 days ago",
    images: ["/virtual-reality-architecture.png", "/vr-design-tool.png", "/placeholder-r3u70.png"],
    featured: false,
    trending: false,
    longDescription:
      "DreamScape VR is a collaborative virtual reality platform that allows architects, designers, and clients to meet inside their designs before they're built. The tool enables real-time manipulation of 3D models, accurate scaling, material testing, and lighting simulation to create a truly immersive design experience. Multiple users can join the same virtual space from anywhere in the world, making remote collaboration seamless and intuitive. DreamScape VR also integrates with popular CAD and BIM software for easy import and export of designs.",
    techStack: ["Unity", "C#", "WebXR", "Three.js"],
    website: "https://dreamscape-vr.example.com",
    github: "https://github.com/example/dreamscape-vr",
  },
  {
    id: "7",
    slug: "finwise",
    title: "FinWise",
    description: "Personal finance management tool with AI-powered insights and investment recommendations.",
    shortDescription: "AI-powered personal finance",
    creator: "Emma Thompson",
    creatorImage: "/woman-portrait.png",
    creatorUsername: "emmat",
    category: "Finance",
    tags: ["Finance", "AI", "Investment"],
    upvotes: 156,
    hasUpvoted: false,
    comments: 38,
    weekNumber: 19,
    weekYear: 2025,
    weekDates: "May 5 - May 11",
    createdAt: "16 days ago",
    images: ["/finance-app-dashboard.png", "/investment-tracking-app.png", "/budget-management-app.png"],
    featured: true,
    trending: false,
    longDescription:
      "FinWise revolutionizes personal finance management by combining secure bank connections, intelligent categorization, and predictive analytics to give you complete control over your financial life. The app automatically tracks your spending, identifies saving opportunities, and provides personalized investment recommendations based on your goals and risk tolerance. FinWise also features scenario planning tools that let you visualize the long-term impact of financial decisions, from buying a home to changing careers.",
    techStack: ["React", "Node.js", "Plaid API", "TensorFlow"],
    website: "https://finwise.example.com",
    github: "https://github.com/example/finwise",
  },
  {
    id: "8",
    slug: "healthtrack",
    title: "HealthTrack",
    description: "Comprehensive health monitoring app that connects with wearables for personalized insights.",
    shortDescription: "Health monitoring platform",
    creator: "Lisa Johnson",
    creatorImage: "/woman-portrait.png",
    creatorUsername: "lisaj",
    category: "Health",
    tags: ["Health", "Fitness", "Wearables"],
    upvotes: 134,
    hasUpvoted: false,
    comments: 29,
    weekNumber: 18,
    weekYear: 2025,
    weekDates: "April 28 - May 4",
    createdAt: "22 days ago",
    images: ["/health-tracking-app.png", "/fitness-dashboard.png", "/wearable-device-app.png"],
    featured: true,
    trending: false,
    longDescription:
      "HealthTrack is a comprehensive health monitoring platform that integrates with popular wearable devices to provide a holistic view of your physical wellbeing. The app tracks metrics like heart rate, sleep quality, activity levels, and stress to generate personalized health insights and recommendations. HealthTrack also allows you to set health goals, track progress over time, and share data with healthcare providers for more informed medical care.",
    techStack: ["React Native", "Firebase", "HealthKit API", "Google Fit API"],
    website: "https://healthtrack.example.com",
    github: "https://github.com/example/healthtrack",
  },
  {
    id: "9",
    slug: "aiwriter",
    title: "AI Writer",
    description: "AI-powered writing assistant that helps you create better content faster.",
    shortDescription: "AI writing assistant",
    creator: "James Chen",
    creatorImage: "/asian-man-portrait.png",
    creatorUsername: "jamesc",
    category: "Productivity",
    tags: ["AI", "Writing", "Content Creation"],
    upvotes: 178,
    hasUpvoted: false,
    comments: 42,
    weekNumber: 18,
    weekYear: 2025,
    weekDates: "April 28 - May 4",
    createdAt: "23 days ago",
    images: ["/writing-app-interface.png", "/content-creation-tool.png", "/ai-text-editor.png"],
    featured: false,
    trending: true,
    longDescription:
      "AI Writer is an intelligent writing assistant that helps you create better content faster. Using advanced natural language processing, the tool can generate outlines, suggest improvements, check grammar and style, and even help overcome writer's block with creative prompts. AI Writer adapts to your writing style over time, making increasingly relevant suggestions while maintaining your unique voice. The platform supports multiple content types including blog posts, social media, emails, and academic writing.",
    techStack: ["React", "GPT-4", "Node.js", "MongoDB"],
    website: "https://aiwriter.example.com",
    github: "https://github.com/example/aiwriter",
  },
  {
    id: "10",
    slug: "travelbuddy",
    title: "TravelBuddy",
    description: "Personalized travel planning app that creates custom itineraries based on your preferences.",
    shortDescription: "AI travel planner",
    creator: "Sophie Williams",
    creatorImage: "/woman-portrait.png",
    creatorUsername: "sophiew",
    category: "Travel",
    tags: ["Travel", "AI", "Personalization"],
    upvotes: 112,
    hasUpvoted: false,
    comments: 31,
    weekNumber: 17,
    weekYear: 2025,
    weekDates: "April 21 - April 27",
    createdAt: "28 days ago",
    images: ["/placeholder-m22ax.png", "/itinerary-builder.png", "/travel-recommendation-app.png"],
    featured: true,
    trending: false,
    longDescription:
      "TravelBuddy is a personalized travel planning app that creates custom itineraries based on your preferences, budget, and travel style. The app analyzes factors like your interests, previous trips, seasonal considerations, and local events to recommend destinations and activities you'll love. TravelBuddy also handles practical details like booking accommodations, finding transportation options, and suggesting restaurants that match your dietary preferences. The app continues to provide value during your trip with real-time updates, navigation assistance, and local tips.",
    techStack: ["Flutter", "Firebase", "Google Maps API", "TensorFlow"],
    website: "https://travelbuddy.example.com",
    github: "https://github.com/example/travelbuddy",
  },
]

// Define all weeks
const allWeeks = [
  { id: 17, year: 2025, label: "Week 17", dates: "April 21 - April 27" },
  { id: 18, year: 2025, label: "Week 18", dates: "April 28 - May 4" },
  { id: 19, year: 2025, label: "Week 19", dates: "May 5 - May 11" },
  { id: 20, year: 2025, label: "Week 20", dates: "May 12 - May 18" },
  { id: 21, year: 2025, label: "Week 21", dates: "May 19 - May 25" },
]

// Define categories for filtering
const categories = [
  { id: "all", label: "All Categories", icon: <Filter className="h-4 w-4" /> },
  { id: "productivity", label: "Productivity", icon: <Zap className="h-4 w-4" /> },
  { id: "ai", label: "AI & ML", icon: <Star className="h-4 w-4" /> },
  { id: "design", label: "Design", icon: <Award className="h-4 w-4" /> },
  { id: "health", label: "Health", icon: <TrendingUp className="h-4 w-4" /> },
  { id: "finance", label: "Finance", icon: <Clock className="h-4 w-4" /> },
]

// Define status filters
const statusFilters = [
  { id: "all", label: "All", icon: <Filter className="h-4 w-4" /> },
  { id: "trending", label: "Trending", icon: <TrendingUp className="h-4 w-4" /> },
  { id: "featured", label: "Featured", icon: <Award className="h-4 w-4" /> },
]

// Group projects by week
const groupProjectsByWeek = (projects: typeof projectsData) => {
  const grouped: Record<number, typeof projectsData> = {}

  projects.forEach((project) => {
    if (!grouped[project.weekNumber]) {
      grouped[project.weekNumber] = []
    }
    grouped[project.weekNumber].push(project)
  })

  return grouped
}

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null)
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false)
  const [activeWeek, setActiveWeek] = useState(21) // Default to Week 21
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeFilter, setActiveFilter] = useState("all")
  const [upvotedProjects, setUpvotedProjects] = useState<Record<string, boolean>>({})
  const [searchQuery, setSearchQuery] = useState("")
  const weekScrollRef = useRef<HTMLDivElement>(null)
  const [isShareImagePreviewOpen, setIsShareImagePreviewOpen] = useState(false)

  // Filter projects based on search query, category, and filter
  const getFilteredProjects = () => {
    let filtered = projectsData

    // Apply search filter if query exists
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.description.toLowerCase().includes(query) ||
          project.creator.toLowerCase().includes(query) ||
          project.category.toLowerCase().includes(query) ||
          project.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Apply category filter
    if (activeCategory !== "all") {
      filtered = filtered.filter(
        (project) =>
          project.category.toLowerCase() === activeCategory ||
          project.tags.some((tag) => tag.toLowerCase() === activeCategory),
      )
    }

    // Apply additional filters
    if (activeFilter === "trending") {
      filtered = filtered.filter((project) => project.trending)
    } else if (activeFilter === "featured") {
      filtered = filtered.filter((project) => project.featured)
    }

    return filtered
  }

  const filteredProjects = getFilteredProjects()
  const filteredGroupedProjects = groupProjectsByWeek(filteredProjects)

  const handleProjectClick = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project)
    setIsDrawerOpen(true)
    // Prevent body scrolling when drawer is open
    document.body.style.overflow = "hidden"
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
    // Re-enable body scrolling
    document.body.style.overflow = ""
  }

  const toggleFilterDrawer = () => {
    setIsFilterDrawerOpen(!isFilterDrawerOpen)
    // Toggle body scrolling
    if (!isFilterDrawerOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }

  const closeFilterDrawer = () => {
    setIsFilterDrawerOpen(false)
    document.body.style.overflow = ""
  }

  const handleUpvote = (e: React.MouseEvent, projectId: string) => {
    e.stopPropagation() // Prevent opening the drawer

    // Add a small delay to make the animation more noticeable
    setTimeout(() => {
      setUpvotedProjects((prev) => ({
        ...prev,
        [projectId]: !prev[projectId],
      }))
    }, 100)
  }

  const generateShareImage = (project: (typeof projectsData)[0]) => {
    setSelectedProject(project)
    setIsShareImagePreviewOpen(true)
  }

  // Replace the shareProject function with this updated version that prioritizes clipboard
  const shareProject = async (project: (typeof projectsData)[0]) => {
    const shareUrl = `${window.location.origin}/projects/${project.slug}`
    const shareText = `Check out ${project.title} on SideGeek!`
    const fullShareText = `${shareText} ${shareUrl}`

    try {
      // Prioritize clipboard approach to avoid iframe restrictions
      await navigator.clipboard.writeText(fullShareText)
      toast({
        title: "Link copied to clipboard",
        description: "Share it with your friends and colleagues!",
      })

      // Only try Web Share API as a secondary option if we're not in an iframe
      if (!window.frameElement && navigator.share) {
        try {
          await navigator.share({
            title: project.title,
            text: shareText,
            url: shareUrl,
          })
        } catch (shareError) {
          // Web Share API failed, but we already copied to clipboard so no need for additional feedback
          console.log("Web Share API unavailable or blocked, using clipboard instead")
        }
      }
    } catch (error) {
      console.error("Error sharing:", error)
      toast({
        title: "Couldn't copy link",
        description: "Please try again or copy the URL manually.",
        variant: "destructive",
      })
    }
  }

  // Get current week info
  const currentWeekInfo = allWeeks.find((week) => week.id === activeWeek) || allWeeks[4]

  // Default to Week 21

  // Navigate to previous week
  const goToPreviousWeek = () => {
    const currentIndex = allWeeks.findIndex((week) => week.id === activeWeek)
    if (currentIndex > 0) {
      setActiveWeek(allWeeks[currentIndex - 1].id)
    }
  }

  // Navigate to next week
  const goToNextWeek = () => {
    const currentIndex = allWeeks.findIndex((week) => week.id === activeWeek)
    if (currentIndex < allWeeks.length - 1) {
      setActiveWeek(allWeeks[currentIndex + 1].id)
    }
  }

  // Apply filter and close drawer
  const applyFilter = (category: string, filter: string) => {
    setActiveCategory(category)
    setActiveFilter(filter)
    closeFilterDrawer()
  }

  // Scroll to center the active week tab
  useEffect(() => {
    if (weekScrollRef.current) {
      const container = weekScrollRef.current
      const activeElement = container.querySelector(`[data-week="${activeWeek}"]`) as HTMLElement

      if (activeElement) {
        const containerWidth = container.offsetWidth
        const activeElementLeft = activeElement.offsetLeft
        const activeElementWidth = activeElement.offsetWidth

        const scrollPosition = activeElementLeft - containerWidth / 2 + activeElementWidth / 2

        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth",
        })
      }
    }
  }, [activeWeek])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-zinc-950 to-black text-white">
      {/* Background elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none"></div>
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none"></div>

      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/3 -right-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      {/* Header */}
      <Navbar />

      <main className="flex-1 pt-20 sm:pt-24 md:pt-32 pb-24">
        <div className="container px-4 md:px-6 max-w-6xl mx-auto">
          {/* Search Bar and Filter Button */}
          <div className="flex items-center gap-2 mb-6 sm:mb-8 px-2 sm:px-0">
            <div className="relative flex-1">
              <Input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-zinc-900/50 border-zinc-700 text-white placeholder:text-zinc-500 pl-9 pr-3 h-10 sm:h-11 text-sm sm:text-base rounded-full transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-zinc-500" />
            </div>

            <motion.button
              className="bg-zinc-900/50 hover:bg-zinc-800/50 text-white p-2.5 sm:p-3 rounded-full flex items-center justify-center border border-zinc-800/50"
              onClick={toggleFilterDrawer}
              whileTap={{ scale: 0.95 }}
            >
              <SlidersHorizontal className="h-5 w-5" />
            </motion.button>
          </div>

          {/* Horizontal Week Navigation */}
          <div ref={weekScrollRef} className="flex justify-between items-center mb-6 overflow-hidden">
            <button
              onClick={goToPreviousWeek}
              className="p-2 sm:p-3 text-zinc-400 hover:text-white transition-colors bg-zinc-900/50 rounded-full backdrop-blur-sm"
              disabled={activeWeek === allWeeks[0].id}
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            <div className="flex overflow-x-auto hide-scrollbar py-2 sm:py-4 space-x-2 sm:space-x-4">
              {allWeeks.map((week) => (
                <motion.button
                  key={week.id}
                  data-week={week.id}
                  className={cn(
                    "px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-lg font-medium whitespace-nowrap transition-all backdrop-blur-sm",
                    activeWeek === week.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                      : "bg-zinc-900/50 text-zinc-400 hover:text-white hover:bg-zinc-800/50 border border-zinc-800/50",
                  )}
                  onClick={() => setActiveWeek(week.id)}
                  whileTap={{ scale: 0.95 }}
                >
                  Week {week.id}
                </motion.button>
              ))}
            </div>

            <button
              onClick={goToNextWeek}
              className="p-2 sm:p-3 text-zinc-400 hover:text-white transition-colors bg-zinc-900/50 rounded-full backdrop-blur-sm"
              disabled={activeWeek === allWeeks[allWeeks.length - 1].id}
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>

          {/* Week Header and Info */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 sm:mb-8">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg blur-xl opacity-70"></div>
              <div className="relative">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-white mb-1">
                  Week {currentWeekInfo.id}
                </h1>
                <p className="text-sm sm:text-base text-zinc-400">{currentWeekInfo.dates}</p>
              </div>
            </div>
            <div className="mt-3 md:mt-0 max-w-md text-sm sm:text-base text-zinc-400 bg-zinc-900/30 p-2 sm:p-3 rounded-xl backdrop-blur-sm border border-white/5">
              <span className="hidden xs:inline">Support the best projects with your feedback & upvotes.</span> Launch
              your project on Monday.
            </div>
          </div>

          {/* Active Filters Display */}
          {(activeCategory !== "all" || activeFilter !== "all") && (
            <div className="flex flex-wrap gap-2 mb-4">
              {activeCategory !== "all" && (
                <Badge className="bg-purple-600/20 text-purple-300 border-purple-800 flex items-center gap-1 px-2 py-1">
                  {categories.find((c) => c.id === activeCategory)?.icon}
                  <span>{categories.find((c) => c.id === activeCategory)?.label}</span>
                  <button className="ml-1 hover:text-white" onClick={() => setActiveCategory("all")}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {activeFilter !== "all" && (
                <Badge
                  className={cn(
                    "flex items-center gap-1 px-2 py-1",
                    activeFilter === "trending"
                      ? "bg-green-600/20 text-green-300 border-green-800"
                      : "bg-yellow-600/20 text-yellow-300 border-yellow-800",
                  )}
                >
                  {statusFilters.find((f) => f.id === activeFilter)?.icon}
                  <span>{statusFilters.find((f) => f.id === activeFilter)?.label}</span>
                  <button className="ml-1 hover:text-white" onClick={() => setActiveFilter("all")}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              )}
              {(activeCategory !== "all" || activeFilter !== "all") && (
                <button
                  className="text-xs text-zinc-400 hover:text-white underline"
                  onClick={() => {
                    setActiveCategory("all")
                    setActiveFilter("all")
                  }}
                >
                  Clear all filters
                </button>
              )}
            </div>
          )}

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 pb-20">
            {filteredGroupedProjects[activeWeek]?.map((project) => (
              <motion.div
                key={project.id}
                className="relative overflow-hidden rounded-xl backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                onClick={() => handleProjectClick(project)}
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/90 to-zinc-900/70"></div>

                {/* Glass effect on hover */}
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Project thumbnail */}
                <div className="relative h-32 overflow-hidden">
                  <Image
                    src={project.images[0] || "/placeholder.svg?height=600&width=800&query=project thumbnail"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />

                  {/* Badges overlay */}
                  <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                    {project.featured && (
                      <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white border-0 text-xs">
                        <Award className="h-3 w-3 mr-1" />
                        <span className="hidden xs:inline">Featured</span>
                      </Badge>
                    )}
                    {project.trending && (
                      <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0 text-xs">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        <span className="hidden xs:inline">Trending</span>
                      </Badge>
                    )}
                  </div>

                  {/* Category badge */}
                  <div className="absolute bottom-2 left-2">
                    <Badge className="bg-black/50 backdrop-blur-sm text-zinc-300 border-zinc-700/50 text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  {/* Upvote button */}
                  <div className="absolute top-2 right-2">
                    <motion.button
                      className={cn(
                        "flex items-center justify-center h-10 rounded-full px-3 transition-colors relative overflow-hidden",
                        upvotedProjects[project.id]
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                          : "bg-black/50 backdrop-blur-sm text-zinc-300 hover:bg-zinc-700/80 border border-white/10",
                      )}
                      onClick={(e) => handleUpvote(e, project.id)}
                      whileTap={{ scale: 0.9 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        initial={{ y: 0 }}
                        animate={upvotedProjects[project.id] ? { y: [-20, 0] } : {}}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="flex items-center gap-1"
                      >
                        <ArrowUp className="h-5 w-5" />
                        <span className="text-xs font-medium">{upvotedProjects[project.id] ? "Voted" : "Upvote"}</span>
                      </motion.div>

                      {/* Particle effects when upvoted */}
                      {upvotedProjects[project.id] && (
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          initial="initial"
                          animate="animate"
                        >
                          {[...Array(6)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1 h-1 rounded-full bg-white"
                              initial={{
                                opacity: 1,
                                x: 0,
                                y: 0,
                              }}
                              animate={{
                                opacity: 0,
                                x: (i % 2 === 0 ? 1 : -1) * (Math.random() * 20 + 10),
                                y: -Math.random() * 20 - 10,
                              }}
                              transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: i * 0.05,
                              }}
                              style={{
                                top: "50%",
                                left: "50%",
                              }}
                            />
                          ))}
                        </motion.div>
                      )}
                    </motion.button>
                  </div>
                </div>

                {/* Project info */}
                <div className="p-3">
                  <div className="flex justify-between items-start mb-1">
                    <h3 className="text-base font-medium text-white line-clamp-1">{project.title}</h3>
                    <div className="flex items-center text-sm font-medium">
                      <span
                        className={cn("text-xs", upvotedProjects[project.id] ? "text-purple-400" : "text-zinc-400")}
                      >
                        {upvotedProjects[project.id] ? project.upvotes + 1 : project.upvotes}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-400 line-clamp-2 mb-2 h-8">{project.description}</p>

                  <div className="flex items-center justify-between text-xs text-zinc-500">
                    <div className="flex items-center">
                      <div className="relative h-4 w-4 rounded-full overflow-hidden mr-1">
                        <Image
                          src={project.creatorImage || "/placeholder.svg?height=40&width=40&query=user avatar"}
                          alt={project.creator}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <span>@{project.creatorUsername}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center">
                        <MessageSquare className="h-3 w-3 mr-1" />
                        <span>{project.comments}</span>
                      </div>

                      <div className="flex items-center text-zinc-500">
                        <Bookmark className="h-3 w-3" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Empty state when no projects found */}
            {(!filteredGroupedProjects[activeWeek] || filteredGroupedProjects[activeWeek].length === 0) && (
              <motion.div
                className="flex flex-col items-center justify-center py-16 text-center bg-zinc-900/50 rounded-xl backdrop-blur-sm border border-white/10 col-span-1 sm:col-span-2 lg:col-span-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-zinc-800/50 rounded-full p-4 mb-4">
                  <Search className="h-8 w-8 text-zinc-500" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No projects found</h3>
                <p className="text-zinc-400 max-w-md">
                  {searchQuery || activeCategory !== "all" || activeFilter !== "all"
                    ? "Try adjusting your search terms or filters to find what you're looking for."
                    : "There are no projects for this week yet. Check back soon or browse other weeks."}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </main>

      {/* Fixed Filter Toggle Button */}
      <div className="fixed bottom-24 sm:bottom-6 right-6 z-30">
        <motion.button
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white p-3 rounded-full flex items-center justify-center shadow-lg"
          onClick={toggleFilterDrawer}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <SlidersHorizontal className="h-6 w-6" />
        </motion.button>
      </div>

      {/* Filter Drawer */}
      <AnimatePresence>
        {isFilterDrawerOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeFilterDrawer}
            />

            {/* Drawer */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-white/10 rounded-t-2xl z-50 max-h-[80vh] overflow-y-auto"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Drawer Handle */}
              <div className="sticky top-0 bg-zinc-900 pt-3 pb-2 px-4 flex justify-between items-center border-b border-white/10 z-10">
                <div className="mx-auto w-12 h-1.5 bg-zinc-700 rounded-full"></div>
                <button
                  onClick={closeFilterDrawer}
                  className="absolute right-4 top-3 p-1 rounded-full bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6">
                <h2 className="text-xl font-bold text-white mb-4">Filters</h2>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-zinc-400 mb-3">Categories</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {categories.map((category) => (
                      <motion.button
                        key={category.id}
                        className={cn(
                          "px-3 py-2 rounded-xl flex items-center text-sm transition-colors",
                          activeCategory === category.id
                            ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                            : "bg-zinc-800/80 text-zinc-400 hover:bg-zinc-700/80 hover:text-white border border-white/10",
                        )}
                        onClick={() => setActiveCategory(category.id)}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="mr-2">{category.icon}</span>
                        {category.label}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Status Filters */}
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-zinc-400 mb-3">Status</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {statusFilters.map((filter) => (
                      <motion.button
                        key={filter.id}
                        className={cn(
                          "px-3 py-2 rounded-xl flex items-center justify-center text-sm transition-colors",
                          activeFilter === filter.id
                            ? filter.id === "trending"
                              ? "bg-gradient-to-r from-green-500 to-emerald-500 text-white"
                              : filter.id === "featured"
                                ? "bg-gradient-to-r from-yellow-500 to-amber-500 text-white"
                                : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                            : "bg-zinc-800/80 text-zinc-400 hover:bg-zinc-700/80 hover:text-white border border-white/10",
                        )}
                        onClick={() => setActiveFilter(filter.id)}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="mr-2">{filter.icon}</span>
                        {filter.label}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1 bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
                    onClick={() => {
                      setActiveCategory("all")
                      setActiveFilter("all")
                    }}
                  >
                    Reset Filters
                  </Button>

                  <Button
                    className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    onClick={() => applyFilter(activeCategory, activeFilter)}
                  >
                    Apply Filters
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Project Drawer */}
      <AnimatePresence>
        {isDrawerOpen && selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeDrawer}
            />

            {/* Drawer */}
            <motion.div
              className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-white/10 rounded-t-2xl z-50 max-h-[80vh] sm:max-h-[90vh] overflow-y-auto pb-20 sm:pb-24"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              {/* Drawer Handle */}
              <div className="sticky top-0 bg-zinc-900 pt-3 pb-2 px-4 flex justify-between items-center border-b border-white/10 z-10">
                <div className="mx-auto w-12 h-1.5 bg-zinc-700 rounded-full"></div>
                <button
                  onClick={closeDrawer}
                  className="absolute right-4 top-3 p-1 rounded-full bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-4 sm:p-6">
                {/* Project Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 mb-4 sm:mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h2>
                    <div className="flex items-center">
                      <div className="relative h-6 w-6 sm:h-8 sm:w-8 rounded-full overflow-hidden mr-2">
                        <Image
                          src={
                            selectedProject.creatorImage ||
                            "/placeholder.svg?height=80&width=80&query=user profile" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg" ||
                            "/placeholder.svg"
                          }
                          alt={selectedProject.creator}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm sm:text-base">{selectedProject.creator}</p>
                        <p className="text-zinc-400 text-xs sm:text-sm">@{selectedProject.creatorUsername}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end sm:self-start">
                    <Link href={`/projects/${selectedProject.slug}`}>
                      <Button
                        variant="outline"
                        className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 h-8 sm:h-10 text-xs sm:text-sm px-2 sm:px-3"
                      >
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
                        View Full
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Project Images */}
                <div className="mb-8 overflow-hidden rounded-xl">
                  <div className="relative aspect-video">
                    <Image
                      src={
                        selectedProject.images[0] ||
                        "/placeholder.svg?height=600&width=800&query=project screenshot" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg" ||
                        "/placeholder.svg"
                      }
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>

                  {/* Thumbnails */}
                  <div className="flex gap-2 mt-2">
                    {selectedProject.images.slice(1).map((image, index) => (
                      <div key={index} className="relative h-20 w-32 rounded-lg overflow-hidden">
                        <Image
                          src={image || "/placeholder.svg?height=200&width=320&query=project thumbnail"}
                          alt={`${selectedProject.title} screenshot ${index + 2}`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Info */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-3">About this project</h3>
                  <p className="text-zinc-300 mb-6">{selectedProject.longDescription}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-zinc-800/50 border-zinc-700 text-zinc-300">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-2">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <Badge key={tech} className="bg-purple-600/20 text-purple-300 border-purple-800">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    <Button
                      variant="outline"
                      className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
                      asChild
                    >
                      <Link href={selectedProject.website} target="_blank">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Visit Website
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
                      asChild
                    >
                      <Link href={selectedProject.github} target="_blank">
                        <svg
                          className="h-4 w-4 mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        View Code
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Fixed Action Buttons */}
              <div className="fixed bottom-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-md border-t border-white/10 py-3 px-4 z-50">
                <div className="flex justify-between items-center max-w-6xl mx-auto">
                  <div className="flex gap-2 sm:gap-4">
                    <motion.button
                      className={cn(
                        "flex items-center gap-1 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-colors text-sm sm:text-base relative overflow-hidden",
                        upvotedProjects[selectedProject.id]
                          ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                          : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white",
                      )}
                      onClick={(e) => handleUpvote(e, selectedProject.id)}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      <motion.div
                        initial={{ y: 0 }}
                        animate={upvotedProjects[selectedProject.id] ? { y: [-5, 0] } : {}}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        className="flex items-center gap-1 sm:gap-2"
                      >
                        <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
                        <motion.span
                          initial={{ scale: 1 }}
                          animate={upvotedProjects[selectedProject.id] ? { scale: [1, 1.3, 1] } : {}}
                          transition={{ duration: 0.3 }}
                        >
                          {upvotedProjects[selectedProject.id] ? "Voted" : "Upvote"} (
                          {upvotedProjects[selectedProject.id] ? selectedProject.upvotes + 1 : selectedProject.upvotes})
                        </motion.span>
                      </motion.div>

                      {/* Particle effects when upvoted */}
                      {upvotedProjects[selectedProject.id] && (
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          initial="initial"
                          animate="animate"
                        >
                          {[...Array(8)].map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-1.5 h-1.5 rounded-full bg-white"
                              initial={{
                                opacity: 1,
                                x: 0,
                                y: 0,
                              }}
                              animate={{
                                opacity: 0,
                                x: (i % 2 === 0 ? 1 : -1) * (Math.random() * 30 + 15),
                                y: -Math.random() * 30 - 15,
                              }}
                              transition={{
                                duration: 0.8,
                                ease: "easeOut",
                                delay: i * 0.05,
                              }}
                              style={{
                                top: "50%",
                                left: "30%",
                              }}
                            />
                          ))}
                        </motion.div>
                      )}
                    </motion.button>

                    <motion.button
                      className="flex items-center gap-1 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white text-sm sm:text-base"
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageSquare className="h-5 w-5 sm:h-6 sm:w-6" />
                      <span>{selectedProject.comments}</span>
                    </motion.button>
                  </div>

                  <div className="flex gap-2">
                    <motion.button
                      className="flex items-center gap-1 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white text-sm sm:text-base"
                      onClick={() => generateShareImage(selectedProject)}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Download className="h-5 w-5 sm:h-6 sm:w-6" />
                      <span className="hidden sm:inline">Share Image</span>
                    </motion.button>

                    <motion.button
                      className="flex items-center gap-1 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white text-sm sm:text-base"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => shareProject(selectedProject)}
                    >
                      <Share2 className="h-5 w-5 sm:h-6 sm:w-6" />
                      <span className="hidden sm:inline">Share</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Share Image Preview */}
      <ShareImagePreview
        project={selectedProject}
        isOpen={isShareImagePreviewOpen}
        onClose={() => setIsShareImagePreviewOpen(false)}
      />

      {/* Footer - Hidden on this page */}
      <div className="hidden">
        <MinimalFooter />
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
        <div className="bg-zinc-900/80 backdrop-blur-lg border-t border-white/10 px-4 py-2">
          <div className="flex items-center justify-around">
            <Link
              href="/"
              className="flex flex-col items-center py-1 px-3 text-zinc-400 hover:text-white transition-colors"
            >
              <Home className="h-6 w-6 mb-1" />
              <span className="text-xs">Home</span>
            </Link>

            <Link href="/projects" className="flex flex-col items-center py-1 px-3 text-purple-400 relative">
              <div className="absolute -top-3 left-0 right-0 mx-auto w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-blue-500"></div>
              <Layout className="h-6 w-6 mb-1" />
              <span className="text-xs">Projects</span>
            </Link>

            <div className="relative flex justify-center">
              <div className="absolute -top-5">
                <Link
                  href="/submit"
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                >
                  <PlusCircle className="h-6 w-6" />
                </Link>
              </div>
              <div className="h-6 w-12"></div>
            </div>

            <Link
              href="/profile/alexj"
              className="flex flex-col items-center py-1 px-3 text-zinc-400 hover:text-white transition-colors"
            >
              <User className="h-6 w-6 mb-1" />
              <span className="text-xs">Profile</span>
            </Link>

            <button className="flex flex-col items-center py-1 px-3 text-zinc-400 hover:text-white transition-colors">
              <Bell className="h-6 w-6 mb-1" />
              <span className="text-xs">Alerts</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
