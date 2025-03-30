"use client"

import { useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { Zap, Power } from "lucide-react"

const partners = [
  {
    name: "YouTube",
    logo: "https://yt3.googleusercontent.com/K8WVrQAQHTTwsHEtisMYcNai7p7XIlyEAdZg86qYw78ye57r5DRemHQ9Te4PcD_v98HB-ZvQjQ=s900-c-k-c0x00ffffff-no-rj",
    url: "#",
  },
  {
    name: "ChatGPT",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/ChatGPT-Logo.png",
    url: "#",
  },
  {
    name: "Pinterest",
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    url: "#",
  },
  {
    name: "Disney",
    logo: "https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg",
    url: "#",
  },
  {
    name: "Flipkart",
    logo: "https://static.vecteezy.com/system/resources/previews/054/650/802/non_2x/flipkart-logo-rounded-flipkart-logo-free-download-flipkart-logo-free-png.png",
    url: "#",
  },
  {
    name: "Studio Ghibli",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/c/ca/Studio_Ghibli_logo.svg/1200px-Studio_Ghibli_logo.svg.png",
    url: "#",
  },
  {
    name: "Photoshop",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Adobe_Photoshop_CC_icon.svg/2101px-Adobe_Photoshop_CC_icon.svg.png",
    url: "#",
  },
  {
    name: "Dribbble",
    logo: "https://cdn.dribbble.com/userupload/11893575/file/original-f2e9b02b9888a716d1728ff0b4e5a82e.png?resize=400x0",
    url: "#",
  },
]

// Add duplicates to ensure continuous scrolling
const extendedPartners = [...partners, ...partners, ...partners]

const OurPartners = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const gridRef = useRef(null)

  // Create circuit path animation effect
  useEffect(() => {
    if (!gridRef.current) return

    const gridLines = gridRef.current.querySelectorAll(".circuit-line")

    gridLines.forEach((line, index) => {
      // Random delay for each line
      const delay = Math.random() * 5
      line.style.animationDelay = `${delay}s`
    })
  }, [])

  return (
    <section ref={ref} className="relative bg-gradient-to-b from-gray-100 to-white py-20 px-4 sm:px-6 overflow-hidden">
      {/* Circuit Grid Background */}
      <div ref={gridRef} className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="circuit-line horizontal-line-1"></div>
        <div className="circuit-line horizontal-line-2"></div>
        <div className="circuit-line horizontal-line-3"></div>
        <div className="circuit-line vertical-line-1"></div>
        <div className="circuit-line vertical-line-2"></div>
        <div className="circuit-line vertical-line-3"></div>

        <div className="circuit-node node-1"></div>
        <div className="circuit-node node-2"></div>
        <div className="circuit-node node-3"></div>
        <div className="circuit-node node-4"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <div className="flex items-center justify-center mb-4">
          <div className="w-8 h-8 mr-4 text-[#FFA100]">
            <Power className="w-full h-full" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 uppercase tracking-tight">
            Our{" "}
            <span className="text-[#FFA100] relative">
              Partners
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-[#FFA100]"></span>
            </span>{" "}
            & Suppliers
          </h2>
          <div className="w-8 h-8 ml-4 text-[#FFA100]">
            <Zap className="w-full h-full" />
          </div>
        </div>

        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mt-6 relative">
          We collaborate with industry leaders to deliver cutting-edge innovation and exceptional solutions.
        </p>
      </div>

      {/* Logo Showcase */}
      <div className="mt-16 relative">
        {/* First Row - Left to Right */}
        <div className={`logo-track ${inView ? "animate-scroll" : ""}`}>
          <div className="logo-container">
            {extendedPartners.slice(0, 16).map((partner, index) => (
              <LogoItem key={`row1-${index}`} partner={partner} index={index} />
            ))}
          </div>
        </div>

        {/* Second Row - Right to Left */}
        <div className={`logo-track ${inView ? "animate-scroll-reverse" : ""}`}>
          <div className="logo-container">
            {extendedPartners
              .slice(0, 16)
              .reverse()
              .map((partner, index) => (
                <LogoItem key={`row2-${index}`} partner={partner} index={index} />
              ))}
          </div>
        </div>
      </div>

      {/* Gradient Fade Effects */}
      <div className="absolute left-0 top-1/2 w-24 h-full bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
      <div className="absolute right-0 top-1/2 w-24 h-full bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

      {/* Call to Action */}
      <div className="max-w-7xl mx-auto mt-16 text-center relative z-10">
        <p className="text-lg text-gray-600 mb-6">Want to become a partner?</p>
        <button className="group bg-[#FFA100] hover:bg-[#E89100] text-white font-semibold py-3 px-8 rounded-md transition-all duration-300 transform hover:scale-105 relative overflow-hidden">
          <span className="relative z-10 flex items-center justify-center">
            Contact Us
            <Zap className="w-4 h-4 ml-2 group-hover:animate-pulse" />
          </span>
          <span className="absolute inset-0 bg-gradient-to-r from-[#FFA100] to-[#FF7E00] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </button>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* Logo Track Animations */
        .logo-track {
          overflow: hidden;
          margin: 20px 0;
          position: relative;
        }
        
        .logo-container {
          display: flex;
          width: max-content;
        }
        
        .animate-scroll .logo-container {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll-reverse .logo-container {
          animation: scroll-reverse 40s linear infinite;
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-180px * 8)); }
        }
        
        @keyframes scroll-reverse {
          0% { transform: translateX(calc(-180px * 8)); }
          100% { transform: translateX(0); }
        }
        
        /* Circuit Background */
        .circuit-line {
          position: absolute;
          background: #FFA100;
        }
        
        .horizontal-line-1 {
          top: 20%;
          left: 0;
          height: 1px;
          width: 100%;
          transform-origin: left;
          animation: circuit-pulse 8s ease-in-out infinite;
        }
        
        .horizontal-line-2 {
          top: 50%;
          left: 0;
          height: 1px;
          width: 100%;
          transform-origin: right;
          animation: circuit-pulse 8s ease-in-out infinite;
        }
        
        .horizontal-line-3 {
          top: 80%;
          left: 0;
          height: 1px;
          width: 100%;
          transform-origin: left;
          animation: circuit-pulse 8s ease-in-out infinite;
        }
        
        .vertical-line-1 {
          top: 0;
          left: 20%;
          width: 1px;
          height: 100%;
          transform-origin: top;
          animation: circuit-pulse 8s ease-in-out infinite;
        }
        
        .vertical-line-2 {
          top: 0;
          left: 50%;
          width: 1px;
          height: 100%;
          transform-origin: bottom;
          animation: circuit-pulse 8s ease-in-out infinite;
        }
        
        .vertical-line-3 {
          top: 0;
          left: 80%;
          width: 1px;
          height: 100%;
          transform-origin: top;
          animation: circuit-pulse 8s ease-in-out infinite;
        }
        
        .circuit-node {
          position: absolute;
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #FFA100;
          transform: translate(-50%, -50%);
          animation: node-pulse 4s ease-in-out infinite;
        }
        
        .node-1 {
          top: 20%;
          left: 20%;
        }
        
        .node-2 {
          top: 20%;
          left: 80%;
        }
        
        .node-3 {
          top: 80%;
          left: 20%;
        }
        
        .node-4 {
          top: 80%;
          left: 80%;
        }
        
        @keyframes circuit-pulse {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
        
        @keyframes node-pulse {
          0% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.5); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
        }
        
        @media (max-width: 640px) {
          .animate-scroll .logo-container,
          .animate-scroll-reverse .logo-container {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  )
}

const LogoItem = ({ partner, index }) => {
  return (
    <a href={partner.url} target="_blank" rel="noopener noreferrer" className="logo-item group">
      <div className="logo-wrapper" style={{
        clipPath: "polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)"
      }}>
        {/* Tech Glow Effect */}
        <div className="logo-glow"></div>

        {/* Logo Image */}
        <img src={partner.logo} alt={partner.name} className="logo-image" loading="lazy" />

        {/* Tech Scan Effect */}
        <div className="tech-scan"></div>

        {/* Corner Accents */}
        <div className="corner-accent top-left"></div>
        <div className="corner-accent top-right"></div>
        <div className="corner-accent bottom-left"></div>
        <div className="corner-accent bottom-right"></div>

        {/* Partner Name Tooltip */}
        <div className="logo-tooltip">
          <span>{partner.name}</span>
          <Zap className="tooltip-icon" />
        </div>
      </div>

      <style jsx>{`
        .logo-item {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 180px;
          height: 140px;
          position: relative;
          padding: 15px;
          transition: all 0.3s ease;
        }
        
        .logo-wrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
          border: 2px solid rgba(255, 161, 0, 0.3);
          transition: all 0.3s ease;
        }
        
        .logo-image {
          width: 80%;
          height: 80%;
          object-fit: contain;
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }
        
        .logo-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle, rgba(255, 161, 0, 0.2) 0%, rgba(255, 255, 255, 0) 70%);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 1;
        }
        
        .tech-scan {
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 161, 0, 0.2),
            transparent
          );
          z-index: 3;
          animation: scan 3s ease-in-out infinite;
          animation-delay: ${Math.random() * 3}s;
        }
        
        .corner-accent {
          position: absolute;
          width: 10px;
          height: 10px;
          border: 2px solid #FFA100;
          opacity: 0;
          transition: all 0.3s ease;
          z-index: 4;
        }
        
        .top-left {
          top: 5px;
          left: 5px;
          border-right: none;
          border-bottom: none;
        }
        
        .top-right {
          top: 5px;
          right: 5px;
          border-left: none;
          border-bottom: none;
        }
        
        .bottom-left {
          bottom: 5px;
          left: 5px;
          border-right: none;
          border-top: none;
        }
        
        .bottom-right {
          bottom: 5px;
          right: 5px;
          border-left: none;
          border-top: none;
        }
        
        .logo-tooltip {
          position: absolute;
          bottom: -40px;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 5px 10px;
          border-radius: 4px;
          font-size: 12px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 10;
          display: flex;
          align-items: center;
          white-space: nowrap;
        }
        
        .tooltip-icon {
          width: 12px;
          height: 12px;
          margin-left: 5px;
          color: #FFA100;
        }
        
        /* Hover Effects */
        .logo-item:hover .logo-wrapper {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(255, 161, 0, 0.2);
          border-color: #FFA100;
        }
        
        .logo-item:hover .logo-image {
          transform: scale(1.1);
        }
        
        .logo-item:hover .logo-glow {
          opacity: 1;
        }
        
        .logo-item:hover .corner-accent {
          opacity: 1;
        }
        
        .logo-item:hover .top-left {
          transform: translate(-3px, -3px);
        }
        
        .logo-item:hover .top-right {
          transform: translate(3px, -3px);
        }
        
        .logo-item:hover .bottom-left {
          transform: translate(-3px, 3px);
        }
        
        .logo-item:hover .bottom-right {
          transform: translate(3px, 3px);
        }
        
        .logo-item:hover .logo-tooltip {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        
        @keyframes scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }
      `}</style>
    </a>
  )
}

export default OurPartners