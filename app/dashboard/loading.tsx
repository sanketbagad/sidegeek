import { Layers, Users, TrendingUp, MessageSquare } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function DashboardLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white pb-24 md:pb-16">
      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-blue-900/30 bg-noise opacity-30"></div>
        <div className="absolute inset-0 bg-grid-white bg-[length:30px_30px] animate-grid-flow opacity-10"></div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <Skeleton className="h-10 w-48 bg-gray-800" />
              <Skeleton className="h-5 w-72 bg-gray-800 mt-2" />
            </div>

            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-64 bg-gray-800 rounded-full" />
              <Skeleton className="h-10 w-10 bg-gray-800 rounded-full" />
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto px-4 py-6">
        {/* Dashboard Tabs */}
        <Skeleton className="h-12 w-full md:w-96 bg-gray-800 rounded-full mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            <StatsCardSkeleton icon={<Layers className="h-5 w-5 text-purple-400" />} />
            <StatsCardSkeleton icon={<Users className="h-5 w-5 text-blue-400" />} />
            <StatsCardSkeleton icon={<TrendingUp className="h-5 w-5 text-green-400" />} />
            <StatsCardSkeleton icon={<MessageSquare className="h-5 w-5 text-pink-400" />} />
          </div>

          {/* Latest Winner */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Skeleton className="h-6 w-6 bg-gray-800 rounded-full" />
              <Skeleton className="h-6 w-32 bg-gray-800" />
            </div>
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 p-1">
              <Skeleton className="aspect-[16/9] w-full bg-gray-800 rounded-lg" />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <Skeleton className="h-7 w-48 bg-gray-800" />
                  <Skeleton className="h-6 w-32 bg-gray-800 rounded-full" />
                </div>
                <Skeleton className="h-4 w-full bg-gray-800 mt-2" />
                <Skeleton className="h-4 w-5/6 bg-gray-800 mt-2" />
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <Skeleton className="h-8 w-8 bg-gray-800 rounded-full" />
                    <Skeleton className="h-4 w-24 bg-gray-800" />
                  </div>
                  <Skeleton className="h-6 w-28 bg-gray-800 rounded-full" />
                </div>
              </div>
            </div>
          </div>

          {/* Charts and other content */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Skeleton className="h-6 w-6 bg-gray-800 rounded-full" />
              <Skeleton className="h-6 w-40 bg-gray-800" />
            </div>
            <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 rounded-xl p-4 h-[300px]">
              <Skeleton className="h-full w-full bg-gray-800" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Stats Card Skeleton
function StatsCardSkeleton({ icon }) {
  return (
    <Card className="bg-gradient-to-br from-gray-800/80 to-gray-900/80 border border-gray-700 p-4">
      <div className="flex items-center justify-between mb-2">
        <Skeleton className="h-4 w-24 bg-gray-800" />
        <div className="bg-gray-800/50 rounded-full p-1.5">{icon}</div>
      </div>
      <div className="flex items-end justify-between">
        <Skeleton className="h-8 w-20 bg-gray-800" />
        <Skeleton className="h-5 w-12 bg-gray-800" />
      </div>
    </Card>
  )
}
