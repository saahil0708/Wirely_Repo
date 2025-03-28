import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Stateline</h3>
            <p className="text-gray-400">
              Empowering businesses with data-driven insights and analytics solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-[#fbc800] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#fbc800] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#fbc800] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#fbc800] transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#fbc800] transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#fbc800] transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#fbc800] transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#fbc800] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#fbc800] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-[#fbc800] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#fbc800] transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#fbc800] transition-colors">Guides</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#fbc800] transition-colors">API Status</a></li>
              <li><a href="#" className="text-gray-400 hover:text-[#fbc800] transition-colors">Webinars</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">support@stateline.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="text-gray-400 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="text-gray-400">
                123 Business Ave, Suite 400<br />
                San Francisco, CA 94107
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Stateline. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}