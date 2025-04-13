export default function BranchesDepartments() {
    return (
      <div className="max-w-6xl mx-auto  ">
        {/* Our Branches Section */}
        <h2 className="text-2xl font-bold mb-6">Our Branches</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {/* Head Office */}
          <div className="bg-[#FFF5F5] rounded-lg p-5">
            <h3 className="text-[#0F172A] font-semibold mb-2">Head Office</h3>
            <p className="text-sm text-[#334155]">
              123 Main Street, 5th Floor
              <br />
              Business District Tower
              <br />
              Central Area, Dhaka 1200
              <br />
              Bangladesh
            </p>
          </div>
  
          {/* Dhanmondi */}
          <div className="bg-[#F0FDFD] rounded-lg p-5">
            <h3 className="text-[#0F172A] font-semibold mb-2">Dhanmondi</h3>
            <p className="text-sm text-[#334155]">
              Green Tower (4th Floor)
              <br />
              Plot #45, Road #8A
              <br />
              Dhanmondi, Dhaka - 1209
              <br />
              Bangladesh
            </p>
          </div>
  
          {/* Chittagong Branch */}
          <div className="bg-[#FFF5F5] rounded-lg p-5">
            <h3 className="text-[#0F172A] font-semibold mb-2">Chittagong Branch</h3>
            <p className="text-sm text-[#334155]">
              Silver Heights Building
              <br />
              75 Station Road, 3rd Floor
              <br />
              GEC Circle, Chittagong 4000
              <br />
              Bangladesh
            </p>
          </div>
  
          {/* Uttara Branch */}
          <div className="bg-[#F0FDFD] rounded-lg p-5">
            <h3 className="text-[#0F172A] font-semibold mb-2">Uttara Branch</h3>
            <p className="text-sm text-[#334155]">
              Northern Plaza Complex
              <br />
              House #22, Road #7, Sector #4
              <br />
              Uttara Model Town
              <br />
              Dhaka-1230, Bangladesh
            </p>
          </div>
  
          {/* Mirpur Branch */}
          <div className="bg-[#FFF5F5] rounded-lg p-5">
            <h3 className="text-[#0F172A] font-semibold mb-2">Mirpur Branch</h3>
            <p className="text-sm text-[#334155]">
              Millennium Tower, Suite #502
              <br />
              Plot #12, Block-C
              <br />
              Mirpur-10, Dhaka-1216
              <br />
              Bangladesh
            </p>
          </div>
  
          {/* Bengali Branch */}
          <div className="bg-[#F0FDFD] rounded-lg p-5">
            <h3 className="text-[#0F172A] font-semibold mb-2">কমলা বাগ</h3>
            <p className="text-sm text-[#334155]">
              ৪৫ কমলা সেন্টার, ৩য় তলা
              <br />
              কমলা বাগ, ঢাকা-১২১৭
              <br />
              বাংলাদেশ
            </p>
          </div>
  
          {/* Another Bengali Branch */}
          <div className="bg-[#FFF5F5] rounded-lg p-5">
            <h3 className="text-[#0F172A] font-semibold mb-2">পঞ্চগড় শাখা</h3>
            <p className="text-sm text-[#334155]">
              নতুন বাজার কমপ্লেক্স
              <br />
              ২য় তলা, সদর রোড
              <br />
              পঞ্চগড় সদর
              <br />
              পঞ্চগড়-৫০০০, বাংলাদেশ
            </p>
          </div>
        </div>
  
        {/* Training Departments Section */}
        <h2 className="text-2xl font-bold mb-6">Training Departments</h2>
  
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {/* Graphic & Multimedia */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#E11D48" className="w-8 h-8">
                <path d="M9.97.97a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1-1.06 1.06l-1.72-1.72v3.44h-1.5V3.31L8.03 5.03a.75.75 0 0 1-1.06-1.06l3-3ZM9.75 6.75v6a.75.75 0 0 0 1.5 0v-6h3a3 3 0 0 1 3 3v7.5a3 3 0 0 1-3 3h-7.5a3 3 0 0 1-3-3v-7.5a3 3 0 0 1 3-3h3Z" />
                <path d="M7.151 21.75a2.999 2.999 0 0 0 2.599 1.5h7.5a3 3 0 0 0 3-3v-7.5c0-1.11-.603-2.08-1.5-2.599v7.099a4.5 4.5 0 0 1-4.5 4.5H7.151Z" />
              </svg>
            </div>
            <p className="text-xs font-medium">
              Graphic &<br />
              Multimedia
            </p>
          </div>
  
          {/* Web & Software */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#EC4899" className="w-8 h-8">
                <path
                  fillRule="evenodd"
                  d="M14.447 3.027a.75.75 0 0 1 .527.92l-4.5 16.5a.75.75 0 0 1-1.448-.394l4.5-16.5a.75.75 0 0 1 .921-.526ZM16.72 6.22a.75.75 0 0 1 1.06 0l5.25 5.25a.75.75 0 0 1 0 1.06l-5.25 5.25a.75.75 0 1 1-1.06-1.06L21.44 12l-4.72-4.72a.75.75 0 0 1 0-1.06Zm-9.44 0a.75.75 0 0 1 0 1.06L2.56 12l4.72 4.72a.75.75 0 1 1-1.06 1.06L.97 12.53a.75.75 0 0 1 0-1.06l5.25-5.25a.75.75 0 0 1 1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-xs font-medium">Web & Software</p>
          </div>
  
          {/* Digital Marketing */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#A855F7" className="w-8 h-8">
                <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
              </svg>
            </div>
            <p className="text-xs font-medium">Digital Marketing</p>
          </div>
  
          {/* 3D Animation & Visualization */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#8B5CF6" className="w-8 h-8">
                <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
              </svg>
            </div>
            <p className="text-xs font-medium">
              3D Animation &<br />
              Visualization
            </p>
          </div>
  
          {/* Film & Media */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4B5563" className="w-8 h-8">
                <path
                  fillRule="evenodd"
                  d="M1.5 5.625c0-1.036.84-1.875 1.875-1.875h17.25c1.035 0 1.875.84 1.875 1.875v12.75c0 1.035-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 0 1 1.5 18.375V5.625Zm1.5 0v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5A.375.375 0 0 0 3 5.625Zm16.125-.375a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5A.375.375 0 0 0 21 7.125v-1.5a.375.375 0 0 0-.375-.375h-1.5ZM21 9.375A.375.375 0 0 0 20.625 9h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm0 3.75a.375.375 0 0 0-.375-.375h-1.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5Zm-16.5-7.5a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5A.375.375 0 0 0 4.875 9h-1.5Zm0 3.75a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5Zm0 3.75a.375.375 0 0 0-.375.375v1.5c0 .207.168.375.375.375h1.5a.375.375 0 0 0 .375-.375v-1.5a.375.375 0 0 0-.375-.375h-1.5Zm4.125-9a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-xs font-medium">Film & Media</p>
          </div>
  
          {/* English Language */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#F59E0B" className="w-8 h-8">
                <path
                  fillRule="evenodd"
                  d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97ZM6.75 8.25a.75.75 0 0 1 .75-.75h9a.75.75 0 0 1 0 1.5h-9a.75.75 0 0 1-.75-.75Zm.75 2.25a.75.75 0 0 0 0 1.5H12a.75.75 0 0 0 0-1.5H7.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-xs font-medium">English Language</p>
          </div>
  
          {/* 1 Year Diploma Programs */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#84CC16" className="w-8 h-8">
                <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337 49.949 49.949 0 0 0-9.902 3.912l-.003.002-.34.18a.75.75 0 0 1-.707 0A50.009 50.009 0 0 0 7.5 12.174v-.224c0-.131.067-.248.172-.311a54.614 54.614 0 0 1 4.653-2.52.75.75 0 0 0-.65-1.352 56.129 56.129 0 0 0-4.78 2.589 1.858 1.858 0 0 0-.859 1.228 49.803 49.803 0 0 0-4.634-1.527.75.75 0 0 1-.231-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134 1.414.22 2.843.255 4.285a.75.75 0 0 1-.46.71 47.878 47.878 0 0 0-8.105 4.342.75.75 0 0 1-.832 0 47.877 47.877 0 0 0-8.104-4.342.75.75 0 0 1-.461-.71c.035-1.442.121-2.87.255-4.286A48.4 48.4 0 0 1 6 13.18v1.27a1.5 1.5 0 0 0-.14 2.508c-.09.38-.222.753-.397 1.11.452.213.901.434 1.346.661a6.729 6.729 0 0 0 .551-1.608 1.5 1.5 0 0 0 .14-2.67v-.645a48.549 48.549 0 0 1 3.44 1.668 2.25 2.25 0 0 0 2.12 0Z" />
                <path d="M4.462 19.462c.42-.419.753-.89 1-1.394.453.213.902.434 1.347.661a6.743 6.743 0 0 1-1.286 1.794.75.75 0 1 1-1.06-1.06Z" />
              </svg>
            </div>
            <p className="text-xs font-medium">
              1 Year Diploma
              <br />
              Programs
            </p>
          </div>
  
          {/* Cloud Computing */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0EA5E9" className="w-8 h-8">
                <path
                  fillRule="evenodd"
                  d="M4.5 9.75a6 6 0 0 1 11.573-2.226 3.75 3.75 0 0 1 4.133 4.303A4.5 4.5 0 0 1 18 20.25H6.75a5.25 5.25 0 0 1-2.23-10.004 6.072 6.072 0 0 1-.02-.496Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-xs font-medium">Cloud Computing</p>
          </div>
  
          {/* Networking & Cybersecurity */}
          <div className="border border-gray-200 rounded-lg p-4 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#3B82F6" className="w-8 h-8">
                <path
                  fillRule="evenodd"
                  d="M12.516 2.17a.75.75 0 0 0-1.032 0 11.209 11.209 0 0 1-7.877 3.08.75.75 0 0 0-.722.515A12.74 12.74 0 0 0 2.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.75.75 0 0 0 .374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 0 0-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08Zm3.094 8.016a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="text-xs font-medium">
              Networking &<br />
              Cybersecurity
            </p>
          </div>
        </div>
      </div>
    )
  }
  
  