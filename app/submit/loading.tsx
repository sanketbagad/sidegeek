export default function Loading() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-16 pb-16">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="h-6 w-32 bg-zinc-800 rounded animate-pulse mb-6"></div>

        <div className="h-8 w-64 bg-zinc-800 rounded animate-pulse mb-2"></div>
        <div className="h-4 w-96 bg-zinc-800 rounded animate-pulse mb-8"></div>

        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-zinc-800 -translate-y-1/2 z-0"></div>

          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="relative z-10 flex flex-col items-center">
              <div className="w-10 h-10 rounded-full bg-zinc-800 animate-pulse"></div>
              <div className="h-3 w-12 bg-zinc-800 rounded animate-pulse mt-2"></div>
            </div>
          ))}
        </div>

        <div className="space-y-6">
          <div>
            <div className="h-4 w-24 bg-zinc-800 rounded animate-pulse mb-2"></div>
            <div className="h-12 w-full bg-zinc-800 rounded animate-pulse"></div>
          </div>

          <div>
            <div className="h-4 w-24 bg-zinc-800 rounded animate-pulse mb-2"></div>
            <div className="h-32 w-full bg-zinc-800 rounded animate-pulse"></div>
          </div>

          <div>
            <div className="h-4 w-24 bg-zinc-800 rounded animate-pulse mb-2"></div>
            <div className="h-12 w-full bg-zinc-800 rounded animate-pulse"></div>
          </div>
        </div>

        <div className="flex justify-end mt-8">
          <div className="h-12 w-24 bg-zinc-800 rounded animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
