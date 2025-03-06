import Image from "next/image"
import Link from "next/link"
import img1 from "@/assests/story/9.jpeg"

export default function TrainingLanding() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="mb-12">
        <p className="text-red-500 font-medium mb-2">Successfully 15 Year&apos;s</p>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              World-Renowned IT Expert
              <br />
              Making Organization
            </h1>
            <p className="text-gray-600 mb-6">
              Creative IT has been working with a vision to create IT experts for the past 15 years. In a fast pacing
              world, where every sector relies on technology, you need to develop IT skills to secure a better future.
              With the utmost dedication, we have been able to make more than 70,000 IT experts who are currently
              working in different sectors.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#"
                className="bg-red-500 text-white px-8 py-3 rounded-md font-medium hover:bg-red-600 transition-colors"
              >
                Browse Course
              </Link>
              <Link
                href="#"
                className="bg-red-500 text-white px-8 py-3 rounded-md font-medium hover:bg-red-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={img1}
              alt="IT training classroom with students and instructor"
              width={500}
              height={350}
              className="rounded-lg w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
        <div className="p-4">
          <h2 className="text-3xl font-bold text-red-500">90000+</h2>
          <p className="text-gray-700 text-sm">Successful Students</p>
        </div>
        <div className="p-4">
          <h2 className="text-3xl font-bold text-red-500">34000+</h2>
          <p className="text-gray-700 text-sm">Expert Freelancers</p>
        </div>
        <div className="p-4">
          <h2 className="text-3xl font-bold text-red-500">40000+</h2>
          <p className="text-gray-700 text-sm">Skilled Job Holders</p>
        </div>
        <div className="p-4">
          <h2 className="text-3xl font-bold text-red-500">600+</h2>
          <p className="text-gray-700 text-sm">Industry Expert</p>
        </div>
        <div className="p-4">
          <h2 className="text-3xl font-bold text-red-500">89%</h2>
          <p className="text-gray-700 text-sm">Success Ratio</p>
        </div>
        <div className="p-4">
          <h2 className="text-3xl font-bold text-red-500">3000+</h2>
          <p className="text-gray-700 text-sm">Companies</p>
        </div>
      </div>
    </div>
  )
}

