"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import achivement from "@/assests/story/achivement.jpg"

const milestones = [
  {
    id: 1,
    title: "The Ten Outstanding Young Persons of Bangladesh (TOYP) 2021",
    description:
      "Our honorable CEO Mr. Monir Hossen received the TOYP 2021 award for his incredible contribution to the development of the IT sector. This award is given to the top 10 young entrepreneurs for outstanding performance.",
    image: achivement,
  },
  // Add more milestones as needed
]

export default function MilestoneSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % milestones.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + milestones.length) % milestones.length)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="space-y-4 mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Our Milestone</h2>
        <p className="text-gray-600 max-w-3xl">
          Creative IT Institute is the harbor of thousands of successful freelancers in Bangladesh. We have trained and
          produced more than 70,000 Freelancers in the past 15 years. We nurture the young talent by sharing knowledge
          and help students find the desired jobs to become financially solvent.
        </p>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        {/* Milestone Card */}
        <div className="bg-[#FFF9EA] rounded-2xl overflow-hidden shadow-sm">
          <div className="flex flex-col md:flex-row items-center p-6 gap-8">
            <div className="w-full md:w-1/3">
              <Image
                src={milestones[currentSlide].image || "/placeholder.svg"}
                alt="Achievement"
                width={400}
                height={300}
                className="rounded-lg object-cover"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">{milestones[currentSlide].title}</h3>
              <p className="text-gray-600 leading-relaxed">{milestones[currentSlide].description}</p>
            </div>
          </div>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {milestones.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-gray-800" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

