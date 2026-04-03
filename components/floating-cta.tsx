'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MessageCircle, Calendar } from 'lucide-react'

export function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-3 safe-area-inset-bottom">
      <div className="flex gap-2">
        <a
          href="https://line.me/R/ti/p/%40cbg0709r"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.5] flex items-center justify-center gap-2 h-14 rounded-lg bg-[#06C755] text-white font-semibold text-sm shadow-md"
        >
          <MessageCircle className="h-4 w-4" />
          LINEで予約
        </a>
        <Link
          href="#contact"
          className="flex-1 flex items-center justify-center gap-2 h-14 rounded-lg bg-accent text-accent-foreground font-semibold text-sm shadow-md"
        >
          <Calendar className="h-4 w-4" />
          メール予約
        </Link>
      </div>
    </div>
  )
}
