import type { Metadata } from "next"
import Link from "next/link"
import {
  Upload,
  CheckCircle,
  ChevronRight,
  Github,
  Linkedin,
  Twitter,
  Globe,
  User,
  FileText,
  Briefcase,
  GraduationCap,
  Code,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export const metadata: Metadata = {
  title: "Welcome to SideGeek",
  description: "Complete your profile and get started with SideGeek.",
}

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <div className="container mx-auto px-4 py-12">
        {/* Logo and Progress */}
        <div className="flex justify-between items-center mb-12">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-white text-xl font-bold">SideGeek</span>
          </Link>

          <div className="flex items-center gap-2">
            <div className="w-full max-w-[200px] bg-zinc-800 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-purple-600 to-blue-600 h-2.5 rounded-full"
                style={{ width: "33%" }}
              ></div>
            </div>
            <span className="text-zinc-400 text-sm">Step 1 of 3</span>
          </div>
        </div>

        {/* Welcome Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Welcome to SideGeek!</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Let's set up your profile so you can start showcasing your projects and connecting with other creators.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-zinc-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-glow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Tell us about yourself</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-800 shadow-lg bg-zinc-800 flex items-center justify-center">
                      <User className="w-16 h-16 text-zinc-600" />
                    </div>
                    <button
                      className="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full shadow-lg transition-colors"
                      aria-label="Upload profile picture"
                    >
                      <Upload className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-zinc-500 text-sm">Upload a profile picture</p>
                </div>
              </div>

              <div className="md:col-span-2 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-zinc-300">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-purple-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="username" className="text-zinc-300">
                      Username
                    </Label>
                    <Input
                      id="username"
                      placeholder="johndoe"
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-purple-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="bio" className="text-zinc-300">
                    Bio
                  </Label>
                  <Textarea
                    id="bio"
                    placeholder="Tell us about yourself in a few sentences..."
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-purple-500 min-h-[120px]"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-zinc-300">
                    Location
                  </Label>
                  <Input
                    id="location"
                    placeholder="San Francisco, CA"
                    className="bg-zinc-800 border-zinc-700 text-white focus:border-purple-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-glow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Upload your resume</h2>

            <div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center">
              <div className="flex flex-col items-center justify-center">
                <FileText className="w-16 h-16 text-zinc-500 mb-4" />
                <h3 className="text-xl font-medium text-white mb-2">Drag & drop your resume</h3>
                <p className="text-zinc-400 mb-6 max-w-lg mx-auto">
                  Upload your resume to automatically fill in your experience, education, and skills. This helps us
                  match you with relevant projects and showcase your expertise.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-colors flex items-center gap-2">
                    <Upload className="w-5 h-5" />
                    <span>Choose File</span>
                  </button>
                  <button className="px-6 py-2.5 bg-zinc-800 text-zinc-300 rounded-xl hover:bg-zinc-700 transition-colors">
                    I'll do this later
                  </button>
                </div>
                <p className="text-xs text-zinc-500 mt-4">Supported formats: PDF, DOCX, TXT (Max 5MB)</p>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-medium text-white">What we'll extract from your resume:</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-zinc-800/50 rounded-xl p-4 flex flex-col items-center text-center">
                  <Briefcase className="w-8 h-8 text-purple-500 mb-2" />
                  <h4 className="font-medium text-white mb-1">Work Experience</h4>
                  <p className="text-zinc-400 text-sm">Your professional history and achievements</p>
                </div>

                <div className="bg-zinc-800/50 rounded-xl p-4 flex flex-col items-center text-center">
                  <GraduationCap className="w-8 h-8 text-blue-500 mb-2" />
                  <h4 className="font-medium text-white mb-1">Education</h4>
                  <p className="text-zinc-400 text-sm">Your academic background and qualifications</p>
                </div>

                <div className="bg-zinc-800/50 rounded-xl p-4 flex flex-col items-center text-center">
                  <Code className="w-8 h-8 text-purple-500 mb-2" />
                  <h4 className="font-medium text-white mb-1">Skills</h4>
                  <p className="text-zinc-400 text-sm">Technical and soft skills you've developed</p>
                </div>

                <div className="bg-zinc-800/50 rounded-xl p-4 flex flex-col items-center text-center">
                  <CheckCircle className="w-8 h-8 text-blue-500 mb-2" />
                  <h4 className="font-medium text-white mb-1">Achievements</h4>
                  <p className="text-zinc-400 text-sm">Notable accomplishments and certifications</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-zinc-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-glow-sm p-8 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-6">Connect your accounts</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="github" className="text-zinc-300 flex items-center gap-2">
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </Label>
                <Input
                  id="github"
                  placeholder="https://github.com/username"
                  className="bg-zinc-800 border-zinc-700 text-white focus:border-purple-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="linkedin" className="text-zinc-300 flex items-center gap-2">
                  <Linkedin className="w-5 h-5" />
                  <span>LinkedIn</span>
                </Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/in/username"
                  className="bg-zinc-800 border-zinc-700 text-white focus:border-purple-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="twitter" className="text-zinc-300 flex items-center gap-2">
                  <Twitter className="w-5 h-5" />
                  <span>Twitter</span>
                </Label>
                <Input
                  id="twitter"
                  placeholder="https://twitter.com/username"
                  className="bg-zinc-800 border-zinc-700 text-white focus:border-purple-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website" className="text-zinc-300 flex items-center gap-2">
                  <Globe className="w-5 h-5" />
                  <span>Personal Website</span>
                </Label>
                <Input
                  id="website"
                  placeholder="https://yourwebsite.com"
                  className="bg-zinc-800 border-zinc-700 text-white focus:border-purple-500"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <button className="px-6 py-2.5 bg-zinc-800 text-zinc-300 rounded-xl hover:bg-zinc-700 transition-colors">
              Skip for now
            </button>
            <Link
              href="/welcome/interests"
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-colors flex items-center gap-2"
            >
              <span>Continue</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="fixed top-20 right-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl -z-10"></div>
      <div className="fixed bottom-20 left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl -z-10"></div>
    </main>
  )
}
