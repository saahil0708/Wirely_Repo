import React from 'react';
import { Linkedin, Instagram, ArrowRight, Github, Mail } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-12 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Column 1: Branding */}
        <div className="space-y-5">
          <div className="flex items-center">
            <img 
              src="https://ghc53p2bgg.ufs.sh/f/47CofKs94FnTI3LXexAi9tm1GlkdxoZwpsugDFHvWrN3KfbU" 
              alt="Wirely Logo" 
              className="h-24 object-contain" /* Increased from h-20 to h-24 */
            />
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">
            Connect with certified professionals instantly. Comprehensive support tailored to your unique needs.
          </p>
          <div className="flex space-x-4 pt-3">
            <a href="#" className="text-gray-500 hover:text-[#fbc800] transition-colors duration-300">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#fbc800] transition-colors duration-300">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#fbc800] transition-colors duration-300">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-500 hover:text-[#fbc800] transition-colors duration-300">
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        {/* Column 2: Quick Links */}
        <div className="space-y-4 mt-4 md:mt-0">
          <h3 className="text-base font-semibold text-gray-800 border-b border-[#fbc800] pb-2 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2.5 mt-3">
            {['Home', 'Features', 'Solutions', 'Pricing'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-600 hover:text-[#fbc800] text-sm transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Column 3: Company */}
        <div className="space-y-4 mt-4 md:mt-0">
          <h3 className="text-base font-semibold text-gray-800 border-b border-[#fbc800] pb-2 inline-block">
            Company
          </h3>
          <ul className="space-y-2.5 mt-3">
            {['About Us', 'Our Team', 'Careers', 'Contact'].map((item) => (
              <li key={item}>
                <a href="#" className="text-gray-600 hover:text-[#fbc800] text-sm transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Column 4: Newsletter */}
        <div className="space-y-4 mt-4 md:mt-0">
          <h3 className="text-base font-semibold text-gray-800 border-b border-[#fbc800] pb-2 inline-block">
            Newsletter
          </h3>
          <p className="text-gray-600 text-sm mt-3">
            Subscribe to get updates and special offers
          </p>
          <form className="space-y-3 mt-3">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-[#fbc800] focus:border-[#fbc800] text-gray-700 placeholder-gray-400 text-sm transition"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#fbc800] hover:bg-[#e6b400] text-[#372828] font-medium py-2 px-4 rounded-md transition-colors duration-300 text-sm flex items-center justify-center space-x-2"
            >
              <span>Subscribe</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 pt-8 mt-8 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} Wirely. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-[#fbc800] text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[#fbc800] text-xs transition-colors">Terms</a>
            <a href="#" className="text-gray-500 hover:text-[#fbc800] text-xs transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;