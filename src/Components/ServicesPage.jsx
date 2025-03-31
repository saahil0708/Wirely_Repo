import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiPhone, FiCalendar, FiClock, FiCheck } from "react-icons/fi";

const serviceData = {
  services: [
    "Electrical",
    "AC/Refrigerator",
    "CCTV",
    "Inverter/Battery",
    "Appliance",
    "Computer/Laptop",
    "Plumbing",
    "Carpenter",
    "Mobile Repair",
    "Solar Panel",
    "Smart Home",
    "Wiring",
    "Generator",
    "Inspection",
    "Emergency"
  ],
  
  fullServiceNames: {
    "Electrical": "Electrical Repair & Installation",
    "AC/Refrigerator": "AC / Refrigerator / Washing Machine Repair",
    "CCTV": "CCTV Installation & Repair",
    "Inverter/Battery": "Inverter & Battery Installation / Repair",
    "Appliance": "Home Appliance Repair",
    "Computer/Laptop": "Computer & Laptop Repair",
    "Plumbing": "Plumbing Services",
    "Carpenter": "Carpenter Services",
    "Mobile Repair": "Mobile Phone Repair",
    "Solar Panel": "Solar Panel Installation & Maintenance",
    "Smart Home": "Smart Home Setup",
    "Wiring": "Wiring & Circuit Fixing",
    "Generator": "Generator Repair & Installation",
    "Inspection": "Electrical Inspection & Consultation",
    "Emergency": "Emergency Repair Services (24x7)"
  },

  details: {
    "Electrical Repair & Installation": {
      description: "Our certified electricians offer wiring, panel upgrades, lighting installation, and safety inspections for homes and businesses.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      heroImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    "AC / Refrigerator / Washing Machine Repair": {
      description: "Expert technicians repair all major appliance brands with genuine parts. We service air conditioners, refrigerators, washing machines, dryers, and more with same-day availability.",
      icon: "❄️",
      image: "https://images.unsplash.com/photo-1584565064249-9dd5a51a0a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      heroImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    "CCTV Installation & Repair": {
      description: "Complete security solutions including professional CCTV installation, maintenance, and troubleshooting. We offer the latest in surveillance technology with remote monitoring options.",
      icon: "📹",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      heroImage: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    "Inverter & Battery Installation / Repair": {
      description: "Professional installation and repair of inverters and batteries with maintenance services to ensure uninterrupted power supply.",
      icon: "🔋",
      image: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      heroImage: "https://images.unsplash.com/photo-1605980776566-0486c3ac7617?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    "Home Appliance Repair": {
      description: "Comprehensive repair services for all home appliances with genuine parts and expert technicians.",
      icon: "🏠",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      heroImage: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    "Computer & Laptop Repair": {
      description: "Expert repair services for computers, laptops, and peripherals with data recovery options available.",
      icon: "💻",
      image: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      heroImage: "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    "Plumbing Services": {
      description: "Professional plumbing services including pipe repair, installation, and maintenance for residential and commercial properties.",
      icon: "🚿",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      heroImage: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    "Carpenter Services": {
      description: "Skilled carpentry services including furniture repair, installation, and custom woodworking projects.",
      icon: "🪚",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      heroImage: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    "Mobile Phone Repair": {
      description: "Fast and reliable mobile phone repair services for all major brands with screen replacement and battery services.",
      icon: "📱",
      image: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      heroImage: "https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    "Solar Panel Installation & Maintenance": {
      description: "Professional solar panel installation and maintenance services to help you harness renewable energy.",
      icon: "☀️",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      heroImage: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    "Smart Home Setup": {
      description: "Expert installation and configuration of smart home systems including lighting, security, and automation.",
      icon: "🏡",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      heroImage: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    "Wiring & Circuit Fixing": {
      description: "Professional wiring services and circuit repairs for homes and businesses with safety compliance.",
      icon: "🔌",
      image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      heroImage: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    "Generator Repair & Installation": {
      description: "Expert generator services including installation, maintenance, and repair for backup power solutions.",
      icon: "⚡",
      image: "https://images.unsplash.com/photo-1611270630231-4dfe7b3d0dd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      heroImage: "https://images.unsplash.com/photo-1611270630231-4dfe7b3d0dd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    "Electrical Inspection & Consultation": {
      description: "Comprehensive electrical inspections and expert consultations for safety and efficiency improvements.",
      icon: "🔍",
      image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      heroImage: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    "Emergency Repair Services (24x7)": {
      description: "24/7 emergency repair services for all your urgent home and business maintenance needs.",
      icon: "🚨",
      image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      heroImage: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    "default": {
      description: "Premium service with expert technicians and guaranteed satisfaction. Contact us today for a free consultation.",
      icon: "🔧",
      image: "https://images.unsplash.com/photo-1507207611509-ec012433ff52?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80",
      heroImage: "https://img.freepik.com/premium-photo/contact-us-hand-man-holding-mobile-smartphone-with-mail-phone-email-chat-icon-cutomer-support-concept-blue-wide-banner_256259-3866.jpg?w=1380"
    }
  }
};

const ServicesPage = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(serviceData.fullServiceNames[serviceData.services[0]]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const servicesContainerRef = useRef(null);

  // Get current service details or fallback to default
  const currentService = serviceData.details[activeService] || serviceData.details.default;

  const scrollServices = (direction) => {
    const container = servicesContainerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth * 0.8;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const checkScrollPosition = () => {
    const container = servicesContainerRef.current;
    if (container) {
      setShowLeftArrow(container.scrollLeft > 0);
      setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
    }
  };

  useEffect(() => {
    const container = servicesContainerRef.current;
    if (!container) return;

    container.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition();
    
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        const activeIndex = serviceData.services.findIndex(s => serviceData.fullServiceNames[s] === activeService);
        if (activeIndex >= 0) {
          const button = container.children[activeIndex];
          if (button) {
            const containerWidth = container.clientWidth;
            const buttonLeft = button.offsetLeft;
            const buttonWidth = button.clientWidth;
            container.scrollTo({
              left: buttonLeft - (containerWidth / 2) + (buttonWidth / 2),
              behavior: 'smooth'
            });
          }
        }
      }
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => {
      container.removeEventListener('scroll', checkScrollPosition);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeService]);

  return (
    <div className="min-h-screen mt-20 font-[Poppins] flex flex-col bg-[#f8f8f8] overflow-x-hidden">
      {/* Services Navigation */}
      <div className="relative w-full bg-white shadow-lg z-20 border-b-2 border-[#fbc800]">
        <div className="relative w-full">
          {showLeftArrow && (
            <button 
              onClick={() => scrollServices('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all border border-[#372828]"
              aria-label="Scroll services left"
            >
              <FiChevronLeft className="text-[#372828] text-xl" />
            </button>
          )}
          
          <div 
            ref={servicesContainerRef}
            className="w-full overflow-x-auto whitespace-nowrap flex gap-4 p-4 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: 'none' }}
          >
            {serviceData.services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(serviceData.fullServiceNames[service])}
                className={`px-5 py-3 rounded-lg transition-all duration-300 flex-shrink-0 ${
                  activeService === serviceData.fullServiceNames[service] 
                    ? "bg-gradient-to-r from-[#fbc800] to-[#ffa100] text-[#372828] shadow-lg font-bold transform scale-[1.02]" 
                    : "bg-white hover:bg-[#fbc800]/10 text-[#372828] border border-[#372828]/20"
                }`}
                aria-current={activeService === serviceData.fullServiceNames[service] ? "true" : "false"}
              >
                <span className="font-semibold text-[14px]">{service}</span>
              </button>
            ))}
          </div>
          
          {showRightArrow && (
            <button 
              onClick={() => scrollServices('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all border border-[#372828]"
              aria-label="Scroll services right"
            >
              <FiChevronRight className="text-[#372828] text-xl" />
            </button>
          )}
        </div>
      </div>

      {/* Hero Section with dynamic background */}
      <div 
        className="relative h-[400px] text-white overflow-hidden bg-center bg-cover transition-all duration-500"
        style={{ backgroundImage: `url(${currentService.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#fbc800]">{activeService}</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            {currentService.description.split('. ')[0]}
          </p>
          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <button 
              className="px-8 py-3 bg-[#fbc800] hover:bg-[#ffa100] text-[#372828] font-bold rounded-lg shadow-lg transition-all transform hover:scale-105"
              onClick={() => navigate('/booking')}
            >
              Book Now
            </button>
            <button 
              className="px-8 py-3 bg-transparent border-2 border-[#fbc800] text-[#fbc800] hover:bg-[#ffffff10] font-bold rounded-lg transition-all"
              onClick={() => {
                const element = document.getElementById('service-details');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="service-details" className="flex-grow w-full px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px] border-4 border-[#fbc800]">
            <img 
              src={currentService.image} 
              alt={activeService}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Service Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8 h-full border-t-4 border-[#ffa100]">
            <div className="flex items-center mb-6">
              <span className="text-6xl mr-6">{currentService.icon}</span>
              <h2 className="text-3xl font-bold text-[#372828]">About Our {activeService.split(' ')[0]} Service</h2>
            </div>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {currentService.description}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-[#372828] p-6 rounded-xl text-white">
                <h3 className="font-semibold text-[#fbc800] text-xl mb-4">Why Choose Us?</h3>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-center"><FiCheck className="text-[#fbc800] mr-2" /> Certified professionals</li>
                  <li className="flex items-center"><FiCheck className="text-[#fbc800] mr-2" /> Same-day service available</li>
                  <li className="flex items-center"><FiCheck className="text-[#fbc800] mr-2" /> 12-month warranty</li>
                  <li className="flex items-center"><FiCheck className="text-[#fbc800] mr-2" /> 24/7 emergency support</li>
                </ul>
              </div>
              
              <div className="bg-[#fff8e6] p-6 rounded-xl border-2 border-[#fbc800]">
                <h3 className="font-semibold text-[#372828] text-xl mb-4">Service Includes</h3>
                <ul className="space-y-3 text-[#372828]">
                  <li className="flex items-center"><FiCheck className="text-[#ffa100] mr-2" /> Free initial inspection</li>
                  <li className="flex items-center"><FiCheck className="text-[#ffa100] mr-2" /> Transparent pricing</li>
                  <li className="flex items-center"><FiCheck className="text-[#ffa100] mr-2" /> Quality replacement parts</li>
                  <li className="flex items-center"><FiCheck className="text-[#ffa100] mr-2" /> Professional cleanup</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <button 
                className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-[#fbc800] to-[#ffa100] hover:from-[#ffa100] hover:to-[#fbc800] text-[#372828] font-bold rounded-lg shadow-md transition-all transform hover:scale-[1.01]"
                onClick={() => navigate('/booking')}
              >
                <FiPhone className="text-xl" />
                <span>Book Service Now</span>
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <button 
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-white border-2 border-[#372828] text-[#372828] hover:bg-[#372828] hover:text-white font-medium rounded-lg transition-all"
                  onClick={() => navigate('/schedule')}
                >
                  <FiCalendar />
                  <span>Schedule Later</span>
                </button>
                <button 
                  className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#372828] border-2 border-[#372828] text-white hover:bg-[#fbc800] hover:text-[#372828] hover:border-[#fbc800] font-medium rounded-lg transition-all"
                  onClick={() => navigate('/emergency')}
                >
                  <FiClock />
                  <span>Emergency Call</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ServicesPage;