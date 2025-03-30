import React from "react";

const CallToAction = () => {
  return (
    <section className="relative w-screen overflow-hidden bg-gray-900 px-4 py-12 flex items-center justify-center border-t border-b border-gray-800">
      {/* White animated grid overlay */}
      <div
        className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_90%)]"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: `40px 40px`,
          animation: `gridScroll 80s linear infinite`,
        }}
      ></div>

      {/* Lightning vector background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 800"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#FBC800]"
        >
          <path
            d="M400 0L200 400h200l-100 200h200l-250 400L600 600H400l100-200H300z"
            fill="currentColor"
            opacity="0.4"
          />
          <path
            d="M800 0L600 400h200l-100 200h200l-250 400L1000 600H800l100-200H700z"
            fill="currentColor"
            opacity="0.3"
            transform="translate(100, 50)"
          />
          <path
            d="M1200 0L1000 400h200l-100 200h200l-250 400L1400 600H1200l100-200H1100z"
            fill="currentColor"
            opacity="0.2"
            transform="translate(-200, 100)"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">
          <span className="text-[#FBC800]">Tech Emergency?</span> Instant Fix
        </h2>
        <p className="text-base md:text-lg text-gray-300 mb-6 max-w-md mx-auto">
          Our certified technicians solve{" "}
          <span className="font-semibold text-white">any device issue</span>{" "}
          with{" "}
          <span className="text-[#FBC800] font-medium">one-click service</span>
        </p>

        <div className="relative inline-block group">
          <div className="absolute -inset-1 rounded-lg bg-[#FBC800] opacity-20 blur group-hover:opacity-30 transition-all duration-300"></div>
          <a
            href="/contact"
            className="relative px-6 py-3 bg-[#FBC800] text-gray-900 font-bold text-base rounded-md hover:bg-[#FBC800]/90 transition-all duration-200 inline-flex items-center shadow-md"
          >
            Connect Now
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200"
            >
              <path
                fillRule="evenodd"
                d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes gridScroll {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 1000px 1000px;
          }
        }
      `}</style>
    </section>
  );
};

export default CallToAction;