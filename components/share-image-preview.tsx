"use client"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ShareImagePreviewProps {
  project: any
  isOpen: boolean
  onClose: () => void
}

export function ShareImagePreview({ project, isOpen, onClose }: ShareImagePreviewProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [isGenerating, setIsGenerating] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (isOpen && project) {
      generateShareImage()
    }

    return () => {
      // Clean up
      if (imageUrl) {
        URL.revokeObjectURL(imageUrl)
      }
    }
  }, [isOpen, project])

  const generateShareImage = async () => {
    if (!canvasRef.current) return

    setIsGenerating(true)
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = 1200
    canvas.height = 630

    // Draw background gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
    gradient.addColorStop(0, "#0f0f0f")
    gradient.addColorStop(1, "#1a1a1a")
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    // Add subtle grid pattern
    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)"
    ctx.lineWidth = 1

    // Vertical lines
    for (let x = 50; x < canvas.width; x += 50) {
      ctx.beginPath()
      ctx.moveTo(x, 0)
      ctx.lineTo(x, canvas.height)
      ctx.stroke()
    }

    // Horizontal lines
    for (let y = 50; y < canvas.height; y += 50) {
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(canvas.width, y)
      ctx.stroke()
    }

    // Add decorative gradient orbs
    const drawOrb = (x: number, y: number, radius: number, color1: string, color2: string) => {
      const orbGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
      orbGradient.addColorStop(0, color1)
      orbGradient.addColorStop(1, color2)
      ctx.fillStyle = orbGradient
      ctx.beginPath()
      ctx.arc(x, y, radius, 0, Math.PI * 2)
      ctx.fill()
    }

    drawOrb(200, 150, 200, "rgba(124, 58, 237, 0.1)", "rgba(124, 58, 237, 0)")
    drawOrb(1000, 450, 250, "rgba(59, 130, 246, 0.1)", "rgba(59, 130, 246, 0)")

    // Load project image
    try {
      const img = new Image()
      img.crossOrigin = "anonymous"

      // Wait for image to load
      await new Promise((resolve, reject) => {
        img.onload = resolve
        img.onerror = reject
        img.src = project.images[0] || "/placeholder.svg"
      })

      // Draw project image in a rounded rectangle
      const imageX = 60
      const imageY = 60
      const imageWidth = 500
      const imageHeight = 300
      const radius = 20

      // Save context for clipping
      ctx.save()

      // Draw rounded rectangle for image
      ctx.beginPath()
      ctx.moveTo(imageX + radius, imageY)
      ctx.lineTo(imageX + imageWidth - radius, imageY)
      ctx.quadraticCurveTo(imageX + imageWidth, imageY, imageX + imageWidth, imageY + radius)
      ctx.lineTo(imageX + imageWidth, imageY + imageHeight - radius)
      ctx.quadraticCurveTo(
        imageX + imageWidth,
        imageY + imageHeight,
        imageX + imageWidth - radius,
        imageY + imageHeight,
      )
      ctx.lineTo(imageX + radius, imageY + imageHeight)
      ctx.quadraticCurveTo(imageX, imageY + imageHeight, imageX, imageY + imageHeight - radius)
      ctx.lineTo(imageX, imageY + radius)
      ctx.quadraticCurveTo(imageX, imageY, imageX + radius, imageY)
      ctx.closePath()
      ctx.clip()

      // Draw the image
      ctx.drawImage(img, imageX, imageY, imageWidth, imageHeight)

      // Reset clip
      ctx.restore()

      // Add project details
      ctx.fillStyle = "white"
      ctx.font = "bold 48px Inter, system-ui, sans-serif"
      ctx.fillText(project.title, 600, 120)

      // Add description
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)"
      ctx.font = "24px Inter, system-ui, sans-serif"

      // Wrap text function
      const wrapText = (text: string, x: number, y: number, maxWidth: number, lineHeight: number) => {
        const words = text.split(" ")
        let line = ""
        let testLine = ""
        let lineCount = 0

        for (let n = 0; n < words.length; n++) {
          testLine = line + words[n] + " "
          const metrics = ctx.measureText(testLine)
          const testWidth = metrics.width

          if (testWidth > maxWidth && n > 0) {
            ctx.fillText(line, x, y + lineCount * lineHeight)
            line = words[n] + " "
            lineCount++
            if (lineCount >= 4) {
              line += "..."
              ctx.fillText(line, x, y + lineCount * lineHeight)
              break
            }
          } else {
            line = testLine
          }
        }

        if (lineCount < 4) {
          ctx.fillText(line, x, y + lineCount * lineHeight)
        }

        return lineCount + 1
      }

      const descriptionLines = wrapText(project.description, 600, 180, 540, 36)

      // Add creator info
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
      ctx.font = "20px Inter, system-ui, sans-serif"
      ctx.fillText(
        `Created by: ${project.creator} (@${project.creatorUsername})`,
        600,
        180 + descriptionLines * 36 + 20,
      )

      // Add tech stack
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
      ctx.font = "20px Inter, system-ui, sans-serif"
      ctx.fillText(`Tech: ${project.techStack.join(", ")}`, 600, 180 + descriptionLines * 36 + 60)

      // Add stats
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
      ctx.font = "20px Inter, system-ui, sans-serif"
      ctx.fillText(`${project.upvotes} upvotes · ${project.comments} comments`, 600, 180 + descriptionLines * 36 + 100)

      // Add SideGeek branding
      ctx.fillStyle = "white"
      ctx.font = "bold 28px Inter, system-ui, sans-serif"
      ctx.fillText("Launched on", 60, 420)

      // Add SideGeek logo text with gradient
      const logoGradient = ctx.createLinearGradient(60, 460, 300, 460)
      logoGradient.addColorStop(0, "#9333EA")
      logoGradient.addColorStop(0.5, "#FFFFFF")
      logoGradient.addColorStop(1, "#3B82F6")

      ctx.fillStyle = logoGradient
      ctx.font = "bold italic 64px Inter, system-ui, sans-serif"
      ctx.fillText("SideGeek", 60, 480)

      // Add website URL
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)"
      ctx.font = "24px Inter, system-ui, sans-serif"
      ctx.fillText("SideGeek.io", 60, 520)

      // Add decorative elements
      ctx.strokeStyle = "rgba(255, 255, 255, 0.1)"
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(60, 550)
      ctx.lineTo(1140, 550)
      ctx.stroke()

      // Add QR code placeholder
      ctx.fillStyle = "rgba(255, 255, 255, 0.1)"
      ctx.fillRect(1000, 420, 100, 100)
      ctx.fillStyle = "white"
      ctx.font = "16px Inter, system-ui, sans-serif"
      ctx.fillText("Scan to view", 1000, 540)

      // Add badges
      if (project.featured) {
        ctx.fillStyle = "rgba(245, 158, 11, 0.8)"
        ctx.fillRect(600, 80, 100, 30)
        ctx.fillStyle = "white"
        ctx.font = "16px Inter, system-ui, sans-serif"
        ctx.fillText("FEATURED", 615, 100)
      }

      if (project.trending) {
        ctx.fillStyle = "rgba(16, 185, 129, 0.8)"
        ctx.fillRect(project.featured ? 710 : 600, 80, 100, 30)
        ctx.fillStyle = "white"
        ctx.font = "16px Inter, system-ui, sans-serif"
        ctx.fillText("TRENDING", project.featured ? 725 : 615, 100)
      }

      // Convert canvas to data URL
      const dataUrl = canvas.toDataURL("image/png")
      setImageUrl(dataUrl)
      setIsGenerating(false)
    } catch (error) {
      console.error("Error generating share image:", error)
      setIsGenerating(false)
    }
  }

  const downloadImage = () => {
    if (!imageUrl) return

    const link = document.createElement("a")
    link.download = `${project.title.toLowerCase().replace(/\s+/g, "-")}-SideGeek.png`
    link.href = imageUrl
    link.click()
  }

  const shareImage = async () => {
    if (!imageUrl) return

    try {
      // Convert data URL to blob
      const response = await fetch(imageUrl)
      const blob = await response.blob()

      // Check if Web Share API is available
      if (navigator.share) {
        await navigator.share({
          title: `${project.title} on SideGeek`,
          text: `Check out ${project.title} on SideGeek!`,
          files: [
            new File([blob], `${project.title.toLowerCase().replace(/\s+/g, "-")}-SideGeek.png`, { type: "image/png" }),
          ],
        })
      } else {
        // Fallback to clipboard
        navigator.clipboard.writeText(
          `Check out ${project.title} on SideGeek! https://SideGeek.io/projects/${project.slug}`,
        )
        alert("Image URL copied to clipboard!")
      }
    } catch (error) {
      console.error("Error sharing image:", error)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 border border-white/10 rounded-2xl z-50 max-w-[90vw] w-[800px] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {/* Header */}
            <div className="p-4 border-b border-white/10 flex justify-between items-center">
              <h2 className="text-xl font-bold text-white">Share Image Preview</h2>
              <button
                onClick={onClose}
                className="p-1 rounded-full bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Canvas (hidden) */}
            <canvas ref={canvasRef} className="hidden" />

            {/* Image Preview */}
            <div className="p-4">
              {isGenerating ? (
                <div className="flex flex-col items-center justify-center h-[300px]">
                  <div className="w-10 h-10 border-2 border-purple-500 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-zinc-400">Generating share image...</p>
                </div>
              ) : imageUrl ? (
                <div className="relative rounded-lg overflow-hidden border border-white/10">
                  <div className="relative aspect-[1200/630] w-full">
                    <Image
                      src={imageUrl || "/placeholder.svg"}
                      alt={`${project.title} share image`}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-[300px]">
                  <p className="text-zinc-400">Failed to generate image</p>
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="p-4 border-t border-white/10 flex justify-end gap-3">
              <Button
                variant="outline"
                className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
                onClick={onClose}
              >
                Cancel
              </Button>

              <Button
                className="bg-zinc-800 border-zinc-700 text-white hover:bg-zinc-700"
                onClick={shareImage}
                disabled={isGenerating || !imageUrl}
              >
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>

              <Button
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                onClick={downloadImage}
                disabled={isGenerating || !imageUrl}
              >
                <Download className="h-4 w-4 mr-2" />
                Download
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
