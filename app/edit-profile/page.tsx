import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { MinimalFooter } from "@/components/minimal-footer"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Home, Layout, Plus, User, Bell, Upload, Github, Linkedin, Twitter, Globe, Save, ArrowLeft } from "lucide-react"

export const metadata: Metadata = {
  title: "Edit Profile | SideGeek",
  description: "Update your profile information and customize your SideGeek presence.",
}

export default function EditProfilePage() {
  // This would typically come from a database or auth context
  const userData = {
    username: "johndoe",
    name: "John Doe",
    bio: "Product designer and developer passionate about creating innovative solutions.",
    avatar: "/generic-portrait.png",
    email: "john.doe@example.com",
    location: "San Francisco, CA",
    joinDate: "May 2023",
    links: {
      github: "https://github.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      twitter: "https://twitter.com/johndoe",
      website: "https://johndoe.com",
      email: "johndoe@example.com",
    },
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-950 pt-20 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8 flex items-center gap-2">
            <Link
              href={`/profile/${userData.username}`}
              className="flex items-center gap-2 text-zinc-400 hover:text-purple-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Profile</span>
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">Edit Profile</h1>
            <p className="text-zinc-400">Update your profile information and customize your SideGeek presence.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-zinc-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-glow-sm p-6">
                <div className="flex flex-col items-center mb-6">
                  <div className="relative mb-4">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-800 shadow-lg">
                      <Image
                        src={userData.avatar || "/placeholder.svg"}
                        alt={userData.name}
                        width={128}
                        height={128}
                        className="object-cover"
                      />
                    </div>
                    <button
                      className="absolute bottom-0 right-0 bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full shadow-lg transition-colors"
                      aria-label="Change profile picture"
                    >
                      <Upload className="w-4 h-4" />
                    </button>
                  </div>
                  <h2 className="text-xl font-semibold text-white">{userData.name}</h2>
                  <p className="text-zinc-400">@{userData.username}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-zinc-300 mb-2">Profile Completion</h3>
                    <div className="w-full bg-zinc-800 rounded-full h-2.5">
                      <div
                        className="bg-gradient-to-r from-purple-600 to-blue-600 h-2.5 rounded-full"
                        style={{ width: "75%" }}
                      ></div>
                    </div>
                    <p className="text-xs text-zinc-500 mt-1">75% complete</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-zinc-300 mb-2">Member Since</h3>
                    <p className="text-zinc-400">{userData.joinDate}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-zinc-300 mb-2">Email Address</h3>
                    <p className="text-zinc-400">{userData.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Form */}
            <div className="lg:col-span-2">
              <div className="bg-zinc-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-glow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold text-white mb-6">Personal Information</h2>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-zinc-300">
                        Full Name
                      </Label>
                      <Input
                        id="name"
                        defaultValue={userData.name}
                        className="bg-zinc-800 border-zinc-700 text-white focus:border-purple-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username" className="text-zinc-300">
                        Username
                      </Label>
                      <Input
                        id="username"
                        defaultValue={userData.username}
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
                      defaultValue={userData.bio}
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-purple-500 min-h-[120px]"
                    />
                    <p className="text-xs text-zinc-500">Brief description for your profile. URLs are hyperlinked.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="location" className="text-zinc-300">
                      Location
                    </Label>
                    <Input
                      id="location"
                      defaultValue={userData.location}
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-purple-500"
                    />
                  </div>
                </form>
              </div>

              <div className="bg-zinc-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-glow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold text-white mb-6">Social Links</h2>

                <form className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="website" className="text-zinc-300 flex items-center gap-2">
                      <Globe className="w-4 h-4" />
                      <span>Website</span>
                    </Label>
                    <Input
                      id="website"
                      defaultValue={userData.links.website}
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="github" className="text-zinc-300 flex items-center gap-2">
                      <Github className="w-4 h-4" />
                      <span>GitHub</span>
                    </Label>
                    <Input
                      id="github"
                      defaultValue={userData.links.github}
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="linkedin" className="text-zinc-300 flex items-center gap-2">
                      <Linkedin className="w-4 h-4" />
                      <span>LinkedIn</span>
                    </Label>
                    <Input
                      id="linkedin"
                      defaultValue={userData.links.linkedin}
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-purple-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="twitter" className="text-zinc-300 flex items-center gap-2">
                      <Twitter className="w-4 h-4" />
                      <span>Twitter</span>
                    </Label>
                    <Input
                      id="twitter"
                      defaultValue={userData.links.twitter}
                      className="bg-zinc-800 border-zinc-700 text-white focus:border-purple-500"
                    />
                  </div>
                </form>
              </div>

              <div className="bg-zinc-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-glow-sm p-6 mb-8">
                <h2 className="text-xl font-semibold text-white mb-6">Resume</h2>

                <div className="border-2 border-dashed border-zinc-700 rounded-xl p-8 text-center">
                  <div className="flex flex-col items-center justify-center">
                    <Upload className="w-12 h-12 text-zinc-500 mb-4" />
                    <h3 className="text-lg font-medium text-white mb-2">Upload your resume</h3>
                    <p className="text-zinc-400 mb-6 max-w-md">
                      Upload your resume to showcase your experience and skills. We'll automatically extract key
                      information.
                    </p>
                    <div className="flex gap-4">
                      <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-colors">
                        Choose File
                      </button>
                      <button className="px-6 py-2.5 bg-zinc-800 text-zinc-300 rounded-xl hover:bg-zinc-700 transition-colors">
                        Remove
                      </button>
                    </div>
                    <p className="text-xs text-zinc-500 mt-4">Supported formats: PDF, DOCX, TXT (Max 5MB)</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Link
                  href={`/profile/${userData.username}`}
                  className="px-6 py-2.5 bg-zinc-800 text-zinc-300 rounded-xl hover:bg-zinc-700 transition-colors"
                >
                  Cancel
                </Link>
                <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-colors flex items-center gap-2">
                  <Save className="w-5 h-5" />
                  <span>Save Changes</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation Drawer */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-zinc-900/80 backdrop-blur-xl border-t border-white/10">
        <div className="flex items-center justify-around h-16">
          <Link
            href="/"
            className="flex flex-col items-center justify-center w-16 h-16 text-zinc-400 hover:text-white transition-colors"
          >
            <Home className="h-6 w-6" />
            <span className="text-xs mt-1">Home</span>
          </Link>

          <Link
            href="/projects"
            className="flex flex-col items-center justify-center w-16 h-16 text-zinc-400 hover:text-white transition-colors relative"
          >
            <div className="relative">
              <Layout className="h-6 w-6" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-purple-500 rounded-full"></div>
            </div>
            <span className="text-xs mt-1">Projects</span>
          </Link>

          <div className="relative flex items-center justify-center w-16 h-16">
            <div className="absolute -top-5 flex items-center justify-center">
              <Link
                href="/submit"
                className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg hover:shadow-purple-500/20 transition-all"
              >
                <Plus className="h-6 w-6" />
              </Link>
            </div>
            <span className="text-xs text-zinc-400 mt-8">Submit</span>
          </div>

          <Link
            href={`/profile/johndoe`}
            className="flex flex-col items-center justify-center w-16 h-16 text-white transition-colors"
          >
            <User className="h-6 w-6" />
            <span className="text-xs mt-1">Profile</span>
          </Link>

          <Link
            href="#alerts"
            className="flex flex-col items-center justify-center w-16 h-16 text-zinc-400 hover:text-white transition-colors"
          >
            <Bell className="h-6 w-6" />
            <span className="text-xs mt-1">Alerts</span>
          </Link>
        </div>
      </div>

      <MinimalFooter />
    </>
  )
}
