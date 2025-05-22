"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { toPng } from "html-to-image"
import { ChevronUp, Github, Linkedin, Twitter, Globe } from "lucide-react"

type UserData = {
  username: string
  name: string
  bio: string
  avatar: string
  joinDate: string
  projectCount: number
  upvotes: number
  links: {
    github?: string
    linkedin?: string
    twitter?: string
    website?: string
    email?: string
  }
  projects: Array<{
    id: number
    slug: string
    title: string
    description: string
    image: string
    upvotes: number
    category: string
  }>
}

export default function ProfileShareImage({ userData }: { userData: UserData }) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleGenerateImage = async () => {
      if (!cardRef.current) return

      try {
        // Add a class to make the card visible temporarily for capturing
        cardRef.current.classList.remove("hidden")
        cardRef.current.classList.add("fixed", "top-0", "left-0", "z-[-1]")

        // Wait a bit for images to load
        await new Promise((resolve) => setTimeout(resolve, 500))

        const dataUrl = await toPng(cardRef.current, {
          quality: 0.95,
          pixelRatio: 2,
          cacheBust: true,
        })

        // Hide the card again
        cardRef.current.classList.add("hidden")
        cardRef.current.classList.remove("fixed", "top-0", "left-0", "z-[-1]")

        // Create download link
        const link = document.createElement("a")
        link.download = `${userData.username}-SideGeek-profile.png`
        link.href = dataUrl
        link.click()
      } catch (error) {
        console.error("Error generating image:", error)
        alert("Failed to generate image. Please try again.")

        // Hide the card if there was an error
        if (cardRef.current) {
          cardRef.current.classList.add("hidden")
          cardRef.current.classList.remove("fixed", "top-0", "left-0", "z-[-1]")
        }
      }
    }

    // Listen for the custom event
    window.addEventListener("generate-profile-image", handleGenerateImage)

    return () => {
      window.removeEventListener("generate-profile-image", handleGenerateImage)
    }
  }, [userData.username])

  return (
    <div
      ref={cardRef}
      className="hidden w-[1200px] h-[630px] bg-gradient-to-br from-zinc-900 to-black p-12 overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-grid-white bg-[length:30px_30px] opacity-5"></div>
      <div className="absolute top-20 right-20 w-64 h-64 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-3xl"></div>

      {/* SideGeek logo */}
      <div className="absolute top-12 right-12 flex items-center gap-2">
        <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 5C8.55228 5 9 5.44772 9 6V16.5858L11.2929 14.2929C11.6834 13.9024 12.3166 13.9024 12.7071 14.2929C13.0976 14.6834 13.0976 15.3166 12.7071 15.7071L8.70711 19.7071C8.31658 20.0976 7.68342 20.0976 7.29289 19.7071L3.29289 15.7071C2.90237 15.3166 2.90237 14.6834 3.29289 14.2929C3.68342 13.9024 4.31658 13.9024 4.70711 14.2929L7 16.5858V6C7 5.44772 7.44772 5 8 5Z"
              fill="white"
            />
            <path
              d="M13 19C12.4477 19 12 18.5523 12 18V7.41421L9.70711 9.70711C9.31658 10.0976 8.68342 10.0976 8.29289 9.70711C7.90237 9.31658 7.90237 8.68342 8.29289 8.29289L12.2929 4.29289C12.6834 3.90237 13.3166 3.90237 13.7071 4.29289L17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711C17.3166 10.0976 16.6834 10.0976 16.2929 9.70711L14 7.41421V18C14 18.5523 13.5523 19 13 19Z"
              fill="white"
            />
          </svg>
        </div>
        <span className="text-2xl font-light italic tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-white to-blue-400">
          SideGeek
        </span>
      </div>

      {/* Profile content */}
      <div className="relative z-10 flex h-full">
        {/* Left side - User info */}
        <div className="flex-1 flex flex-col justify-center pr-12">
          <div className="flex items-center gap-6 mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-zinc-800 shadow-lg">
              <Image
                src={userData.avatar || "/placeholder.svg"}
                alt={userData.name}
                width={128}
                height={128}
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-white mb-2">{userData.name}</h1>
              <p className="text-xl text-zinc-400">@{userData.username}</p>
            </div>
          </div>

          <p className="text-xl text-zinc-300 mb-8 max-w-xl">{userData.bio}</p>

          <div className="flex gap-6 mb-8">
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl px-6 py-4">
              <p className="text-zinc-400 text-sm">Projects</p>
              <p className="text-white text-2xl font-bold">{userData.projectCount}</p>
            </div>
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl px-6 py-4">
              <p className="text-zinc-400 text-sm">Total Upvotes</p>
              <p className="text-white text-2xl font-bold">{userData.upvotes}</p>
            </div>
            <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl px-6 py-4">
              <p className="text-zinc-400 text-sm">Joined</p>
              <p className="text-white text-2xl font-bold">{userData.joinDate}</p>
            </div>
          </div>

          <div className="flex gap-4">
            {userData.links.github && (
              <a className="text-zinc-400 hover:text-white">
                <Github className="w-6 h-6" />
              </a>
            )}
            {userData.links.linkedin && (
              <a className="text-zinc-400 hover:text-white">
                <Linkedin className="w-6 h-6" />
              </a>
            )}
            {userData.links.twitter && (
              <a className="text-zinc-400 hover:text-white">
                <Twitter className="w-6 h-6" />
              </a>
            )}
            {userData.links.website && (
              <a className="text-zinc-400 hover:text-white">
                <Globe className="w-6 h-6" />
              </a>
            )}
          </div>
        </div>

        {/* Right side - Featured projects */}
        <div className="w-[450px] flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Projects</h2>

          <div className="space-y-4">
            {userData.projects.slice(0, 2).map((project) => (
              <div
                key={project.id}
                className="bg-zinc-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
              >
                <div className="flex">
                  <div className="w-24 h-24 relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                      <div className="flex items-center gap-1 bg-zinc-700/70 px-2 py-1 rounded-full">
                        <ChevronUp className="w-4 h-4 text-zinc-300" />
                        <span className="text-xs font-medium text-zinc-300">{project.upvotes}</span>
                      </div>
                    </div>
                    <p className="text-zinc-400 text-sm mt-1 line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-zinc-400 text-sm">View full profile at</p>
            <p className="text-white text-lg">SideGeek.io/profile/{userData.username}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
