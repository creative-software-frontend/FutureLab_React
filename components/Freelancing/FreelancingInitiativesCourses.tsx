import {
    Palette,
    Code,
    BarChart,
    CuboidIcon as Cube,
    Film,
    Languages,
    GraduationCap,
    Cloud,
    Shield,
  } from "lucide-react"
  
  export default function FreelancingInitiativesCourses() {
    return (
      <div className="max-w-7xl mx-auto p-4">
        {/* Initiatives Section */}
        <h2 className="text-xl font-bold mb-4">Some of our initiatives on freelancing</h2>
  
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {/* Initiative 1 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-primary  font-bold text-xl">1000000+</div>
            <div className="text-sm">Students received career counseling</div>
          </div>
  
          {/* Initiative 2 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-primary  font-bold text-xl">6000+</div>
            <div className="text-sm">Women got IT training on full free scholarship</div>
          </div>
  
          {/* Initiative 3 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-primary  font-bold text-xl">5000+</div>
            <div className="text-sm">Students got online internship facility</div>
          </div>
  
          {/* Initiative 4 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-primary  font-bold text-xl">200+</div>
            <div className="text-sm">Physically challenged people received IT training</div>
          </div>
  
          {/* Initiative 5 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-primary  font-bold text-xl">12000+</div>
            <div className="text-sm">Financially deprived got IT scholarship</div>
          </div>
  
          {/* Initiative 6 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-primary  font-bold text-xl">500+</div>
            <div className="text-sm">Polytechnics are attached for training</div>
          </div>
  
          {/* Initiative 7 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-primary  font-bold text-xl">6000+</div>
            <div className="text-sm">Senior citizens got scholarship in IT</div>
          </div>
  
          {/* Initiative 8 */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-primary  font-bold text-xl">45+</div>
            <div className="text-sm">Timely courses for professional training</div>
          </div>
        </div>
  
        {/* Courses Section */}
        <h2 className="text-xl font-bold mb-4">Our Popular Courses</h2>
  
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {/* Course 1 */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mb-2">
              <Palette className="w-5 h-5 text-red-500" />
            </div>
            <div className="text-sm text-center font-medium">Graphic & Multimedia</div>
          </div>
  
          {/* Course 2 */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center mb-2">
              <Code className="w-5 h-5 text-pink-500" />
            </div>
            <div className="text-sm text-center font-medium">Web & Software</div>
          </div>
  
          {/* Course 3 */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <BarChart className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-sm text-center font-medium">Digital Marketing</div>
          </div>
  
          {/* Course 4 */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-2">
              <Cube className="w-5 h-5 text-purple-500" />
            </div>
            <div className="text-sm text-center font-medium">3D Animation & Visualization</div>
          </div>
  
          {/* Course 5 */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-2">
              <Film className="w-5 h-5 text-gray-500" />
            </div>
            <div className="text-sm text-center font-medium">Film & Media</div>
          </div>
  
          {/* Course 6 */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mb-2">
              <Languages className="w-5 h-5 text-orange-500" />
            </div>
            <div className="text-sm text-center font-medium">English Language</div>
          </div>
  
          {/* Course 7 */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <GraduationCap className="w-5 h-5 text-green-500" />
            </div>
            <div className="text-sm text-center font-medium">1 Year Diploma Programs</div>
          </div>
  
          {/* Course 8 */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="w-10 h-10 bg-cyan-100 rounded-full flex items-center justify-center mb-2">
              <Cloud className="w-5 h-5 text-cyan-500" />
            </div>
            <div className="text-sm text-center font-medium">Cloud Computing</div>
          </div>
  
          {/* Course 9 */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-2">
              <Shield className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-sm text-center font-medium">Networking & Cybersecurity</div>
          </div>
        </div>
      </div>
    )
  }
  
  