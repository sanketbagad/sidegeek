"use client"
import { useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import {
  ChevronUp,
  MessageSquare,
  Share2,
  ExternalLink,
  ArrowLeft,
  Calendar,
  ThumbsUp,
  TrendingUp,
  Download,
  Link2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Navbar } from "@/components/navbar"
import { MinimalFooter } from "@/components/minimal-footer"
import { cn } from "@/lib/utils"
import { ShareImagePreview } from "@/components/share-image-preview"
import { toast } from "@/components/ui/use-toast"

// Mock data for projects (same as in projects/page.tsx)
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
    weekNumber: "This Week",
    createdAt: "2 days ago",
    images: ["/task-management-dashboard.png", "/placeholder-yei4c.png", "/task-management-app-calendar.png"],
    featured: true,
    trending: true,
    longDescription:
      "TaskFlow AI is a revolutionary task management system that uses artificial intelligence to automatically prioritize your work based on deadlines, importance, and your personal work patterns. The system learns from your behavior to suggest the optimal time for deep work, meetings, and breaks. With integrations for all major productivity tools, TaskFlow AI becomes your personal productivity assistant that adapts to your unique workflow.",
    techStack: ["React", "Node.js", "TensorFlow", "MongoDB"],
    website: "https://taskflow-ai.example.com",
    github: "https://github.com/example/taskflow-ai",
    problemStatement:
      "Traditional task management tools require manual prioritization and don't adapt to individual work patterns, leading to inefficient time management and missed deadlines.",
    solution:
      "TaskFlow AI uses machine learning to analyze your work habits, meeting patterns, and task completion history to automatically suggest the optimal schedule for your day, adapting in real-time as priorities change.",
    features: [
      "AI-powered task prioritization based on deadlines, importance, and work patterns",
      "Automatic scheduling of deep work sessions, meetings, and breaks",
      "Integration with calendar, email, and project management tools",
      "Personalized productivity insights and recommendations",
      "Collaborative team view with workload balancing suggestions",
    ],
    testimonials: [
      {
        name: "Sarah Chen",
        role: "Product Manager",
        comment:
          "TaskFlow AI has completely transformed how I manage my team's workload. The AI suggestions are surprisingly accurate!",
        image: "/woman-portrait.png",
      },
      {
        name: "Michael Rodriguez",
        role: "Software Engineer",
        comment:
          "I was skeptical at first, but the way TaskFlow learns my productivity patterns has helped me reclaim at least 2 hours every day.",
        image: "/thoughtful-man-portrait.png",
      },
    ],
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
    weekNumber: "This Week",
    createdAt: "3 days ago",
    images: ["/placeholder-z15eg.png", "/sustainability-app-dashboard.png", "/eco-friendly-app-interface.png"],
    featured: false,
    trending: true,
    longDescription:
      "EcoTrack helps you understand and reduce your carbon footprint through personalized tracking and actionable recommendations. The app analyzes your daily activities including transportation, food consumption, energy usage, and shopping habits to calculate your environmental impact. EcoTrack then provides tailored suggestions to help you make more sustainable choices and tracks your progress over time, gamifying the experience of reducing your carbon footprint.",
    techStack: ["Flutter", "Firebase", "Python", "TensorFlow"],
    website: "https://ecotrack.example.com",
    github: "https://github.com/example/ecotrack",
    problemStatement:
      "Most people want to reduce their environmental impact but lack clear visibility into how their daily choices affect their carbon footprint and what specific actions would be most effective.",
    solution:
      "EcoTrack provides personalized carbon footprint tracking and actionable recommendations based on your specific lifestyle, making sustainable living accessible and measurable.",
    features: [
      "Automated carbon footprint calculation based on daily activities",
      "Personalized recommendations for reducing environmental impact",
      "Progress tracking and achievement system",
      "Community challenges and comparative insights",
      "Integration with smart home devices for energy monitoring",
    ],
    testimonials: [
      {
        name: "David Park",
        role: "Environmental Scientist",
        comment:
          "EcoTrack stands out for its scientific accuracy and actionable insights. It's the best carbon footprint app I've recommended to my students.",
        image: "/asian-man-portrait.png",
      },
      {
        name: "Emma Thompson",
        role: "Sustainability Advocate",
        comment:
          "The gamification elements make reducing my carbon footprint feel rewarding rather than restrictive. I've cut my footprint by 30% in three months!",
        image: "/woman-portrait.png",
      },
    ],
  },
  // Additional projects would be included here
]

