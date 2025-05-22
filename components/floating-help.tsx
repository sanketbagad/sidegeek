"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MessageSquare, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

export function FloatingHelp() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-16 right-0 w-80 md:w-96 rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="bg-zinc-900 border border-white/10 backdrop-blur-sm">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Avatar>
                    <AvatarImage src="/people-supporting-each-other.png" alt="Support" />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-medium text-white">SideGeek Support</h3>
                    <p className="text-xs text-white/70">We typically reply in a few minutes</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10 rounded-full"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="h-80 p-4 overflow-y-auto bg-zinc-900/50">
                <div className="flex gap-3 mb-4">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/people-supporting-each-other.png" alt="Support" />
                    <AvatarFallback>S</AvatarFallback>
                  </Avatar>
                  <div className="bg-zinc-800 rounded-2xl rounded-tl-none p-3 text-sm text-white max-w-[80%]">
                    <p>👋 Hi there! How can I help you with SideGeek today?</p>
                  </div>
                </div>
              </div>

              <div className="p-3 border-t border-white/10 bg-zinc-900/80">
                <div className="flex gap-2">
                  <Input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="bg-zinc-800 border-zinc-700 text-white placeholder:text-zinc-500 rounded-xl"
                  />
                  <Button
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl"
                    size="icon"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full p-4 shadow-lg shadow-purple-500/20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
      </motion.button>
    </div>
  )
}
