import { Skeleton } from "@/components/ui/skeleton"
import { Navbar } from "@/components/navbar"
import { MinimalFooter } from "@/components/minimal-footer"

export default function Loading() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-950 pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Profile Header Skeleton */}
          <div className="mb-12 relative">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-8 p-8 bg-zinc-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-glow-sm">
              <Skeleton className="w-32 h-32 rounded-full" />

              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <Skeleton className="h-10 w-48 mb-2" />
                    <Skeleton className="h-5 w-32" />
                  </div>

                  <div className="flex gap-3">
                    <Skeleton className="h-10 w-24" />
                    <Skeleton className="h-10 w-36" />
                  </div>
                </div>

                <Skeleton className="h-4 w-full max-w-3xl mt-6" />
                <Skeleton className="h-4 w-2/3 max-w-2xl mt-2" />

                <div className="mt-6 flex flex-wrap gap-6">
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-24" />
                  <Skeleton className="h-6 w-32" />
                </div>

                <div className="mt-6 flex flex-wrap gap-4">
                  <Skeleton className="h-8 w-24" />
                  <Skeleton className="h-8 w-28" />
                  <Skeleton className="h-8 w-24" />
                  <Skeleton className="h-8 w-28" />
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section Skeleton */}
          <div>
            <Skeleton className="h-8 w-32 mb-6" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6)
                .fill(0)
                .map((_, index) => (
                  <div
                    key={index}
                    className="bg-zinc-900/80 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10"
                  >
                    <Skeleton className="h-48 w-full" />
                    <div className="p-5">
                      <div className="flex justify-between items-start mb-3">
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-8 w-16 rounded-full" />
                      </div>
                      <Skeleton className="h-4 w-full mb-2" />
                      <Skeleton className="h-4 w-2/3 mb-3" />
                      <Skeleton className="h-5 w-24 rounded-full" />
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
      <MinimalFooter />
    </>
  )
}
