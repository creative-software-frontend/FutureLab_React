"use client"

import Image from "next/image"
import { Play } from "lucide-react"
import { Card } from "@/components/ui/card"
import img1 from "@/assests/story/upwork.png"
import img2 from "@/assests/story/fiver.jpg"
import img3 from "@/assests/story/download.jpg"

const marketplaces = [
  {
    name: "Fiverr",
    logo: img1,
  },
  {
    name: "Upwork",
    logo: img2
  },
  {
    name: "Freelancer",
    logo: img1
  },
  {
    name: "Envato",
    logo: img2
  },
  {
    name: "99designs",
    logo: img1
  },
]

const stats = [
  {
    number: "90000+",
    label: "Successful Students",
  },
  {
    number: "34000+",
    label: "Expert Freelancers",
  },
  {
    number: "40000+",
    label: "Skilled Job Holders",
  },
  {
    number: "600+",
    label: "Industry Expert",
  },
  {
    number: "89%",
    label: "Success Rate",
  },
  {
    number: "3000+",
    label: "Companies",
  },
]

export default function FreelancingBanner() {
  return (
    <div className="py-4">
      <div className="container mx-auto px-4 max-w-7xl">
        <h1 className="text-4xl font-bold text-red  mb-8">Freelancing</h1>

        <div className="bg-orange-50/50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Freelancing</h2>
              <p className="text-gray-600 mb-6">
                According to a survey done by Bangladesh ICT Division, more than 6 lakh freelancers in our country are
                currently working in the global marketplace. It has become a trendy source of income, especially for
                those willing to get financial stability through independent work. As a result, more than 1 lakh people
                have become self-employed by furnishing their technical skills. We offer more than 50 demanding courses
                from where you can pick yours to start career as a freelancer.
              </p>

              {/* Video Thumbnail */}
              <div className="relative aspect-video rounded-lg overflow-hidden">
                <Image
                  src={img3}
                  alt="Freelancing Video"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button className="w-16 h-16 rounded-full bg-red  flex items-center justify-center">
                    <Play className="w-8 h-8 text-white fill-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Available workplaces</h2>
              <p className="text-gray-600 mb-6">
                Freelancing can be a great option if you prefer an independent career. Every day the marketplaces offer
                a number of jobs, you only need the skills to grab the opportunity.
              </p>

              {/* Marketplace Logos Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {marketplaces.map((marketplace) => (
                  <Card key={marketplace.name} className="p-4 flex items-center justify-center">
                    <Image
                      src={marketplace.logo || "/placeholder.svg"}
                      alt={marketplace.name}
                      width={120}
                      height={40}
                      className="h-8 w-auto object-contain"
                    />
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-4">
              <div className="text-2xl font-bold text-red  mb-1">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

