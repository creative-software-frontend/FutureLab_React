import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react"
import logo from "@/assests/logo/logo.png"
// import img2 from "@/assests/footer/rocket.png"

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
   

      {/* Footer Bottom */}
      <div className=" pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div>
            <Image src={logo} alt="Future Lab Institute
            
            
            " width={150} height={40} />
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600 text-center">
             © 2025
            
             Future Lab Institute.
            
            
             All rights reserved |
            <Link href="#" className="text-red-500 hover:underline ml-1">
              Sitemap
            </Link>
            <br />
            <span className="text-gray-500">e-TIN: 570003094, TL: TRAD/DSCCC/22B005/2019</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link href="https://www.facebook.com/futurelabinstitutebd" className="text-gray-600 hover:text-gray-900">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="https://www.linkedin.com/company/future-lab-institute" className="text-gray-600 hover:text-gray-900">
              <Linkedin className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Youtube className="w-5 h-5" />
              <span className="sr-only">YouTube</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram className="w-5 h-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

