import Image from "next/image"

export default function AvailableWorkplaces() {
  const workplaces = [
    { name: "Freepik", logo: "/placeholder.svg?height=30&width=80" },
    { name: "Freelancer", logo: "/placeholder.svg?height=30&width=80" },
    { name: "Fiverr", logo: "/placeholder.svg?height=30&width=80" },
    { name: "Envato", logo: "/placeholder.svg?height=30&width=80" },
    { name: "Canva", logo: "/placeholder.svg?height=30&width=80" },
    { name: "Codecanyon", logo: "/placeholder.svg?height=30&width=80" },
    { name: "CodeStore", logo: "/placeholder.svg?height=30&width=80" },
    { name: "Etudes", logo: "/placeholder.svg?height=30&width=80" },
    { name: "99designs", logo: "/placeholder.svg?height=30&width=80" },
    { name: "Google Play", logo: "/placeholder.svg?height=30&width=80" },
    { name: "GraphicRiver", logo: "/placeholder.svg?height=30&width=80" },
    { name: "ThemeForest", logo: "/placeholder.svg?height=30&width=80" },
    { name: "PeoplePerHour", logo: "/placeholder.svg?height=30&width=80" },
    { name: "StoryBlocks", logo: "/placeholder.svg?height=30&width=80" },
    { name: "Toptal", logo: "/placeholder.svg?height=30&width=80" },
    { name: "Upwork", logo: "/placeholder.svg?height=30&width=80" },
    { name: "VectorStock", logo: "/placeholder.svg?height=30&width=80" },
    { name: "ThemeForest", logo: "/placeholder.svg?height=30&width=80" },
  ]

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-2">Available Workplaces</h2>
      <p className="text-gray-600 mb-6 text-sm">
        Freelancing can be a great option if you prefer an independent career. Every day the marketplaces offer a number
        of jobs, you only need the skills to avail the opportunity.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {workplaces.map((workplace, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center hover:shadow-md transition-shadow duration-200"
          >
            <Image
              src={workplace.logo || "/placeholder.svg"}
              alt={`${workplace.name} logo`}
              width={80}
              height={30}
              className="h-[30px] w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

