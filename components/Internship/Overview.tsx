import React from "react";

const OverviewSection: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold  text-black mb-6">
          Overview
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Coder Trust is dedicated to empowering the next generation of software developers through practical training and mentorship. The institute focuses on providing students with the skills and knowledge needed to succeed in the global tech industry.
        </p>
      </div>
    </section>
  );
};

export default OverviewSection;
