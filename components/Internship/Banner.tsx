import { Book, Play } from "lucide-react";


export default function Banner() {
  return (
    <div className=" bg-[#fff5f5]">
      {/* Hero Section */}
      <main className="container mx-auto px-12 py-12 ">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <div className="flex items-center space-x-2">
             
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Diploma Internship <br />
              Opportunities<span className="text-red  ">Digital World</span>
            </h1>

            <p className="text-gray-600 text-lg max-w-2xl">
              With a vision to turn manpower into assets, GBC IT is ready to enhance your learning experience with
              skilled mentors and an updated curriculum. Pick your desired
              course from more than 45 trendy options.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-red   text-white px-6 py-3 rounded-lg flex items-center space-x-2">
                <Book className="h-5 w-5" />
                <span>Browse Course</span>
              </button>
              <button className="bg-red   text-white px-6 py-3 rounded-lg flex items-center space-x-2">
                <Play className="h-5 w-5" />
                <span>Join free seminar</span>
              </button>
            </div>
          </div>
          {/* Right Content */};
          <div className="flex-1">
            <div className="relative bg-[#001233] rounded-2xl p-8 overflow-hidden">
              <div className="flex justify-center items-center h-full">
                <div className="w-full aspect-video">
                <iframe
  className="w-full h-full rounded-lg shadow-lg"
  src="https://www.youtube.com/embed/w1DTbOQSKnw"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    
    </div>
  );
}
