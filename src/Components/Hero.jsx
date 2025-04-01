import React from 'react';
import { 
  FaFemale, 
  FaMale, 
  FaTools, 
  FaBroom, 
  FaTint, 
  FaLock, 
  FaPaintRoller,
  FaBolt,
  FaWrench
} from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    { 
      name: "Women's Salon & Spa", 
      icon: <FaFemale className="text-pink-500 text-3xl" />,
      bgColor: 'bg-pink-50'
    },
    { 
      name: "Men's Salon & Massage", 
      icon: <FaMale className="text-blue-500 text-3xl" />,
      bgColor: 'bg-blue-50'
    },
    { 
      name: "AC & Appliances Repair", 
      icon: <FaTools className="text-amber-500 text-3xl" />,
      bgColor: 'bg-amber-50'
    },
    { 
      name: "Cleaning", 
      icon: <FaBroom className="text-emerald-500 text-3xl" />,
      bgColor: 'bg-emerald-50'
    },
    { 
      name: "Electrician, Plumber & Carpenter", 
      icon: <FaWrench className="text-cyan-500 text-3xl" />,
      bgColor: 'bg-cyan-50'
    },
    { 
      name: "Native Water Purifier", 
      icon: <FaTint className="text-sky-500 text-3xl" />,
      bgColor: 'bg-sky-50'
    },
    { 
      name: "Native Smart Locks", 
      icon: <FaLock className="text-indigo-500 text-3xl" />,
      bgColor: 'bg-indigo-50'
    },
    { 
      name: "Painting & Waterproofing", 
      icon: <FaPaintRoller className="text-purple-500 text-3xl" />,
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          Home services at your doorstep
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          What are you looking for? Book professional services with just a few taps
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div 
            key={index} 
            className={`${service.bgColor} rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer`}
          >
            <div className="p-6 flex flex-col items-center">
              <div className="mb-4 p-4 bg-white rounded-full shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center">
                {service.name}
              </h3>
            </div>
            <div className="h-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-30"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;