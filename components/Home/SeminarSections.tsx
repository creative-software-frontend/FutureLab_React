import Image from "next/image"
import { Button } from "@/components/ui/button"
import img1 from "@/assests/story/8.jpeg"
import img2 from "@/assests/story/9.jpeg"

export default function SeminarSections() {
  return (
    <section className="bg-[#fff8f8]">
      {/* Free Seminars Section */}
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Free Seminars</h2>
            <p className="text-gray-600 mb-8">
              Need guidelines to choose a suitable course? Join our free seminars to consult with our experts, they will
              guide you to pick the course that matches your interest and discuss the career prospects.
            </p>
            <Button variant="destructive" size="lg" className="rounded-md">
              Free Seminar Schedule
            </Button>
          </div>
          <div className="relative">
            <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-red-50">
              <div className="w-full h-full relative">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-red-200 rounded-full"
                    style={{
                      top: `${Math.floor(i / 2) * 8}px`,
                      left: `${(i % 2) * 8}px`,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={img1}
                alt="Students in a seminar"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project Based Classes Section */}
      <div className="container mx-auto px-4 py-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-red-50">
              <div className="w-full h-full relative">
                {[...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-red-200 rounded-full"
                    style={{
                      top: `${Math.floor(i / 2) * 8}px`,
                      left: `${(i % 2) * 8}px`,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src={img2}
                alt="Project based classroom"
                width={600}
                height={400}
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="max-w-xl order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Providing project-based classes is our specialty</h2>
            <p className="text-gray-600">
              We believe in skills gained through practical projects. A great number of people struggle to start their
              career in the tech field for only having conceptual knowledge. Creative IT makes sure to provide hands-on
              training to prepare you for job markets. Our course module contains projects that are designed to track
              your progress. During the course, you will be able to make a portfolio yourself to showcase your practical
              skills to the potential employers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

