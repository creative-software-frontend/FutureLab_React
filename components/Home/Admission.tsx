import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"

export default function Admission() {
  return (
    <div className="text-black relative mx-auto max-w-7xl">
      {/* Dotted pattern on left */}
      <div className="absolute top-4 left-4 grid grid-cols-6 gap-2 opacity-20">
        {Array(24)
          .fill(0)
          .map((_, i) => (
            <div key={`dot-left-TK${i}`} className="w-1 h-1 rounded-full bg-black"></div>
          ))}
      </div>

      {/* Dotted pattern on right */}
      <div className="absolute top-4 right-4 grid grid-cols-6 gap-2 opacity-20 mx-auto max-w-7xl">
        {Array(24)
          .fill(0)
          .map((_, i) => (
            <div key={`dot-right-${i}`} className="w-1 h-1 rounded-full bg-black"></div>
          ))}
      </div>

      {/* Admission section */}
      <div className="text-center pt-10 pb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-black">Admission Is Going on</h2>
        <p className="text-gray-300 text-base max-w-md mx-auto">
          Enroll to any online or offline course now, take one step
          <br />
          ahead towards a competent career
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <Link
            href="#"
            className="border border-black text-black px-5 py-3 text-lg hover:bg-black hover:text-white transition-colors"
          >
            Join Free Seminar
          </Link>
          <Link
            href="#"
            className="border border-black text-black px-5 py-3 text-lg hover:bg-black hover:text-white transition-colors"
          >
            Browse Course
          </Link>
        </div>
      </div>

      {/* Footer columns */}
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact column */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-black">Contact</h3>
          <div className="flex items-start gap-3 mb-4">
            <MapPin className="text-gray-400 w-6 h-6 mt-1 flex-shrink-0" />
            <div className="text-base text-black">
              <p className="font-medium">Head Office:</p>
              <p>20/2, 2nd Floor, West Panthapath,</p>
              <p>Dhanmondi, Dhaka- 1205</p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <Phone className="text-gray-400 w-6 h-6 mt-1 flex-shrink-0" />
            <div className="text-base text-black">
              <p>+880 9669 866 933</p>
              <p>+880 1978 866 933</p>
             
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Mail className="text-gray-400 w-6 h-6 mt-1 flex-shrink-0" />
            <div className="text-base text-black">
              <p>info@futurelabitinstitute.com</p>
            </div>
          </div>
        </div>

        {/* Quick Links column */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-black">Quick Links</h3>
          <ul className="space-y-3 text-lg">
            <li>
              <Link href="#" className="text-black hover:underline">
                Free Seminar Schedule
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Mentors
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Success Story
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Our Gallery
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Popular Courses column */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-black">Popular Courses</h3>
          <ul className="space-y-3 text-lg">
            <li>
              <Link href="#" className="text-black hover:underline">
                Web Development
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Professional Graphic Design
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Mern Stack Development
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Motion Graphics
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Professional 3D Animation
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Content Writing
              </Link>
            </li>
          </ul>
        </div>

        {/* Others column */}
        <div>
          <h3 className="text-2xl font-bold mb-4 text-black">Others</h3>
          <ul className="space-y-3 text-lg">
            <li>
              <Link href="#" className="text-black hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Our Facility
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Our Achievement
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Career Placement
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Freelancing
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Students Feedback
              </Link>
            </li>
            <li>
              <Link href="#" className="text-black hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
