import React, { useState, useEffect } from "react";
import { 
  Search, User, Menu, X, ChevronDown,
  Zap, AirVent, Refrigerator, Home, Laptop,
  Plug, Hammer, Smartphone, Sun, Wrench,
  Battery, Settings, AlertTriangle, HardDrive
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredServices, setFilteredServices] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredServices([]);
      setShowSearchResults(false);
      return;
    }

    const allServices = services.flat();
    const results = allServices.filter(service =>
      service.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredServices(results);
    setShowSearchResults(results.length > 0);
  }, [searchQuery]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (filteredServices.length > 0) {
      setIsServicesOpen(true);
    }
  };

  const handleServiceClick = () => {
    setSearchQuery("");
    setShowSearchResults(false);
    setIsServicesOpen(false);
    setIsMenuOpen(false);
  };

  // Services with corresponding icons
  const services = [
    [
      { name: "Electrical Repair & Installation", icon: <Zap className="w-4 h-4 mr-2" />, slug: "electrical-repair-installation" },
      { name: "AC / Refrigerator / Washing Machine Repair", icon: <Refrigerator className="w-4 h-4 mr-2" />, slug: "ac-refrigerator-washing-machine-repair" },
      { name: "CCTV Installation & Repair", icon: <Home className="w-4 h-4 mr-2" />, slug: "cctv-installation-repair" }
    ],
    [
      { name: "Inverter & Battery Installation / Repair", icon: <Battery className="w-4 h-4 mr-2" />, slug: "inverter-battery-installation-repair" },
      { name: "Home Appliance Repair", icon: <Settings className="w-4 h-4 mr-2" />, slug: "home-appliance-repair" },
      { name: "Computer & Laptop Repair", icon: <Laptop className="w-4 h-4 mr-2" />, slug: "computer-laptop-repair" }
    ],
    [
      { name: "Plumbing Services", icon: <Wrench className="w-4 h-4 mr-2" />, slug: "plumbing-services" },
      { name: "Carpenter Services", icon: <Hammer className="w-4 h-4 mr-2" />, slug: "carpenter-services" },
      { name: "Mobile Phone Repair", icon: <Smartphone className="w-4 h-4 mr-2" />, slug: "mobile-phone-repair" }
    ],
    [
      { name: "Solar Panel Installation & Maintenance", icon: <Sun className="w-4 h-4 mr-2" />, slug: "solar-panel-installation-maintenance" },
      { name: "Smart Home Setup", icon: <Home className="w-4 h-4 mr-2" />, slug: "smart-home-setup" },
      { name: "Wiring & Circuit Fixing", icon: <Plug className="w-4 h-4 mr-2" />, slug: "wiring-circuit-fixing" }
    ],
    [
      { name: "Generator Repair & Installation", icon: <HardDrive className="w-4 h-4 mr-2" />, slug: "generator-repair-installation" },
      { name: "Electrical Inspection & Consultation", icon: <Zap className="w-4 h-4 mr-2" />, slug: "electrical-inspection-consultation" },
      { name: "Emergency Repair Services (24x7)", icon: <AlertTriangle className="w-4 h-4 mr-2" />, slug: "emergency-repair-services" }
    ]
  ];

  const navLinks = [
    { href: "/services", label: "Services", dropdown: true },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

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
            <a href="/" className="flex items-center">
              <img
                src="https://ghc53p2bgg.ufs.sh/f/47CofKs94FnTI3LXexAi9tm1GlkdxoZwpsugDFHvWrN3KfbU"
                alt="Wirely Logo"
                className="h-[6rem] w-auto md:h-[8rem] transition-all duration-300"
              />
            </a>
          </motion.div>

          {/* Desktop Search */}
          <div className="hidden md:flex items-center w-1/3 mx-6">
            <div className="relative w-full">
              <form onSubmit={handleSearchSubmit}>
                <input
                  type="text"
                  placeholder="What service are you looking for today?"
                  className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
                <button 
                  type="submit"
                  className="absolute right-0 top-0 bottom-0 px-4 bg-black text-white rounded-r-lg flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Search className="w-5 h-5" />
                </button>
              </form>
              
              {/* Search Results Dropdown - No Icons */}
              {showSearchResults && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-50 border border-gray-200 max-h-96 overflow-y-auto">
                  <div className="p-2">
                    {filteredServices.map((service, index) => (
                      <a
                        key={index}
                        href={`/services/${service.slug}`}
                        className="block p-2 text-sm text-gray-700 hover:text-black hover:bg-gray-50 rounded transition-colors"
                        onClick={handleServiceClick}
                      >
                        {service.name}
                      </a>
                    ))}
                  </div>
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
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <span className="relative">
                        {link.label}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 ml-1 transition-transform ${
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
                                        <a
                                          href={`/services/${service.slug}`}
                                          className="flex items-center text-sm text-gray-700 hover:text-black hover:bg-gray-50 p-2 rounded transition-colors"
                                          onClick={() => setIsServicesOpen(false)}
                                        >
                                          {service.icon}
                                          {service.name}
                                        </a>
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
                  <a
                    href={link.href}
                    className="relative group font-medium text-gray-700 hover:text-black transition-colors"
                  >
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Desktop User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="/login"
              className="px-4 py-2 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors active:scale-95"
            >
              Login
            </a>
            <a
              href="/signup"
              className="px-4 py-2 border border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors active:scale-95"
            >
              Sign Up
            </a>
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <User className="w-5 h-5 text-gray-700" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
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
                <div className="relative w-full">
                  <form onSubmit={handleSearchSubmit}>
                    <input
                      type="text"
                      placeholder="Search services..."
                      className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                      value={searchQuery}
                      onChange={handleSearchChange}
                    />
                    <button 
                      type="submit"
                      className="absolute right-0 top-0 bottom-0 px-4 bg-black text-white rounded-r-lg flex items-center justify-center"
                    >
                      <Search className="w-5 h-5" />
                    </button>
                  </form>
                  
                  {/* Mobile Search Results - No Icons */}
                  {showSearchResults && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-50 border border-gray-200 max-h-96 overflow-y-auto">
                      <div className="p-2">
                        {filteredServices.map((service, index) => (
                          <a
                            key={index}
                            href={`/services/${service.slug}`}
                            className="block p-2 text-sm text-gray-600 hover:text-black hover:bg-gray-50 rounded transition-colors"
                            onClick={handleServiceClick}
                          >
                            {service.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Mobile Navigation Links */}
                <div className="space-y-3">
                  {navLinks.map((link) => (
                    <div key={link.href}>
                      {link.dropdown ? (
                        <>
                          <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="flex items-center justify-between w-full text-gray-700 hover:text-black py-2 font-medium transition-colors"
                          >
                            <span>{link.label}</span>
                            <ChevronDown
                              className={`w-4 h-4 transition-transform ${
                                isServicesOpen ? "rotate-180" : ""
                              }`}
                            />
                          </button>
                          {isServicesOpen && (
                            <div className="pl-2">
                              <table className="w-full">
                                <tbody>
                                  {services.map((row, rowIndex) => (
                                    <tr key={rowIndex}>
                                      {row.map((service, colIndex) => (
                                        <td key={colIndex} className="p-1">
                                          <a
                                            href={`/services/${service.slug}`}
                                            className="flex items-center text-sm text-gray-600 hover:text-black hover:bg-gray-50 p-2 rounded transition-colors"
                                            onClick={() => {
                                              setIsServicesOpen(false);
                                              setIsMenuOpen(false);
                                            }}
                                          >
                                            {service.icon}
                                            {service.name}
                                          </a>
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
                        <a
                          href={link.href}
                          className="block text-gray-700 hover:text-black py-2 font-medium transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {link.label}
                        </a>
                      )}
                    </div>
                  ))}
                </div>

                {/* Mobile Action Buttons */}
                <div className="space-y-3 pt-2">
                  <a
                    href="/login"
                    className="block w-full text-center px-4 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors active:scale-95"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Login
                  </a>
                  <a
                    href="/signup"
                    className="block w-full text-center px-4 py-3 border border-black text-black rounded-lg font-medium hover:bg-black hover:text-white transition-colors active:scale-95"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Sign Up
                  </a>
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