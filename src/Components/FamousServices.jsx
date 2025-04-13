import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import CCtv from "../assets/cctv.png"
import Pc2 from '../assets/pc2.png';
import Windows from '../assets/windows3.png';
import DataRecovery from '../assets/data recovery.png';
import SpareParts from '../assets/spareparts.png'
import Software from '../assets/software.png'
import Menu from '../assets/Menu (2).png'
import Networking from '../assets/networking.png'

const categories = [
  { 
    name: "CCTV Installation", 
    image: CCtv, 
    path: "/book" 
  },
  { 
    name: "Computer Networking", 
    image: Networking, 
    path: "/book" 
  },
  { 
    name: "PC Repair", 
    image: Pc2, 
    path: "/book" 
  },
  { 
    name: "Windows Installation", 
    image: Windows, 
    path: "/book" 
  },
  { 
    name: "Hard Drive Data Recovery", 
    image: DataRecovery, 
    path: "/book" 
  },
  { 
    name: "Desktop & Laptop Accessories & Spares", 
    image: SpareParts, 
    path: "/book" 
  },
  { 
    name: "Regular Software Upgrades", 
    image: Software, 
    path: "/book" 
  },
  { 
    name: "View All Services", 
    image: Menu, 
    path: "/service" 
  },
];

const AllServicesModal = ({ onClose }) => {
  const allServices = [
    "CCTV Installation",
    "Computer Networking",
    "PC Repair",
    "Windows Installation",
    "Hard Drive Data Recovery",
    "Desktop & Laptop Accessories & Spares",
    "Regular Software Upgrades",
    "Virus Removal",
    "Printer Setup & Repair",
    "Data Backup Solutions",
    "IT Consulting",
    "Cloud Services Setup"
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 font-[Poppins] flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center p-4 border-b sticky top-0 bg-white z-10">
          <h3 className="text-xl font-bold">All Services</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {allServices.map((service, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow">
                <Link to='/book'>
                  <div className="flex items-center">
                    <img 
                      src={categories.find(cat => cat.name.toLowerCase() === service.toLowerCase())?.image || "https://cdn-icons-png.flaticon.com/512/1570/1570931.png"} 
                      alt={service} 
                      className="w-8 h-8 object-contain mr-3"
                    />
                    <span className="text-gray-700">{service}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CategoryGrid = () => {
  const navigate = useNavigate();
  const [showAllServicesModal, setShowAllServicesModal] = useState(false);

  const handleCategoryClick = (category) => {
    if (category.name === "View All Services") {
      setShowAllServicesModal(true);
    } else {
      navigate(category.path);
    }
  };

  return (
    <>
      <div className="w-full relative bottom-40 font-[Poppins] md:w-4/5 mx-auto p-4 md:p-6">
        {/* First grid */}
        <div className="grid relative top-32 grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-3">
          {categories.slice(0, 8).map((category, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                onClick={() => handleCategoryClick(category)}
                className="flex items-center justify-center p-4 md:p-5 border rounded-xl transition-transform transform hover:scale-105 cursor-pointer border-gray-300 w-24 h-24 sm:w-22 sm:h-22 md:w-24 md:h-24"
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-20 h-20 object-contain"
                />
              </div>
              <span className="text-sm sm:text-base font-medium mt-2 text-center">{category.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* All Services Modal */}
      {showAllServicesModal && (
        <AllServicesModal onClose={() => setShowAllServicesModal(false)} />
      )}
    </>
  );
};

export default CategoryGrid;