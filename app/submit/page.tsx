"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  ChevronLeft,
  ChevronRight,
  Check,
  Upload,
  X,
  Home,
  Search,
  PlusCircle,
  User,
  Bell,
  Menu,
  Rocket,
  Github,
  Globe,
  LinkIcon,
  Tag,
  ImageIcon,
  Sparkles,
} from "lucide-react"

export default function SubmitPage() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    url: "",
    github: "",
    tags: "",
    images: [] as File[],
  })
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files)
      const newImages = [...formData.images, ...filesArray]
      setFormData((prev) => ({ ...prev, images: newImages }))

      // Create preview URLs
      const newPreviewUrls = filesArray.map((file) => URL.createObjectURL(file))
      setImagePreviewUrls((prev) => [...prev, ...newPreviewUrls])
    }
  }

  const removeImage = (index: number) => {
    const newImages = [...formData.images]
    newImages.splice(index, 1)
    setFormData((prev) => ({ ...prev, images: newImages }))

    const newPreviewUrls = [...imagePreviewUrls]
    URL.revokeObjectURL(newPreviewUrls[index])
    newPreviewUrls.splice(index, 1)
    setImagePreviewUrls(newPreviewUrls)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)

      // Reset form after success
      setTimeout(() => {
        setStep(1)
        setFormData({
          title: "",
          description: "",
          category: "",
          url: "",
          github: "",
          tags: "",
          images: [],
        })
        setImagePreviewUrls([])
        setIsSuccess(false)
      }, 3000)
    }, 2000)
  }

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4))
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1))

  const categories = [
    { id: "ai", name: "AI & Machine Learning", icon: <Sparkles className="w-5 h-5" /> },
    { id: "productivity", name: "Productivity", icon: <Rocket className="w-5 h-5" /> },
    { id: "developer", name: "Developer Tools", icon: <Github className="w-5 h-5" /> },
    { id: "design", name: "Design & Creative", icon: <ImageIcon className="w-5 h-5" /> },
    { id: "web", name: "Web App", icon: <Globe className="w-5 h-5" /> },
  ]

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white pt-16 pb-16">
        <div className="max-w-4xl mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-purple-500/20">
            <Check size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
            Project Submitted Successfully!
          </h1>
          <p className="text-zinc-400 mb-8 text-center max-w-md">
            Thank you for submitting your project. Our team will review it shortly.
          </p>
          <div className="flex gap-4">
            <Link
              href="/projects"
              className="px-6 py-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 transition-all duration-300 shadow-lg shadow-zinc-900/50"
            >
              Browse Projects
            </Link>
            <button
              onClick={() => {
                setStep(1)
                setFormData({
                  title: "",
                  description: "",
                  category: "",
                  url: "",
                  github: "",
                  tags: "",
                  images: [],
                })
                setImagePreviewUrls([])
                setIsSuccess(false)
              }}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg shadow-purple-900/20"
            >
              Submit Another Project
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white relative overflow-hidden">
      {/* Modern Navbar - Matching Homepage Style */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-zinc-950/80 backdrop-blur-lg border-b border-white/10" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex h-16 md:h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                <Rocket className="h-5 w-5" />
              </div>
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
                SideGeek
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/projects" className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                Projects
              </Link>
              <Link href="/submit" className="text-sm font-medium text-white transition-colors">
                Submit
              </Link>
              <Link
                href="/profile/johndoe"
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Profile
              </Link>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-3">
                <Link
                  href="/join"
                  className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-300 shadow-lg shadow-purple-900/20"
                >
                  Join
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-white bg-white/5 hover:bg-white/10 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-950/95 backdrop-blur-lg border-b border-white/10">
            <div className="container px-4 py-6">
              <nav className="flex flex-col space-y-4">
                <Link
                  href="/"
                  className="px-4 py-3 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/projects"
                  className="px-4 py-3 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link
                  href="/submit"
                  className="px-4 py-3 text-white font-medium rounded-xl bg-white/5 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Submit
                </Link>
                <Link
                  href="/profile/johndoe"
                  className="px-4 py-3 text-white font-medium rounded-xl hover:bg-white/5 transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Profile
                </Link>
                <div className="pt-4 border-t border-white/10">
                  <Link
                    href="/join"
                    className="w-full block px-4 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium text-center transition-all duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Join
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>

      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white bg-[length:30px_30px] opacity-[0.02] pointer-events-none"></div>
      <div className="absolute top-20 -left-32 w-64 h-64 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 -right-32 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>

      <div className="container max-w-4xl px-4 py-24 mt-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-300">
            Submit Your Project
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Share your creation with the SideGeek community and get feedback, upvotes, and recognition for your work.
          </p>
        </div>

        {/* Modern Progress Steps */}
        <div className="flex justify-between mb-12 relative">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-zinc-800 -translate-y-1/2 z-0"></div>

          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="relative z-10 flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 
                  ${
                    step > num
                      ? "bg-gradient-to-r from-purple-600 to-blue-600"
                      : step === num
                        ? "bg-gradient-to-r from-purple-500 to-blue-500 ring-4 ring-purple-500/20"
                        : "bg-zinc-800"
                  }`}
              >
                {step > num ? <Check size={16} /> : <span>{num}</span>}
              </div>
              <span
                className={`text-xs mt-2 ${
                  step >= num ? "text-white font-medium" : "text-zinc-500"
                } transition-colors duration-300`}
              >
                {num === 1 && "Details"}
                {num === 2 && "Category"}
                {num === 3 && "Media"}
                {num === 4 && "Review"}
              </span>
            </div>
          ))}
        </div>

        {/* Sleek Form Container */}
        <div className="bg-zinc-950/80 backdrop-blur-xl border border-zinc-800/50 rounded-xl p-6 md:p-8 shadow-xl">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Basic Details */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-2 text-zinc-300">
                    Project Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    required
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all duration-200"
                    placeholder="Enter your project title"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium mb-2 text-zinc-300">
                    Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all duration-200"
                    placeholder="Describe your project in detail"
                  />
                </div>

                <div>
                  <label htmlFor="url" className="block text-sm font-medium mb-2 text-zinc-300">
                    <div className="flex items-center">
                      <LinkIcon className="mr-2 h-4 w-4 text-zinc-400" />
                      Project URL <span className="text-red-500">*</span>
                    </div>
                  </label>
                  <input
                    id="url"
                    name="url"
                    type="url"
                    required
                    value={formData.url}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all duration-200"
                    placeholder="https://your-project.com"
                  />
                </div>

                <div>
                  <label htmlFor="github" className="block text-sm font-medium mb-2 text-zinc-300">
                    <div className="flex items-center">
                      <Github className="mr-2 h-4 w-4 text-zinc-400" />
                      GitHub Repository (Optional)
                    </div>
                  </label>
                  <input
                    id="github"
                    name="github"
                    type="url"
                    value={formData.github}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all duration-200"
                    placeholder="https://github.com/username/repo"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Category */}
            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-4 text-zinc-300">
                    Select Category <span className="text-red-500">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {categories.map((category) => (
                      <div
                        key={category.id}
                        onClick={() => setFormData((prev) => ({ ...prev, category: category.id }))}
                        className={`flex items-center p-4 rounded-lg cursor-pointer transition-all duration-200 ${
                          formData.category === category.id
                            ? "bg-purple-600/20 border-2 border-purple-500"
                            : "bg-zinc-900/50 border border-zinc-800 hover:bg-zinc-800/50"
                        }`}
                      >
                        <div
                          className={`mr-3 ${formData.category === category.id ? "text-purple-400" : "text-zinc-400"}`}
                        >
                          {category.icon}
                        </div>
                        <span className="font-medium">{category.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="tags" className="block text-sm font-medium mb-2 text-zinc-300">
                    <div className="flex items-center">
                      <Tag className="mr-2 h-4 w-4 text-zinc-400" />
                      Tags (comma separated)
                    </div>
                  </label>
                  <input
                    id="tags"
                    name="tags"
                    type="text"
                    value={formData.tags}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900/50 border border-zinc-800 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500 transition-all duration-200"
                    placeholder="nextjs, react, tailwind, etc."
                  />
                  <p className="text-zinc-500 text-xs mt-1">Separate tags with commas</p>
                </div>
              </div>
            )}

            {/* Step 3: Media */}
            {step === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-4 text-zinc-300">
                    <div className="flex items-center">
                      <ImageIcon className="mr-2 h-4 w-4 text-zinc-400" />
                      Upload Screenshots <span className="text-red-500">*</span>
                    </div>
                  </label>

                  <div
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-zinc-800 rounded-lg p-8 text-center cursor-pointer hover:bg-zinc-900/30 transition-all duration-200"
                  >
                    <input
                      type="file"
                      ref={fileInputRef}
                      multiple
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <div className="flex flex-col items-center">
                      <Upload size={32} className="text-zinc-500 mb-2" />
                      <p className="text-zinc-300 mb-1 font-medium">Drag and drop or click to upload</p>
                      <p className="text-zinc-500 text-sm">PNG, JPG, GIF up to 5MB</p>
                    </div>
                  </div>

                  {imagePreviewUrls.length > 0 && (
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                      {imagePreviewUrls.map((url, index) => (
                        <div key={index} className="relative group">
                          <div className="aspect-video rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
                            <Image
                              src={url || "/placeholder.svg"}
                              alt={`Preview ${index + 1}`}
                              width={300}
                              height={200}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-2 right-2 bg-black/70 rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
                          >
                            <X className="h-4 w-4 text-white" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Step 4: Review */}
            {step === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-medium mb-4">Review Your Submission</h3>

                <div className="space-y-4 bg-zinc-900/50 rounded-lg p-6 border border-zinc-800/80">
                  <div>
                    <h4 className="text-sm text-zinc-500">Project Title</h4>
                    <p className="font-medium text-lg">{formData.title}</p>
                  </div>

                  <div>
                    <h4 className="text-sm text-zinc-500">Description</h4>
                    <p className="text-sm">{formData.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <div>
                      <h4 className="text-sm text-zinc-500">Category</h4>
                      <p>{categories.find((c) => c.id === formData.category)?.name || "Not selected"}</p>
                    </div>

                    {formData.tags && (
                      <div>
                        <h4 className="text-sm text-zinc-500">Tags</h4>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {formData.tags.split(",").map((tag, index) => (
                            <span key={index} className="px-2 py-1 bg-zinc-800 rounded-md text-xs">
                              {tag.trim()}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  <div>
                    <h4 className="text-sm text-zinc-500">URLs</h4>
                    <p className="text-sm break-all text-purple-400">{formData.url}</p>
                    {formData.github && <p className="text-sm break-all text-purple-400">{formData.github}</p>}
                  </div>

                  {imagePreviewUrls.length > 0 && (
                    <div>
                      <h4 className="text-sm text-zinc-500 mb-2">Images</h4>
                      <div className="grid grid-cols-4 gap-2">
                        {imagePreviewUrls.map((url, index) => (
                          <div key={index} className="aspect-video rounded-md overflow-hidden bg-zinc-900">
                            <Image
                              src={url || "/placeholder.svg"}
                              alt={`Preview ${index + 1}`}
                              width={100}
                              height={60}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-zinc-800 transition-all duration-200 flex items-center"
                >
                  <ChevronLeft size={16} className="mr-1" /> Previous
                </button>
              ) : (
                <div></div>
              )}

              {step < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center shadow-lg shadow-purple-900/20"
                  disabled={
                    (step === 1 && (!formData.title || !formData.description || !formData.url)) ||
                    (step === 2 && !formData.category) ||
                    (step === 3 && formData.images.length === 0)
                  }
                >
                  Next <ChevronRight size={16} className="ml-1" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center shadow-lg shadow-purple-900/20"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Processing...
                    </div>
                  ) : (
                    <>Submit Project</>
                  )}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Simple Footer */}
      <div className="border-t border-zinc-800 mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-zinc-400 text-sm">© 2025 SideGeek. All rights reserved.</p>
            </div>
            <div className="flex gap-4">
              <Link href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">
                Terms
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">
                Privacy
              </Link>
              <Link href="#" className="text-zinc-400 hover:text-white text-sm transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Drawer Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-950/90 backdrop-blur-lg border-t border-zinc-800 z-50">
        <div className="flex justify-around items-center h-16">
          <Link href="/" className="flex flex-col items-center justify-center text-zinc-400 hover:text-white p-2">
            <Home className="h-5 w-5" />
            <span className="text-xs mt-1">Home</span>
          </Link>
          <Link
            href="/projects"
            className="flex flex-col items-center justify-center text-zinc-400 hover:text-white p-2"
          >
            <Search className="h-5 w-5" />
            <span className="text-xs mt-1">Explore</span>
          </Link>
          <Link
            href="/submit"
            className="flex flex-col items-center justify-center text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-full p-2 -mt-6 shadow-lg"
          >
            <PlusCircle className="h-6 w-6" />
            <span className="text-xs mt-1">Submit</span>
          </Link>
          <Link
            href="/profile/johndoe"
            className="flex flex-col items-center justify-center text-zinc-400 hover:text-white p-2"
          >
            <User className="h-5 w-5" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
          <Link href="#" className="flex flex-col items-center justify-center text-zinc-400 hover:text-white p-2">
            <Bell className="h-5 w-5" />
            <span className="text-xs mt-1">Notifications</span>
          </Link>
        </div>
      </div>
    </div>
  )
}
