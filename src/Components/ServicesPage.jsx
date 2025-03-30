import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiPhone, FiCalendar, FiClock, FiCheck } from "react-icons/fi";

const services = [
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
];

const fullServiceNames = {
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
};

const serviceDetails = {
  "Electrical Repair & Installation": {
    description: "Our certified electricians offer wiring, panel upgrades, lighting installation, and safety inspections for homes and businesses.",
    icon: "⚡",
    image: "https://images.unsplash.com/photo-1605152276897-4f618f831968?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
  },
  "AC / Refrigerator / Washing Machine Repair": {
    description: "Expert technicians repair all major appliance brands with genuine parts. We service air conditioners, refrigerators, washing machines, dryers, and more with same-day availability.",
    icon: "❄️",
    image: "https://images.unsplash.com/photo-1584565064249-9dd5a51a0a5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
  },
  "CCTV Installation & Repair": {
    description: "Complete security solutions including professional CCTV installation, maintenance, and troubleshooting. We offer the latest in surveillance technology with remote monitoring options.",
    icon: "📹",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
  },
  // Add details for other services similarly
};

const ServicesPage = () => {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState(fullServiceNames[services[0]]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const servicesContainerRef = useRef(null);

  const scrollServices = (direction) => {
    const container = servicesContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const checkScrollPosition = () => {
    const container = servicesContainerRef.current;
    setShowLeftArrow(container.scrollLeft > 0);
    setShowRightArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
  };

  useEffect(() => {
    const container = servicesContainerRef.current;
    container.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition();
    
    const handleResize = () => {
      if (window.innerWidth < 1024) {
        const activeIndex = services.findIndex(s => fullServiceNames[s] === activeService);
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
      {/* Services Navigation - Now at the top */}
      <div className="relative w-full bg-white shadow-lg z-20 border-b-2 border-[#fbc800]">
        <div className="relative w-full">
          {showLeftArrow && (
            <button 
              onClick={() => scrollServices('left')}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all border border-[#372828]"
            >
              <FiChevronLeft className="text-[#372828] text-xl" />
            </button>
          )}
          
          <div 
            ref={servicesContainerRef}
            className="w-full overflow-x-auto whitespace-nowrap flex gap-4 p-4 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: 'none' }}
          >
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(fullServiceNames[service])}
                className={`px-5 py-3 rounded-lg transition-all duration-300 flex-shrink-0 ${
                  activeService === fullServiceNames[service] 
                    ? "bg-gradient-to-r from-[#fbc800] to-[#ffa100] text-[#372828] shadow-lg font-bold transform scale-[1.02]" 
                    : "bg-white hover:bg-[#fbc800]/10 text-[#372828] border border-[#372828]/20"
                }`}
              >
                <span className="font-semibold text-[14px]">{service}</span>
              </button>
            ))}
          </div>
          
          {showRightArrow && (
            <button 
              onClick={() => scrollServices('right')}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-all border border-[#372828]"
            >
              <FiChevronRight className="text-[#372828] text-xl" />
            </button>
          )}
        </div>
      </div>

      {/* Hero Section - Moved below the scroller */}
      <div className="relative h-[400px] bg-[url(https://img.freepik.com/premium-photo/contact-us-hand-man-holding-mobile-smartphone-with-mail-phone-email-chat-icon-cutomer-support-concept-blue-wide-banner_256259-3866.jpg?w=1380)] text-white overflow-hidden bg-center bg-cover">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#fbc800]">{activeService}</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            {serviceDetails[activeService]?.description.split('. ')[0] || `Premium ${activeService} services with expert technicians`}
          </p>
          <div className="mt-8 flex gap-4">
            <button className="px-8 py-3 bg-[#fbc800] hover:bg-[#ffa100] text-[#372828] font-bold rounded-lg shadow-lg transition-all transform hover:scale-105">
              Book Now
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-[#fbc800] text-[#fbc800] hover:bg-[#ffffff10] font-bold rounded-lg transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-grow w-full px-4 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px] border-4 border-[#fbc800]">
            <img 
              src={serviceDetails[activeService]?.image || ""} 
              alt={activeService}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Service Details */}
          <div className="bg-white rounded-2xl shadow-xl p-8 h-full border-t-4 border-[#ffa100]">
            <div className="flex items-center mb-6">
              <span className="text-6xl mr-6">{serviceDetails[activeService]?.icon || "🔧"}</span>
              <h2 className="text-3xl font-bold text-[#372828]">About Our {activeService.split(' ')[0]} Service</h2>
            </div>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              {serviceDetails[activeService]?.description || `Premium ${activeService} services with expert technicians and guaranteed satisfaction. Contact us today for a free consultation.`}
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
              <button className="w-full flex items-center justify-center space-x-3 px-6 py-4 bg-gradient-to-r from-[#fbc800] to-[#ffa100] hover:from-[#ffa100] hover:to-[#fbc800] text-[#372828] font-bold rounded-lg shadow-md transition-all transform hover:scale-[1.01]">
                <FiPhone className="text-xl" />
                <span>Book Service Now</span>
              </button>
              
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-white border-2 border-[#372828] text-[#372828] hover:bg-[#372828] hover:text-white font-medium rounded-lg transition-all">
                  <FiCalendar />
                  <span>Schedule Later</span>
                </button>
                <button className="flex items-center justify-center space-x-2 px-4 py-3 bg-[#372828] border-2 border-[#372828] text-white hover:bg-[#fbc800] hover:text-[#372828] hover:border-[#fbc800] font-medium rounded-lg transition-all">
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