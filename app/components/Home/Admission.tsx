import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Admission() {
  return (
    <div className="bg-[#3c322d] text-white relative ">
      {/* Dotted pattern on left */}
      <div className="absolute top-4 left-4 grid grid-cols-6 gap-2 opacity-20">
        {Array(24)
          .fill(0)
          .map((_, i) => (
            <div key={`dot-left-${i}`} className="w-1 h-1 rounded-full bg-white"></div>
          ))}
      </div>

      {/* Dotted pattern on right */}
      <div className="absolute top-4 right-4 grid grid-cols-6 gap-2 opacity-20">
        {Array(24)
          .fill(0)
          .map((_, i) => (
            <div key={`dot-right-${i}`} className="w-1 h-1 rounded-full bg-white"></div>
          ))}
      </div>

      {/* Admission section */}
      <div className="text-center pt-10 pb-8">
        <h2 className="text-2xl md:text-3xl font-semibold mb-2">Admission Is Going on</h2>
        <p className="text-gray-300 text-sm max-w-md mx-auto">
          Enroll to any online or offline course now, take one step
          <br />
          ahead towards a competent career
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Link
            href="#"
            className="border border-white text-white px-4 py-2 text-sm hover:bg-white hover:text-[#3c322d] transition-colors"
          >
            Join Free Seminar
          </Link>
          <Link
            href="#"
            className="border border-white text-white px-4 py-2 text-sm hover:bg-white hover:text-[#3c322d] transition-colors"
          >
            Browse Course
          </Link>
        </div>
      </div>

    

      {/* Footer columns */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact column */}
        <div>
          <h3 className="text-lg font-medium mb-4">Contact</h3>
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="text-gray-400 w-5 h-5 mt-1 flex-shrink-0" />
            <div className="text-sm text-gray-300">
              <p className="font-medium">Head Office:</p>
              <p>Momtaz Plaza (4th Floor)</p>
              <p>House # 07, Road # 04</p>
              <p>Dhanmondi, Dhaka- 1205</p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <Phone className="text-gray-400 w-5 h-5 mt-1 flex-shrink-0" />
            <div className="text-sm text-gray-300">
              <p>+880 1777308777</p>
              <p>+880 1624866000</p>
              <p>+880 1674888444</p>
              <p>+880 1966177777</p>
              <p>+880 1625555444</p>
              <p>+880 1990779900</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="text-gray-400 w-5 h-5 mt-1 flex-shrink-0" />
            <div className="text-sm text-gray-300">
              <p>info@creativeitinstitute.com</p>
            </div>
          </div>
        </div>

        {/* Quick Links column */}
        <div>
          <h3 className="text-lg font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="#" className="hover:text-white">
                Free Seminar Schedule
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Mentors
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Success Story
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Our Gallery
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Popular Courses column */}
        <div>
          <h3 className="text-lg font-medium mb-4">Popular Courses</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="#" className="hover:text-white">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Professional Graphic Design
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Mern Stack Development
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Motion Graphics
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Professional 3D Animation
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Content Writing
              </Link>
            </li>
          </ul>
        </div>

        {/* Others column */}
        <div>
          <h3 className="text-lg font-medium mb-4">Others</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="#" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Our Facility
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Our Achievement
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Career Placement
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Freelancing
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Students Feedback
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

