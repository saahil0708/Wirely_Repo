import { useState, useEffect, useRef } from 'react';
import '../Styles/HowItWorks.css'
import { 
  FiClipboard, 
  FiHome, 
  FiLayout, 
  FiTool, 
  FiCheckCircle 
} from 'react-icons/fi';

const App = () => {
  const [activeStep, setActiveStep] = useState(1);
  const stepsContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const steps = [
    {
      id: 1,
      title: "Initial Electrical Assessment",
      description: "We discuss your power needs, safety concerns, and project scope",
      image: "https://i.pinimg.com/736x/a9/b0/b0/a9b0b09986adccb7f5cae0c6e6b898e5.jpg",
      icon: <FiClipboard className="w-6 h-6" />
    },
    {
      id: 2,
      title: "On-Site Inspection",
      description: "Our licensed electricians evaluate your property's wiring and electrical system",
      image: "https://i.pinimg.com/736x/10/6e/ac/106eacb794d66d69cf9fd8be7a9173b0.jpg",
      icon: <FiHome className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Custom Wiring Plan",
      description: "We design a solution meeting all electrical codes and safety standards",
      image: "https://i.pinimg.com/736x/f4/f0/b3/f4f0b3bb6f1208bbdf452db98acb6bc8.jpg",
      icon: <FiLayout className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Professional Installation",
      description: "Certified technicians implement the solution with precision",
      image: "https://i.pinimg.com/736x/f1/e4/fd/f1e4fd4d1973d89b658469acfff72552.jpg",
      icon: <FiTool className="w-6 h-6" />
    },
    {
      id: 5,
      title: "Final Safety Testing",
      description: "Comprehensive testing and certification of all work completed",
      image: "https://i.pinimg.com/736x/e7/f6/e5/e7f6e55027e3adf6d9c9e3509e3a4a12.jpg",
      icon: <FiCheckCircle className="w-6 h-6" />
    }
  ];

  useEffect(() => {
    const container = stepsContainerRef.current;
    
    const handleScroll = () => {
      if (!container || isScrolling) return;
      
      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.clientHeight;
      const stepElements = container.querySelectorAll('[data-step]');
      
      stepElements.forEach((stepEl) => {
        const stepTop = stepEl.getBoundingClientRect().top - containerTop;
        const stepHeight = stepEl.clientHeight;
        
        if (stepTop <= containerHeight / 2 && stepTop + stepHeight >= containerHeight / 2) {
          const stepId = parseInt(stepEl.getAttribute('data-step'));
          if (stepId !== activeStep) {
            setActiveStep(stepId);
          }
        }
      });
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [isScrolling, activeStep]);

  const handleStepChange = (stepId, index) => {
    if (stepId === activeStep) return;
    setActiveStep(stepId);
    setIsScrolling(true);

    stepsContainerRef.current.scrollTo({
      top: index * 120,
      behavior: 'smooth'
    });

    setTimeout(() => {
      setIsScrolling(false);
    }, 500);
  };

  return (
    <section className="relative font-[Poppins] py-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gray-50">
      {/* Electrical-themed background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Circuit board pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(to right, #f59e0b 1px, transparent 1px),
            linear-gradient(to bottom, #f59e0b 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center center'
        }}></div>
        
        {/* Electrical pulse effect */}
        <div className="absolute inset-0" style={{
          background: `radial-gradient(circle at center, rgba(245, 158, 11, 0.1) 0%, transparent 70%)`
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-semibold text-gray-900 sm:text-4xl">
            Our Electrical Service Process
          </h2>
          <p className="mt-4 text-xltext-gray-600">
            Professional, code-compliant solutions from certified electricians
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          {/* Left timeline section */}
          <div 
            ref={stepsContainerRef}
            className="lg:w-1/2 space-y-4 max-h-[600px] overflow-y-auto scroll-smooth relative pr-4"
            style={{ scrollbarWidth: 'none' }}
          >
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200">
              <div 
                className="absolute left-0 w-0.5 bg-yellow-500 transition-all duration-300"
                style={{
                  top: `${(activeStep - 1) * 120}px`,
                  height: '120px'
                }}
              ></div>
            </div>
            
            {steps.map((step, index) => (
              <div 
                key={step.id}
                data-step={step.id}
                onClick={() => handleStepChange(step.id, index)}
                className={`relative pl-16 pr-6 py-6 cursor-pointer transition-all duration-300 ease-in-out text-left min-h-[120px] flex items-center
                  ${activeStep === step.id ? 'bg-white/90 backdrop-blur-sm rounded-xl shadow-md border border-yellow-200' : 'hover:bg-white/80 rounded-xl border border-transparent'}`}
              >
                <div 
                  className={`absolute left-8 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center z-10
                    ${activeStep === step.id 
                      ? 'bg-yellow-500 ring-4 ring-yellow-500/30' 
                      : 'bg-gray-300'}`}
                ></div>
                
                <div 
                  className={`absolute left-8 top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full flex items-center justify-center z-20 transition-all duration-300
                    ${activeStep === step.id 
                      ? 'bg-white shadow-lg shadow-yellow-400/50 ring-2 ring-yellow-400/30' 
                      : 'bg-white/90 backdrop-blur-sm shadow-sm'}`}
                >
                  <div className={`transition-all duration-300 ${activeStep === step.id ? 'text-yellow-600 scale-110' : 'text-gray-600 scale-100'}`}>
                    {step.icon}
                  </div>
                </div>
                
                <div className={`ml-8 space-y-2 transition-all duration-300 text-left ${activeStep === step.id ? 'text-gray-800' : 'text-gray-600'}`}>
                  <h3 className="font-bold text-lg md:text-xl">{step.title}</h3>
                  <p className="text-sm md:text-base opacity-80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Right image section with stacked card effect */}
          <div className="hidden lg:block lg:w-1/2 sticky top-8 h-[600px]">
            <div className="relative h-full rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
              {steps.map((step) => {
                const position = step.id - activeStep;
                const zIndex = steps.length - Math.abs(position);
                const translateY = position * 20;
                const scale = 1 - Math.abs(position) * 0.05;
                const opacity = 1 - Math.abs(position) * 0.3;

                return (
                  <div
                    key={step.id}
                    className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out rounded-2xl shadow-lg overflow-hidden ${
                      step.id === activeStep ? 'z-50' : 'pointer-events-none'
                    }`}
                    style={{
                      transform: `translateY(${translateY}px) scale(${scale})`,
                      zIndex: zIndex,
                      opacity: opacity,
                    }}
                  >
                    <img 
                      src={step.image} 
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 via-black/60 to-transparent">
                      <div className="flex items-center mb-3">
                        <div className="w-12 h-12 rounded-full bg-yellow-600/80 flex items-center justify-center mr-4 text-white">
                          {step.icon}
                        </div>
                        <span className="text-yellow-400 text-sm font-medium tracking-wider">STEP {step.id}</span>
                      </div>
                      <h3 className="text-white text-2xl font-bold mb-3 text-left">
                        {step.title}
                      </h3>
                      <p className="text-gray-200 text-lg text-left">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile version */}
          <div className="lg:hidden mt-6 h-80 w-full overflow-hidden rounded-xl border border-gray-200">
            <div className="relative h-full bg-gray-100 overflow-hidden">
              {steps.map(step => (
                <div 
                  key={step.id}
                  className={`absolute inset-0 w-full h-full transition-all duration-500 ease-in-out
                    ${activeStep === step.id 
                      ? 'opacity-100 translate-x-0' 
                      : step.id > activeStep
                        ? 'opacity-0 translate-x-full'
                        : 'opacity-0 -translate-x-full'
                    }`}
                >
                  <img 
                    src={step.image} 
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-yellow-600/80 flex items-center justify-center mr-3 text-white">
                        {step.icon}
                      </div>
                      <span className="text-yellow-400 text-xs font-medium">STEP {step.id}</span>
                    </div>
                    <h3 className="text-white text-lg font-bold text-left">
                      {step.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;