import Link from "next/link"
import Image from "next/image"
import { ChevronDown, Mail, Phone } from "lucide-react"

export default function Header() {
  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-red-500 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Phone className="h-4 w-4" />
            <a href="tel:01777308777" className="text-sm">
              01777308777
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <Mail className="h-4 w-4" />
            <a href="mailto:help@creativeitinstitute.com" className="text-sm">
              help@creativeitinstitute.com
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <button className="text-sm px-2 py-1 bg-white bg-opacity-20 rounded">BN</button>
            <button className="text-sm px-2 py-1">EN</button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="bg-white py-4 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src=""
              alt="Creative IT Institute"
              width={200}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-red-500">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red-500">
              About us
            </Link>
            <Link href="/success" className="text-gray-700 hover:text-red-500">
              Success story
            </Link>
            <Link href="/freelancing" className="text-gray-700 hover:text-red-500">
              Freelancing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red-500">
              Contact
            </Link>
          </nav>

          <button className="bg-red-500 text-white px-6 py-2 rounded-lg flex items-center space-x-2">
            <span>Browse Course</span>
            <ChevronDown className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  )
}

