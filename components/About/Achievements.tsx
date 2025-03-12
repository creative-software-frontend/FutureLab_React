import { useState } from "react";
import Image from "next/image";
import iso from "@/assests/story/iso.jpg";
import goal from "@/assests/story/goal.jpg";

const tabs = [
  { id: "goal", label: "Our Goal" },
  { id: "vision", label: "Our Vision" },
];

const initiatives = [
  { number: "1000000+", description: "Students received career counseling" },
  { number: "6000+", description: "Women got IT training on full free scholarship" },
  { number: "5000+", description: "Students get online internship facility" },
  { number: "200+", description: "Physically challenged people received IT training" },
  { number: "12000+", description: "Financially deprived got IT scholarship" },
  { number: "500+", description: "Polytechnics are attached for training" },
  { number: "6000+", description: "Senior citizens got scholarships in IT" },
  { number: "45+", description: "Trendy courses for professional training" },
];

export default function AboutAchievements() {
  const [activeTab, setActiveTab] = useState("goal");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* ISO Certification Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        <div className="w-full md:w-1/3">
          <Image src={iso} alt="ISO Certification" width={300} height={400} className="w-full object-contain" />
        </div>
        <div className="w-full md:w-2/3">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">One of the ISO Certified IT Institutes in Bangladesh</h2>
          <p className="text-gray-600 leading-relaxed">
            In 2015 we received the ISO certification for providing a quality training program which recognizes our
            position in the IT sector and ensures the quality of our training considering infrastructure, teaching
            quality and other factors. This certification proves the standard of our service and courses.
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="flex space-x-4 border-b pb-2 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-lg font-semibold ${activeTab === tab.id ? "text-primary  border-b-2 border-red-600" : "text-gray-600"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      {activeTab === "goal" && (
        <div className="flex items-center gap-8 mb-16">
          <p className="text-gray-600">
            Our goal is to be one of the best IT training institutes in the world by providing quality training to
            learners.
          </p>
          <Image src={goal} alt="Goal Illustration" width={200} height={200} className="w-48 object-contain" />
        </div>
      )}

      {activeTab === "vision" && (
        <div className="flex items-center gap-8 mb-16">
          <p className="text-gray-600">
            Our vision is to create a digital revolution by empowering individuals with technology skills, fostering
            innovation, and shaping the future workforce for a better tomorrow.
          </p>
        </div>
      )}

      {/* Prominent Initiatives Section */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Prominent Initiatives</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((initiative, index) => (
            <div key={index} className="p-6 bg-white rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-primary  mb-2">{initiative.number}</div>
              <p className="text-gray-600">{initiative.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
