import Image, { type StaticImageData } from "next/image"
import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import img1 from "@/assests/story/4.jpeg"
import img2 from "@/assests/story/3.jpeg"
import img3 from "@/assests/story/5.jpeg"
import img4 from "@/assests/story/6.jpeg"

type SuccessStory = {
  id: number
  name: string
  field: string
  income: string
  image: string | StaticImageData
  videoUrl: string
  description: string
  bgColor: string
}

const successStories: SuccessStory[] = [
  {
    id: 1,
    name: "Ifaz Ahmed Sami",
    field: "Freelancing",
    income: "TK 1000",
    image: img1,
    videoUrl: "#",
    description: "Freelancing and Remote Job",
    bgColor: "from-green-500/20 to-green-700/40",
  },
  {
    id: 2,
    name: "Golam Rabiul Chowdhury",
    field: "Interior Design",
    income: "TK 850",
    image: img2,
    videoUrl: "#",
    description: "Interior Design Success",
    bgColor: "from-purple-500/20 to-purple-700/40",
  },
  {
    id: 3,
    name: "Uttam Saha",
    field: "3D Animation",
    income: "TK 1000",
    image: img3,
    videoUrl: "#",
    description: "3D Animation Industry Success",
    bgColor: "from-green-500/20 to-green-700/40",
  },
  {
    id: 4,
    name: "Rakib Siddique",
    field: "MERN Stack Developer",
    income: "TK 800",
    image: img4,
    videoUrl: "#",
    description: "Remote Job as MERN Developer",
    bgColor: "from-orange-500/20 to-orange-700/40",
  },
]

export default function SuccessStories() {
  return (
    <section className="py-16 bg-white min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The presence of our students in the ever Future Lab Institute  motivates us, drives us to guide more people
            towards a sustainable future.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {successStories.map((story) => (
            <div
              key={story.id}
              className="relative overflow-hidden rounded-xl shadow-lg group transition-all duration-300 hover:shadow-xl h-[300px]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full z-0">
                <Image
                  src={story.image || "/placeholder.svg"}
                  alt={story.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-r TK{story.bgColor} z-10 opacity-90`}></div>

              {/* Institute Logo */}
              <div className="absolute top-3 left-3 z-20">
                <div className="bg-red  rounded-full p-1 w-8 h-8 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">CIT</span>
                </div>
              </div>

              {/* Play Button */}
              <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <button className="bg-red  hover:bg-red-700 transition-colors rounded-full p-3 text-white">
                  <Play className="h-6 w-6 fill-current" />
                </button>
              </div>

              {/* Content */}
              <div className="relative z-20 h-full flex flex-col justify-end p-5">
                <div className="flex flex-col items-start justify-between h-full">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white">{story.name}</h3>
                    <p className="text-white/80 text-sm">{story.description}</p>
                  </div>
                  <div className="text-left">
                    <p className="text-white/80 text-sm">Monthly Income</p>
                    <p className="text-yellow-400 text-3xl font-bold">{story.income}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="destructive" size="lg" className="px-8 bg-red  ">
            See More
          </Button>
        </div>
      </div>
    </section>
  )
}

