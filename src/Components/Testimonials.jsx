import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TestimonialSection() {
  const testimonials = [
    {
      id: 1,
      quote: "This product has a bunch of amazing tools which improves our business.",
      name: "Maya Halin",
      image: "https://th.bing.com/th/id/OIP.qvOIsZgjY_k1tnkz0E8g5QHaHa?rs=1&pid=ImgDetMain",
      rating: 5,
    },
    {
      id: 2,
      quote: "Wow! Using Stateline has helped our company constantly improve.",
      name: "Leopold Nilsen",
      image: "https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg",
      rating: 4,
    },
    {
      id: 3,
      quote: "The analytics dashboard has transformed how we make decisions.",
      name: "Sarah Johnson",
      image: "https://th.bing.com/th/id/OIP.qvOIsZgjY_k1tnkz0E8g5QHaHa?rs=1&pid=ImgDetMain",
      rating: 5,
    },
    {
      id: 4,
      quote: "Customer support is exceptional. They're always there when we need them.",
      name: "Michael Chen",
      image: "https://static.vecteezy.com/system/resources/previews/014/194/215/original/avatar-icon-human-a-person-s-badge-social-media-profile-symbol-the-symbol-of-a-person-vector.jpg",
      rating: 5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  const goToTestimonial = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
    setAutoPlay(false);
    setTimeout(() => setAutoPlay(true), 10000);
  };

  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [autoPlay, testimonials.length]);

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  const transition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        {/* Mobile Layout - Column */}
        <div className="flex flex-col md:hidden space-y-6">
          {/* Text Content */}
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 leading-tight">
              What our <span className="text-[#fbc800]">Customers</span> love what we do
            </h2>
            <p className="text-base text-gray-700">
              Over 500,000 companies of all sizes use Stateline to understand their business and their market better.
            </p>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled={i < testimonials[currentIndex].rating} />
              ))}
              <span className="text-sm text-gray-600 ml-1">
                {testimonials[currentIndex].rating}.0 rating
              </span>
            </div>
            <div className="pt-2">
              <a 
                href="#" 
                className="inline-flex items-center px-5 py-2 bg-[#fbc800] text-white font-medium rounded-lg hover:bg-[#ffa100] transition-colors shadow-md hover:shadow-lg text-sm"
              >
                Read success stories
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center space-x-4">
            <button 
              onClick={prevTestimonial} 
              className="rounded-full h-10 w-10 border border-[#ffa100] flex items-center justify-center hover:bg-[#ffa100] transition-colors hover:border-[#ffa100] hover:text-gray shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button 
              onClick={nextTestimonial} 
              className="rounded-full h-10 w-10 border border-[#ffa100] flex items-center justify-center hover:bg-[#ffa100] transition-colors hover:border-[#ffa100] hover:text-gray shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Testimonial Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fbc800] to-[#ffa100]"></div>
            <div className="text-[#ffa100] text-4xl font-serif leading-none mb-2 opacity-20">
              <Quote className="w-10 h-10" />
            </div>
            
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="min-h-[140px]"
              >
                <p className="text-gray-700 text-base mb-4 leading-relaxed">
                  {testimonials[currentIndex].quote}
                </p>
                <div className="flex items-center mt-4">
                  <div className="mr-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#fbc800] to-[#ffa100] p-0.5">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="rounded-full object-cover border-2 border-white w-full h-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 text-sm">{testimonials[currentIndex].name}</p>
                    <p className="text-xs text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots Indicator - Now at the bottom */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-[#ffa100] w-4" : "bg-gray-300"}`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout - Grid */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              What our <span className="text-[#fbc800]">Customers</span> love what we do
            </h2>
            <p className="text-lg text-gray-700 max-w-md">
              Over 500,000 companies of all sizes use Stateline to understand their business and their market better.
            </p>
            <div className="flex items-center space-x-2">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled={i < testimonials[currentIndex].rating} />
              ))}
              <span className="text-sm text-gray-600 ml-1">
                {testimonials[currentIndex].rating}.0 rating
              </span>
            </div>
            <div className="pt-4">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-[#fbc800] text-white font-medium rounded-lg hover:bg-[#ffa100] transition-colors shadow-md hover:shadow-lg"
              >
                Read success stories
                <ChevronRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-xl shadow-lg p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#fbc800] to-[#ffa100]"></div>
              <div className="text-[#ffa100] text-5xl font-serif leading-none mb-4 opacity-20">
                <Quote className="w-12 h-12" />
              </div>
              
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={transition}
                  className="min-h-[160px]"
                >
                  <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                    {testimonials[currentIndex].quote}
                  </p>
                  <div className="flex items-center mt-6">
                    <div className="mr-4">
                      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#fbc800] to-[#ffa100] p-0.5">
                        <img
                          src={testimonials[currentIndex].image}
                          alt={testimonials[currentIndex].name}
                          width={52}
                          height={52}
                          className="rounded-full object-cover border-2 border-white"
                        />
                      </div>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonials[currentIndex].name}</p>
                      <p className="text-sm text-gray-600">{testimonials[currentIndex].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-between items-center mt-6">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-[#ffa100] w-6" : "bg-gray-300"}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <div className="flex space-x-3">
                <button 
                  onClick={prevTestimonial} 
                  className="rounded-full h-12 w-12 border border-[#ffa100] flex items-center justify-center hover:bg-[#ffa100] transition-colors hover:border-[#ffa100] hover:text-gray shadow-sm"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button 
                  onClick={nextTestimonial} 
                  className="rounded-full h-12 w-12 border border-[#ffa100] flex items-center justify-center hover:bg-[#ffa100] transition-colors hover:border-[#ffa100] hover:text-gray shadow-sm"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StarIcon({ filled }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-4 w-4 md:h-5 md:w-5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
      />
    </svg>
  );
}