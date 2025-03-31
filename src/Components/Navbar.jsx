import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { 
  Search, 
  User, 
  Menu, 
  X, 
  ChevronDown,
  Zap,               // Electrical
  AirVent,           // AC
  Video,             // CCTV
  BatteryFull,       // Inverter
  Home,              // Home Appliance
  Laptop,            // Computer
  Droplets,          // Plumbing
  Hammer,            // Carpenter
  Smartphone,        // Mobile
  Sun,               // Solar
  Wifi,              // Smart Home
  CircuitBoard,      // Wiring
  Power,             // Generator (using Power icon)
  ClipboardCheck,    // Inspection
  AlertTriangle      // Emergency
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Service with icon mapping
const serviceData = [
  { 
    name: "Electrical Repair & Installation", 
    icon: <Zap size={16} className="text-primary-500 mr-2" /> 
  },
  { 
    name: "AC / Refrigerator / Washing Machine Repair", 
    icon: <AirVent size={16} className="text-primary-500 mr-2" /> 
  },
  { 
    name: "CCTV Installation & Repair", 
    icon: <Video size={16} className="text-primary-500 mr-2" /> 
  },
  { 
    name: "Inverter & Battery Installation / Repair", 
    icon: <BatteryFull size={16} className="text-primary-500 mr-2" /> 
  },
  { 
    name: "Home Appliance Repair", 
    icon: <Home size={16} className="text-primary-500 mr-2" /> 
  },
  { 
    name: "Computer & Laptop Repair", 
    icon: <Laptop size={16} className="text-primary-500 mr-2" /> 
  },
  { 
    name: "Plumbing Services", 
    icon: <Droplets size={16} className="text-primary-500 mr-2" /> 
  },
  { 
    name: "Carpenter Services", 
    icon: <Hammer size={16} className="text-primary-500 mr-2" /> 
  },
  { 
    name: "Mobile Phone Repair", 
    icon: <Smartphone size={16} className="text-primary-500 mr-2" /> 
  },
  { 
    name: "Solar Panel Installation & Maintenance", 
    icon: <Sun size={16} className="text-primary-500 mr-2" /> 
  },
  { 
    name: "Smart Home Setup", 
    icon: <Wifi size={16} className="text-primary-500 mr-2" /> 
  },
  { 
    name: "Wiring & Circuit Fixing", 
    icon: <CircuitBoard size={16} className="text-primary-500 mr-2" /> 
  },
  { 
    name: "Generator Repair & Installation", 
    icon: <Power size={16} className="text-primary-500 mr-2" />  // Using Power icon
  },
  { 
    name: "Electrical Inspection & Consultation", 
    icon: <ClipboardCheck size={16} className="text-primary-500 mr-2" /> 
  },
  { 
    name: "Emergency Repair Services (24x7)", 
    icon: <AlertTriangle size={16} className="text-primary-500 mr-2" /> 
  }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const searchRef = useRef(null);

  // Services organized in a 3x5 grid with icons
  const services = [
    serviceData.slice(0, 3),
    serviceData.slice(3, 6),
    serviceData.slice(6, 9),
    serviceData.slice(9, 12),
    serviceData.slice(12, 15)
  ];

  // All services flattened for search
  const allServices = serviceData.map(service => service.name);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close search results when clicking outside
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.length > 0) {
      const results = allServices.filter(service =>
        service.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchResults.length > 0) {
      window.location.href = `/service/${toServicePath(searchResults[0])}`;
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: "/service", label: "Services", dropdown: true },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Convert service name to URL-friendly format
  const toServicePath = (service) => {
    return service.toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/-$/, "");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 font-[Poppins] bg-white text-black transition-all duration-300 ${
        isScrolled ? "shadow-md py-0" : "shadow-sm py-2"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            className="flex items-center"
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link to="/" className="flex items-center">
              <img
                src="https://ghc53p2bgg.ufs.sh/f/47CofKs94FnTI3LXexAi9tm1GlkdxoZwpsugDFHvWrN3KfbU"
                alt="Wirely Logo"
                className="h-[6rem] w-auto md:h-[8rem] transition-all duration-300"
              />
            </Link>
          </motion.div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center w-1/3 mx-6" ref={searchRef}>
            <div className="relative w-full">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="What service are you looking for today?"
                  className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  onFocus={() => searchQuery.length > 0 && setShowSearchResults(true)}
                />
                <button 
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 px-4 bg-black text-white rounded-r-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Search size={20} />
                </button>
              </form>
              
              {/* Search results dropdown */}
              {showSearchResults && searchResults.length > 0 && (
                <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-96 overflow-y-auto">
                  {searchResults.map((serviceName, index) => {
                    const service = serviceData.find(s => s.name === serviceName);
                    return (
                      <Link
                        key={index}
                        to={`/service/${toServicePath(serviceName)}`}
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                        onClick={() => {
                          setShowSearchResults(false);
                          setSearchQuery(serviceName);
                        }}
                      >
                        {service?.icon || <Zap size={16} className="text-primary-500 mr-2" />}
                        {serviceName}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                {link.dropdown ? (
                  <>
                    <div
                      className="flex items-center font-medium text-gray-700 hover:text-black transition-colors cursor-pointer"
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onClick={() => {
                        setIsServicesOpen(!isServicesOpen);
                        window.location.href = "/service";
                      }}
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ChevronDown
                        size={16}
                        className={`ml-1 transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 mt-2 w-[600px] bg-white rounded-lg shadow-lg z-50 border border-gray-200"
                          onMouseEnter={() => setIsServicesOpen(true)}
                          onMouseLeave={() => setIsServicesOpen(false)}
                        >
                          <div className="p-4">
                            <table className="w-full">
                              <tbody>
                                {services.map((row, rowIndex) => (
                                  <tr key={rowIndex}>
                                    {row.map((service, colIndex) => (
                                      <td key={colIndex} className="p-2">
                                        <Link
                                          to={`/service/${toServicePath(service.name)}`}
                                          className="flex items-center text-sm text-gray-700 hover:text-black hover:bg-gray-50 p-2 rounded transition-colors"
                                          onClick={() => setIsServicesOpen(false)}
                                        >
                                          {service.icon}
                                          {service.name}
                                        </Link>
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <Link
                    to={link.href}
                    className="relative group font-medium text-gray-700 hover:text-black transition-colors"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/register"
              className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors active:scale-95"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 border border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors active:scale-95"
            >
              Sign Up
            </Link>
            <Link to='/profile'>
              <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                <User size={24} className="text-gray-700" />
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={24} className="text-gray-700" />
              ) : (
                <Menu size={24} className="text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="md:hidden bg-white absolute left-0 right-0 top-full shadow-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-4">
                {/* Mobile Search */}
                <div className="relative w-full" ref={searchRef}>
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    onFocus={() => searchQuery.length > 0 && setShowSearchResults(true)}
                  />
                  <button 
                    className="absolute right-0 top-0 bottom-0 px-4 bg-black text-white rounded-r-lg flex items-center justify-center"
                    onClick={handleSearchSubmit}
                  >
                    <Search size={20} />
                  </button>
                  
                  {/* Mobile search results */}
                  {showSearchResults && searchResults.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-64 overflow-y-auto">
                      {searchResults.map((serviceName, index) => {
                        const service = serviceData.find(s => s.name === serviceName);
                        return (
                          <Link
                            key={index}
                            to={`/service/${toServicePath(serviceName)}`}
                            className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-black transition-colors"
                            onClick={() => {
                              setShowSearchResults(false);
                              setSearchQuery(serviceName);
                              setIsMenuOpen(false);
                            }}
                          >
                            {service?.icon || <Zap size={16} className="text-primary-500 mr-2" />}
                            {serviceName}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-3">
                  {navLinks.map((link) => (
                    <div key={link.href}>
                      {link.dropdown ? (
                        <>
                          <div className="flex items-center justify-between">
                            <Link
                              to="/service"
                              className="text-gray-700 hover:text-black py-2 font-medium transition-colors"
                              onClick={() => {
                                setIsMenuOpen(false);
                                setIsServicesOpen(false);
                              }}
                            >
                              {link.label}
                            </Link>
                            <button
                              onClick={() => setIsServicesOpen(!isServicesOpen)}
                              className="p-2"
                            >
                              <ChevronDown
                                size={16}
                                className={`transition-transform ${
                                  isServicesOpen ? "rotate-180" : ""
                                }`}
                              />
                            </button>
                          </div>
                          {isServicesOpen && (
                            <div className="pl-2">
                              <table className="w-full">
                                <tbody>
                                  {services.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                      {row.map((service, colIndex) => (
                                        <td key={colIndex} className="p-1">
                                          <Link
                                            to={`/service/${toServicePath(service.name)}`}
                                            className="flex items-center text-xs text-gray-600 hover:text-black hover:bg-gray-50 p-2 rounded transition-colors"
                                            onClick={() => {
                                              setIsServicesOpen(false);
                                              setIsMenuOpen(false);
                                            }}
                                          >
                                            {service.icon}
                                            {service.name}
                                          </Link>
                                        </td>
                                      ))}
                                    </tr>
                                  ))}
                                </tbody>
                              </table>
                            </div>
                          )}
                        </>
                      ) : (
                        <Link
                          to={link.href}
                          className="block text-gray-700 hover:text-black py-2 font-medium transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </Link>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Profile Section */}
                <div className="flex items-center space-x-4 pt-2 border-t border-gray-200">
                  <Link 
                    to="/profile" 
                    className="flex items-center space-x-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="p-2 rounded-full bg-gray-100">
                      <User size={20} className="text-gray-700" />
                    </div>
                    <span className="font-medium">My Profile</span>
                  </Link>
                </div>

                {/* Mobile Action Buttons */}
                <div className="space-y-3 pt-2">
                  <Link
                    to="/login"
                    className="block w-full text-center px-4 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors active:scale-95"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </Link>
                  <Link
                    to="/signup"
                    className="block w-full text-center px-4 py-3 border border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors active:scale-95"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;