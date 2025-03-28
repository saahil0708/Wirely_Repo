import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaChevronDown, FaChevronUp, FaSearch } from "react-icons/fa";
import { FiInstagram, FiTwitter, FiFacebook, FiLinkedin } from "react-icons/fi";
import { MdOutlineSupportAgent, MdSend } from "react-icons/md";

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
  const [searchTerm, setSearchTerm] = useState('');
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
      title: "Order not received",
      subject: "My order hasn't arrived",
      message: "Hello,\n\nI placed an order on [date] with order number [order number], but I haven't received it yet. The tracking information shows [status]. Can you please help me with this?\n\nThank you."
    },
    {
      title: "Wrong item received",
      subject: "Received wrong item in my order",
      message: "Hello,\n\nI received my order today (order number [order number]), but it contains the wrong items. I ordered [item name] but received [wrong item name] instead. Please advise on how to proceed with this issue.\n\nThank you."
    },
    {
      title: "Product damaged",
      subject: "Damaged product received",
      message: "Hello,\n\nI received my order today (order number [order number]), but the product arrived damaged. The [product name] has [describe damage]. Please let me know how to get a replacement or refund.\n\nThank you."
    },
    {
      title: "Return request",
      subject: "Request for return authorization",
      message: "Hello,\n\nI would like to return my recent purchase (order number [order number]). The item is [product name] and I would like to return it because [reason]. Please provide instructions on how to proceed with the return.\n\nThank you."
    },
    {
      title: "Payment issue",
      subject: "Problem with payment processing",
      message: "Hello,\n\nI'm having trouble completing my payment for order [order number]. I tried to pay with [payment method] but received the following error: [describe error]. Please help me resolve this issue.\n\nThank you."
    },
    {
      title: "Account access problem",
      subject: "Can't access my account",
      message: "Hello,\n\nI'm unable to access my account. When I try to log in with my email [your email], I receive [describe error message]. I've tried resetting my password but [describe what happened]. Please assist me in regaining access to my account.\n\nThank you."
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
      question: "How can I track my order?",
      answer: "You can track your order by logging into your account and visiting the 'My Orders' section. You'll receive tracking information via email once your order ships. Tracking numbers are typically available within 24 hours of purchase."
    },
    {
      question: "What are your shipping options?",
      answer: "We offer three shipping options:\n\n1. Standard shipping (3-5 business days)\n2. Expedited shipping (2 business days)\n3. Overnight shipping (for select locations)\n\nShipping costs vary based on the option selected and your location."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase. Items must be:\n\n• Unused\n• In original packaging\n• With all tags attached\n\nPlease contact our support team to initiate a return and receive a prepaid shipping label."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary depending on the destination. Additional customs fees may apply upon delivery in some countries."
    },
    {
      question: "How can I contact customer support?",
      answer: "Our customer support team is available:\n\n• 24/7 via phone: +1 987 654 321\n• Email: support@yourcompany.com\n• Live chat on our website\n• Through the contact form on this page\n\nAverage response time is under 2 hours during business hours."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, Google Pay, and bank transfers for certain orders over $500."
    },
    {
      question: "Can I change or cancel my order?",
      answer: "You can modify or cancel your order within 1 hour of placement by contacting our support team. After this window, orders enter processing and cannot be changed."
    }
  ];

  const filteredFAQs = faqs.filter(faq => 
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fbc800]/10 to-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#fbc800] to-[#fbc800]/90 text-white py-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
        <p className="text-xl max-w-2xl mx-auto">We're here to help and answer any questions you might have.</p>
      </div>

      {/* Contact Information and Form */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 -mt-16">
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
                    <p className="mt-1 text-gray-600">Support: +1 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#fbc800]/10 p-3 rounded-lg mr-4">
                    <FaEnvelope className="text-[#fbc800] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Email</h3>
                    <p className="mt-1 text-gray-600">info@yourcompany.com</p>
                    <p className="mt-1 text-gray-600">support@yourcompany.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 bg-[#fbc800]/10 p-3 rounded-lg mr-4">
                    <FaClock className="text-[#fbc800] text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-800">Hours</h3>
                    <p className="mt-1 text-gray-600">Monday - Friday: 9am - 6pm</p>
                    <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a
                      href="https://www.instagram.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#fbc800]/10 p-3 rounded-full text-gray-700 hover:bg-[#fbc800]/20 hover:text-[#fbc800] transition-colors duration-200"
                      aria-label="Instagram"
                    >
                      <FiInstagram className="text-xl" />
                    </a>
                    <a
                      href="https://www.twitter.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#fbc800]/10 p-3 rounded-full text-gray-700 hover:bg-[#fbc800]/20 hover:text-[#fbc800] transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      <FiTwitter className="text-xl" />
                    </a>
                    <a
                      href="https://www.facebook.com/yourprofile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#fbc800]/10 p-3 rounded-full text-gray-700 hover:bg-[#fbc800]/20 hover:text-[#fbc800] transition-colors duration-200"
                      aria-label="Facebook"
                    >
                      <FiFacebook className="text-xl" />
                    </a>
                    <a
                      href="https://www.linkedin.com/yourprofile"
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
                    Common issues
                    {showSuggestions ? (
                      <FaChevronUp className="ml-1 text-xs" />
                    ) : (
                      <FaChevronDown className="ml-1 text-xs" />
                    )}
                  </button>
                  
                  {showSuggestions && (
                    <div className="absolute z-10 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden">
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
          <div className="bg-white rounded-xl overflow-hidden">
            <div className="p-8 sm:p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-3">Frequently Asked Questions</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Find quick answers to common questions about our products and services.</p>
              </div>

              {/* FAQ Search */}
              <div className="mb-8 relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search FAQs..."
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#fbc800] focus:border-[#fbc800] transition duration-200"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  >
                    <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                )}
              </div>

              {/* FAQ Categories */}
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {['Shipping', 'Returns', 'Payments', 'Orders', 'Support'].map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 bg-[#fbc800]/10 text-[#fbc800] rounded-full text-sm font-medium hover:bg-[#fbc800]/20 transition-colors"
                    onClick={() => setSearchTerm(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* FAQ Results */}
              <div className="max-w-3xl mx-auto">
                {filteredFAQs.length > 0 ? (
                  filteredFAQs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={activeIndex === index}
                      toggle={() => toggleFAQ(index)}
                      index={index}
                    />
                  ))
                ) : (
                  <div className="text-center py-10">
                    <p className="text-gray-500">No results found for "{searchTerm}"</p>
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="mt-4 text-[#fbc800] hover:underline"
                    >
                      Clear search
                    </button>
                  </div>
                )}
              </div>

              {/* Still have questions? */}
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