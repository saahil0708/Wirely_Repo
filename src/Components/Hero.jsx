import React from "react";
import { Zap, Shield, Star, Clock, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-white min-h-screen flex font-[Poppins] flex-col justify-center px-6 sm:px-8 py-16 mt-16">
      {" "}
      {/* Added mt-16 for navbar spacing */}
      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Left Column - Content */}
        <div className="space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#FBC800]/10 rounded-full border border-[#FBC800]/20 w-fit">
            <Zap className="w-6 h-6 text-[#FBC800]" />
            <span className="text-base font-medium text-gray-900">
              INSTANT SERVICE
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-tight mt-8">
            Lightning-fast support <br />
            <span className="text-[#FBC800]">when you need it</span>
          </h1>

          {/* Subhead */}
          <p className="text-xl text-gray-600 leading-relaxed max-w-xl mt-6">
            Connect with certified professionals in minutes. Available 24/7 for
            all your urgent needs.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-5 mt-10">
            <button className="flex items-center gap-3 px-8 py-4 bg-[#FBC800] hover:bg-[#E6B500] text-gray-900 font-medium rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-lg">
              <Phone className="w-6 h-6" />
              Request Now
            </button>
            <button className="flex items-center gap-3 px-8 py-4 bg-white text-gray-900 font-medium rounded-lg border-2 border-gray-200 hover:bg-gray-50 transition-all duration-300 text-lg">
              Learn how it works →
            </button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mt-14">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Star className="w-7 h-7 text-[#FBC800]" />
                <span className="font-bold text-gray-900 text-xl">4.98</span>
              </div>
              <p className="text-base text-gray-600">Rating</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Clock className="w-7 h-7 text-[#FBC800]" />
                <span className="font-bold text-gray-900 text-xl">24/7</span>
              </div>
              <p className="text-base text-gray-600">Available</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="w-7 h-7 text-[#FBC800]" />
                <span className="font-bold text-gray-900 text-xl">100%</span>
              </div>
              <p className="text-base text-gray-600">Secure</p>
            </div>
          </div>
        </div>

        {/* Right Column - Flash Vector */}
        <div className="flex justify-center max-md:hidden items-center h-full">
          <div className="relative w-full max-w-lg">
            <svg viewBox="0 0 300 300" className="w-full h-auto">
              {/* Radiating circles - enlarged */}
              <circle
                cx="150"
                cy="150"
                r="60"
                fill="none"
                stroke="#111827"
                strokeWidth="3"
                strokeDasharray="5 3"
                className="opacity-30"
              />
              <circle
                cx="150"
                cy="150"
                r="90"
                fill="none"
                stroke="#111827"
                strokeWidth="2"
                strokeDasharray="5 3"
                className="opacity-20"
              />
              {/* Flash shape - enlarged */}
              <path
                d="M75 50 L175 150 L125 175 L200 250 L50 150 L100 125 L25 25 Z"
                fill="#FBC800"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Stats Bar */}
    </section>
  );
};

export default Hero;