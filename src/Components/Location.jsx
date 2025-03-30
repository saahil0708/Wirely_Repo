import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";
import { MdSend } from "react-icons/md";

const FAQItem = ({ question, answer, isOpen, toggle, index }) => {
  return (
    <div 
      className={`border border-gray-200 rounded-lg mb-3 transition-all duration-200 ${isOpen ? 'bg-[#fbc800]/10 border-[#fbc800]/30' : 'hover:bg-gray-50'}`}
    >
      <button
        className="flex justify-between items-center w-full py-5 px-6 text-left focus:outline-none"
        onClick={toggle}
        aria-expanded={isOpen}
        aria-controls={`faq-${index}`}
      >
        <h3 className="text-lg font-semibold text-gray-800 pr-4">{question}</h3>
        <div className={`transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <FaChevronDown className="text-[#fbc800] text-lg" />
        </div>
      </button>
      {isOpen && (
        <div 
          id={`faq-${index}`}
          className="px-6 pb-5 text-gray-600 animate-fadeIn"
        >
          <div className="prose max-w-none">
            <p className="text-gray-700 whitespace-pre-line">{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
};

const ContactUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuggestions, setShowSuggestions] = useState(false);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const commonProblems = [
    {
      title: "Service not scheduled",
      subject: "Need to schedule electrical service",
      message: "Hello,\n\nI would like to schedule an electrical service for [describe service needed]. Please contact me to arrange a convenient time.\n\nThank you."
    },
    {
      title: "Emergency repair needed",
      subject: "Urgent electrical repair required",
      message: "Hello,\n\nI'm experiencing an electrical emergency at [location]. The issue is [describe problem]. Please contact me as soon as possible.\n\nThank you."
    },
    {
      title: "Installation inquiry",
      subject: "Question about electrical installation",
      message: "Hello,\n\nI'm interested in having [describe installation] installed. Could you provide more information about your services and pricing?\n\nThank you."
    },
    {
      title: "Maintenance request",
      subject: "Request for electrical maintenance",
      message: "Hello,\n\nI would like to schedule regular electrical maintenance for my [home/business]. Please provide details about your maintenance plans.\n\nThank you."
    },
    {
      title: "Payment question",
      subject: "Question about payment for services",
      message: "Hello,\n\nI have a question about payment for my recent service. [Describe your question]. Please provide clarification.\n\nThank you."
    },
    {
      title: "Warranty inquiry",
      subject: "Question about service warranty",
      message: "Hello,\n\nI have a question about the warranty for work performed on [date]. Could you provide details about what's covered?\n\nThank you."
    }
  ];

  const selectSuggestion = (suggestion) => {
    setFormData(prev => ({
      ...prev,
      subject: suggestion.subject,
      message: suggestion.message
    }));
    setShowSuggestions(false);
  };

  const faqs = [
    {
      question: "What areas do you service?",
      answer: "We provide electrical services throughout the Chandigarh region. Contact us to confirm if we service your specific location."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Yes, all of our electricians are fully licensed and insured for your protection and peace of mind."
    },
    {
      question: "What are your emergency service hours?",
      answer: "We offer 24/7 emergency electrical services. Call us anytime at +1 987 654 321 for immediate assistance."
    },
    {
      question: "How quickly can you respond to service calls?",
      answer: "For emergency calls, we typically respond within 2 hours. Standard service calls are scheduled within 24-48 hours."
    },
    {
      question: "Do you offer free estimates?",
      answer: "Yes, we provide free estimates for all electrical work. Contact us to schedule an assessment."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, all major credit cards, bank transfers, and online payments for your convenience."
    },
    {
      question: "Do you provide warranties on your work?",
      answer: "Yes, all our work comes with a 1-year warranty covering both parts and labor."
    }
  ];

  return (
    <div className="min-h-screen to-gray-50 font-[Poppins]">
      {/* Electrical Services Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://img.freepik.com/premium-photo/contact-us-hand-man-holding-mobile-smartphone-with-mail-phone-email-chat-icon-cutomer-support-concept-blue-wide-banner_256259-3866.jpg?w=1380"
            alt="Electrical services background"
            className="w-full h-25 object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-[#fbc800]/20 mix-blend-multiply"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto py-32 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powering Your <span className="text-[#fbc800]">Electrical</span> Needs
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto mb-8">
            Expert electrical services you can trust. Contact us for all your residential and commercial needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="#contact-form" 
              className="px-6 py-3 bg-[#fbc800] hover:bg-[#fbc800]/90 text-black font-medium rounded-lg shadow-sm transition-colors duration-200"
            >
              Get a Free Quote
            </a>
            <a 
              href="tel:+1234567890" 
              className="px-6 py-3 bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-medium rounded-lg transition-colors duration-200"
            >
              <span className="flex items-center justify-center">
                <FaPhoneAlt className="mr-2" /> Emergency Call
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Contact Information and Form */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden lg:col-span-1">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
              {/* Compact Google Map */}
              <div className="mb-8 rounded-lg overflow-hidden shadow-sm border-2 border-[#fbc800]/30">
                <iframe
                  title="Google Map Location"
                  className="w-full h-48"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509435!2d144.95373531531656!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779a93198d7669!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1632449911109!5m2!1sen!2sin"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#fbc800]/10 p-3 rounded-lg mr-4">
                    <FaMapMarkerAlt className="text-[#fbc800] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Location</h3>
                    <p className="mt-1 text-gray-600">123 Main St, Chandigarh, India</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#fbc800]/10 p-3 rounded-lg mr-4">
                    <FaPhoneAlt className="text-[#fbc800] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                    <p className="mt-1 text-gray-600">+1 234 567 890</p>
                    <p className="mt-1 text-gray-600">Emergency: +1 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#fbc800]/10 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-[#fbc800] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Email</h3>
                    <p className="mt-1 text-gray-600">info@electricalservices.com</p>
                    <p className="mt-1 text-gray-600">support@electricalservices.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#fbc800]/10 p-3 rounded-lg mr-4">
                    <FaClock className="text-[#fbc800] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Hours</h3>
                    <p className="mt-1 text-gray-600">Monday - Friday: 7am - 7pm</p>
                    <p className="mt-1 text-gray-600">24/7 Emergency Service</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/electricalservices"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#fbc800]/10 p-3 rounded-full text-gray-700 hover:bg-[#fbc800]/20 hover:text-[#fbc800] transition-colors duration-200"
                      aria-label="Instagram"
                    >
                      <FiInstagram className="text-xl" />
                    </a>
                    <a
                      href="https://www.twitter.com/electricalservices"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#fbc800]/10 p-3 rounded-full text-gray-700 hover:bg-[#fbc800]/20 hover:text-[#fbc800] transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      <FiTwitter className="text-xl" />
                    </a>
                    <a
                      href="https://www.facebook.com/electricalservices"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#fbc800]/10 p-3 rounded-full text-gray-700 hover:bg-[#fbc800]/20 hover:text-[#fbc800] transition-colors duration-200"
                      aria-label="Facebook"
                    >
                      <FiFacebook className="text-xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com/company/electricalservices"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#fbc800]/10 p-3 rounded-full text-gray-700 hover:bg-[#fbc800]/20 hover:text-[#fbc800] transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <FiLinkedin className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden lg:col-span-2">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              <form className="space-y-6" onSubmit={handleSubmit} id="contact-form">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#fbc800] focus:border-[#fbc800] transition duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#fbc800] focus:border-[#fbc800] transition duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#fbc800] focus:border-[#fbc800] transition duration-200"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#fbc800] focus:border-[#fbc800] transition duration-200"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                
                {/* Common Problems Suggestions */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowSuggestions(!showSuggestions)}
                    className="text-[#fbc800] hover:text-[#fbc800]/80 text-sm font-medium flex items-center"
                  >
                    Common electrical issues
                    {showSuggestions ? (
                      <FaChevronUp className="ml-1 text-xs" />
                    ) : (
                      <FaChevronDown className="ml-1 text-xs" />
                    )}
                  </button>
                  
                  {showSuggestions && (
                    <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                      <div className="py-1">
                        {commonProblems.map((problem, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() => selectSuggestion(problem)}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-[#fbc800]/10 hover:text-gray-900"
                          >
                            {problem.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
                
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center py-3 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-[#fbc800] hover:bg-[#fbc800]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fbc800] transition-colors duration-200"
                  >
                    <MdSend className="mr-2" />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Enhanced FAQ Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Find quick answers to common questions about our electrical services.</p>
              </div>

              <div className="max-w-3xl mx-auto">
                {faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={activeIndex === index}
                    toggle={() => toggleFAQ(index)}
                    index={index}
                  />
                ))}
              </div>

              <div className="mt-12 text-center">
                <h3 className="text-xl font-medium text-gray-800 mb-3">Still have questions?</h3>
                <p className="text-gray-600 mb-5">Can't find what you're looking for? Our team is happy to help.</p>
                <a 
                  href="#contact-form" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-[#fbc800] hover:bg-[#fbc800]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fbc800] transition-colors"
                >
                  Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;