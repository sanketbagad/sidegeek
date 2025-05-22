"use client"

import { useState } from "react"
import {
  ArrowUpRight,
  Award,
  BarChart3,
  Calendar,
  Crown,
  FlameIcon as Fire,
  Home,
  Layers,
  MessageSquare,
  Search,
  Settings,
  Star,
  TrendingUp,
  Users,
  Bell,
  User,
  FolderKanban,
  PlusIcon,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Dashboard analytics data
const weeklySubmissions = [
  { name: "Week 17", value: 42 },
  { name: "Week 18", value: 58 },
  { name: "Week 19", value: 65 },
  { name: "Week 20", value: 81 },
  { name: "Week 21", value: 93 },
]

const categoryDistribution = [
  { name: "AI Tools", value: 35 },
  { name: "Productivity", value: 25 },
  { name: "Health", value: 15 },
  { name: "Finance", value: 12 },
  { name: "Travel", value: 8 },
  { name: "Other", value: 5 },
]

const engagementData = [
  { name: "Week 17", upvotes: 320, comments: 120 },
  { name: "Week 18", upvotes: 450, comments: 180 },
  { name: "Week 19", upvotes: 520, comments: 210 },
  { name: "Week 20", upvotes: 680, comments: 250 },
  { name: "Week 21", upvotes: 790, comments: 310 },
]

// Previous winners data
const previousWinners = [
  {
    id: 1,
    week: "Week 21",
    name: "CodeAssist AI",
    description: "AI-powered coding assistant with real-time suggestions and error detection",
    upvotes: 1243,
    comments: 89,
    image: "/ai-code-editor.png",
    creator: {
      name: "David Chen",
      avatar: "/asian-man-portrait.png",
    },
  },
  {
    id: 2,
    week: "Week 20",
    name: "HealthTrack Pro",
    description: "Comprehensive health monitoring with AI-powered insights and recommendations",
    upvotes: 1105,
    comments: 76,
    image: "/health-tracking-app.png",
    creator: {
      name: "Sarah Johnson",
      avatar: "/woman-portrait.png",
    },
  },
  {
    id: 3,
    week: "Week 19",
    name: "FinanceFlow",
    description: "Personal finance management with automated budgeting and investment tracking",
    upvotes: 987,
    comments: 64,
    image: "/finance-app-dashboard.png",
    creator: {
      name: "Miguel Rodriguez",
      avatar: "/latino-man-portrait.png",
    },
  },
]

// Staff picks data
const staffPicks = [
  {
    id: 1,
    name: "TaskMaster",
    description: "Revolutionary task management with AI prioritization and team collaboration",
    upvotes: 876,
    image: "/task-management-dashboard.png",
    creator: {
      name: "Aisha Khan",
      avatar: "/woman-hijab-portrait.png",
    },
    staffNote: "Exceptional UI design and innovative features",
  },
  {
    id: 2,
    name: "EcoTracker",
    description: "Sustainability app that helps users reduce their carbon footprint",
    upvotes: 742,
    image: "/sustainability-app-dashboard.png",
    creator: {
      name: "James Wilson",
      avatar: "/thoughtful-man-portrait.png",
    },
    staffNote: "Meaningful impact with beautiful execution",
  },
  {
    id: 3,
    name: "WritePro AI",
    description: "AI-powered writing assistant for content creators and professionals",
    upvotes: 689,
    image: "/writing-app-interface.png",
    creator: {
      name: "Zara Ahmed",
      avatar: "/diverse-woman-portrait.png",
    },
    staffNote: "Innovative use of AI with exceptional UX",
  },
]

// Trending categories data
const trendingCategories = [
  { name: "AI Tools", growth: "+28%", projects: 156 },
  { name: "No-Code Platforms", growth: "+22%", projects: 124 },
  { name: "Health Tech", growth: "+19%", projects: 98 },
  { name: "Climate Solutions", growth: "+17%", projects: 87 },
  { name: "Remote Work", growth: "+15%", projects: 76 },
]

// Upcoming events data
const upcomingEvents = [
  {
    name: "Launch Week 22",
    date: "May 26 - June 1",
    description: "Submit your projects for Week 22 competition",
  },
  {
    name: "Creator Workshop",
    date: "May 28",
    description: "Learn how to showcase your projects effectively",
  },
  {
    name: "AI Innovation Summit",
    date: "June 5",
    description: "Special event featuring top AI projects",
  },
]

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pb-24 md:pb-16">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30 bg-noise opacity-30"></div>
        <div className="absolute inset-0 bg-grid-white bg-[length:30px_30px] animate-grid-flow opacity-10"></div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-blue-500">
                Dashboard
              </h1>
              <p className="text-gray-300 mt-2">Insights, winners, and curated projects from the SideGeek community</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  className="bg-gray-800/50 border border-gray-700 rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-full md:w-64"
                />
              </div>
              <button className="p-2 rounded-full bg-gray-800/50 border border-gray-700">
                <Settings className="h-5 w-5 text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-6">
        {/* Dashboard Tabs */}
        <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="bg-gray-800/50 border border-gray-700 p-1 rounded-full w-full md:w-auto">
            <TabsTrigger
              value="overview"
              className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="winners"
              className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
            >
              Winners
            </TabsTrigger>
            <TabsTrigger
              value="analytics"
              className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
            >
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="staff-picks"
              className="rounded-full data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
            >
              Staff Picks
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab Content */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Stats Cards */}
              <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                <StatsCard
                  title="Total Projects"
                  value="1,248"
                  change="+18%"
                  icon={<Layers className="h-5 w-5 text-purple-400" />}
                />
                <StatsCard
                  title="Active Users"
                  value="8,392"
                  change="+24%"
                  icon={<Users className="h-5 w-5 text-blue-400" />}
                />
                <StatsCard
                  title="Weekly Upvotes"
                  value="12,847"
                  change="+32%"
                  icon={<TrendingUp className="h-5 w-5 text-green-400" />}
                />
                <StatsCard
                  title="Engagement Rate"
                  value="68%"
                  change="+7%"
                  icon={<MessageSquare className="h-5 w-5 text-pink-400" />}
                />
              </div>

              {/* Latest Winner */}
              <div className="col-span-1 md:col-span-2">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Award className="h-5 w-5 mr-2 text-yellow-400" />
                  Latest Winner
                </h2>
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 p-1">
                  <div className="absolute top-0 right-0 bg-gradient-to-bl from-yellow-500 to-amber-600 text-white px-4 py-1 rounded-bl-lg font-medium text-sm z-10">
                    Week 21 Winner
                  </div>
                  <div className="relative aspect-[16/9] rounded-lg overflow-hidden">
                    <Image
                      src={previousWinners[0].image || "/placeholder.svg"}
                      alt={previousWinners[0].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold">{previousWinners[0].name}</h3>
                      <div className="flex items-center gap-1 text-yellow-400">
                        <Crown className="h-5 w-5" />
                        <span className="font-semibold">{previousWinners[0].upvotes.toLocaleString()} upvotes</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{previousWinners[0].description}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden">
                          <Image
                            src={previousWinners[0].creator.avatar || "/placeholder.svg"}
                            alt={previousWinners[0].creator.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <span className="text-sm text-gray-300">{previousWinners[0].creator.name}</span>
                      </div>
                      <Link
                        href={`/projects/${previousWinners[0].id}`}
                        className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors"
                      >
                        <span>View Project</span>
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Weekly Submissions Chart */}
              <div className="col-span-1">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <BarChart3 className="h-5 w-5 mr-2 text-blue-400" />
                  Weekly Submissions
                </h2>
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-xl p-4 h-[300px]">
                  <div className="h-[250px] flex flex-col">
                    <div className="flex-1 relative">
                      <div className="absolute inset-0">
                        {/* Y-axis grid lines */}
                        {[0, 1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="absolute left-0 right-0 border-t border-gray-700/50"
                            style={{ top: `${i * 25}%` }}
                          ></div>
                        ))}

                        {/* Bars */}
                        <div className="absolute inset-0 flex items-end justify-around pt-6 pb-6">
                          {weeklySubmissions.map((item, index) => {
                            // Calculate height percentage based on max value
                            const maxValue = Math.max(...weeklySubmissions.map((item) => item.value))
                            const heightPercentage = (item.value / maxValue) * 100

                            return (
                              <div key={index} className="flex flex-col items-center group">
                                <div className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity absolute -top-6">
                                  {item.value} projects
                                </div>
                                <div
                                  className="w-8 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t-md relative group"
                                  style={{ height: `${heightPercentage}%` }}
                                ></div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>

                    {/* X-axis labels */}
                    <div className="h-6 flex justify-around mt-2">
                      {weeklySubmissions.map((item, index) => (
                        <div key={index} className="text-xs text-gray-400">
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Trending Categories */}
              <div className="col-span-1">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Fire className="h-5 w-5 mr-2 text-orange-400" />
                  Trending Categories
                </h2>
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-xl p-4">
                  <div className="space-y-4">
                    {trendingCategories.map((category, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div
                            className={`h-2 w-2 rounded-full ${
                              index === 0
                                ? "bg-purple-500"
                                : index === 1
                                  ? "bg-blue-500"
                                  : index === 2
                                    ? "bg-green-500"
                                    : index === 3
                                      ? "bg-yellow-500"
                                      : "bg-pink-500"
                            }`}
                          ></div>
                          <span>{category.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-green-400">{category.growth}</span>
                          <span className="text-xs text-gray-400">{category.projects} projects</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Staff Picks Preview */}
              <div className="col-span-1 md:col-span-2">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Star className="h-5 w-5 mr-2 text-amber-400" />
                  Staff Picks
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {staffPicks.slice(0, 2).map((project) => (
                    <div
                      key={project.id}
                      className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-xl p-1"
                    >
                      <div className="relative aspect-video rounded-lg overflow-hidden">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                          <div className="flex items-center gap-2">
                            <div className="bg-amber-500 rounded-full p-1">
                              <Star className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-xs font-medium">Staff Pick</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-3">
                        <h3 className="font-semibold">{project.name}</h3>
                        <p className="text-xs text-gray-300 line-clamp-1 mt-1">{project.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upcoming Events */}
              <div className="col-span-1">
                <h2 className="text-xl font-semibold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-blue-400" />
                  Upcoming Events
                </h2>
                <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-xl p-4">
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="border-l-2 border-purple-500 pl-3 py-1">
                        <h4 className="font-medium">{event.name}</h4>
                        <p className="text-xs text-purple-300 mt-1">{event.date}</p>
                        <p className="text-xs text-gray-400 mt-1">{event.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Winners Tab Content */}
          <TabsContent value="winners" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-2 text-yellow-400" />
                  Hall of Fame
                </h2>

                <div className="space-y-8">
                  {previousWinners.map((winner) => (
                    <div
                      key={winner.id}
                      className="flex flex-col md:flex-row gap-6 border-b border-gray-700 pb-8 last:border-0 last:pb-0"
                    >
                      <div className="w-full md:w-1/3 relative aspect-video rounded-xl overflow-hidden">
                        <Image
                          src={winner.image || "/placeholder.svg"}
                          alt={winner.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 right-0 bg-gradient-to-bl from-yellow-500 to-amber-600 text-white px-3 py-1 rounded-bl-lg font-medium text-sm">
                          {winner.week} Winner
                        </div>
                      </div>

                      <div className="w-full md:w-2/3">
                        <div className="flex flex-col md:flex-row justify-between md:items-center mb-3">
                          <h3 className="text-xl font-bold">{winner.name}</h3>
                          <div className="flex items-center gap-4 mt-2 md:mt-0">
                            <div className="flex items-center gap-1">
                              <Crown className="h-5 w-5 text-yellow-400" />
                              <span>{winner.upvotes.toLocaleString()} upvotes</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-5 w-5 text-blue-400" />
                              <span>{winner.comments} comments</span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-300 mb-4">{winner.description}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="relative h-10 w-10 rounded-full overflow-hidden">
                              <Image
                                src={winner.creator.avatar || "/placeholder.svg"}
                                alt={winner.creator.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <div>
                              <p className="font-medium">{winner.creator.name}</p>
                              <p className="text-xs text-gray-400">Creator</p>
                            </div>
                          </div>

                          <Link
                            href={`/projects/${winner.id}`}
                            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-all"
                          >
                            <span>View Project</span>
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Analytics Tab Content */}
          <TabsContent value="analytics" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Engagement Chart */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Weekly Engagement</h2>
                <div className="h-[300px]">
                  <div className="h-full flex flex-col">
                    <div className="flex-1 relative">
                      <div className="absolute inset-0">
                        {/* Y-axis grid lines */}
                        {[0, 1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="absolute left-0 right-0 border-t border-gray-700/50"
                            style={{ top: `${i * 25}%` }}
                          ></div>
                        ))}

                        {/* Line chart */}
                        <svg
                          className="absolute inset-0 h-full w-full"
                          viewBox="0 0 100 100"
                          preserveAspectRatio="none"
                        >
                          {/* Upvotes line */}
                          <polyline
                            points={engagementData
                              .map((item, i) => {
                                const maxUpvotes = Math.max(...engagementData.map((d) => d.upvotes))
                                const x = (i / (engagementData.length - 1)) * 100
                                const y = 100 - (item.upvotes / maxUpvotes) * 100
                                return `${x},${y}`
                              })
                              .join(" ")}
                            fill="none"
                            stroke="#8b5cf6"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          {/* Comments line */}
                          <polyline
                            points={engagementData
                              .map((item, i) => {
                                const maxComments = Math.max(...engagementData.map((d) => d.comments))
                                const x = (i / (engagementData.length - 1)) * 100
                                const y = 100 - (item.comments / maxComments) * 100
                                return `${x},${y}`
                              })
                              .join(" ")}
                            fill="none"
                            stroke="#60a5fa"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          {/* Data points for upvotes */}
                          {engagementData.map((item, i) => {
                            const maxUpvotes = Math.max(...engagementData.map((d) => d.upvotes))
                            const x = (i / (engagementData.length - 1)) * 100
                            const y = 100 - (item.upvotes / maxUpvotes) * 100
                            return (
                              <circle
                                key={`upvote-${i}`}
                                cx={x}
                                cy={y}
                                r="1.5"
                                fill="#8b5cf6"
                                stroke="#1f2937"
                                strokeWidth="1"
                              />
                            )
                          })}

                          {/* Data points for comments */}
                          {engagementData.map((item, i) => {
                            const maxComments = Math.max(...engagementData.map((d) => d.comments))
                            const x = (i / (engagementData.length - 1)) * 100
                            const y = 100 - (item.comments / maxComments) * 100
                            return (
                              <circle
                                key={`comment-${i}`}
                                cx={x}
                                cy={y}
                                r="1.5"
                                fill="#60a5fa"
                                stroke="#1f2937"
                                strokeWidth="1"
                              />
                            )
                          })}
                        </svg>
                      </div>
                    </div>

                    {/* X-axis labels */}
                    <div className="h-6 flex justify-between mt-2 px-2">
                      {engagementData.map((item, index) => (
                        <div key={index} className="text-xs text-gray-400">
                          {item.name}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-6 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-purple-500"></div>
                    <span className="text-sm">Upvotes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                    <span className="text-sm">Comments</span>
                  </div>
                </div>
              </div>

              {/* Category Distribution */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Category Distribution</h2>
                <div className="h-[300px] flex items-center justify-center">
                  <div className="flex flex-col items-center justify-center h-[250px]">
                    <div className="relative w-48 h-48">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        {categoryDistribution.map((category, i) => {
                          // Calculate each slice of the pie
                          const total = categoryDistribution.reduce((sum, cat) => sum + cat.value, 0)
                          const startAngle = categoryDistribution
                            .slice(0, i)
                            .reduce((sum, cat) => sum + (cat.value / total) * 360, 0)
                          const endAngle = startAngle + (category.value / total) * 360

                          // Convert angles to radians and calculate x,y coordinates
                          const startRad = (startAngle - 90) * (Math.PI / 180)
                          const endRad = (endAngle - 90) * (Math.PI / 180)

                          const x1 = 50 + 50 * Math.cos(startRad)
                          const y1 = 50 + 50 * Math.sin(startRad)
                          const x2 = 50 + 50 * Math.cos(endRad)
                          const y2 = 50 + 50 * Math.sin(endRad)

                          // Determine if the arc should be drawn as a large arc
                          const largeArcFlag = endAngle - startAngle > 180 ? 1 : 0

                          // Colors for each slice
                          const colors = ["#8b5cf6", "#60a5fa", "#34d399", "#fbbf24", "#f87171", "#9ca3af"]

                          return (
                            <path
                              key={i}
                              d={`M 50 50 L ${x1} ${y1} A 50 50 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                              fill={colors[i % colors.length]}
                              stroke="#1f2937"
                              strokeWidth="0.5"
                            />
                          )
                        })}
                      </svg>
                    </div>
                    <div className="grid grid-cols-3 gap-2 mt-6 w-full">
                      {categoryDistribution.map((category, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div
                            className={`h-3 w-3 rounded-full ${
                              index === 0
                                ? "bg-purple-500"
                                : index === 1
                                  ? "bg-blue-500"
                                  : index === 2
                                    ? "bg-green-500"
                                    : index === 3
                                      ? "bg-yellow-500"
                                      : index === 4
                                        ? "bg-red-500"
                                        : "bg-gray-500"
                            }`}
                          ></div>
                          <span className="text-xs">{category.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* User Growth */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">User Growth</h2>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-gray-400">Total Users</p>
                    <p className="text-3xl font-bold">8,392</p>
                    <p className="text-sm text-green-400">+24% from last month</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">New This Week</p>
                    <p className="text-3xl font-bold">412</p>
                    <p className="text-sm text-green-400">+18% from last week</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Active Users</span>
                      <span>78%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        style={{ width: "78%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Project Creators</span>
                      <span>42%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        style={{ width: "42%" }}
                      ></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Returning Visitors</span>
                      <span>65%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full">
                      <div
                        className="h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                        style={{ width: "65%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Performing Days */}
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6">
                <h2 className="text-xl font-semibold mb-4">Top Performing Days</h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-purple-500/20 rounded-full p-3">
                      <Calendar className="h-6 w-6 text-purple-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium">Monday, May 19</p>
                        <p className="text-green-400">+156 projects</p>
                      </div>
                      <div className="h-1.5 bg-gray-700 rounded-full mt-2">
                        <div
                          className="h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          style={{ width: "92%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500/20 rounded-full p-3">
                      <Calendar className="h-6 w-6 text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium">Thursday, May 15</p>
                        <p className="text-green-400">+124 projects</p>
                      </div>
                      <div className="h-1.5 bg-gray-700 rounded-full mt-2">
                        <div
                          className="h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          style={{ width: "78%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500/20 rounded-full p-3">
                      <Calendar className="h-6 w-6 text-green-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <p className="font-medium">Sunday, May 18</p>
                        <p className="text-green-400">+98 projects</p>
                      </div>
                      <div className="h-1.5 bg-gray-700 rounded-full mt-2">
                        <div
                          className="h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
                          style={{ width: "65%" }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Staff Picks Tab Content */}
          <TabsContent value="staff-picks" className="mt-6">
            <div className="grid grid-cols-1 gap-6">
              <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700 rounded-xl p-6">
                <h2 className="text-2xl font-bold mb-6 flex items-center">
                  <Star className="h-6 w-6 mr-2 text-amber-400" />
                  Staff Picks
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {staffPicks.map((project) => (
                    <div
                      key={project.id}
                      className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-xl overflow-hidden"
                    >
                      <div className="relative aspect-video">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.name}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-0 right-0 bg-amber-500 text-white px-3 py-1 rounded-bl-lg font-medium text-sm flex items-center gap-1">
                          <Star className="h-3 w-3" />
                          Staff Pick
                        </div>
                      </div>

                      <div className="p-4">
                        <h3 className="text-lg font-bold mb-2">{project.name}</h3>
                        <p className="text-gray-300 text-sm mb-3">{project.description}</p>

                        <div className="bg-gray-800/50 border border-gray-700 rounded-lg p-3 mb-4">
                          <p className="text-sm text-amber-300 font-medium mb-1">Staff Note:</p>
                          <p className="text-xs text-gray-300 italic">"{project.staffNote}"</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="relative h-8 w-8 rounded-full overflow-hidden">
                              <Image
                                src={project.creator.avatar || "/placeholder.svg"}
                                alt={project.creator.name}
                                fill
                                className="object-cover"
                              />
                            </div>
                            <span className="text-sm">{project.creator.name}</span>
                          </div>

                          <div className="flex items-center gap-1 text-purple-400">
                            <TrendingUp className="h-4 w-4" />
                            <span className="text-sm">{project.upvotes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Bottom Navigation for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden">
        <div className="bg-gray-900/80 backdrop-blur-lg border-t border-gray-800 px-4 py-2">
          <div className="flex items-center justify-around">
            <Link href="/" className="flex flex-col items-center py-1">
              <Home className="h-6 w-6 text-gray-400" />
              <span className="text-xs text-gray-400 mt-1">Home</span>
            </Link>

            <Link href="/projects" className="flex flex-col items-center py-1 relative">
              <div className="absolute -top-1 right-0 h-2 w-2 bg-purple-500 rounded-full"></div>
              <FolderKanban className="h-6 w-6 text-gray-400" />
              <span className="text-xs text-gray-400 mt-1">Projects</span>
            </Link>

            <div className="relative flex flex-col items-center">
              <div className="absolute -top-5">
                <Link
                  href="/submit"
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 shadow-lg"
                >
                  <PlusIcon className="h-6 w-6 text-white" />
                </Link>
              </div>
              <div className="h-6"></div>
              <span className="text-xs text-gray-400 mt-1">Submit</span>
            </div>

            <Link href="/profile/username" className="flex flex-col items-center py-1">
              <User className="h-6 w-6 text-gray-400" />
              <span className="text-xs text-gray-400 mt-1">Profile</span>
            </Link>

            <Link href="/alerts" className="flex flex-col items-center py-1">
              <Bell className="h-6 w-6 text-gray-400" />
              <span className="text-xs text-gray-400 mt-1">Alerts</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Stats Card Component
function StatsCard({ title, value, change, icon }) {
  return (
    <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 p-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-gray-400 text-sm">{title}</h3>
        <div className="bg-gray-800/50 rounded-full p-1.5">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-green-400 text-sm font-medium">{change}</p>
      </div>
    </Card>
  )
}
