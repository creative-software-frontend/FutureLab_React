import { Book,  Play } from "lucide-react"
import Image from "next/image"
// import Link from "next/link"

export default function Banner() {
  return (
    <div className="min-h-screen bg-[#fff5f5]">
     

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 rounded-full bg-[#ff3333] flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <span className="text-lg font-medium">Unleash Your Potential</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Become an IT Pro &<br />
              Rule the <span className="text-[#ff3333]">Digital World</span>
            </h1>

            <p className="text-gray-600 text-lg max-w-2xl">
              With a vision to turn manpower into assets, Creative IT Institute is ready to enhance your learning
              experience with skilled mentors and an updated curriculum. Pick your desired course from more than 45
              trendy options.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#ff3333] text-white px-6 py-3 rounded-lg flex items-center space-x-2">
                <Book className="h-5 w-5" />
                <span>Browse Course</span>
              </button>
              <button className="bg-[#ff3333] text-white px-6 py-3 rounded-lg flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Join free seminar</span>
              </button>
            </div>

            <div className="flex items-center space-x-3">
              <Image src="/placeholder.svg" alt="ISO Certified" width={60} height={60} className="w-12 h-12" />
              <p className="text-sm text-gray-600">
                One of the best ISO certified IT Training Institutes in Bangladesh
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <div className="relative bg-[#001233] rounded-2xl p-8 overflow-hidden">
              <div className="absolute top-4 left-4">
                <Image src="/placeholder.svg" alt="Best IT Institute" width={120} height={40} className="h-8 w-auto" />
              </div>
              <div className="absolute top-4 right-4">
                <Image
                  src="/placeholder.svg"
                  alt="Creative Business Group"
                  width={120}
                  height={40}
                  className="h-8 w-auto"
                />
              </div>
              <div className="pt-16 text-center">
                <div className="text-[#ff3333] text-7xl font-bold">
                  16
                  <span className="text-2xl text-yellow-400 ml-2">Years</span>
                </div>
                <div className="text-white text-xl mt-2">Empowering Technology</div>
                <div className="mt-8 bg-[#003399] text-white py-3 px-8 rounded-full inline-block">
                  CREATIVE IT INSTITUTE
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Side Elements */}
      <div className="fixed left-0 top-1/2 -translate-y-1/2 bg-[#ff3333] text-white py-2 px-4 -rotate-90 transform origin-left">
        GET DISCOUNT
      </div>
      <div className="fixed right-0 top-1/2 -translate-y-1/2 bg-[#ff3333] text-white py-2 px-4 rotate-90 transform origin-right">
        Join Free Seminar
      </div>
    </div>
  )
}

