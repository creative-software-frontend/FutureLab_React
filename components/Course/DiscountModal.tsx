"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface DiscountModalProps {
  isOpen: boolean
  onClose: () => void
  courseName: string
}

export function DiscountModal({ isOpen, onClose, courseName }: DiscountModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    profession: "",
    location: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleProfessionChange = (value: string) => {
    setFormData((prev) => ({ ...prev, profession: value }))
  }

  const handleLocationChange = (value: string) => {
    setFormData((prev) => ({ ...prev, location: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { ...formData, courseName })
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] p-0 bg-white rounded-none border-0">
        <div className="relative p-6">
          <button onClick={onClose} className="absolute right-4 top-4 text-gray-500 hover:text-gray-700">
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </button>

          <div className="mt-4">
            <h2 className="text-xl font-bold mb-4">
              To know more about the offers, please fill up the form given below. Our representative will get back to
              you soon.
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border rounded"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  name="mobile"
                  placeholder="Mobile Number*"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border rounded"
                />

                <Select value={formData.profession} onValueChange={handleProfessionChange}>
                  <SelectTrigger className="w-full p-3 border rounded h-[42px]">
                    <SelectValue placeholder="Profession" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="student">Student</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="teacher">Teacher</SelectItem>
                    <SelectItem value="freelancer">Freelancer</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Select value={formData.location} onValueChange={handleLocationChange}>
                  <SelectTrigger className="w-full p-3 border rounded h-[42px]">
                    <SelectValue placeholder="Location" />
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

                <Input
                  name="courseName"
                  placeholder="Course Name*"
                  value={courseName}
                  readOnly
                  required
                  className="w-full p-3 border rounded bg-gray-50"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-[200px] bg-red-500 hover:bg-red  text-white font-bold py-3 px-6 rounded"
                >
                  Submit
                </button>
              </div>
            </form>

            <div className="mt-4">
              <p className="text-gray-700">
                <span className="font-semibold">If Necessary:</span>+88 09649 866 933 , 01978 866 933
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

