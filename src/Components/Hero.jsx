"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function RotatingText({
  texts,
  interval = 3000,
  animationDuration = 0.5,
  className = "",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts.length, interval]);

  return (
    <div className={`relative h-12 overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: animationDuration }}
          className="absolute inset-0 font-bold text-2xl text-[#FBC800]"
        >
          {texts[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function BusinessDirectory() {
  const [location, setLocation] = useState("Mumbai");
  const [search, setSearch] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      title: "Pay Bills",
      subheading: "Instant Payments",
      desc: "Mobile, Electricity, DTH & more",
      gradient: "bg-gradient-to-br from-blue-500 to-blue-700",
      text: "text-blue-700",
      border: "border-blue-300",
      defaultVector: "https://cdn-icons-png.flaticon.com/512/3132/3132693.png",
      hoverVector: "https://cdn-icons-png.flaticon.com/512/1006/1006771.png",
      alt: "Online payment illustration",
    },
    {
      title: "Quick Quotes",
      subheading: "Compare Prices",
      desc: "Get multiple quotes instantly",
      gradient: "bg-gradient-to-br from-indigo-500 to-indigo-700",
      text: "text-indigo-700",
      border: "border-indigo-300",
      defaultVector: "https://cdn-icons-png.flaticon.com/512/3523/3523888.png",
      hoverVector: "https://cdn-icons-png.flaticon.com/512/3523/3523881.png",
      alt: "Price tags illustration",
    },
    {
      title: "Home Repairs",
      subheading: "Professional Services",
      desc: "Find verified service providers",
      gradient: "bg-gradient-to-br from-emerald-500 to-emerald-700",
      text: "text-emerald-700",
      border: "border-emerald-300",
      defaultVector: "https://cdn-icons-png.flaticon.com/512/619/619032.png",
      hoverVector: "https://cdn-icons-png.flaticon.com/512/2933/2933245.png",
      alt: "Tools illustration",
    },
    {
      title: "Book Doctors",
      subheading: "Healthcare Services",
      desc: "Instant specialist appointments",
      gradient: "bg-gradient-to-br from-purple-500 to-purple-700",
      text: "text-purple-700",
      border: "border-purple-300",
      defaultVector: "https://cdn-icons-png.flaticon.com/512/3003/3003984.png",
      hoverVector: "https://cdn-icons-png.flaticon.com/512/2964/2964430.png",
      alt: "Doctor illustration",
    },
  ];

  return (
    <div className="min-h-screen mt-20 bg-gray-50 font-sans">
      <style jsx global>{`
        @import url("https://fonts.cdnfonts.com/css/open-sauce-one");
        body {
          font-family: "Open Sauce One", sans-serif;
        }
        @supports (font-variation-settings: normal) {
          body {
            font-family: "Open Sauce One Variable", sans-serif;
          }
        }
      `}</style>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8 text-center md:text-left px-2">
          <div className="grid grid-cols-12">
            <div className="col-span-2 w-max-co">
              <div className="flex h-full text-2xl font-bold">

              Search across{" "} 
              </div>
              </div>
            <div className="col-span-10">

            <RotatingText
              texts={["4.7 crore+ Services", "`5.9 crore+ Services`"]}
              interval={2000}
              animationDuration={0.5}
              />
              </div>
          </div>

          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mt-4">
            Find and connect with the best local businesses in your area. Over
            10 million businesses listed.
          </p>
        </div>

        <div className="relative rounded-2xl p-4 sm:p-6 mb-8 mx-2 sm:mx-0">
          <div className="flex flex-col md:flex-row gap-3">
            <div className="flex items-center bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl w-full md:w-64 flex-shrink-0 hover:border-amber-300 transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-500 mr-2 h-5 w-5"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <input
                type="text"
                className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Your location"
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center bg-gray-50 border border-gray-200 px-4 py-3 rounded-xl w-full md:w-[30rem] hover:border-amber-300 transition-colors">
              <input
                type="text"
                className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 mb-2 sm:mb-0"
                placeholder="What are you looking for?"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="bg-gradient-to-r from-amber-500 to-amber-400 text-white font-medium px-5 py-2 rounded-lg flex items-center shadow hover:shadow-md transition-all sm:ml-3 transform hover:scale-[1.02] active:scale-95 w-full sm:w-auto justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-2 h-4 w-4"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
                Search
              </button>
            </div>
          </div>
        </div>

        <h2 className="text-xl font-bold mb-4 text-gray-800 px-2 sm:px-0">
          Popular Services
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 mb-12 px-2 sm:px-0 overflow-x-auto sm:overflow-visible pb-2 sm:pb-0">
          {services.map((service, index) => (
            <div
              key={index}
              className={`h-60 min-w-[calc(100%-1rem)] sm:min-w-0 transition-all duration-300 ease-in-out ${
                hoveredCard === index
                  ? "sm:w-2/6 w-full"
                  : hoveredCard === null && index === 0
                  ? "sm:w-2/6 w-full"
                  : "sm:w-1/6 w-full"
              }`}
            >
              <div
                className={`${service.gradient} text-white rounded-xl h-full overflow-hidden relative group transition-all duration-300 hover:shadow-md`}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-white transition-opacity"></div>
                <div className="p-5 h-full flex flex-col">
                  <div className="flex flex-col sm:flex-row justify-between h-full">
                    <div className="flex flex-col justify-between h-full w-full">
                      <div>
                        <p className="text-xs font-medium opacity-80">
                          {service.subheading}
                        </p>
                        <h3 className="text-lg font-bold mt-1">
                          {service.title}
                        </h3>
                        <p className="text-xs opacity-90 mt-1">
                          {service.desc}
                        </p>
                      </div>

                      {hoveredCard !== index &&
                        !(index === 0 && hoveredCard === null) && (
                          <div className="mt-3 flex justify-end pr-2">
                            <img
                              src={service.defaultVector}
                              alt={service.alt}
                              className="w-16 h-16 object-contain opacity-90 transition-opacity"
                            />
                          </div>
                        )}

                      {(hoveredCard === index ||
                        (index === 0 && hoveredCard === null)) && (
                        <button
                          className={`flex items-center mt-3 text-xs font-medium ${service.text} bg-white px-3 py-1.5 rounded-md shadow-sm hover:shadow transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto`}
                        >
                          Explore Now
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`ml-1 h-3 w-3 ${service.text}`}
                          >
                            <path d="M5 12h14"></path>
                            <path d="m12 5 7 7-7 7"></path>
                          </svg>
                        </button>
                      )}
                    </div>

                    {(hoveredCard === index ||
                      (index === 0 && hoveredCard === null)) && (
                      <div className="hidden sm:flex ml-3 items-center justify-start">
                        <img
                          src={
                            hoveredCard === index
                              ? service.hoverVector
                              : service.defaultVector
                          }
                          alt={service.alt}
                          className="w-32 h-32 object-contain opacity-90 transition-opacity"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="h-60 w-full sm:w-1/6">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 text-gray-800 rounded-xl h-full overflow-hidden relative transition-all duration-300 hover:shadow-md">
              <div className="p-5 h-full flex flex-col justify-between">
                <div>
                  <p className="text-xs font-medium opacity-80">
                    Complete Directory
                  </p>
                  <h3 className="text-lg font-bold mt-1">All Services</h3>
                  <p className="text-xs opacity-90 mt-1">
                    Browse our complete service directory
                  </p>
                </div>
                <button className="flex items-center mt-3 text-xs font-medium text-gray-800 bg-white px-3 py-1.5 rounded-md shadow-sm hover:shadow transition-all hover:scale-[1.02] active:scale-95 w-full sm:w-auto">
                  View All
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1 h-3 w-3 text-gray-800"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
