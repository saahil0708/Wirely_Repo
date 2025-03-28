import React, { useState, useEffect } from "react";
import { Search, User, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Services organized in a 3x5 grid
  const services = [
    [
      "Electrical Repair & Installation",
      "AC / Refrigerator / Washing Machine Repair",
      "CCTV Installation & Repair"
    ],
    [
      "Inverter & Battery Installation / Repair",
      "Home Appliance Repair",
      "Computer & Laptop Repair"
    ],
    [
      "Plumbing Services",
      "Carpenter Services",
      "Mobile Phone Repair"
    ],
    [
      "Solar Panel Installation & Maintenance",
      "Smart Home Setup",
      "Wiring & Circuit Fixing"
    ],
    [
      "Generator Repair & Installation",
      "Electrical Inspection & Consultation",
      "Emergency Repair Services (24x7)"
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
              <input
                type="text"
                placeholder="What service are you looking for today?"
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
              />
              <button className="absolute right-0 top-0 bottom-0 px-4 bg-black text-white rounded-r-lg flex items-center justify-center hover:bg-gray-800 transition-colors">
                <Search size={20} />
              </button>
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
                                        <a
                                          href={`/services/${service
                                            .toLowerCase()
                                            .replace(/[^a-z0-9]+/g, "-")
                                            .replace(/-$/, "")}`}
                                          className="block text-sm text-gray-700 hover:text-black hover:bg-gray-50 p-2 rounded transition-colors"
                                          onClick={() => setIsServicesOpen(false)}
                                        >
                                          {service}
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
              <User size={24} className="text-gray-700" />
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
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search services..."
                    className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                  />
                  <button className="absolute right-0 top-0 bottom-0 px-4 bg-black text-white rounded-r-lg flex items-center justify-center">
                    <Search size={20} />
                  </button>
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
                              size={16}
                              className={`transition-transform ${
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
                                            href={`/services/${service
                                              .toLowerCase()
                                              .replace(/[^a-z0-9]+/g, "-")
                                              .replace(/-$/, "")}`}
                                            className="block text-xs text-gray-600 hover:text-black hover:bg-gray-50 p-2 rounded transition-colors"
                                            onClick={() => {
                                              setIsServicesOpen(false);
                                              setIsMenuOpen(false);
                                            }}
                                          >
                                            {service}
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