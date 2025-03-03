import Image from "next/image"
import Link from "next/link"
import { Facebook, Linkedin, Youtube, Instagram } from "lucide-react"
import img1 from "@/assests/footer/2.png"
import img2 from "@/assests/footer/rocket.png"

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Payment Merchants Section */}
      <div className="mb-12">
        <h2 className="text-center text-xl font-semibold mb-8">Our Payment Merchant</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {/* bKash */}
          <div className="p-6 rounded-lg shadow-sm border flex flex-col items-center">
          <Image src={img1}
            
            
            alt="bKash" width={120} height={50} className="mb-3" />
            <div className="text-center text-sm">
              <p>01990779766</p>
              <p>01309014614</p>
            </div>
          </div>

          {/* Nagad */}
          <div className="p-6 rounded-lg shadow-sm border flex flex-col items-center">
            <Image src={img1}
            
            alt="Nagad" width={120} height={50} className="mb-3" />
            <p className="text-sm">01309014614</p>
          </div>

          {/* Rocket */}
          <div className="p-6 rounded-lg shadow-sm border flex flex-col items-center">
            <Image src={img2}
            
           alt="Rocket" width={120} height={50} className="mb-3" />
            <p className="text-sm">01309014614143</p>
          </div>

          {/* SSLCOMMERZ */}
          <div className="p-6 rounded-lg shadow-sm border flex flex-col items-center">
           
              <Image src={img2}
              alt="SSLCOMMERZ"
              width={120}
              height={50}
              className="mb-3"
            />
            <p className="text-sm">SSLCOMMERZ</p>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t pt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div>
            <Image src="/placeholder.svg?height=40&width=150" alt="Creativeb  Software
            
            
            " width={150} height={40} />
          </div>

          {/* Copyright */}
          <div className="text-sm text-gray-600 text-center">
            Copyright © 2025
            
            Creative Software.
            
            
             All rights reserved |
            <Link href="#" className="text-red-500 hover:underline ml-1">
              Sitemap
            </Link>
            <br />
            <span className="text-gray-500">e-TIN: 570007703094, TL: TRAD/DSCCC/22B155/2019</span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook className="w-5 h-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
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

