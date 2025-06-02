'use client'
import React, { useState } from "react";
import { Star } from "lucide-react";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import computer1 from "../../assests/story/computer (1).jpg"
import computer2 from "../../assests/story/computer (2).jpg"
import computer3 from "../../assests/story/computer (3).jpg"
import electrical1 from "../../assests/story/electrical (1).jpg"
import electrical2 from "../../assests/story/electrical (2).jpg"
import electrical3 from "../../assests/story/electrical (3).jpg"
import civil1 from "../../assests/story/civil (1).jpg"
import civil2 from "../../assests/story/civil (2).jpg"
import civil3 from "../../assests/story/civil (3).jpg"
import architecture1 from "../../assests/story/architecture (1).jpg"
import architecture2 from "../../assests/story/architecture (2).jpg"
import architecture3 from "../../assests/story/architecture (3).jpg"

type Course = {
  title: string;
  category: string;
  reviews: number;
  students: number;
  fee: string;
  image: string | StaticImageData;

};

const tabData: { [key: number]: Course[] } = {
  1: [
    {
      title: "Electrical Engineering Basics",
      category: "Electrical Department",
      reviews: 12000,
      students: 15000,
      fee: "45,000 BDT",
      image: electrical1,
    },
    {
      title: "Power System Analysis",
      category: "Electrical Department",
      reviews: 9000,
      students: 12000,
      fee: "40,000 BDT",
      image: electrical2,
    },
    {
      title: "Industrial Automation",
      category: "Electrical Department",
      reviews: 8000,
      students: 11000,
      fee: "50,000 BDT",
      image: electrical3,
    },
  ],
  2: [
    {
      title: "Information Technology (IT) Services",
      category: "Computer Department",
      reviews: 14400,
      students: 18000,
      fee: "50,000 BDT",
      image: computer2,
    },
    {
      title: "Full Stack Development",
      category: "Computer Department",
      reviews: 10000,
      students: 17000,
      fee: "55,000 BDT",
      image: computer1,
    },
    {
      title: "AI & Machine Learning",
      category: "Computer Department",
      reviews: 12000,
      students: 16000,
      fee: "60,000 BDT",
      image: computer3
    },
  ],
  3: [
    {
      title: "Architectural Design",
      category: "Architecture Department",
      reviews: 7500,
      students: 9000,
      fee: "48,000 BDT",
      image: architecture1,
    },
    {
      title: "Urban Planning",
      category: "Architecture Department",
      reviews: 8200,
      students: 10000,
      fee: "52,000 BDT",
      image: architecture2,
    },
    {
      title: "AutoCAD Masterclass",
      category: "Architecture Department",
      reviews: 9100,
      students: 9500,
      fee: "49,000 BDT",
      image: architecture3,
    },
  ],
  4: [
    {
      title: "Structural Analysis",
      category: "Civil Department",
      reviews: 8800,
      students: 12000,
      fee: "47,000 BDT",
      image: civil1,
    },
    {
      title: "Construction Management",
      category: "Civil Department",
      reviews: 9200,
      students: 13000,
      fee: "51,000 BDT",
      image: civil2,
    },
    {
      title: "Surveying & Leveling",
      category: "Civil Department",
      reviews: 8600,
      students: 11500,
      fee: "46,000 BDT",
      image: civil3,
    },
  ],
};

const CourseTab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const courses = tabData[activeTab];

  return (
    <section className="px-4 py-10">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {["electrical", "computer", "architecture", "civil"].map((name, i) => (
          <button
            key={i}
            className={`px-6 py-2 rounded-md text-sm font-medium border ${
              activeTab === i + 1
                ? " text-rose-600 border border-gray-300 capitalize bg-sky-50"
                : "bg-gray-200 text-gray-700 border-gray-300 capitalize"
            }`}
            onClick={() => setActiveTab(i + 1)}
          >
            {name} department
          </button>
        ))}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {courses.map((course, index) => (
          <Card
            key={index}
            className="overflow-hidden group hover:shadow-lg transition-shadow"
          >
            <div className="relative aspect-[16/9]">
              <Image
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="p-4">
              <div className="text-orange-500 text-sm font-medium mb-2">
                {course.category}
              </div>
              <h3 className="font-bold text-lg mb-2">{course.title}</h3>
              <div className="flex items-center gap-2 mb-1 text-gray-600 text-sm">
                <Star className="w-4 h-4 text-yellow-500" />
                <span>{course.reviews.toLocaleString()} Reviews</span>
                <span>{course.students.toLocaleString()} Students</span>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex items-center justify-between">
              <div className="text-sm">
                Course Fee <span className="font-bold">{course.fee}</span>
              </div>
              <button className="text-rose-600 text-sm font-medium hover:text-rose-700">
                Click for discount
              </button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default CourseTab;
