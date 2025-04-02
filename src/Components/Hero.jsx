import React, { useState } from 'react';
import { 
  FaBolt,
  FaTools,
  FaLock,
  FaDesktop,
  FaWrench,
  FaSolarPanel,
  FaTimes,
  FaPlug,
  FaCog,
  FaWifi,
  FaSnowflake,
  FaMobile,
  FaLaptop,
  FaTint,
  FaHammer,
  FaSun,
  FaExclamationTriangle
} from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    { 
      name: "Electrical Services", 
      icon: <FaBolt className="text-yellow-500 text-2xl" />,
      bgColor: 'bg-yellow-50',
      color: 'yellow',
      image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      subServices: [
        "Electrical Repair & Installation",
        "Wiring & Circuit Fixing",
        "Inverter & Battery Installation / Repair",
        "Generator Repair & Installation",
        "Electrical Inspection & Consultation"
      ]
    },
    { 
      name: "Home Appliance Repair", 
      icon: <FaTools className="text-blue-500 text-2xl" />,
      bgColor: 'bg-blue-50',
      color: 'blue',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7LP30-0jLzfj9EH4sNdgACu89k0XavBLkjg&s',
      subServices: [
        "AC / Refrigerator / Washing Machine Repair",
        "Home Appliance Repair"
      ]
    },
    { 
      name: "Security & Smart Solutions", 
      icon: <FaLock className="text-green-500 text-2xl" />,
      bgColor: 'bg-green-50',
      color: 'green',
      image: 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      subServices: [
        "CCTV Installation & Repair",
        "Smart Home Setup"
      ]
    },
    { 
      name: "Computer & Mobile Services", 
      icon: <FaDesktop className="text-purple-500 text-2xl" />,
      bgColor: 'bg-purple-50',
      color: 'purple',
      image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      subServices: [
        "Computer & Laptop Repair",
        "Mobile Phone Repair"
      ]
    },
    { 
      name: "Plumbing & Carpentry", 
      icon: <FaWrench className="text-red-500 text-2xl" />,
      bgColor: 'bg-red-50',
      color: 'red',
      image: 'https://lp-seotool.s3.us-west-2.amazonaws.com/task_attachments/NJYIZcSAE5ODTImqJirgg7kunj18e3wK1598976088.jpg',
      subServices: [
        "Plumbing Services",
        "Carpenter Services"
      ]
    },
    { 
      name: "Renewable Energy & Emergency Services", 
      icon: <FaSolarPanel className="text-orange-500 text-2xl" />,
      bgColor: 'bg-orange-50',
      color: 'orange',
      image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      subServices: [
        "Solar Panel Installation & Maintenance",
        "Emergency Repair Services (24x7)"
      ]
    }
  ];

  const [selectedService, setSelectedService] = useState(services[0]);
  const [showModal, setShowModal] = useState(false);
  const [currentService, setCurrentService] = useState(null);

  // Function to vary card colors dynamically
  const getCardColorClass = (index) => {
    const colors = ["bg-red-50", "bg-blue-50", "bg-green-50", "bg-yellow-50", "bg-purple-50", "bg-indigo-50"];
    return colors[index % colors.length];
  };

  // Get color based on service category and subservice type
  const getIconColorClass = (service, subServiceName) => {
    const baseColorMap = {
      'yellow': 'text-yellow-500 bg-yellow-100',
      'blue': 'text-blue-500 bg-blue-100',
      'green': 'text-green-500 bg-green-100',
      'purple': 'text-purple-500 bg-purple-100',
      'red': 'text-red-500 bg-red-100',
      'orange': 'text-orange-500 bg-orange-100'
    };
    
    // Vary shades slightly based on the subservice
    const subServiceLower = subServiceName.toLowerCase();
    
    // Example of varying color intensity based on service specifics
    if (subServiceLower.includes('emergency')) {
      return 'text-red-600 bg-red-100';
    } else if (subServiceLower.includes('installation')) {
      return `text-${service.color}-600 bg-${service.color}-50`;
    } else if (subServiceLower.includes('repair')) {
      return `text-${service.color}-400 bg-${service.color}-50`;
    }
    
    // Default to the base color for the service category
    return baseColorMap[service.color] || 'text-blue-500 bg-blue-100';
  };
  
  // Get icon based on service type
  const getServiceIcon = (subServiceName) => {
    const subServiceLower = subServiceName.toLowerCase();
    
    // Return appropriate icon based on service name keywords
    if (subServiceLower.includes('electrical') || subServiceLower.includes('wiring') || subServiceLower.includes('circuit')) {
      return <FaBolt className="text-xl" />;
    } else if (subServiceLower.includes('inverter') || subServiceLower.includes('battery')) {
      return <FaPlug className="text-xl" />;
    } else if (subServiceLower.includes('generator')) {
      return <FaCog className="text-xl" />;
    } else if (subServiceLower.includes('ac') || subServiceLower.includes('refrigerator')) {
      return <FaSnowflake className="text-xl" />;
    } else if (subServiceLower.includes('cctv') || subServiceLower.includes('security')) {
      return <FaLock className="text-xl" />;
    } else if (subServiceLower.includes('smart home')) {
      return <FaWifi className="text-xl" />;
    } else if (subServiceLower.includes('computer') || subServiceLower.includes('laptop')) {
      return <FaLaptop className="text-xl" />;
    } else if (subServiceLower.includes('mobile') || subServiceLower.includes('phone')) {
      return <FaMobile className="text-xl" />;
    } else if (subServiceLower.includes('plumbing')) {
      return <FaTint className="text-xl" />;
    } else if (subServiceLower.includes('carpenter')) {
      return <FaHammer className="text-xl" />;
    } else if (subServiceLower.includes('solar')) {
      return <FaSun className="text-xl" />;
    } else if (subServiceLower.includes('emergency')) {
      return <FaExclamationTriangle className="text-xl" />;
    }
    
    // Default return null to use the fallback icon
    return null;
  };

  const handleSubServiceClick = (subService) => {
    console.log(`Selected sub-service: ${subService}`);
  };

  const handleServiceSelection = (service) => {
    console.log(`Service selected: ${service.name}`);
    setShowModal(false);
  };

  const handleCardClick = (service) => {
    setCurrentService(service);
    setSelectedService(service);
    setShowModal(true);
  };

  return (
    <div className="max-w-6xl mt-20 mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Professional Home Services
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Quality solutions for all your home maintenance needs
        </p>
      </div>
      
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Services Cards - Left Side */}
        <div className="lg:w-2/5 border p-4 rounded-lg border-gray-300 grid grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.bgColor} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer ${selectedService.name === service.name ? 'ring-1 ring-blue-500' : ''}`}
              onClick={() => handleCardClick(service)}
            >
              <div className="p-4 flex flex-col items-center">
                <div className="mb-2 p-3 bg-white rounded-full">
                  {service.icon}
                </div>
                <h3 className="text-sm font-medium text-gray-800 text-center">
                  {service.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Image Display - Right Side */}
        <div className="lg:w-3/5 flex items-center justify-center">
          <div className="relative w-full h-64 lg:h-80 rounded-xl overflow-hidden shadow-md">
            <img 
              src={selectedService.image} 
              alt={selectedService.name}
              className="w-full h-full object-cover transition-opacity duration-300"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = 'https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80';
              }}
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <h3 className="text-xl font-bold text-white">{selectedService.name}</h3>
              <button 
                className="mt-3 bg-white text-blue-600 px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors"
                onClick={() => handleCardClick(selectedService)}
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal with colored icons */}
      {showModal && currentService && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50"
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
          role="dialog"
          aria-labelledby="service-modal-title"
          aria-modal="true"
        >
          <div 
            className="bg-white rounded-lg w-full max-w-md max-h-[80vh] overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className={`p-5 border-b border-gray-200 ${currentService.bgColor}`}>
              <div className="flex justify-between items-center">
                <h3 
                  id="service-modal-title" 
                  className="text-xl font-bold text-gray-800"
                >
                  {currentService.name}
                </h3>
                <button 
                  onClick={() => setShowModal(false)}
                  className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100 transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes />
                </button>
              </div>
              {currentService.description && (
                <p className="text-gray-600 mt-2 text-sm">{currentService.description}</p>
              )}
            </div>
            
            <div className="p-5 overflow-y-auto max-h-[60vh]">
              {/* Sub-services Grid with Varying Colors */}
              <div className="grid grid-cols-2 gap-4">
                {currentService.subServices.map((subService, index) => {
                  const colorClasses = getCardColorClass(index);
                  return (
                    <button 
                      key={index} 
                      className={`flex flex-col items-center p-4 rounded-lg shadow-sm transition-all hover:shadow border border-gray-200 ${colorClasses}`}
                      onClick={() => handleSubServiceClick(subService)}
                    >
                      <div className={`w-14 h-14 ${getIconColorClass(currentService, subService)} rounded-lg flex items-center justify-center mb-2`}>
                        {getServiceIcon(subService) || <FaTools className="text-xl" />}
                      </div>
                      <p className="text-sm font-medium text-gray-800 text-center">{subService}</p>
                    </button>
                  );
                })}
              </div>
              
              {/* No sub-services message */}
              {currentService.subServices.length === 0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500">No sub-services available for this category</p>
                </div>
              )}
            </div>
            
            {/* Footer Actions */}
            <div className="p-4 border-t border-gray-200 bg-gray-50 flex justify-between">
              <button 
                className="px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md text-sm font-medium transition-colors"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
              <button 
                className={`px-4 py-2 ${currentService.color === 'yellow' ? 'bg-yellow-600 hover:bg-yellow-700' : 
                            currentService.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' :
                            currentService.color === 'green' ? 'bg-green-600 hover:bg-green-700' :
                            currentService.color === 'purple' ? 'bg-purple-600 hover:bg-purple-700' :
                            currentService.color === 'red' ? 'bg-red-600 hover:bg-red-700' :
                            'bg-orange-600 hover:bg-orange-700'} text-white rounded-md text-sm font-medium transition-colors focus:ring-2 focus:ring-offset-2 ${currentService.color === 'yellow' ? 'focus:ring-yellow-500' : 
                            currentService.color === 'blue' ? 'focus:ring-blue-500' :
                            currentService.color === 'green' ? 'focus:ring-green-500' :
                            currentService.color === 'purple' ? 'focus:ring-purple-500' :
                            currentService.color === 'red' ? 'focus:ring-red-500' :
                            'focus:ring-orange-500'}`}
                onClick={() => handleServiceSelection(currentService)}
              >
                Select Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesSection;