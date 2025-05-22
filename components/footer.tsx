import Link from "next/link"
import { Rocket } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 text-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <Rocket className="h-4 w-4" />
              </div>
              <span className="text-xl font-bold">SideGeek</span>
            </div>
            <p className="text-zinc-400 mb-6 max-w-xs">
              The premier platform for creators to share projects, get expert feedback, and win substantial prizes up to
              $1000 monthly.
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3">Subscribe to our newsletter</h4>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-zinc-900/50 border-zinc-800 text-white placeholder:text-zinc-500 rounded-xl"
                />
                <Button className="bg-white text-black hover:bg-zinc-200 rounded-xl">Subscribe</Button>
              </div>
            </div>

          
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">Platform</h3>
            <ul className="space-y-3">
              {["How it works", "Features", "Pricing", "FAQ", "Support"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">Company</h3>
            <ul className="space-y-3">
              {["About", "Blog", "Careers", "Press", "Partners"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-zinc-300">Legal</h3>
            <ul className="space-y-3">
              {["Terms", "Privacy", "Cookies", "Licenses", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-zinc-400 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-zinc-400">&copy; {new Date().getFullYear()} SideGeek. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
