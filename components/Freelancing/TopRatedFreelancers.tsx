import { Play } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function TopRatedFreelancers() {
  const videos = [
    {
      title: "MERN STACK DEVELOPMENT",
      subtitle: "২ বছরের ডিপ্লোমা ওয়েব থেকে আজকের সিআইটি সাকসেস",
      image: "/placeholder.svg?height=250&width=400",
      gradient: "from-[#1a237e] to-[#311b92]",
    },
    {
      title: "Success Story",
      subtitle: "কোর্স চলাকালীন তিনি করেছেন ফ্রি কোর্স শেষেই প্রতিষ্ঠা করেছেন",
      image: "/placeholder.svg?height=250&width=400",
      gradient: "from-[#bf360c] to-[#d84315]",
    },
    {
      title: "Top Rated",
      subtitle: "একাউন্ট ম্যানেজে হাবেনি হাবিব",
      image: "/placeholder.svg?height=250&width=400",
      gradient: "from-[#263238] to-[#37474f]",
    },
    {
      title: "Success Story",
      subtitle: "প্রথম অ্যাকাউন্টই চাকরি!",
      image: "/placeholder.svg?height=250&width=400",
      gradient: "from-[#e65100] to-[#f57c00]",
    },
    {
      title: "Success Story",
      subtitle: "১ মাসে ৬.৫ লাখ টাকা আয়",
      image: "/placeholder.svg?height=250&width=400",
      gradient: "from-[#0d47a1] to-[#1565c0]",
    },
    {
      title: "Success Story",
      subtitle: "শিক্ষার্থী থেকে উদ্যোক্তা",
      image: "/placeholder.svg?height=250&width=400",
      gradient: "from-[#004d40] to-[#00695c]",
    },
  ]

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-6">Top Rated Freelancers of CIT</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {videos.map((video, index) => (
          <div key={index} className="relative overflow-hidden rounded-xl aspect-[16/9]">
            {/* Background Image */}
            <Image src={video.image || "/placeholder.svg"} alt={video.title} fill className="object-cover" />

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-r ${video.gradient} opacity-90`}></div>

            {/* Content */}
            <div className="absolute inset-0 p-6 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                {/* CIT Logo */}
                <Image
                  src="/placeholder.svg?height=30&width=30"
                  alt="CIT Logo"
                  width={30}
                  height={30}
                  className="rounded-full"
                />

                {/* Play Button */}
                <button className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white" />
                </button>
              </div>

              <div className="space-y-2">
                <h3 className="text-white text-lg font-bold">{video.title}</h3>
                <p className="text-white/90 text-sm">{video.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center">
        <Button variant="destructive">See More</Button>
      </div>
    </div>
  )
}

