"use client"

import type React from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface SeminarModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SeminarModal({ isOpen, onClose }: SeminarModalProps) {
  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted")
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg w-full max-w-2xl relative">
        <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
          <X size={24} />
        </button>

        <div className="p-6 md:p-8">
          <h2 className="text-2xl font-bold text-center mb-6">
            To know more about the offers, please fill up the form given below. Our representative will get back to you
            soon.
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input id="name" placeholder="Your Name" className="w-full" required />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Input id="mobile" placeholder="Mobile Number*" className="w-full" required />
              </div>
              <div>
                <Input id="profession" placeholder="Profession" className="w-full" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dhaka">Dhaka</SelectItem>
                    <SelectItem value="chittagong">Chittagong</SelectItem>
                    <SelectItem value="sylhet">Sylhet</SelectItem>
                    <SelectItem value="rajshahi">Rajshahi</SelectItem>
                    <SelectItem value="khulna">Khulna</SelectItem>
                    <SelectItem value="barisal">Barisal</SelectItem>
                    <SelectItem value="rangpur">Rangpur</SelectItem>
                    <SelectItem value="mymensingh">Mymensingh</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Input
                  value="Free Seminar Schedule"
                  className="w-full bg-gray-100 text-gray-700 cursor-not-allowed font-medium"
                  disabled
                />
              </div>
            </div>

            <div className="mt-6">
              <Button
                type="submit"
                className="w-40 bg-red-500 hover:bg-red  text-white font-medium py-2 px-4 rounded"
              >
                Submit
              </Button>
            </div>
          </form>

          <div className="mt-6 text-sm text-gray-600">
            <p>If Necessary: 09649 866 933 , 01978 866 933</p>
          </div>
        </div>
      </div>
    </div>
  )
}

