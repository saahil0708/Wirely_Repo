import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FiInstagram, FiTwitter, FiFacebook } from "react-icons/fi";
import { MdOutlineSupportAgent } from "react-icons/md";

const FAQItem = ({ question, answer, isOpen, toggle }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={toggle}
      >
        <h3 className="text-lg font-medium text-gray-900">{question}</h3>
        {isOpen ? (
          <FaChevronUp className="text-gray-500" />
        ) : (
          <FaChevronDown className="text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const ContactUs = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How can I track my order?",
      answer: "You can track your order by logging into your account and visiting the 'My Orders' section. You'll receive tracking information via email once your order ships."
    },
    {
      question: "What are your shipping options?",
      answer: "We offer standard shipping (3-5 business days), expedited shipping (2 business days), and overnight shipping for select locations. Shipping costs vary based on the option selected."
    },
    {
      question: "What is your return policy?",
      answer: "We accept returns within 30 days of purchase. Items must be unused and in their original packaging. Please contact our support team to initiate a return."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates and delivery times vary depending on the destination."
    },
    {
      question: "How can I contact customer support?",
      answer: "Our customer support team is available 24/7 via phone at +1 987 654 321 or email at support@yourcompany.com. You can also use the contact form on this page."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Full-width Google Map */}
      <div className="w-full h-96 md:h-[500px]">
        <iframe
          title="Google Map Location"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509435!2d144.95373531531656!3d-37.81720997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5779a93198d7669!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1632449911109!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>

      {/* Contact Information and Form */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            We're here to help and answer any questions you might have.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Information */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Information</h2>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-16 h-16 bg-[#fbc800]/10 rounded-full flex items-center justify-center mr-6">
                    <FaMapMarkerAlt className="text-[#fbc800] text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Location</h3>
                    <p className="mt-1 text-gray-600">123 Main St, Chandigarh, India </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-[#fbc800]/10 rounded-full flex items-center justify-center mr-6">
                    <FaPhoneAlt className="text-[#fbc800] text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                    <p className="mt-1 text-gray-600">+1 234 567 890</p>
                    <p className="mt-1 text-gray-600">Support: +1 987 654 321</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-[#fbc800]/10 rounded-full flex items-center justify-center mr-6">
                    <FaEnvelope className="text-[#fbc800] text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                    <p className="mt-1 text-gray-600">info@yourcompany.com</p>
                    <p className="mt-1 text-gray-600">support@yourcompany.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-[#fbc800]/10 rounded-full flex items-center justify-center mr-6">
                    <FaClock className="text-[#fbc800] text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Hours</h3>
                    <p className="mt-1 text-gray-600">Monday - Friday: 9am - 6pm</p>
                    <p className="mt-1 text-gray-600">Saturday: 10am - 4pm</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-16 h-16 bg-[#fbc800]/10 rounded-full flex items-center justify-center mr-6">
                    <MdOutlineSupportAgent className="text-[#fbc800] text-2xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Social Media</h3>
                    <div className="flex space-x-4 mt-3">
                      <a
                        href="https://www.instagram.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#fbc800] transition-colors duration-200"
                        aria-label="Instagram"
                      >
                        <FiInstagram className="text-2xl" />
                      </a>
                      <a
                        href="https://www.twitter.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#fbc800] transition-colors duration-200"
                        aria-label="Twitter"
                      >
                        <FiTwitter className="text-2xl" />
                      </a>
                      <a
                        href="https://www.facebook.com/yourprofile"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-[#fbc800] transition-colors duration-200"
                        aria-label="Facebook"
                      >
                        <FiFacebook className="text-2xl" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#fbc800] focus:border-[#fbc800]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#fbc800] focus:border-[#fbc800]"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#fbc800] focus:border-[#fbc800]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-[#fbc800] focus:border-[#fbc800]"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#fbc800] hover:bg-[#e6b400] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fbc800] transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 sm:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={activeIndex === index}
                  toggle={() => toggleFAQ(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;