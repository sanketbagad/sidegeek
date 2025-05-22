import Link from "next/link"
import { Rocket } from "lucide-react"

export function MinimalFooter() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 text-white py-8">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0 relative">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white">
              <Rocket className="h-4 w-4" />
            </div>

            {/* Signature-style logo with subtle ink splatter */}
            <div className="relative">
              {/* Ink splatter effects */}
              <div className="absolute -top-2 -left-1 w-3 h-3 bg-purple-500/10 rounded-full blur-sm"></div>
              <div className="absolute -bottom-1 right-2 w-2 h-2 bg-blue-500/10 rounded-full blur-sm"></div>

              {/* Small ink dots */}
              <div className="absolute top-0 left-8 w-1 h-1 bg-purple-400/20 rounded-full"></div>

              <span className="text-xl font-light italic tracking-wide transform -rotate-1">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-blue-400">
                  SideGeek
                </span>
              </span>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-4 md:mb-0">
            {[
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "FAQ", href: "#faq" },
              { label: "Support", href: "#support" },
            ].map((item) => (
              <Link key={item.label} href={item.href} className="text-zinc-400 hover:text-white transition-colors">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex gap-4">
            {["twitter", "facebook", "instagram", "github"].map((social) => (
              <Link
                key={social}
                href={`#${social}`}
                className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                <span className="sr-only">{social}</span>
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
                  className="h-4 w-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="text-zinc-400">&copy; {new Date().getFullYear()} SideGeek. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
