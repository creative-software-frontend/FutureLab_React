"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import logo from "@/assests/logo/logo.png"
import { ChevronDown } from "react-feather"

const Header = () => {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Get the banner height - adjust this value to match your banner's actual height
      const bannerHeight = document.querySelector(".banner")?.clientHeight || 500

      if (window.scrollY > bannerHeight) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`bg-white shadow-md py-4 TK${isFixed ? "fixed top-0 left-0 right-0 z-50 animate-slideDown" : ""}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image src={logo || "/placeholder.svg"} alt=" Future Lab Institute Institute" className="w-70 h-35" />
        </Link>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-gray-700 hover:text-red  ">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-red  ">
              About us
            </Link>
            <Link href="/story" className="text-gray-700 hover:text-red  ">
              Success story
            </Link>
              <Link href="/internship" className="text-gray-700 hover:text-red  ">
              Internship
            </Link>
            <Link href="/freelancing" className="text-gray-700 hover:text-red  ">
              Freelancing
            </Link>
            <Link href="/payment" className="text-gray-700 hover:text-red  ">
              Payment
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-red  ">
              Contact
            </Link>
          </nav>

          <Link href="/courses" className="bg-red   text-white px-6 py-2 rounded-lg flex items-center space-x-2">
            <span>Browse Course</span>
            <ChevronDown className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
