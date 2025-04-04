import { FaWhatsapp, FaStar, FaArrowRight } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


const technicians = [
  {
    name: "Rahul Sharma",
    image: "https://i.pinimg.com/736x/5b/8d/8c/5b8d8c75254d0c3a1bee5db241af2a89.jpg",
    price: "₹799/session",
    rating: 5,
  },
  {
    name: "Amit Kumar",
    image: "https://i.pinimg.com/736x/5b/8d/8c/5b8d8c75254d0c3a1bee5db241af2a89.jpg",
    price: "₹699/session",
    rating: 4,
  },
  {
    name: "Vikram Singh",
    image: "https://i.pinimg.com/736x/5b/8d/8c/5b8d8c75254d0c3a1bee5db241af2a89.jpg",
    price: "₹599/session",
    rating: 4,
  },
  {
    name: "Rahul Sharma",
    image: "https://i.pinimg.com/736x/5b/8d/8c/5b8d8c75254d0c3a1bee5db241af2a89.jpg",
    price: "₹799/session",
    rating: 4.8,
  },
  
];



function Page() {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Business Header */}
      <div className="p-6 bg-gradient-to-r from-[#372828] to-[#5a3e3e] text-white">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-1">Smart Cool Air Condition</h1>
            <p className="text-sm text-gray-200">AC Repair & Services • Claimed</p>
            <div className="flex items-center mt-2">
              <div className="flex items-center bg-[#fbc800] px-2 py-1 rounded-md mr-3">
                <FaStar className="text-white" />
                <span className="ml-1 text-white font-medium">5.0</span>
              </div>
              <p className="text-sm text-gray-200">(1 Rating) • 15 Years in Business</p>
            </div>
            <p className="text-sm text-gray-200 mt-1">Santacruz West, Mumbai</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
            <button className="bg-[#ffa100] hover:bg-[#fbc800] text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 transform flex-1">
              Enquire Now
            </button>
            <button className="bg-white hover:bg-gray-100 text-[#372828] px-4 py-3 rounded-lg font-medium transition-all duration-300 transform flex items-center justify-center gap-2 flex-1">
              <IoCall className="text-[#372828]" />
              <span>08460197140</span>
            </button>
            <button className="bg-[#25D366] hover:bg-[#128C7E] text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 transform flex items-center justify-center gap-2 flex-1">
              <FaWhatsapp />
              <span>WhatsApp</span>
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex overflow-x-auto scrollbar-hide border-b">
        <div className="flex gap-1 px-6">
          <button className="px-4 py-3 font-medium text-[#372828] border-b-2 border-[#fbc800] bg-[#fff9e8] transition-all duration-300">
            Photos
          </button>
          <button className="px-4 py-3 font-medium text-gray-500 hover:text-[#372828] hover:bg-gray-50 transition-all duration-300">
            Price List
          </button>
          <button className="px-4 py-3 font-medium text-gray-500 hover:text-[#372828] hover:bg-gray-50 transition-all duration-300">
            Services
          </button>
          <button className="px-4 py-3 font-medium text-gray-500 hover:text-[#372828] hover:bg-gray-50 transition-all duration-300">
            Reviews
          </button>
        </div>
      </div>

      {/* Photos Section */}
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[#372828]">Photos</h2>
          <button className="flex items-center gap-2 text-[#372828] hover:text-[#ffa100] font-medium transition-all duration-300">
            View all <FaArrowRight />
          </button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div 
              key={item}
              className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-500"
            >
              <img
                src="https://i.pinimg.com/474x/8b/97/d6/8b97d62b92c299a1c3cf64a382569951.jpg"
                alt="Technician at work"
                className="w-full h-40 object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-500"></div>
            </div>
          ))}
        </div>
        <button className="mt-6 bg-[#372828] hover:bg-[#4a3636] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 mx-auto">
          Upload Photos
        </button>
      </div>

      {/* Technicians Section */}
      <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
      {/* Technicians Section */}
      <div className="p-6 bg-gray-50">
        <h2 className="text-2xl font-bold text-[#372828] mb-6">Our Expert Technicians</h2>
        <div className="space-y-4">
          {technicians.map((tech, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
              <img
                src={tech.image}
                alt={tech.name}
                className="w-20 h-20 rounded-full object-cover border border-gray-200"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-[#372828]">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.price}</p>
              </div>
              <div className="flex items-center bg-[#fbc800] px-2 py-1 rounded-md">
                <FaStar className="text-white text-sm" />
                <span className="ml-1 text-white text-sm font-medium">{tech.rating}</span>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   {/* Professional Info Section - Left-Aligned Minimalist */}
<div className="p-8 bg-white">
  {/* Compact Header */}
  <div className="max-w-4xl mx-auto text-left mb-8">
    <h2 className="text-xl font-medium text-gray-900">
      Service Details
    </h2>
    <div className="w-12 h-0.5 bg-[#fbc800] mt-2 mb-4"></div>
  </div>

  {/* Left-Aligned Grid */}
  <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
    {/* Services Column */}
    <div className="space-y-6">
      <div className="flex items-start">
        <div className="mr-4 mt-0.5">
          <svg className="w-5 h-5 text-[#372828]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <h3 className="text-base font-medium text-gray-900 mb-3">Inclusions</h3>
          <ul className="space-y-2.5 text-sm text-gray-700">
            {[
              "Complete system diagnostics",
              "Refrigerant level verification",
              "Electrical safety inspection",
              "Ductwork efficiency analysis",
              "Post-service performance report"
            ].map((item, i) => (
              <li key={i} className="flex">
                <span className="text-[#fbc800] mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>

    {/* Requirements Column */}
    <div className="space-y-6">
      <div className="flex items-start">
        <div className="mr-4 mt-0.5">
          <svg className="w-5 h-5 text-[#372828]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <div>
          <h3 className="text-base font-medium text-gray-900 mb-3">Requirements</h3>
          <div className="text-sm">
            {[
              { req: "Unobstructed access to units", meta: "(2ft clearance)" },
              { req: "Power availability", meta: "(220V outlet)" },
              { req: "Manufacturer documentation", meta: "(if available)" },
              { req: "Maintenance history", meta: "(recommended)" }
            ].map((item, i) => (
              <div key={i} className="mb-2.5 last:mb-0">
                <p className="text-gray-900">{item.req}</p>
                <p className="text-gray-500 text-xs">{item.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>

  {/* Discrete CTA */}
  <div className="max-w-4xl mx-auto mt-8 pt-6 border-t border-gray-100">
    <button className="text-sm font-medium text-[#372828] hover:text-[#fbc800] transition-colors flex items-center">
      Download full specifications
      <svg className="w-4 h-4 ml-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    </button>
  </div>
</div>

      {/* Footer CTA */}
      <div className="bg-[#372828] text-white p-6 text-center">
        <h3 className="text-xl font-bold mb-2">Need AC Service Today?</h3>
        <p className="mb-4">Contact us now for immediate assistance</p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <button className="bg-[#ffa100] hover:bg-[#fbc800] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-0.5">
            Call Now
          </button>
          <button className="bg-white hover:bg-gray-100 text-[#372828] px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-0.5">
            WhatsApp Us
          </button>
        </div>
      </div>
    </div>
    


  );
}

export default Page;