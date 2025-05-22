"use client"
import Image from "next/image"
import Link from "next/link"
import {
  ChevronUp,
  Share2,
  Download,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Mail,
  Home,
  Layout,
  Plus,
  User,
  Bell,
  FileText,
  Briefcase,
  GraduationCap,
  Code,
  Award,
  ExternalLink,
  Edit,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import ProfileShareImage from "@/components/profile-share-image"
import { MinimalFooter } from "@/components/minimal-footer"
import { getUserData } from "@/lib/data"

export default function ProfileClientPage({ params }: { params: { username: string } }) {
  const userData = getUserData(params.username)
  const isOwnProfile = true // In a real app, this would be determined by authentication

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-zinc-950 pt-20 pb-20 md:pb-0">
        <div className="container mx-auto px-4 py-12">
          {/* Profile Header */}
          <div className="mb-12 relative">
            <div
              className="flex flex-col md:flex-row items-start gap-6 md:gap-8 p-4 sm:p-6 md:p-8 bg-zinc-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-glow-sm overflow-hidden"
              style={{ animation: "fadeInUp 0.8s ease-out" }}
            >
              {/* Animated background elements */}
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl"></div>

              <div className="relative mx-auto md:mx-0" style={{ animation: "fadeInUp 0.8s ease-out 0.2s backwards" }}>
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-zinc-800 shadow-lg hover:border-purple-500/30 transition-colors duration-300">
                  <Image
                    src={userData.avatar || "/placeholder.svg"}
                    alt={userData.name}
                    width={128}
                    height={128}
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-md"></div>
                <div className="absolute -top-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-gradient-to-r from-blue-600/20 to-purple-600/20 blur-md"></div>
              </div>

              <div className="flex-1 w-full" style={{ animation: "fadeInUp 0.8s ease-out 0.3s backwards" }}>
                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h1 className="text-2xl sm:text-3xl font-bold text-white">{userData.name}</h1>
                    <p className="text-zinc-400">@{userData.username}</p>
                  </div>

                  <div className="flex flex-wrap gap-3" style={{ animation: "fadeInUp 0.8s ease-out 0.4s backwards" }}>
                    {isOwnProfile && (
                      <Link
                        href="/edit-profile"
                        className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-zinc-800 border border-white/10 rounded-xl hover:bg-zinc-700 hover:border-purple-500/30 transition-all duration-300"
                      >
                        <Edit className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-300" />
                        <span className="text-zinc-300 text-sm sm:text-base">Edit Profile</span>
                      </Link>
                    )}

                    <button
                      id="profile-share-btn"
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-zinc-800 border border-white/10 rounded-xl hover:bg-zinc-700 hover:border-purple-500/30 transition-all duration-300"
                      aria-label="Share profile"
                    >
                      <Share2 className="w-4 h-4 sm:w-5 sm:h-5 text-zinc-300" />
                      <span className="text-zinc-300 text-sm sm:text-base">Share</span>
                    </button>

                    <button
                      id="profile-download-btn"
                      className="flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-colors duration-300"
                      aria-label="Download shareable image"
                    >
                      <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span className="text-sm sm:text-base">Download Card</span>
                    </button>
                  </div>
                </div>

                <p
                  className="mt-4 text-zinc-300 max-w-3xl text-sm sm:text-base"
                  style={{ animation: "fadeInUp 0.8s ease-out 0.5s backwards" }}
                >
                  {userData.bio}
                </p>

                <div
                  className="mt-4 sm:mt-6 flex flex-wrap gap-4 sm:gap-6"
                  style={{ animation: "fadeInUp 0.8s ease-out 0.6s backwards" }}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 text-xs sm:text-sm">Joined</span>
                    <span className="font-medium text-zinc-300 text-xs sm:text-sm">{userData.joinDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 text-xs sm:text-sm">Projects</span>
                    <span className="font-medium text-zinc-300 text-xs sm:text-sm">{userData.projectCount}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-zinc-500 text-xs sm:text-sm">Total Upvotes</span>
                    <span className="font-medium text-zinc-300 text-xs sm:text-sm">{userData.upvotes}</span>
                  </div>
                </div>

                <div
                  className="mt-4 sm:mt-6 flex flex-wrap gap-3 sm:gap-4"
                  style={{ animation: "fadeInUp 0.8s ease-out 0.7s backwards" }}
                >
                  {userData.links.github && (
                    <a
                      href={userData.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-2 text-zinc-400 hover:text-purple-400 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>GitHub</span>
                    </a>
                  )}
                  {userData.links.linkedin && (
                    <a
                      href={userData.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-2 text-zinc-400 hover:text-purple-400 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>LinkedIn</span>
                    </a>
                  )}
                  {userData.links.twitter && (
                    <a
                      href={userData.links.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-2 text-zinc-400 hover:text-purple-400 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Twitter</span>
                    </a>
                  )}
                  {userData.links.website && (
                    <a
                      href={userData.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-2 text-zinc-400 hover:text-purple-400 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Website</span>
                    </a>
                  )}
                  {userData.links.email && (
                    <a
                      href={`mailto:${userData.links.email}`}
                      className="flex items-center gap-1 sm:gap-2 text-zinc-400 hover:text-purple-400 transition-colors duration-300 text-xs sm:text-sm"
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                      <span>Email</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Resume Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white flex items-center gap-2 mb-4">
              <FileText className="w-6 h-6" />
              Resume
            </h2>

            <div className="flex flex-wrap gap-4 mb-6">
              <a
                href={userData.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 overflow-hidden rounded-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <ExternalLink className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">View Resume</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>

              <a
                href={userData.resumeUrl}
                download
                className="group relative flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-zinc-800/80 to-zinc-900/80 overflow-hidden rounded-xl border border-white/10 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download className="w-5 h-5 text-blue-400" />
                <span className="text-white font-medium">Download Resume</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Experience Section */}
              <div className="bg-zinc-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-glow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Briefcase className="w-5 h-5 text-purple-500" />
                  <h3 className="text-xl font-semibold text-white">Experience</h3>
                </div>

                <div className="space-y-6">
                  {userData.experience.map((exp) => (
                    <div key={exp.id} className="border-l-2 border-purple-600/30 pl-4 py-1">
                      <div className="flex justify-between items-start">
                        <h4 className="text-lg font-medium text-white">{exp.title}</h4>
                        <span className="text-sm text-zinc-400">
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      <div className="text-purple-400 mb-1">{exp.company}</div>
                      <div className="text-sm text-zinc-500 mb-2">{exp.location}</div>
                      <p className="text-zinc-400 text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education Section */}
              <div className="bg-zinc-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-glow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-5 h-5 text-blue-500" />
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                </div>

                <div className="space-y-6">
                  {userData.education.map((edu) => (
                    <div key={edu.id} className="border-l-2 border-blue-600/30 pl-4 py-1">
                      <div className="flex justify-between items-start">
                        <h4 className="text-lg font-medium text-white">{edu.degree}</h4>
                        <span className="text-sm text-zinc-400">
                          {edu.startYear} - {edu.endYear}
                        </span>
                      </div>
                      <div className="text-blue-400 mb-1">{edu.institution}</div>
                      <div className="text-sm text-zinc-500 mb-2">{edu.location}</div>
                      <p className="text-zinc-400 text-sm">{edu.field}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Section */}
              <div className="bg-zinc-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-glow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Code className="w-5 h-5 text-purple-500" />
                  <h3 className="text-xl font-semibold text-white">Skills</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {userData.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 bg-zinc-800 text-zinc-300 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Achievements Section */}
              <div className="bg-zinc-900/80 backdrop-blur-lg rounded-2xl border border-white/10 shadow-glow-sm p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Award className="w-5 h-5 text-blue-500" />
                  <h3 className="text-xl font-semibold text-white">Achievements</h3>
                </div>

                <div className="space-y-4">
                  {userData.achievements.map((achievement) => (
                    <div key={achievement.id} className="border-l-2 border-blue-600/30 pl-4 py-1">
                      <h4 className="text-lg font-medium text-white">{achievement.title}</h4>
                      <div className="text-blue-400 mb-1">{achievement.issuer}</div>
                      <div className="text-sm text-zinc-500 mb-2">{achievement.date}</div>
                      <p className="text-zinc-400 text-sm">{achievement.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userData.projects.map((project, index) => (
                <Link
                  href={`/projects/${project.slug}`}
                  key={project.id}
                  className="group relative bg-zinc-900/80 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 shadow-sm hover:shadow-glow-sm hover:border-purple-500/30 transition-all duration-500"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animation: "fadeInUp 0.6s ease-out backwards",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                  </div>

                  <div className="p-5 relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 bg-zinc-800 hover:bg-zinc-700 hover:scale-105 transition-all duration-300 px-3 py-1.5 rounded-full">
                        <ChevronUp className="w-5 h-5 text-purple-400" />
                        <span className="text-sm font-medium text-zinc-300">{project.upvotes}</span>
                      </div>
                    </div>

                    <p className="text-zinc-400 text-sm mb-3 line-clamp-2 group-hover:text-zinc-300 transition-colors duration-300">
                      {project.description}
                    </p>

                    <div className="flex justify-between items-center">
                      <span className="text-xs font-medium px-2.5 py-1 bg-purple-900/50 text-purple-300 rounded-full group-hover:bg-purple-800/50 transition-colors duration-300">
                        {project.category}
                      </span>
                      <span className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors duration-300">
                        View Project →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {userData.projects.length === 0 && (
              <div className="text-center py-12 bg-zinc-900/50 rounded-xl border border-white/10">
                <p className="text-zinc-500">No projects yet</p>
              </div>
            )}
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
            href={`/profile/${params.username}`}
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

      {/* Hidden component for generating shareable image */}
      <div className="hidden">
        <ProfileShareImage userData={userData} />
      </div>

      {/* Client-side script for share and download functionality */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0.2);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(139, 92, 246, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(139, 92, 246, 0);
          }
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', () => {
              // Share functionality
              const shareBtn = document.getElementById('profile-share-btn');
              if (shareBtn) {
                shareBtn.addEventListener('click', async () => {
                  const url = window.location.href;
                  
                  try {
                    // Check if running in iframe
                    const isInIframe = window.frameElement !== null;
                    
                    // Try clipboard first as it's more widely supported
                    await navigator.clipboard.writeText(url);
                    alert('Profile link copied to clipboard!');
                    
                    // Only try Web Share API if not in iframe and if available
                    if (!isInIframe && navigator.share) {
                      try {
                        await navigator.share({
                          title: document.title,
                          url: url
                        });
                      } catch (shareError) {
                        // Web Share API failed, but we already copied to clipboard
                        console.log('Web Share API error:', shareError);
                      }
                    }
                  } catch (error) {
                    console.error('Error sharing:', error);
                    
                    // Fallback for older browsers
                    const textArea = document.createElement('textarea');
                    textArea.value = url;
                    textArea.style.position = 'fixed';
                    document.body.appendChild(textArea);
                    textArea.focus();
                    textArea.select();
                    
                    try {
                      document.execCommand('copy');
                      alert('Profile link copied to clipboard!');
                    } catch (err) {
                      console.error('Fallback copy failed:', err);
                      alert('Failed to copy link. Please copy the URL from the address bar.');
                    }
                    
                    document.body.removeChild(textArea);
                  }
                });
              }
              
              // Download functionality will be handled by the ProfileShareImage component
              const downloadBtn = document.getElementById('profile-download-btn');
              if (downloadBtn) {
                downloadBtn.addEventListener('click', () => {
                  // This will be implemented in the ProfileShareImage component
                  // We'll dispatch a custom event that the component will listen for
                  const event = new CustomEvent('generate-profile-image');
                  window.dispatchEvent(event);
                });
              }
            });
          `,
        }}
      />
    </>
  )
}
