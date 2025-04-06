"use client"

import {
  Briefcase,
  Code,
  Palette,
  ShoppingBag,
  Globe,
  Play,
  FileCode,
  GraduationCap,
  Layers,
  PenTool,
  Clock,
  ImageIcon,
  Users,
  ArrowUpRight,
  VideoIcon as Vector,
  TreePine,
} from "lucide-react"

export default function AvailableWorkplaces() {
  const workplaces = [
    { name: "Freepik", icon: ImageIcon },
    { name: "Freelancer", icon: Briefcase },
    { name: "Fiverr", icon: ShoppingBag },
    { name: "Envato", icon: Globe },
    { name: "Canva", icon: Palette },
    { name: "Codecanyon", icon: Code },
    { name: "CodeStore", icon: FileCode },
    { name: "Etudes", icon: GraduationCap },
    { name: "99designs", icon: PenTool },
    { name: "Google Play", icon: Play },
    { name: "GraphicRiver", icon: Vector },
    { name: "ThemeForest", icon: TreePine },
    { name: "PeoplePerHour", icon: Clock },
    { name: "StoryBlocks", icon: Layers },
    { name: "Toptal", icon: Users },
    { name: "Upwork", icon: ArrowUpRight },
    { name: "VectorStock", icon: Vector },
    { name: "ThemeForest", icon: TreePine },
  ]

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-2">Available Workplaces</h2>
      <p className="text-gray-600 mb-6 text-sm">
        Freelancing can be a great option if you prefer an independent career. Every day the marketplaces offer a number
        of jobs, you only need the skills to avail the opportunity.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {workplaces.map((workplace, index) => {
          const IconComponent = workplace.icon

          return (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-200 gap-2"
            >
              <IconComponent className="h-8 w-8 text-red  " />
              <span className="text-sm text-center font-medium">{workplace.name}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

