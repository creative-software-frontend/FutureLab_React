import { GraduationCap, Search, Home, Users, FileText, Briefcase } from "lucide-react"

export default function FreelancingCategories() {
  return (
    <div className="bg-[#faf8f5] p-6 md:p-8 rounded-lg max-w-7xl mx-auto">
      <h2 className="text-xl md:text-2xl font-bold text-[#3c2e1e] mb-6">Who Can Do Freelancing?</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Homemakers */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center mb-3">
            <Home className="w-10 h-10 text-[#e94e77]" />
          </div>
          <span className="text-sm font-medium text-center">Homemakers</span>
        </div>

        {/* Job seekers */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center mb-3">
            <Search className="w-10 h-10 text-[#4caf50]" />
          </div>
          <span className="text-sm font-medium text-center">Job seekers</span>
        </div>

        {/* Entrepreneurs */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center mb-3">
            <Briefcase className="w-10 h-10 text-[#f39c12]" />
          </div>
          <span className="text-sm font-medium text-center">Entrepreneurs</span>
        </div>

        {/* Students */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center mb-3">
            <GraduationCap className="w-10 h-10 text-[#3498db]" />
          </div>
          <span className="text-sm font-medium text-center">Students</span>
        </div>

        {/* Immigrants */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center mb-3">
            <FileText className="w-10 h-10 text-[#9b59b6]" />
          </div>
          <span className="text-sm font-medium text-center">Immigrants</span>
        </div>

        {/* Anyone interested */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center justify-center">
          <div className="w-16 h-16 flex items-center justify-center mb-3">
            <Users className="w-10 h-10 text-[#2980b9]" />
          </div>
          <span className="text-sm font-medium text-center">Anyone interested to learn freelancing</span>
        </div>
      </div>
    </div>
  )
}

