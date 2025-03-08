"use client"

import { useState } from "react"
import Image from "next/image"
import { Play } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const categories = [
  "Career & Placement",
  "Graphics & Multimedia",
  "Web & Software",
  "Digital Marketing",
  "3D Animation & Visualization",
  "Networking & Technology",
  "Film & Media",
] as const

type Story = {
  id: number
  title: string
  category: string
  thumbnail: string
  videoUrl: string
}

const stories: Story[] = [
  {
    id: 1,
    title: "Career Placement Success Story",
    category: "Career & Placement",
    thumbnail: "",
    videoUrl: "#",
  },
  {
    id: 2,
    title: "Graphics Design Success",
    category: "Graphics & Multimedia",
    thumbnail: "",
    videoUrl: "#",
  },
  {
    id: 3,
    title: "Web Development Journey",
    category: "Web & Software",
    thumbnail: "",
    videoUrl: "#",
  },
  {
    id: 4,
    title: "Digital Marketing Expert",
    category: "Digital Marketing",
    thumbnail: "",
    videoUrl: "#",
  },
  {
    id: 5,
    title: "Networking Professional",
    category: "Networking & Technology",
    thumbnail: "",
    videoUrl: "#",
  },
  {
    id: 6,
    title: "Animation Success Story",
    category: "3D Animation & Visualization",
    thumbnail: "",
    videoUrl: "#",
  },
]

export default function SuccessStories() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Career & Placement")
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const filteredStories =
    selectedCategory === "all" ? stories : stories.filter((story) => story.category === selectedCategory)

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Success Stories</h1>
        <p className="text-gray-600 mb-8 max-w-4xl">
          The bright presence of our students in the marketplace inspires us and motivates us to engage more people with
          our vision to make a better future. During the last 36 years, hundreds of thousands of people learned and grew
          their expertise with us. By bringing economic stability to their own life, many students created job
          opportunities for others. We always appreciate this wonderful journey of our keen learners.
        </p>

        {/* Category Navigation */}
        <div className="mb-8 overflow-x-auto">
          <Tabs defaultValue={selectedCategory} onValueChange={setSelectedCategory}>
            <TabsList className="h-auto flex flex-nowrap space-x-2 p-1 bg-transparent">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-4 py-2 whitespace-nowrap data-[state=active]:bg-red-50 data-[state=active]:text-red-600"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Success Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStories.map((story) => (
            <Card
              key={story.id}
              className="group relative overflow-hidden cursor-pointer"
              onClick={() => setSelectedVideo(story.videoUrl)}
            >
              <div className="relative aspect-video">
                <Image src={story.thumbnail || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white fill-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Video Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative w-full max-w-4xl mx-4 aspect-video">
              <iframe
                src={selectedVideo}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

