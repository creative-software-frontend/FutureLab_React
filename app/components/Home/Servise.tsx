"use client"

import { useState, useRef } from "react"
import { ChevronLeft, ChevronRight, Palette, Code, Megaphone, CuboidIcon as Cube, Shield, Network } from "lucide-react"

export default function Service() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      setCanScrollLeft(scrollLeft > 0)
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      const newScrollLeft =
        direction === "left" ? scrollRef.current.scrollLeft - scrollAmount : scrollRef.current.scrollLeft + scrollAmount

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      })
    }
  }

  const services = [
    {
      icon: <Palette className="h-10 w-10 text-red-500" />,
      title: "Graphic & Multimedia",
    },
    {
      icon: <Code className="h-10 w-10 text-pink-500" />,
      title: "Web & Software",
    },
    {
      icon: <Megaphone className="h-10 w-10 text-purple-500" />,
      title: "Digital Marketing",
    },
    {
      icon: <Cube className="h-10 w-10 text-indigo-400" />,
      title: "3D Animation & Visualization",
    },
    {
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      title: "Cyber Security",
    },
    {
      icon: <Network className="h-10 w-10 text-indigo-300" />,
      title: "Networking Technology",
    },
  ]

  return (
    <div className="relative w-full bg-pink-50/50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-500 shadow-sm ${!canScrollLeft ? "opacity-50 cursor-not-allowed" : "hover:bg-rose-50"}`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide"
            onScroll={checkScrollButtons}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-64 bg-white rounded-lg shadow-sm p-6 flex flex-col items-center"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-center font-medium text-gray-900">{service.title}</h3>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll("right")}
            className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-rose-200 bg-white text-rose-500 shadow-sm ${!canScrollRight ? "opacity-50 cursor-not-allowed" : "hover:bg-rose-50"}`}
            disabled={!canScrollRight}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

