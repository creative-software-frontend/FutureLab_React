import React from "react";
import Image from "next/image"; 
import faq from "../../assests/story/faq (2).jpg"

const WhyChooseSection: React.FC = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-10 lg:px-20">
        <div className="flex justify-center"> <h2 className="text-3xl md:text-4xl font-bold text-cnter text-black mb-6">
            Why Choose <span className="text-blue-600">Dewan ICT Institute?</span>
          </h2></div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Lrft Side - Content */}
        <div>
         
          <ul className="space-y-4 text-gray-700 text-lg list-none list-inside text-justify">
            <li>
              <strong>Experienced Instructors:</strong> Our instructors bring years of real-world experience to help you learn and grow.
            </li>
            <li>
              <strong>Hands-On Training:</strong> Practical learning through projects and real-world scenarios.
            </li>
            <li>
              <strong>Career Support:</strong> Career counseling and job placement assistance.
            </li>
            <li>
              <strong>State-of-the-Art Facilities:</strong> Modern labs and tools for a great learning environment.
            </li>
          </ul>
        </div>
        {/* Right Side - Image */}
        <div className="w-full">
          <Image
            src={faq}
            alt="Dewan ICT Institute"
            width={600}
            height={400}
            className=" object-cover w-full h-auto "
          />
        </div>

        
      </div>
    </section>
  );
};

export default WhyChooseSection;




