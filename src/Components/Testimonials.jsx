import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, CircuitBoardIcon as Circuit, Cpu } from "lucide-react"

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    content:
      "This product has completely transformed our workflow. The intuitive interface and powerful features have increased our team's productivity by 40%.",
    avatar: "https://th.bing.com/th/id/OIP.YHCtUpoNz1wqYbf0d9tIUQHaLO?rs=1&pid=ImgDetMain",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    content:
      "After trying multiple solutions, this is the only one that met all our requirements. The customer support team is also incredibly responsive and helpful.",
    avatar: "https://th.bing.com/th/id/OIP.YHCtUpoNz1wqYbf0d9tIUQHaLO?rs=1&pid=ImgDetMain",
    rating: 4,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    content:
      "I was skeptical at first, but after using it for just one week, I was convinced. It's now an essential part of our tech stack that we can't imagine working without.",
    avatar: "https://th.bing.com/th/id/OIP.YHCtUpoNz1wqYbf0d9tIUQHaLO?rs=1&pid=ImgDetMain",
    rating: 5,
  },
  {
    id: 4,
    name: "David Thompson",
    content:
      "The ROI we've seen since implementing this solution has been remarkable. It's rare to find a product that delivers on all its promises, but this one certainly does.",
    avatar: "https://th.bing.com/th/id/OIP.YHCtUpoNz1wqYbf0d9tIUQHaLO?rs=1&pid=ImgDetMain",
    rating: 4,
  },
  {
    id: 5,
    name: "Alex Rivera",
    content:
      "The API documentation is exceptional, and the integration was seamless. We were able to deploy in record time with minimal issues.",
    avatar: "https://th.bing.com/th/id/OIP.YHCtUpoNz1wqYbf0d9tIUQHaLO?rs=1&pid=ImgDetMain",
    rating: 5,
  },
  {
    id: 6,
    name: "Jennifer Wu",
    content: "As a designer, I appreciate the attention to detail in this product. It's not just functional but also beautifully crafted with the user experience in mind.",
    avatar: "https://th.bing.com/th/id/OIP.YHCtUpoNz1wqYbf0d9tIUQHaLO?rs=1&pid=ImgDetMain",
    rating: 4,
  },
]

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const cardsToShow = isMobile ? 1 : 2
  const maxIndex = testimonials.length - cardsToShow

  const nextTestimonial = () => {
    if (activeIndex < maxIndex) {
      setDirection("right")
      setActiveIndex(prev => prev + 1)
    } else {
      setActiveIndex(0)
    }
  }

  const prevTestimonial = () => {
    if (activeIndex > 0) {
      setDirection("left")
      setActiveIndex(prev => prev - 1)
    } else {
      setActiveIndex(maxIndex)
    }
  }

  // Auto-advance the carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [activeIndex])

  // Render star ratings
  const renderStars = (rating) => {
    return (
      <div className="flex gap-1 mt-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            className={`w-4 h-4 ${i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`}
          />
        ))}
      </div>
    )
  }

  return (
    <div className="w-full max-w-6xl mx-auto px-4 font-[Poppins] mt-10 pb-12 relative">
      {/* Tech-inspired background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10 z-0">
        <div className="absolute top-10 left-10">
          <Circuit className="w-32 h-32 text-yellow-500" />
        </div>
        <div className="absolute bottom-10 right-10">
          <Cpu className="w-24 h-24 text-yellow-500" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-96 h-96 border border-dashed border-yellow-500 rounded-full opacity-20" />
        </div>
      </div>

      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-xl border border-gray-200 overflow-hidden">
        {/* Tech accent line */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-yellow-500 to-purple-500" />

        {/* Left navigation button */}
        <button
          onClick={prevTestimonial}
          className="absolute left-0 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-100/80 text-gray-700 rounded-r-md z-10 transition-all backdrop-blur-sm border-none cursor-pointer hover:bg-yellow-500"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right navigation button */}
        <button
          onClick={nextTestimonial}
          className="absolute right-0 top-1/2 -translate-y-1/2 px-3 py-2 bg-gray-100/80 text-gray-700 rounded-l-md z-10 transition-all backdrop-blur-sm border-none cursor-pointer hover:bg-yellow-500"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Testimonial cards container */}
        <div className="relative py-10 px-8 flex flex-col">
          <h2 className="text-center text-2xl font-bold text-gray-900 mb-8 tracking-wide">
            CUSTOMER <span className="text-yellow-500">TESTIMONIALS</span>
          </h2>

          <div
            className={`grid ${isMobile ? 'grid-cols-1' : 'grid-cols-2'} gap-6 transition-all duration-500 ease-in-out ${
              direction === "left" ? 'translate-x-5' : direction === "right" ? '-translate-x-5' : 'translate-x-0'
            } ${direction ? 'opacity-90' : 'opacity-100'}`}
            onTransitionEnd={() => setDirection(null)}
          >
            {testimonials.slice(activeIndex, activeIndex + cardsToShow).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg p-6 border border-gray-200 shadow-md transition-all relative overflow-hidden"
              >
                {/* Tech corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute rotate-45 bg-yellow-500 text-white w-24 h-5 -right-1.5 top-5"></div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-yellow-500 shadow-sm">
                      <img
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-full h-full rounded-full object-cover"
                        width={64}
                        height={64}
                      />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">
                      {testimonial.name}
                    </h3>

                    <div className="mt-4 text-gray-500 text-sm">
                      "{testimonial.content}"
                    </div>

                    {/* Star ratings */}
                    <div className="mt-4">{renderStars(testimonial.rating)}</div>
                  </div>
                </div>

                {/* Tech grid pattern */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-5 transition-opacity">
                  <div className="grid grid-cols-4 gap-1">
                    {[...Array(16)].map((_, i) => (
                      <div 
                        key={i} 
                        className="w-6 h-6 border border-yellow-500"
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-1.5 rounded-full transition-all ${
                  activeIndex === index ? 'bg-yellow-500 w-8' : 'bg-gray-300 w-4'
                } border-none cursor-pointer`}
                aria-label={`Go to testimonial set ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}