// Mock comments data
const commentsData = [
  {
    id: "c1",
    author: "Sarah Chen",
    authorImage: "/woman-portrait.png",
    authorUsername: "sarahc",
    content:
      "This is exactly what I've been looking for! The AI prioritization is surprisingly accurate. Have you considered adding integration with Notion?",
    createdAt: "2 hours ago",
    likes: 12,
  },
  {
    id: "c2",
    author: "David Park",
    authorImage: "/asian-man-portrait.png",
    authorUsername: "davidp",
    content:
      "Great implementation! The UI is clean and intuitive. I'd love to see a dark mode option in the next update.",
    createdAt: "5 hours ago",
    likes: 8,
  },
  {
    id: "c3",
    author: "Emma Thompson",
    authorImage: "/woman-portrait.png",
    authorUsername: "emmat",
    content:
      "I've been testing this for a week now and it's already improved my productivity. The way it learns from my work patterns is impressive. One suggestion: it would be helpful to have a weekly summary report.",
    createdAt: "1 day ago",
    likes: 15,
  },
]

// Mock related projects
const getRelatedProjects = (currentSlug: string) => {
  return projectsData.filter((project) => project.slug !== currentSlug).slice(0, 3)
}

export default function ProjectPage() {
  const params = useParams()
  const slug = params.slug as string

  const project = projectsData.find((p) => p.slug === slug)
  const relatedProjects = getRelatedProjects(slug)

  const [activeTab, setActiveTab] = useState("overview")
  const [hasUpvoted, setHasUpvoted] = useState(false)
  const [upvotes, setUpvotes] = useState(project?.upvotes || 0)
  const [selectedImage, setSelectedImage] = useState(project?.images[0] || "")
  const [isShareImagePreviewOpen, setIsShareImagePreviewOpen] = useState(false)

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-zinc-950 to-black text-white">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link href="/projects" className="mt-4 text-purple-400 hover:underline">
          Back to Projects
        </Link>
      </div>
    )
  }

  const handleUpvote = () => {
    // Add a small delay to make the animation more noticeable
    setTimeout(() => {
      setHasUpvoted(!hasUpvoted)
      setUpvotes(hasUpvoted ? upvotes - 1 : upvotes + 1)
    }, 100)
  }

  const generateShareImage = (project: any) => {
    setIsShareImagePreviewOpen(true)
  }

  const shareProject = async () => {
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

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-zinc-950 to-black text-white">
      {/* Header */}
      <Navbar />

      <main className="flex-1 pt-24 md:pt-32 pb-24">
        <div className="container px-4 md:px-6">
          {/* Back Button */}
          <div className="mb-6">
            <Link
              href="/projects"
              className="inline-flex items-center text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </div>

          {/* Project Header */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 border-purple-800">
                  {project.category}
                </Badge>
                {project.featured && (
                  <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white border-0">Featured</Badge>
                )}
                {project.trending && (
                  <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white border-0">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Trending
                  </Badge>
                )}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3">{project.title}</h1>

              <p className="text-zinc-300 text-lg mb-4">{project.description}</p>

              <div className="flex items-center gap-4">
                <div className="flex items-center">
                  <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={project.creatorImage || "/placeholder.svg?height=100&width=100&query=user profile"}
                      alt={project.creator}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                  <div>
                    <p className="text-white font-medium">{project.creator}</p>
                    <p className="text-zinc-400 text-sm">@{project.creatorUsername}</p>
                  </div>
                </div>

                <div className="flex items-center text-zinc-400 text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{project.createdAt}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button
                className={cn(
                  "bg-zinc-800 hover:bg-zinc-700 relative overflow-hidden px-5 py-2.5 h-auto",
                  hasUpvoted && "bg-purple-600/20 text-purple-400 hover:bg-purple-600/30",
                )}
                onClick={handleUpvote}
              >
                <motion.div
                  initial={{ y: 0 }}
                  animate={hasUpvoted ? { y: [-5, 0] } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className="flex items-center"
                >
                  <ChevronUp className="h-6 w-6 sm:h-7 sm:w-7 mr-2" />
                  <motion.span
                    initial={{ scale: 1 }}
                    animate={hasUpvoted ? { scale: [1, 1.3, 1] } : {}}
                    transition={{ duration: 0.3 }}
                    className="text-base"
                  >
                    {upvotes} Upvotes
                  </motion.span>
                </motion.div>

                {/* Particle effects when upvoted */}
                {hasUpvoted && (
                  <motion.div className="absolute inset-0 pointer-events-none" initial="initial" animate="animate">
                    {[...Array(10)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1.5 h-1.5 rounded-full bg-purple-400"
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
              </Button>

              <Button
                variant="outline"
                className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 px-5 py-2.5 h-auto"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                {project.comments} Comments
              </Button>

              <Button
                variant="outline"
                className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 px-5 py-2.5 h-auto"
                onClick={shareProject}
              >
                <Share2 className="h-5 w-5 mr-2" />
                Share
              </Button>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
            {/* Left Column - Images and Info */}
            <div className="lg:col-span-2 space-y-8">
              {/* Main Image */}
              <div className="rounded-xl overflow-hidden border border-white/10">
                <div className="relative aspect-video">
                  <Image
                    src={selectedImage || "/placeholder.svg?height=600&width=800&query=project screenshot"}
                    alt={project.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              {/* Image Gallery */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {project.images.map((image, index) => (
                  <button
                    key={index}
                    className={cn(
                      "relative h-20 w-32 rounded-lg overflow-hidden border-2",
                      selectedImage === image ? "border-purple-500" : "border-transparent hover:border-white/30",
                    )}
                    onClick={() => setSelectedImage(image)}
                  >
                    <Image
                      src={image || "/placeholder.svg?height=200&width=320&query=thumbnail"}
                      alt={`${project.title} screenshot ${index + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </button>
                ))}
              </div>

              {/* Tabs */}
              <Tabs defaultValue="overview" className="w-full" onValueChange={setActiveTab}>
                <TabsList className="bg-zinc-900/50 border border-white/10 w-full justify-start">
                  <TabsTrigger value="overview" className="data-[state=active]:bg-white/10">
                    Overview
                  </TabsTrigger>
                  <TabsTrigger value="features" className="data-[state=active]:bg-white/10">
                    Features
                  </TabsTrigger>
                  <TabsTrigger value="comments" className="data-[state=active]:bg-white/10">
                    Comments ({project.comments})
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="mt-6">
                  <div className="space-y-6">
                    <div>
                      <h2 className="text-xl font-bold text-white mb-3">About this project</h2>
                      <p className="text-zinc-300">{project.longDescription}</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-white mb-3">Problem</h2>
                      <p className="text-zinc-300">{project.problemStatement}</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-white mb-3">Solution</h2>
                      <p className="text-zinc-300">{project.solution}</p>
                    </div>

                    {/* Testimonials */}
                    <div>
                      <h2 className="text-xl font-bold text-white mb-4">What users are saying</h2>
                      <div className="grid gap-4">
                        {project.testimonials.map((testimonial, index) => (
                          <div key={index} className="p-4 rounded-xl bg-zinc-800/50 border border-white/10">
                            <div className="flex items-start gap-3">
                              <div className="relative h-12 w-12 rounded-full overflow-hidden flex-shrink-0">
                                <Image
                                  src={testimonial.image || "/placeholder.svg?height=120&width=120&query=user"}
                                  alt={testimonial.name}
                                  fill
                                  className="object-cover"
                                  unoptimized
                                />
                              </div>
                              <div>
                                <p className="text-zinc-300 italic mb-2">"{testimonial.comment}"</p>
                                <div>
                                  <p className="text-white font-medium">{testimonial.name}</p>
                                  <p className="text-zinc-400 text-sm">{testimonial.role}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="features" className="mt-6">
                  <div>
                    <h2 className="text-xl font-bold text-white mb-4">Key Features</h2>
                    <ul className="space-y-3">
                      {project.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="h-6 w-6 rounded-full bg-purple-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="text-purple-400"
                            >
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </div>
                          <p className="text-zinc-300">{feature}</p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    <h2 className="text-xl font-bold text-white mb-4">Tech Stack</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          className="bg-purple-600/20 text-purple-300 border-purple-800 px-3 py-1 text-sm"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="comments" className="mt-6">
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-white mb-4">Comments ({project.comments})</h2>

                    {/* Comment Form */}
                    <div className="p-4 rounded-xl bg-zinc-800/50 border border-white/10">
                      <textarea
                        placeholder="Share your thoughts about this project..."
                        className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg p-3 text-white placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 min-h-[100px]"
                      />
                      <div className="flex justify-end mt-3">
                        <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white">
                          Post Comment
                        </Button>
                      </div>
                    </div>

                    {/* Comments List */}
                    <div className="space-y-4">
                      {commentsData.map((comment) => (
                        <div key={comment.id} className="p-4 rounded-xl bg-zinc-800/50 border border-white/10">
                          <div className="flex items-start gap-3">
                            <div className="relative h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src={comment.authorImage || "/placeholder.svg?height=100&width=100&query=user"}
                                alt={comment.author}
                                fill
                                className="object-cover"
                                unoptimized
                              />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <div>
                                  <span className="text-white font-medium">{comment.author}</span>
                                  <span className="text-zinc-400 text-sm ml-2">@{comment.authorUsername}</span>
                                </div>
                                <span className="text-zinc-500 text-xs">{comment.createdAt}</span>
                              </div>
                              <p className="text-zinc-300 mb-3">{comment.content}</p>
                              <div className="flex items-center gap-4">
                                <button className="flex items-center gap-1 text-zinc-400 hover:text-white text-sm">
                                  <ThumbsUp className="h-4 w-4" />
                                  <span>{comment.likes}</span>
                                </button>
                                <button className="text-zinc-400 hover:text-white text-sm">Reply</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-8">
              {/* Project Links */}
              <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">Project Links</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 w-full"
                    asChild
                  >
                    <Link href={project.website} target="_blank">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Visit Website
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 w-full"
                    asChild
                  >
                    <Link href={project.github} target="_blank">
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
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                      View Code
                    </Link>
                  </Button>

                  <Button
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full"
                    onClick={() => generateShareImage(project)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Share Image
                  </Button>

                  <Button
                    variant="outline"
                    className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700 w-full"
                    onClick={shareProject}
                  >
                    <Link2 className="h-4 w-4 mr-2" />
                    Copy Project Link
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-zinc-800/50 border-zinc-700 text-zinc-300">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Related Projects */}
              <div className="p-6 rounded-xl bg-zinc-900/50 border border-white/10">
                <h3 className="text-lg font-bold text-white mb-4">Related Projects</h3>
                <div className="space-y-4">
                  {relatedProjects.map((relatedProject) => (
                    <Link key={relatedProject.id} href={`/projects/${relatedProject.slug}`} className="block group">
                      <div className="flex gap-3">
                        <div className="relative h-16 w-24 rounded-lg overflow-hidden flex-shrink-0">
                          <Image
                            src={relatedProject.images[0] || "/placeholder.svg?height=160&width=240&query=project"}
                            alt={relatedProject.title}
                            fill
                            className="object-cover transition-transform group-hover:scale-110"
                            unoptimized
                          />
                        </div>
                        <div>
                          <h4 className="text-white font-medium group-hover:text-purple-400 transition-colors">
                            {relatedProject.title}
                          </h4>
                          <p className="text-zinc-400 text-sm line-clamp-2">{relatedProject.shortDescription}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Action Buttons */}
      <div className="fixed bottom-0 left-0 right-0 bg-zinc-900/95 backdrop-blur-md border-t border-white/10 py-3 px-4 z-50">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="flex gap-2 sm:gap-4">
            <motion.button
              className={cn(
                "flex items-center gap-1 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-colors text-sm sm:text-base relative overflow-hidden",
                hasUpvoted
                  ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white",
              )}
              onClick={handleUpvote}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                initial={{ y: 0 }}
                animate={hasUpvoted ? { y: [-5, 0] } : {}}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="flex items-center gap-1 sm:gap-2"
              >
                <ChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
                <motion.span
                  initial={{ scale: 1 }}
                  animate={hasUpvoted ? { scale: [1, 1.3, 1] } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {upvotes}
                </motion.span>
              </motion.div>

              {/* Particle effects when upvoted */}
              {hasUpvoted && (
                <motion.div className="absolute inset-0 pointer-events-none" initial="initial" animate="animate">
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
              <span>{project.comments}</span>
            </motion.button>
          </div>

          <div className="flex gap-2">
            <motion.button
              className="flex items-center gap-1 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white text-sm sm:text-base"
              onClick={() => generateShareImage(project)}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden sm:inline">Share Image</span>
            </motion.button>

            <motion.button
              className="flex items-center gap-1 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white text-sm sm:text-base"
              whileTap={{ scale: 0.95 }}
              onClick={shareProject}
            >
              <Share2 className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="hidden sm:inline">Share</span>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <MinimalFooter />

      {/* Share Image Preview */}
      <ShareImagePreview
        project={project}
        isOpen={isShareImagePreviewOpen}
        onClose={() => setIsShareImagePreviewOpen(false)}
      />
    </div>
  )
}
