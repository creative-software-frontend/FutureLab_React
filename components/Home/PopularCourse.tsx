"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function PopularCourses() {
  const [activeTab, setActiveTab] = useState("All Course")

  const tabs = [
    "All Course",
    "Graphic & Multimedia",
    "Web & Software",
    "Digital Marketing",
    "3D Animation & Visualization",
  ]

  const courses = [
    {
      id: 1,
      title: "Professional Graphic Design",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.5,
      reviews: "14,400",
      students: "18,000",
      fee: "50,000 BDT",
      category: "Graphic & Multimedia",
    },
    {
      id: 2,
      title: "Motion Graphics",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.5,
      reviews: "4,160",
      students: "5,200",
      fee: "50,000 BDT",
      category: "Graphic & Multimedia",
    },
    {
      id: 3,
      title: "UX/UI Design",
      image: "/placeholder.svg?height=300&width=400",
      rating: 4.5,
      reviews: "2,800",
      students: "3,500",
      fee: "50,000 BDT",
      category: "Web & Software",
    },
  ]

  return (
    <div className="w-full bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Popular Courses</h2>

        <p className="text-center text-gray-700 max-w-4xl mx-auto mb-10">
          We have designed our courses with the most demanding professional skills. The knowledge, experience, and
          expertise gained through the program will ensure your desired job in the global market. From the list below
          you can enroll to any online or offline courses at any time.
        </p>

        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <div className="flex overflow-x-auto scrollbar-hide">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 font-medium text-sm whitespace-nowrap ${
                  activeTab === tab ? "text-red-600 border-b-2 border-red-600" : "text-gray-700 hover:text-gray-900"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Course Cards */}
        <div className="relative">
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50">
            <ChevronLeft className="h-6 w-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-lg shadow overflow-hidden">
                <div className="relative h-48">
                  {course.id === 1 && (
                    <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-white">GRAPHIC</div>
                        <div className="text-4xl font-bold text-cyan-400">DESIGN</div>
                      </div>
                    </div>
                  )}

                  {course.id === 2 && (
                    <div className="absolute inset-0 bg-purple-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-white">MOTION</div>
                        <div className="text-3xl font-bold text-white">GRAPHICS</div>
                        <div className="absolute bottom-10 left-10">
                          <div className="w-8 h-8 bg-yellow-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {course.id === 3 && (
                    <div className="absolute inset-0 bg-indigo-900 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-orange-500">UX UI</div>
                        <div className="text-3xl font-bold text-white">DESIGN</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="text-orange-500 text-sm font-medium mb-2">All Course</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{course.title}</h3>

                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-current" : ""}`} />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">{course.reviews} Review</span>
                    <span className="text-sm text-gray-600 ml-auto">{course.students} Student</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-gray-900 font-medium">Course Fee {course.fee}</div>
                    <button className="text-sm text-orange-600 border border-orange-600 rounded px-3 py-1 hover:bg-orange-50">
                      Click for discount
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm hover:bg-gray-50">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  )
}

