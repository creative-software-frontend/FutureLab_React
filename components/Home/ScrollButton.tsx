"use client"

import { useState, useEffect, useCallback } from "react"
import { ChevronUp } from "lucide-react"

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Show button when page is scrolled down
  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [])

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [toggleVisibility])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 cursor-pointer group"
          aria-label="Scroll to top"
        >
          <div className="relative">
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-red-500 to-red-600 blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative flex items-center justify-center bg-white text-red-500 w-12 h-12 rounded-lg shadow-lg border border-red-100 group-hover:bg-red-50 transition-all duration-300">
              <ChevronUp className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
            </div>
          </div>
          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-red-500 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Back to top
          </span>
        </div>
      )}
    </>
  )
}

