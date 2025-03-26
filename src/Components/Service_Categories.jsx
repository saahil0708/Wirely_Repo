import React, { useState, useEffect } from "react";
import { FaWifi, FaShoppingBag, FaMobileAlt, FaGamepad, FaMicrophone } from "react-icons/fa";
import { motion } from "framer-motion";

const categories = [
  { name: "Wi-Fi", icon: <FaWifi />, description: "Fast internet up to 1Gbps.", price: "$30/month" },
  { name: "Home Appliances", icon: <FaShoppingBag />, description: "Latest energy-efficient appliances.", price: "From $100" },
  { name: "Mobile & PC", icon: <FaMobileAlt />, description: "Top-rated devices at the best prices.", price: "From $200" },
  { name: "Gaming Consoles", icon: <FaGamepad />, description: "Next-gen gaming with immersive experience.", price: "$400" },
  { name: "Audio & Microphone", icon: <FaMicrophone />, description: "High-quality sound for professionals.", price: "From $50" },
];

export default function ServiceCategories() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleBoxes = 3; // Show 3 boxes at a time

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length);
  };

  // Auto-scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleBooking = (service) => {
    alert(`Booking confirmed for: ${service}`);
  };

  return (
    <div className="relative max-w-5xl mx-auto p-10">
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Our Services</h2>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${currentIndex * (100 / visibleBoxes)}%` }}
          transition={{ ease: "easeInOut", duration: 0.6 }}
        >
          {[...categories, ...categories].map((category, index) => (
            <div key={index} className="min-w-[33.33%] flex justify-center p-3">
              <motion.div
                className="w-64 h-80 flex flex-col items-center justify-center bg-white/20 backdrop-blur-xl border border-gray-300 rounded-2xl shadow-lg hover:shadow-xl p-4 cursor-pointer transition-transform transform hover:scale-105"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-[#fbc800] text-5xl mb-3">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                <p className="text-gray-600 mt-2 text-center text-sm">{category.description}</p>
                <p className="text-[#fbc800] font-bold text-md mt-2">{category.price}</p>

                {/* Book Now Button */}
                <button
                  className="mt-3 px-4 py-2 bg-[#fbc800] text-white font-semibold rounded-lg hover:bg-yellow-600 transition"
                  onClick={() => handleBooking(category.name)}
                >
                  Book Now
                </button>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <button onClick={prevSlide} className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition">
        ◀
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition">
        ▶
      </button>
    </div>
  );
}
