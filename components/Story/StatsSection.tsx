import React from "react";

const stats = [
  { value: "90000+", label: "Successful Students" },
  { value: "34000+", label: "Expert Freelancers" },
  { value: "40000+", label: "Skilled Job Holders" },
  { value: "600+", label: "Industry Expert" },
  { value: "89%", label: "Success Rate" },
  { value: "3000+", label: "Companies" },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-10 bg-white ">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-red  text-3xl font-bold">{stat.value}</span>
              <span className="text-gray-600 text-sm">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
