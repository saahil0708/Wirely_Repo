import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const services = [
  {
    id: "1",
    title: "Home Wiring Installation",
    icon: "https://cdn-icons-png.flaticon.com/512/3565/3565418.png",
    price: 199.99,
    rating: 4.8,
    duration: "3-5 hours",
    bgColor: "bg-red-200"
  },
  {
    id: "2",
    title: "Laptop Repair Service",
    icon: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
    price: 79.99,
    rating: 4.6,
    duration: "1-2 hours",
   bgColor: "bg-red-200"
  },
  {
    id: "3",
    title: "Wi-Fi Network Setup",
    icon: "https://cdn-icons-png.flaticon.com/512/4784/4784326.png",
    price: 149.99,
    rating: 4.9,
    duration: "2-3 hours",
    bgColor: "bg-red-200"
  },
  {
    id: "4",
    title: "Electrical Panel Upgrade",
    icon: "https://cdn-icons-png.flaticon.com/512/3527/3527798.png",
    price: 499.99,
    rating: 4.7,
    duration: "4-6 hours",
    bgColor: "bg-red-200"
  },
  {
    id: "5",
    title: "Plumbing Emergency",
    icon: "https://cdn-icons-png.flaticon.com/512/2778/2778773.png",
    price: 129.99,
    rating: 4.7,
    duration: "1-3 hours",
    bgColor: "bg-red-200"
  },
  {
    id: "6",
    title: "AC Repair Service",
    icon: "https://cdn-icons-png.flaticon.com/512/3059/3059518.png",
    price: 179.99,
    rating: 4.5,
    duration: "2-4 hours",
    bgColor: "bg-red-200"
  }
];

const ServiceCard = ({ service }) => (
  <div className="relative rounded-xl shadow-md h-full mx-3 overflow-hidden hover:shadow-lg transition-all min-w-[320px]">
    {/* Circular colored background */}
    <div className={`absolute -right-16 -top-16 w-64 h-64 rounded-full ${service.bgColor} opacity-30`}></div>
    
    <div className="relative p-6 flex h-full">
      {/* Left side - Content */}
      <div className="flex-1 pr-6 z-10">
        <h3 className="font-bold text-xl mb-2 text-gray-800">{service.title}</h3>
        <div className="flex items-center mb-3">
          <span className="text-yellow-400 mr-1 text-lg">★</span>
          <span className="text-gray-600">{service.rating}</span>
        </div>
        <p className="text-gray-500 mb-4 text-sm flex items-center">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {service.duration}
        </p>
        <p className="text-2xl font-bold text-yellow-600 mb-5">${service.price.toFixed(2)}</p>
        <button className="w-full bg-yellow-500 text-white py-3 rounded-lg hover:bg-yellow-600 transition-colors font-medium">
          Book Now
        </button>
      </div>
      
      {/* Right side - Image with white circle background */}
      <div className="relative z-10 flex items-center justify-center">
        <div className="w-24 h-24 rounded-ful flex items-center justify-center p-3 shadow-sm">
          <img 
            src={service.icon} 
            alt={service.title}
            className="w-20 h-20 object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
);

const ServiceCards = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 }
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="max-w-7xl mx-auto px-8 py-12 relative">
      <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Premium Services</h2>
      
      {/* Navigation arrows */}
      <button 
        onClick={() => sliderRef.current.slickPrev()}
        className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        aria-label="Previous services"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        onClick={() => sliderRef.current.slickNext()}
        className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 z-10  p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors"
        aria-label="Next services"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <Slider ref={sliderRef} {...settings}>
        {services.map(service => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </Slider>
    </div>
  );
};

export default ServiceCards;