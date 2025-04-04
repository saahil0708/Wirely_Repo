import { useState, useEffect, useRef } from "react"
import { CheckCircle, FileSearch, Rocket, ChevronRight, ChevronLeft, ArrowRight } from "lucide-react"

export default function WhyChooseUs() {
  const [activeStep, setActiveStep] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const waveRef = useRef 
  (null)

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    checkMobile()

    // Set up resize listener
    window.addEventListener("resize", checkMobile)

    // Set visibility for animations
    setIsVisible(true)

    // Auto-rotate steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 6000)

    // Cleanup
    return () => {
      clearInterval(interval)
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Scroll to active card on mobile
  useEffect(() => {
    if (isMobile && waveRef.current) {
      const cards = waveRef.current.querySelectorAll(".step-card")
      if (cards[activeStep]) {
        cards[activeStep].scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        })
      }
    }
  }, [activeStep, isMobile])

  const primaryColor = "#fbc800"
  const secondaryColor = "#FEF3C7" // Amber-100 for subtle highlights

  const steps = [
    {
      id: 1,
      title: "Discovery & Analysis",
      description:
        "We conduct comprehensive research and stakeholder interviews to fully understand your business objectives and technical requirements.",
      icon: <FileSearch className="w-5 h-5" />,
      color: primaryColor,
      image: (
        <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            {/* Business man analyzing data */}
            <path d="M150,80 L150,140" stroke="#E5E7EB" strokeWidth="1" />
            <path d="M100,110 L200,110" stroke="#E5E7EB" strokeWidth="1" />

            {/* Business man */}
            <circle cx="150" cy="70" r="15" fill="#4B5563" />
            <path d="M135,85 C135,78 165,78 165,85 L165,120 C165,127 135,127 135,120 Z" fill={primaryColor} />
            <path d="M135,95 L128,115" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <path d="M165,95 L172,115" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <path d="M142,120 L135,140" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />
            <path d="M158,120 L165,140" stroke={primaryColor} strokeWidth="6" strokeLinecap="round" />

            {/* Female colleague */}
            <circle cx="200" cy="75" r="12" fill="#6B7280" />
            <path d="M190,87 C190,82 210,82 210,87 L210,115 C210,120 190,120 190,115 Z" fill="#9CA3AF" />
            <path d="M190,95 L185,115" stroke="#9CA3AF" strokeWidth="5" strokeLinecap="round" />
            <path d="M210,95 L215,115" stroke="#9CA3AF" strokeWidth="5" strokeLinecap="round" />

            {/* Document */}
            <rect x="90" y="70" width="30" height="40" rx="2" fill="white" stroke={primaryColor} strokeWidth="2" />
            <line x1="95" y1="80" x2="115" y2="80" stroke={primaryColor} strokeWidth="1.5" />
            <line x1="95" y1="88" x2="115" y2="88" stroke={primaryColor} strokeWidth="1.5" />
            <line x1="95" y1="96" x2="110" y2="96" stroke={primaryColor} strokeWidth="1.5" />

            {/* Magnifying glass */}
            <circle cx="115" cy="130" r="12" fill="white" stroke={primaryColor} strokeWidth="2" />
            <line x1="107" y1="138" x2="100" y2="145" stroke={primaryColor} strokeWidth="2" strokeLinecap="round" />

            {/* Data visualization */}
            <rect x="180" y="130" width="50" height="30" rx="2" fill="white" stroke={primaryColor} strokeWidth="1" />
            <line x1="185" y1="140" x2="225" y2="140" stroke={primaryColor} strokeWidth="1" />
            <line x1="185" y1="150" x2="205" y2="150" stroke={primaryColor} strokeWidth="1" />

            {/* Data points */}
            <circle cx="100" cy="160" r="4" fill={primaryColor} />
            <circle cx="115" cy="153" r="4" fill={primaryColor} />
            <circle cx="130" cy="165" r="4" fill={primaryColor} />
            <circle cx="145" cy="145" r="4" fill={primaryColor} />
            <circle cx="160" cy="155" r="4" fill={primaryColor} />
            <circle cx="175" cy="148" r="4" fill={primaryColor} />
            <circle cx="190" cy="160" r="4" fill={primaryColor} />

            {/* Line connecting data points */}
            <path
              d="M100,160 L115,153 L130,165 L145,145 L160,155 L175,148 L190,160"
              fill="none"
              stroke={primaryColor}
              strokeWidth="1.5"
            />
          </g>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Solution Development",
      description:
        "Our certified experts architect and implement robust solutions using industry best practices and cutting-edge technologies.",
      icon: <CheckCircle className="w-5 h-5" />,
      color: primaryColor,
      image: (
        <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            {/* Developer desk */}
            <rect x="90" y="120" width="120" height="8" rx="2" fill="#E5E7EB" />
            <rect x="105" y="128" width="8" height="15" fill="#D1D5DB" />
            <rect x="187" y="128" width="8" height="15" fill="#D1D5DB" />

            {/* Developer team */}
            {/* Person 1 */}
            <circle cx="130" cy="80" r="13" fill="#4B5563" />
            <path d="M117,93 C117,86 143,86 143,93 L143,115 C143,122 117,122 117,115 Z" fill={primaryColor} />
            <path d="M117,100 L110,115" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <path d="M143,100 L150,115" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />

            {/* Person 2 */}
            <circle cx="165" cy="85" r="11" fill="#6B7280" />
            <path d="M154,96 C154,90 176,90 176,96 L176,115 C176,121 154,121 154,115 Z" fill="#9CA3AF" />
            <path d="M154,102 L148,115" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round" />
            <path d="M176,102 L182,115" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round" />

            {/* Computer */}
            <rect x="190" y="90" width="40" height="30" rx="2" fill="#4B5563" />
            <rect x="193" y="93" width="34" height="24" rx="1" fill="#1F2937" />
            <rect x="205" y="120" width="10" height="3" rx="1" fill="#9CA3AF" />

            {/* Code on screen */}
            <text x="197" y="100" fill={primaryColor} fontSize="4" fontFamily="monospace">
              {"<div>"}
            </text>
            <text x="197" y="105" fill={primaryColor} fontSize="4" fontFamily="monospace">
              {"  function() {"}
            </text>
            <text x="197" y="110" fill={primaryColor} fontSize="4" fontFamily="monospace">
              {"    return <App/>"}
            </text>
            <text x="197" y="115" fill={primaryColor} fontSize="4" fontFamily="monospace">
              {"  }"}
            </text>

            {/* Architecture diagram */}
            <rect x="80" y="90" width="25" height="15" rx="2" fill="white" stroke={primaryColor} strokeWidth="1" />
            <rect x="60" y="115" width="25" height="15" rx="2" fill="white" stroke={primaryColor} strokeWidth="1" />
            <rect x="100" y="115" width="25" height="15" rx="2" fill="white" stroke={primaryColor} strokeWidth="1" />
            <line x1="92.5" y1="90" x2="72.5" y2="115" stroke={primaryColor} strokeWidth="1" />
            <line x1="92.5" y1="90" x2="112.5" y2="115" stroke={primaryColor} strokeWidth="1" />

            {/* Gears */}
            <circle cx="215" cy="65" r="12" fill="none" stroke={primaryColor} strokeWidth="1.5" />
            <circle cx="215" cy="65" r="4" fill={primaryColor} />
            <path d="M211,53 L219,53" stroke={primaryColor} strokeWidth="1.5" />
            <path d="M211,77 L219,77" stroke={primaryColor} strokeWidth="1.5" />
            <path d="M203,61 L203,69" stroke={primaryColor} strokeWidth="1.5" />
            <path d="M227,61 L227,69" stroke={primaryColor} strokeWidth="1.5" />
          </g>
        </svg>
      ),
    },
    {
      id: 3,
      title: "Deployment & Optimization",
      description:
        "We ensure seamless implementation with comprehensive documentation, training, and continuous performance monitoring.",
      icon: <Rocket className="w-5 h-5" />,
      color: primaryColor,
      image: (
        <svg width="100%" height="100%" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g>
            {/* Trainer */}
            <circle cx="120" cy="80" r="13" fill="#4B5563" />
            <path d="M107,93 C107,86 133,86 133,93 L133,115 C133,122 107,122 107,115 Z" fill={primaryColor} />
            <path d="M107,100 L100,115" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />
            <path d="M133,100 L140,115" stroke={primaryColor} strokeWidth="5" strokeLinecap="round" />

            {/* Client group */}
            {/* Client 1 */}
            <circle cx="180" cy="85" r="12" fill="#4B5563" />
            <path d="M168,97 C168,91 192,91 192,97 L192,115 C192,121 168,121 168,115 Z" fill="#6B7280" />
            <path d="M168,103 L162,115" stroke="#6B7280" strokeWidth="4" strokeLinecap="round" />
            <path d="M192,103 L198,115" stroke="#6B7280" strokeWidth="4" strokeLinecap="round" />

            {/* Client 2 */}
            <circle cx="205" cy="87" r="10" fill="#6B7280" />
            <path d="M195,97 C195,92 215,92 215,97 L215,113 C215,118 195,118 195,113 Z" fill="#9CA3AF" />
            <path d="M195,102 L190,113" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />
            <path d="M215,102 L220,113" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />

            {/* Presentation screen */}
            <rect x="140" y="65" width="40" height="25" rx="2" fill="white" stroke={primaryColor} strokeWidth="1.5" />
            <line x1="145" y1="72" x2="175" y2="72" stroke={primaryColor} strokeWidth="1" />
            <line x1="145" y1="78" x2="170" y2="78" stroke={primaryColor} strokeWidth="1" />
            <line x1="145" y1="84" x2="160" y2="84" stroke={primaryColor} strokeWidth="1" />

            {/* Dashboard */}
            <rect x="220" y="95" width="40" height="30" rx="2" fill="white" stroke={primaryColor} strokeWidth="1" />
            <rect x="224" y="99" width="32" height="8" rx="1" fill={primaryColor} opacity="0.1" />
            <rect x="224" y="110" width="12" height="12" rx="1" fill={primaryColor} opacity="0.1" />
            <rect x="240" y="110" width="16" height="12" rx="1" fill={primaryColor} opacity="0.1" />

            {/* Rocket */}
            <path d="M80,95 L72,110 L80,106 L88,110 Z" fill={primaryColor} />
            <rect x="76" y="80" width="8" height="20" rx="4" fill={primaryColor} />
            <path d="M72,80 C76,72 84,72 88,80" fill={primaryColor} />

            {/* Cloud */}
            <circle cx="70" cy="60" r="8" fill="#E5E7EB" />
            <circle cx="82" cy="56" r="10" fill="#E5E7EB" />
            <circle cx="94" cy="60" r="8" fill="#E5E7EB" />
            <rect x="70" y="60" width="24" height="8" fill="#E5E7EB" />

            {/* Performance graph */}
            <rect x="50" y="120" width="35" height="25" rx="2" fill="white" stroke={primaryColor} strokeWidth="1" />
            <polyline
              points="55,135 60,125 65,130 70,120 75,127 80,122"
              stroke={primaryColor}
              strokeWidth="1.5"
              fill="none"
            />
          </g>
        </svg>
      ),
    },
  ]

  return (
    <section className="w-full bg-white py-12 md:py-16 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full opacity-20 -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50 rounded-full opacity-20 translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

        <header className="text-center mb-12">
          <div className="inline-block mb-3">
            <span className="px-3 py-1 bg-amber-50 text-amber-800 text-sm font-medium rounded-full">
              Enterprise Methodology
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
            Our <span style={{ color: primaryColor }}>Strategic Process</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            A structured approach to delivering measurable business outcomes through technology excellence
          </p>
        </header>

        {/* Mobile View: Horizontal Scrolling Cards */}
        <div
          className={`md:hidden relative mb-8 ${isVisible ? "opacity-100" : "opacity-0"} transition-opacity duration-700`}
        >
          <div ref={waveRef} className="flex overflow-x-auto pb-8 pt-4 px-4 -mx-4 snap-x snap-mandatory hide-scrollbar">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={`step-card flex-shrink-0 w-[85%] snap-center mr-4 transition-all duration-300 ${
                  activeStep === index ? "scale-[1.02]" : "scale-100"
                }`}
                style={{ scrollSnapAlign: "center" }}
              >
                <div
                  className={`bg-white rounded-lg shadow-md overflow-hidden border-2 transition-all duration-300 h-full ${
                    activeStep === index ? "border-amber-400" : "border-transparent"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Card Header with Number */}
                  <div className="flex items-center p-4 border-b border-gray-100">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-sm"
                      style={{ backgroundColor: primaryColor }}
                    >
                      {step.id}
                    </div>
                    <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                  </div>

                  {/* Card Content */}
                  <div className="p-4">
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>

                  {/* Card Footer */}
                  <div className="flex items-center justify-between p-4 bg-gray-50 mt-auto">
                    <div className="flex items-center">
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                        style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                      >
                        {step.icon}
                      </span>
                      <span className="text-xs font-medium text-gray-500">Phase {step.id}</span>
                    </div>

                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: primaryColor }}
                    >
                      <ChevronRight className="w-3 h-3 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Indicator Dots */}
          <div className="flex justify-center mt-2 space-x-2">
            {steps.map((_, idx) => (
              <button
                key={idx}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  activeStep === idx ? "bg-amber-500" : "bg-gray-300"
                }`}
                onClick={() => setActiveStep(idx)}
                aria-label={`Go to step ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop View: Wave Path with Cards */}
        <div className="hidden md:block relative mb-12 md:mb-16">
          {/* The wave path SVG */}
          <div className="relative h-[300px] md:h-[250px] my-40">
            {/* Background wave path */}
            <svg
              className="w-full h-full absolute top-0 left-0"
              viewBox="0 0 1200 300"
              preserveAspectRatio="none"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Shadow effect for the wave */}
              <filter id="wave-shadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="2" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.2" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Main wave path for background depth */}
              <path
                d="M0,150 C150,50 300,250 450,150 C600,50 750,250 900,150 C1050,50 1200,250 1350,150"
                stroke="#f3f4f6"
                strokeWidth="12"
                strokeLinecap="round"
                filter="url(#wave-shadow)"
                className="wave-path-bg"
              />

              {/* Animated wave path overlay */}
              <path
                d="M0,150 C150,50 300,250 450,150 C600,50 750,250 900,150 C1050,50 1200,250 1350,150"
                stroke={primaryColor}
                strokeWidth="6"
                strokeLinecap="round"
                strokeDasharray="1500"
                strokeDashoffset="1500"
                className={`wave-path-progress ${isVisible ? "animate-wave-dash" : ""}`}
              />

              {/* Dotted line effect following the same path */}
              <path
                d="M0,150 C150,50 300,250 450,150 C600,50 750,250 900,150 C1050,50 1200,250 1350,150"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="5 15"
                className="wave-path-dots"
              />
            </svg>

            {/* Cards positioned along the wave */}
            <div className="absolute top-0 left-0 w-full h-full">
              {steps.map((step, index) => {
                // Calculate positions along the wave
                const xPercent = (index / (steps.length - 1)) * 100

                // Alternate cards above and below the wave
                const isAbove = index % 2 === 0
                const yPosition = isAbove ? "-60%" : "60%"

                return (
                  <div
                    key={step.id}
                    className={`absolute transition-all duration-700 ease-in-out ${
                      activeStep === index ? "z-20 scale-105" : "z-10 scale-100"
                    }`}
                    style={{
                      left: `${xPercent}%`,
                      top: yPosition,
                      transform: `translateX(-50%)`,
                      opacity: isVisible ? 1 : 0,
                      transitionDelay: `${index * 150}ms`,
                    }}
                  >
                    {/* Card */}
                    <div
                      className={`w-[240px] sm:w-[280px] md:w-[300px] bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-all duration-300 ${
                        activeStep === index ? "ring-2" : "hover:shadow-xl"
                      }`}
                      style={{
                        borderColor: primaryColor,
                        boxShadow: activeStep === index ? `0 8px 20px -5px ${primaryColor}40` : "",
                        ringColor: primaryColor,
                      }}
                      onClick={() => setActiveStep(index)}
                    >
                      {/* Card Header with Number */}
                      <div className="flex items-center p-4 border-b border-gray-100">
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3 shadow-sm"
                          style={{ backgroundColor: primaryColor }}
                        >
                          {step.id}
                        </div>
                        <h3 className="text-base font-bold text-gray-900">{step.title}</h3>
                      </div>

                      {/* Card Content */}
                      <div className="p-3">
                        <p className="text-gray-600 text-xs sm:text-sm">{step.description}</p>
                      </div>

                      {/* Card Footer */}
                      <div className="flex items-center justify-between p-3 bg-gray-50">
                        <div className="flex items-center">
                          <span
                            className="w-6 h-6 rounded-full flex items-center justify-center mr-2"
                            style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                          >
                            {step.icon}
                          </span>
                          <span className="text-xs font-medium text-gray-500">Phase {step.id}</span>
                        </div>

                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: primaryColor }}
                        >
                          <ChevronRight className="w-3 h-3 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Connector Line to Wave */}
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 w-1"
                      style={{
                        top: isAbove ? "100%" : "auto",
                        bottom: isAbove ? "auto" : "100%",
                        height: "40px",
                        backgroundColor: primaryColor,
                      }}
                    ></div>

                    {/* Dot on the Wave */}
                    <div
                      className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full"
                      style={{
                        top: isAbove ? "calc(100% + 40px)" : "auto",
                        bottom: isAbove ? "auto" : "calc(100% + 40px)",
                        backgroundColor: primaryColor,
                        boxShadow: `0 0 0 3px white, 0 0 0 5px ${primaryColor}40`,
                      }}
                    ></div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Active Step Detail Card */}
        <div
          className={`max-w-3xl mx-auto mt-8 md:mt-40 transition-all duration-500 ${
            isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-10"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg border overflow-hidden" style={{ borderColor: primaryColor }}>
            <div className="md:flex">
              <div className="md:w-2/5 h-48 md:h-auto relative">
                <div className="absolute inset-0">{steps[activeStep].image}</div>
                <div
                  className="absolute top-0 left-0 w-full h-full opacity-10"
                  style={{ backgroundColor: primaryColor }}
                ></div>
                <div
                  className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center shadow-md bg-white"
                  style={{ color: primaryColor }}
                >
                  {steps[activeStep].icon}
                </div>
                <div
                  className="absolute bottom-3 left-3 bg-white px-2 py-1 rounded-full shadow-sm text-xs font-medium"
                  style={{ color: primaryColor }}
                >
                  Step {steps[activeStep].id} of {steps.length}
                </div>
              </div>

              <div className="p-4 md:p-5 md:w-3/5">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: primaryColor }}
                  >
                    {steps[activeStep].id}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">{steps[activeStep].title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{steps[activeStep].description}</p>

                <div className="mt-5 flex justify-between items-center">
                  <button
                    className="px-3 py-1.5 rounded-lg text-xs font-medium flex items-center gap-1 border hover:bg-gray-50 transition-colors"
                    onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
                  >
                    <ChevronLeft className="w-3 h-3" />
                    Previous
                  </button>

                  <div className="hidden md:flex gap-1.5">
                    {steps.map((_, idx) => (
                      <button
                        key={idx}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          activeStep === idx ? "bg-amber-500" : "bg-gray-300 hover:bg-gray-400"
                        }`}
                        onClick={() => setActiveStep(idx)}
                        aria-label={`Go to step ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-gray-900 shadow-sm transition-colors flex items-center gap-1"
                    style={{ backgroundColor: primaryColor }}
                    onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                  >
                    Next
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center mt-10">
          <div className="text-center max-w-2xl mb-6">
            <p className="text-gray-700 text-sm md:text-base">
              Our methodology has been refined through years of experience delivering enterprise solutions across
              industries. Each phase is carefully designed to maximize value and minimize risk.
            </p>
          </div>

          <button
            className="px-5 py-2.5 rounded-lg text-sm font-medium text-gray-900 shadow-sm transition-colors hover:shadow-md flex items-center gap-2 group"
            style={{ backgroundColor: primaryColor }}
          >
            Schedule a Consultation
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      <style jsx>{`
        .wave-path-bg {
          animation: float 8s ease-in-out infinite;
        }
        
        .wave-path-dots {
          animation: float 8s ease-in-out infinite reverse;
        }
        
        .animate-wave-dash {
          animation: dash 2.5s ease-in-out forwards, pulse 4s ease-in-out infinite;
        }
        
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </section>
  )
}