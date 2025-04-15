import type React from "react"
import { Star, StarHalf } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import img1 from "@/assests/story/2.png"
import img2 from "@/assests/story/3.jpeg"
import img3 from "@/assests/story/5.jpeg"
import img4 from "@/assests/story/6.jpeg"
import type { StaticImageData } from "next/image"
import {
  Palette,
  Code,
  BarChart,
  CuboidIcon as Cube,
  Film,
  Languages,
  GraduationCap,
  Cloud,
  Shield,
} from "lucide-react"

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

type CategoryInfo = {
  name: string
  icon: React.ReactNode
  description?: string
}

const categories: CategoryInfo[] = [
  {
    name: "Graphic & Multimedia",
    icon: <Palette className="h-10 w-10 text-red-500" />,
  },
  {
    name: "Web & Software",
    icon: <Code className="h-10 w-10 text-blue-500" />,
  },
  {
    name: "Digital Marketing",
    icon: <BarChart className="h-10 w-10 text-purple-500" />,
  },
  {
    name: "3D Animation & Visualization",
    icon: <Cube className="h-10 w-10 text-cyan-500" />,
  },
  {
    name: "Film & Media",
    icon: <Film className="h-10 w-10 text-gray-700" />,
  },
  {
    name: "English Language",
    icon: <Languages className="h-10 w-10 text-orange-500" />,
  },
  {
    name: "1 Year Diploma Programs",
    icon: <GraduationCap className="h-10 w-10 text-green-500" />,
  },
  {
    name: "Cloud Computing",
    icon: <Cloud className="h-10 w-10 text-blue-400" />,
  },
  {
    name: "Networking & Cybersecurity",
    icon: <Shield className="h-10 w-10 text-indigo-500" />,
  },
]

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
  "Digital Marketing": [
    {
      id: 7,
      category: "All Course",
      title: "Digital Marketing Fundamentals",
      rating: 4.5,
      reviews: 3200,
      students: 4000,
      fee: 45000,
      image: img2,
    },
  ],
  "3D Animation & Visualization": [
    {
      id: 8,
      category: "All Course",
      title: "3D Modeling and Animation",
      rating: 4.5,
      reviews: 1800,
      students: 2200,
      fee: 65000,
      image: img3,
    },
  ],
  "Film & Media": [
    {
      id: 9,
      category: "All Course",
      title: "Video Production Essentials",
      rating: 4.5,
      reviews: 2100,
      students: 2600,
      fee: 55000,
      image: img4,
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

export default function CourseBanner() {
  return (
    <div className="py-4 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-4xl font-bold text-red  mb-4">Courses</h1>
        <p className="text-gray-600 mb-12 max-w-4xl">
          We offer all the trendy courses that are in demand in the global market. In addition, you are getting lab
          facilities where high-end computers with the required configuration are ready to facilitate your learning.
          After class, you can practice the topic in our labs to grow your skills. The courses are designed to make you
          confident throughout the learning journey with  Future Lab Institute.
        </p>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
          {categories.map((category, index) => (
            <Card key={index} className="border shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <div className="mb-3">{category.icon}</div>
                <h3 className="text-sm font-medium">{category.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Listings */}
        <Tabs defaultValue="Graphic & Multimedia">
          <TabsList className="mb-8 flex flex-wrap">
            {Object.keys(courses).map((category) => (
              <TabsTrigger key={category} value={category} className="px-4 py-2">
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(courses).map(([category, categoryCourses]) => (
            <TabsContent key={category} value={category}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categoryCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={course.image || "/placeholder.svg"}
                        alt={course.title}
                        fill
                        className="object-cover"
                      />
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
                      <button className="text-red  text-sm font-medium hover:text-red-700">
                        Click for discount
                      </button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  )
}

