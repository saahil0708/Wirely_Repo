import React from "react";

const CallToAction = () => {
  return (
    <section className="relative bg-white py-16 text-center border-t border-b border-gray-200 overflow-hidden">
      {/* Electrical-themed background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        {/* Lightning bolt pattern */}
        <div className="absolute top-10 left-1/4 w-8 h-16" style={{ transform: 'rotate(15deg)', background: 'linear-gradient(135deg, transparent 45%, #ffa100 45%, #ffa100 55%, transparent 55%)' }}></div>
        <div className="absolute bottom-20 right-1/4 w-8 h-16" style={{ transform: 'rotate(-15deg)', background: 'linear-gradient(135deg, transparent 45%, #ffa100 45%, #ffa100 55%, transparent 55%)' }}></div>
        
        {/* Circuit line pattern */}
        <div className="absolute top-1/3 left-10 right-10 h-px bg-gray-200"></div>
        <div className="absolute top-1/3 left-1/2 h-16 w-px bg-gray-200"></div>
        
        {/* Electrical outlet symbol */}
        <div className="absolute bottom-10 right-20 w-12 h-12 border-2 border-gray-200 rounded-md flex items-center justify-center">
          <div className="w-8 h-1 bg-gray-200"></div>
          <div className="absolute w-1 h-4 bg-gray-200 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="mb-2 font-semibold" style={{ color: '#ffa100' }}>READY TO GET STARTED?</div>
        
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Professional Electrical Solutions Tailored for You
        </h2>
        
        <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
          Trusted by over 1,000 homeowners and businesses for reliable, certified electrical work.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="#contact"
            className="px-8 py-3 text-white font-medium rounded-md hover:bg-opacity-90 transition-colors duration-200 shadow-md"
            style={{ backgroundColor: '#ffa100' }}
          >
            Schedule Free Estimate
          </a>
          
          <a
            href="#services"
            className="px-8 py-3 bg-white font-medium rounded-md hover:bg-gray-50 transition-colors duration-200 border border-gray-300 shadow-sm"
            style={{ color: '#ffa100' }}
          >
            View Our Services
          </a>
        </div>
        
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-500">
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="#ffa100" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
            </svg>
            Licensed & Insured Professionals
          </div>
          <div className="flex items-center justify-center">
            <svg className="w-5 h-5 mr-2" fill="#ffa100" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
            </svg>
            24/7 Emergency Service Available
          </div>
        </div>
        
        <div className="mt-8 text-xs text-gray-400">
          Trusted by homeowners and businesses
          <div className="flex justify-center items-center space-x-6 mt-4">
            <div className="flex flex-col items-center">
              <svg className="w-6 h-6 mb-1" fill="#ffa100" viewBox="0 0 24 24">
                <path d="M18 11h-5V6h3l-4-4-4 4h3v5H6V8l-4 4 4 4v-3h5v5H8l4 4 4-4h-3v-5h5v3l4-4-4-4z"/>
              </svg>
              <span className="font-medium text-gray-600">Residential</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-6 h-6 mb-1" fill="#ffa100" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                <path d="M11 7h2v2h-2zm0 4h2v2h-2zm0 4h2v2h-2zm-4-8h2v2H7zm0 4h2v2H7zm0 4h2v2H7z"/>
              </svg>
              <span className="font-medium text-gray-600">Commercial</span>
            </div>
            <div className="flex flex-col items-center">
              <svg className="w-6 h-6 mb-1" fill="#ffa100" viewBox="0 0 24 24">
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                <path d="M11.25 7.5h1.5v9h-1.5zM8.5 7.5h1.5v9H8.5zm5.25 0H15v9h-1.25z"/>
              </svg>
              <span className="font-medium text-gray-600">Industrial</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;