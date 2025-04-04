import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight, FiPhone, FiCalendar, FiClock, FiCheck, FiStar } from "react-icons/fi";

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
    <div className="min-h-screen font-[Poppins] bg-[#f8f8f8] overflow-x-hidden">
      {/* Services Navigation - Enhanced */}
      <div className="sticky top-20 z-20 bg-white shadow-sm border-b-2 border-[#fbc800]">
        <div className="relative max-w-7xl mx-auto px-4">
          {showLeftArrow && (
            <button 
              onClick={() => scrollServices('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-all border border-gray-200"
              aria-label="Scroll services left"
            >
              <FiChevronLeft className="text-[#372828] text-lg" />
            </button>
          )}
          
          <div 
            ref={servicesContainerRef}
            className="w-full overflow-x-auto whitespace-nowrap flex gap-3 py-3 scroll-smooth hide-scrollbar"
            style={{ scrollbarWidth: 'none' }}
          >
            {serviceData.services.map((service, index) => (
              <button
                key={index}
                onClick={() => setActiveService(serviceData.fullServiceNames[service])}
                className={`px-5 py-2 rounded-full transition-all duration-200 flex-shrink-0 ${
                  activeService === serviceData.fullServiceNames[service] 
                    ? "bg-[#fbc800] text-[#372828] shadow-md font-semibold" 
                    : "bg-white hover:bg-[#fbc800]/20 text-[#372828] border border-gray-200"
                }`}
                aria-current={activeService === serviceData.fullServiceNames[service] ? "true" : "false"}
              >
                <span className="text-sm">{service}</span>
              </button>
            ))}
          </div>
          
          {showRightArrow && (
            <button 
              onClick={() => scrollServices('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-all border border-gray-200"
              aria-label="Scroll services right"
            >
              <FiChevronRight className="text-[#372828] text-lg" />
            </button>
          )}
        </div>
      </div>


      {/* Hero Section with dynamic background */}
      <div 
        className="relative mt-20 h-[400px] text-white overflow-hidden bg-center bg-cover transition-all duration-500"
        style={{ backgroundImage: `url(${currentService.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#fbc800]">{activeService}</h1>
          <p className="text-lg md:text-xl max-w-3xl">
            {currentService.description.split('. ')[0]}
          </p>
          <div className="mt-8 flex gap-4 flex-wrap justify-center">
            <Link to='/booking'>
              <button 
                className="px-8 py-3 bg-[#fbc800] hover:bg-[#ffa100] text-[#372828] font-bold rounded-lg shadow-lg transition-all transform hover:scale-105"
                onClick={() => navigate('/booking')}
              >
                Book Now
              </button>
            </Link>
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
      <div id="service-details" className="w-full px-4 py-16 bg-white">
  <div className="max-w-6xl mx-auto">
    {/* Service Header */}
    <div className="text-center mb-16">
      <div className="inline-flex items-center justify-center bg-[#fbc800]/10 px-6 py-2 rounded-full mb-4">
        <span className="text-2xl mr-2">{currentService.icon}</span>
        <span className="font-medium text-[#fbc800]">Professional Service</span>
      </div>
      <h2 className="text-4xl font-bold text-[#372828] mb-4">
        {activeService}
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        {currentService.description}
      </p>
    </div>

    <div className="flex flex-col lg:flex-row gap-12 items-start">
      {/* Service Image */}
      <div className="lg:w-1/2 w-full">
        <div className="relative rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
          <img 
            src={currentService.image} 
            alt={activeService}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end p-8">
            <h3 className="text-2xl font-bold text-white">Quality {activeService.split(' ')[0]} Solutions</h3>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="lg:w-1/2 w-full">
        <div className="bg-gray-50 rounded-3xl p-8 h-full border border-gray-200">
          <h3 className="text-2xl font-bold text-[#372828] mb-6">
            Service Highlights
          </h3>

          {/* Benefits List */}
          <div className="space-y-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="bg-[#fbc800] p-2 rounded-full mt-1">
                <FiCheck className="text-white text-lg" />
              </div>
              <div>
                <h4 className="font-bold text-[#372828]">Expert Technicians</h4>
                <p className="text-gray-600">Our certified professionals deliver top-quality service</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#fbc800] p-2 rounded-full mt-1">
                <FiCheck className="text-white text-lg" />
              </div>
              <div>
                <h4 className="font-bold text-[#372828]">Reliable Service</h4>
                <p className="text-gray-600">We arrive on time and complete the job efficiently</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#fbc800] p-2 rounded-full mt-1">
                <FiCheck className="text-white text-lg" />
              </div>
              <div>
                <h4 className="font-bold text-[#372828]">Quality Guarantee</h4>
                <p className="text-gray-600">All work comes with a satisfaction guarantee</p>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <h4 className="text-lg font-semibold text-[#372828] mb-4">
              Schedule Your Service
            </h4>
            <div className="space-y-4">
              <button 
                className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-[#fbc800] hover:bg-[#ffa100] text-[#372828] font-bold rounded-lg shadow-sm transition-all"
                onClick={() => navigate('/booking')}
              >
                <FiPhone className="text-xl" />
                <Link to=''>
                  <span>Book Now</span>                
                </Link>
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <button 
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-white border border-gray-300 text-[#372828] hover:bg-gray-100 rounded-lg transition-all"
                  onClick={() => navigate('/schedule')}
                >
                  <FiCalendar />
                  <span>Schedule Appointment</span>
                </button>
                <button 
                  className="flex items-center justify-center gap-2 px-4 py-3 bg-[#372828] border border-[#372828] text-white hover:bg-[#fbc800] hover:text-[#372828] rounded-lg transition-all"
                  onClick={() => navigate('/emergency')}
                >
                  <FiClock />
                  <span>Emergency Service</span>
                </button>
              </div>
            </div>
          </div>
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