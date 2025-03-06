"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

export default function StatsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  const stats = [
    {
      number: "20000+",
      title: "Students Choose Creative IT",
      description:
        "Creative IT has become a trusted training institute for not only Bangladeshi residents but also those living abroad. More than 20,000 passionate learners are working in different markets after completing courses from our institute.",
      bgColor: "bg-[#fafdf2]",
      numberColor: "text-[#89B450]",
    },
    {
      number: "42000+",
      title: "Got Career Placement.",
      description:
        "Our job placement department has helped more than 42,000 skilled students find jobs in competitive global markets. Promising a better future, we have successfully raised the job placement rate to 67% by providing continuous career support to the learners.",
      bgColor: "bg-[#fff7f3]",
      numberColor: "text-gray-900",
    },
    {
      number: "89%",
      title: "Success Ratio",
      description:
        "Excelling at work needs hands-on experience. The practical approach towards problems puts our students ahead of any other competitors in global job markets. All the courses are structured considering the job prospects to make you well prepared for a bright career.",
      bgColor: "bg-[#f3f9ff]",
      numberColor: "text-[#40B7E5]",
    },
  ]

  return (
    <div className="relative w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 lg:hidden flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Stats Cards */}
          <div ref={scrollRef} className="flex space-x-6 overflow-x-auto scrollbar-hide lg:overflow-x-visible">
            {stats.map((stat, index) => (
              <div key={index} className={`flex-shrink-0 w-full lg:w-1/3 ${stat.bgColor} rounded-lg p-8`}>
                <div className={`text-5xl font-bold mb-4 ${stat.numberColor}`}>{stat.number}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{stat.title}</h3>
                <p className="text-gray-600 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 lg:hidden flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

