import { useState } from 'react';

export default function JustdialServices() {
  const categories = [
    { name: "Restaurants", icon: "🍽️" },
    { name: "Hotels", icon: "🏨" },
    { name: "Beauty Spa", icon: "💆" },
    { name: "Home Decor", icon: "🏠" },
    { name: "Wedding", icon: "💍" },
    { name: "Education", icon: "🎓" },
    { name: "Rent & Hire", icon: "🔑" },
    { name: "Hospitals", icon: "🏥" },
    { name: "Contractors", icon: "👷" },
    { name: "Pet Shops", icon: "🐾" },
    { name: "Electricians", icon: "⚡" },
    { name: "Plumbers", icon: "🚿" },
    { name: "Car Repair", icon: "🚗" },
    { name: "Travel", icon: "✈️" },
    { name: "Gyms", icon: "💪" },
    { name: "Doctors", icon: "👨‍⚕️" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(categories.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const visibleCategories = categories.slice(
    currentIndex * itemsPerPage,
    (currentIndex + 1) * itemsPerPage
  );

  return (
    <div className="font-[Poppins] p-6 w-full relative max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 px-4">Popular Services</h2>
      
      <div className="relative group">
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100 ml-2 border border-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>

        {/* Services Grid - Responsive columns */}
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-5 px-2">
          {visibleCategories.map((category, index) => (
            <div 
              key={`${currentIndex}-${index}`} 
              className="flex flex-col items-center justify-center text-center cursor-pointer transition-all hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 flex items-center justify-center bg-gray-50 rounded-xl mb-2 shadow-sm hover:shadow-md border border-gray-200">
                <span className="text-2xl sm:text-3xl">{category.icon}</span>
              </div>
              <span className="text-sm sm:text-lg font-medium text-gray-700 line-clamp-2">{category.name}</span>
            </div>
          ))}
        </div>

        <button 
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-all opacity-0 group-hover:opacity-100 mr-2 border border-gray-200"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Page Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${currentIndex === index ? 'bg-gray-600 w-6' : 'bg-gray-300'}`}
            aria-label={`Go to page ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Menu Button */}
      <div className="fixed right-6 bottom-6">
        <button className="bg-gray-700 text-white rounded-lg w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  );
}