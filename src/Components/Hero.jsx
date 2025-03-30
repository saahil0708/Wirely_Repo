import React, { useEffect, useState } from "react";
import { 
  Zap, Phone, Shield, Clock, Users, 
  CheckCircle, Wifi, Server, Code, 
  Database, Cloud, Cpu 
} from "lucide-react";

const Hero = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "On Demand";
  
  // Services for marquee
  const marqueeServices = [
    "Electrical Repair & Installation",
    "AC / Refrigerator / Washing Machine Repair",
    "CCTV Installation & Repair",
    "Inverter & Battery Installation / Repair",
    "Home Appliance Repair",
    "Computer & Laptop Repair",
    "Plumbing Services",
    "Carpenter Services",
    "Mobile Phone Repair",
    "Solar Panel Installation & Maintenance",
    "Smart Home Setup",
    "Wiring & Circuit Fixing",
    "Generator Repair & Installation",
    "Electrical Inspection & Consultation",
    "Emergency Repair Services (24x7)"
  ];

  const cards = [
    // Large primary cards
    {
      icon: <Shield size={24} className="text-[#FBC800]" />,
      title: "Enterprise Security",
      description: "Military-grade protection",
      size: "large",
      position: "top-12 left-12",
      rotation: "rotate-3"
    },
    {
      icon: <Users size={24} className="text-[#FBC800]" />,
      title: "Global Experts",
      description: "200+ certified professionals",
      size: "large",
      position: "bottom-12 right-12",
      rotation: "-rotate-3"
    },
    
    // Medium secondary cards
    {
      icon: <Clock size={20} className="text-[#FBC800]" />,
      title: "24/7 Support",
      description: "Always available",
      size: "medium",
      position: "top-8 right-8",
      rotation: "-rotate-2"
    },
    {
      icon: <Database size={20} className="text-[#FBC800]" />,
      title: "Data Solutions",
      description: "Scalable infrastructure",
      size: "medium",
      position: "bottom-8 left-8",
      rotation: "rotate-2"
    },
    
    // Small accent cards
    {
      icon: <Cpu size={16} className="text-[#FBC800]" />,
      title: "AI Tech",
      size: "small",
      position: "top-4 left-4",
      rotation: "rotate-1"
    },
    {
      icon: <Cloud size={16} className="text-[#FBC800]" />,
      title: "Cloud",
      size: "small",
      position: "top-24 right-4",
      rotation: "-rotate-1"
    },
    {
      icon: <Code size={16} className="text-[#FBC800]" />,
      title: "DevOps",
      size: "small",
      position: "bottom-4 right-24",
      rotation: "rotate-1"
    }
  ];

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative bg-white min-h-screen flex flex-col items-center px-6 sm:px-8 mt-[4rem] py-16 overflow-hidden font-[Poppins]">
      <div 
  className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_70%)]"
  style={{
    backgroundImage: `linear-gradient(to right, #f5f5f5 1px, transparent 1px), 
                      linear-gradient(to bottom, #f5f5f5 1px, transparent 1px)`,
    backgroundSize: "40px 40px",
    animation: "gridScroll 80s linear infinite",
  }}
></div>

      
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-[#FBC800]/5 blur-xl"></div>
        <div className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full bg-[#FBC800]/5 blur-xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Left content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#FBC800]/10 rounded-full border border-[#FBC800]/20 w-fit">
            <Zap className="w-6 h-6 text-[#FBC800]" />
            <span className="text-base font-medium text-gray-900">
              PROFESSIONAL SUPPORT
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight">
            Expert Solutions <br />
            <span className="text-[#FBC800]">{typedText}</span>
            <span className="animate-pulse">|</span>
          </h1>

          <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
          Your one-stop solution for all appliances! Repair, maintain, and upgrade with ease—anytime, anywhere ⚡
          </p>

          <div className="flex flex-wrap gap-5 mt-8">
            <button className="flex items-center gap-3 px-8 py-4 bg-[#FBC800] hover:bg-[#E6B500] text-gray-900 font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg group">
              <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Get Instant Support
            </button>
            <button className="flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300 text-lg group">
              Explore Services
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

        {/* Right side - Organized Collage */}
        <div className="relative h-[500px] w-full">
          {/* Decorative backdrop */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-64 h-64 border-2 border-[#FBC800]/20 rounded-full"></div>
          </div>
          
          {/* Cards */}
          {cards.map((card, index) => (
            <div
              key={index}
              className={`absolute ${card.position} ${card.rotation} ${
                card.size === "large" 
                  ? "w-56 h-56 p-6 rounded-2xl shadow-md" 
                  : card.size === "medium" 
                    ? "w-40 h-40 p-4 rounded-xl shadow-sm" 
                    : "w-32 h-32 p-3 rounded-lg"
              } bg-white border border-gray-200 hover:rotate-0 transition-all duration-300 ${
                index % 2 === 0 ? "hover:-translate-y-2" : "hover:translate-y-2"
              }`}
            >
              <div className={`${
                card.size === "large" 
                  ? "p-3 rounded-lg mb-4" 
                  : card.size === "medium" 
                    ? "p-2 rounded-lg mb-2" 
                    : "p-2 rounded-md"
              } ${
                card.size === "small" ? "bg-white" : "bg-[#FBC800]/10"
              } w-fit`}>
                {card.icon}
              </div>
              <h3 className={`${
                card.size === "large" 
                  ? "font-bold text-lg" 
                  : card.size === "medium" 
                    ? "font-semibold text-base" 
                    : "font-medium text-sm"
              } text-gray-900`}>
                {card.title}
              </h3>
              {card.description && (
                <p className={`${
                  card.size === "large" 
                    ? "text-sm mt-2" 
                    : "text-xs mt-1"
                } text-gray-600`}>
                  {card.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Section - Added at the bottom of the Hero */}
      <div className="w-full mt-16 bg-[#FBC800]/10 py-4 overflow-hidden">
        <div className="whitespace-nowrap">
          <div className="inline-block animate-marquee whitespace-nowrap">
            {marqueeServices.map((service, index) => (
              <span key={index} className="mx-8 text-lg font-medium text-gray-900 inline-block">
                {service}
                {index < marqueeServices.length - 1 && (
                  <span className="mx-4 text-[#FBC800]">•</span>
                )}
              </span>
            ))}
            {/* Duplicate for seamless looping */}
            {marqueeServices.map((service, index) => (
              <span key={`duplicate-${index}`} className="mx-8 text-lg font-medium text-gray-900 inline-block">
                {service}
                {index < marqueeServices.length - 1 && (
                  <span className="mx-4 text-[#FBC800]">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Add Open Sauce font via style tag */}
      <style jsx global>{`
        @import url('https://fonts.cdnfonts.com/css/open-sauce-one');
        
        body {
          font-family: 'Open Sauce One', sans-serif;
        }
        
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
          display: inline-block;
        }
      `}</style>
    </section>
  );
};

export default Hero;