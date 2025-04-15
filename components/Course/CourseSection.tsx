import { Star, StarHalf } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import img1 from "@/assests/story/2.png"
import img2 from "@/assests/story/3.jpeg"
import img3 from "@/assests/story/5.jpeg"
import img4 from "@/assests/story/6.jpeg"
import type { StaticImageData } from "next/image"

type Course = {
  id: number
  category: string
  title: string
  rating: number
  reviews: number
  students: number
  fee: number
  image: string | StaticImageData
}

const courses: { [key: string]: Course[] } = {
  "Graphic & Multimedia": [
    {
      id: 1,
      category: "All Course",
      title: "Professional Graphic Design",
      rating: 4.5,
      reviews: 14400,
      students: 18000,
      fee: 50000,
      image: img1,
    },
    {
      id: 2,
      category: "All Course",
      title: "Motion Graphics",
      rating: 4.5,
      reviews: 4160,
      students: 5200,
      fee: 50000,
      image: img2,
    },
    {
      id: 3,
      category: "All Course",
      title: "UX/UI Design",
      rating: 4.5,
      reviews: 2800,
      students: 3500,
      fee: 50000,
      image: img3,
    },
  ],
  "Web & Software": [
    {
      id: 4,
      category: "All Course",
      title: "MERN Stack Development",
      rating: 4.5,
      reviews: 680,
      students: 850,
      fee: 95000,
      image: img4,
    },
    {
      id: 5,
      category: "All Course",
      title: "App Development With Kotlin",
      rating: 4.5,
      reviews: 1220,
      students: 2400,
      fee: 50000,
      image: img1,
    },
    {
      id: 6,
      category: "All Course",
      title: "Python Django",
      rating: 4.5,
      reviews: 256,
      students: 320,
      fee: 50000,
      image: img1,
    },
  ],
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center">
      {[...Array(Math.floor(rating))].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
      {rating % 1 !== 0 && <StarHalf className="w-4 h-4 fill-yellow-400 text-yellow-400" />}
    </div>
  )
}

export default function CoursesSection() {
  return (
    <div className="py-1 bg-white">
      <div className="container mx-auto  max-w-7xl">
        {Object.entries(courses).map(([category, categoryCourses]) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-bold mb-8">{category}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryCourses.map((course) => (
                <Card key={course.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                  <div className="relative aspect-[16/9]">
                    <Image src={course.image || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
                  </div>
                  <CardContent className="p-4">
                    <div className="text-orange-500 text-sm font-medium mb-2">{course.category}</div>
                    <h3 className="font-bold text-lg mb-2">{course.title}</h3>
                    <div className="flex items-center gap-2 mb-1">
                      <StarRating rating={course.rating} />
                      <span className="text-sm text-gray-600">{course.reviews.toLocaleString()} Review</span>
                      <span className="text-sm text-gray-600">{course.students.toLocaleString()} Student</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-4 pt-0 flex items-center justify-between">
                    <div className="text-sm">
                      Course Fee <span className="font-bold">{course.fee.toLocaleString()} BDT</span>
                    </div>
                    <button className="text-red  text-sm font-medium hover:text-red-700">Click for discount</button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

