"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const courses = [
  "Professional Graphic Design",
  "Web Development",
  "Digital Marketing",
  "3D Animation",
  "Motion Graphics",
  "UI/UX Design",
]

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Professional Graphic Design",
    details: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      course: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formData)
    // Handle form submission here
  }

  return (
    <div className="max-w-2xl mx-auto p-4 md:p-6">
      <h2 className="text-2xl font-semibold mb-6">Inbox your queries</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input name="name" placeholder="Your name" value={formData.name} onChange={handleChange} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Input name="email" placeholder="Write Your E-mail" value={formData.email} onChange={handleChange} />
          </div>

          <div>
            <Input name="phone" placeholder="Write Your Number" value={formData.phone} onChange={handleChange} />
          </div>
        </div>

        <div>
          <Select defaultValue={formData.course} onValueChange={handleSelectChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select a course" />
            </SelectTrigger>
            <SelectContent>
              {courses.map((course) => (
                <SelectItem key={course} value={course}>
                  {course}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div>
          <Textarea
            name="details"
            placeholder="Write Details"
            className="min-h-[120px]"
            value={formData.details}
            onChange={handleChange}
          />
        </div>

        <Button type="submit" className="w-24 bg-red-500 hover:bg-red-600">
          Submit
        </Button>
      </form>
    </div>
  )
}

