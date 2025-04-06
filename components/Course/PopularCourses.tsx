"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  "All Course",
  "Graphic & Multimedia",
  "Web & Software",
  "Digital Marketing",
  "3D Animation & Visualization",
] as const

type Course = {
  id: number
  category: string
  title: string
  rating: number
  reviews: number
  students: number
  fee: number
  image: string
}

const courses: Course[] = [
  {
    id: 1,
    category: "All Course",
    title: "Professional Graphic Design",
    rating: 4.5,
    reviews: 14400,
    students: 18000,
    fee: 50000,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 2,
    category: "All Course",
    title: "Motion Graphics",
    rating: 4.5,
    reviews: 14400,
    students: 18000,
    fee: 50000,
    image: "/placeholder.svg?height=200&width=400",
  },
  {
    id: 3,
    category: "All Course",
    title: "UX/UI Design",
    rating: 4.5,
    reviews: 14400,
    students: 18000,
    fee: 50000,
    image: "/placeholder.svg?height=200&width=400",
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 TK{
            i < Math.floor(rating) ? "fill-yellow-400 text-yellow-400" : "fill-gray-300 text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

export default function PopularCourses() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Course")
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { current: container } = scrollContainerRef
      const scrollAmount = direction === "left" ? -container.offsetWidth : container.offsetWidth
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl font-bold text-center mb-8">Popular Courses</h2>

        {/* Category Navigation */}
        <div className="mb-8">
          <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="h-auto justify-start bg-transparent border-b border-gray-200 w-full overflow-x-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:border-b-2 data-[state=active]:border-red-500 data-[state=active]:text-red-500 rounded-none"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Course Carousel */}
        <div className="relative group">
          <div ref={scrollContainerRef} className="flex overflow-x-auto gap-6 snap-x snap-mandatory scrollbar-hide">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
              >
                <div className="relative aspect-[16/9]">
                  <Image
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="text-red-500 text-sm mb-2">{course.category}</div>
                  <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                  <div className="flex items-center gap-2 mb-1">
                    <StarRating rating={course.rating} />
                    <span className="text-sm text-gray-600">{course.reviews.toLocaleString()} Reviews</span>
                  </div>
                  <div className="text-sm text-gray-600">{course.students.toLocaleString()} Students</div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex items-center justify-between">
                  <div className="text-sm">
                    Course Fee <span className="font-bold">{course.fee.toLocaleString()} BDT</span>
                  </div>
                  <Button className="text-red-700 hover:text-red  hover:bg-red-400 p-0">
                    Click for discount
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-0"
            disabled={scrollContainerRef.current?.scrollLeft === 0}
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-8 h-8 rounded-full bg-white shadow-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

