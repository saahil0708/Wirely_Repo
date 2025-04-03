import { useRef } from "react";
import { FaWindows, FaApple, FaGoogle } from "react-icons/fa";

const ServiceCard = ({ title, rating, reviews, price, description, image }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4 flex flex-col md:flex-row" style={{ minHeight: '280px' }}>
      <div className="w-full md:w-3/4 pr-0 md:pr-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-sm text-gray-500">⭐ {rating} ({reviews} reviews)</p>
        <p className="font-semibold mt-1">Starts at ₹{price}</p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-3 md:line-clamp-4">{description}</p>
        <a href="#" className="text-blue-500 text-sm block mt-2">View details</a>
      </div>

      <div className="w-full md:w-1/4 flex flex-col items-center justify-between h-full mt-4 md:mt-0">
        <div className="relative w-full h-40 md:h-3/4">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover rounded-md border border-gray-200"
          />
          <button className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-white px-3 py-1 rounded-md text-sm">
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default function LaptopRepairPage() {
  const scrollRef = useRef(null);
  const galleryImages = [
    "https://i.pinimg.com/736x/dd/47/8a/dd478a0eabcb5979522626ab3223fa8c.jpg",
    "https://i.pinimg.com/736x/dd/47/8a/dd478a0eabcb5979522626ab3223fa8c.jpg",
    "https://i.pinimg.com/736x/dd/47/8a/dd478a0eabcb5979522626ab3223fa8c.jpg",
    "https://i.pinimg.com/736x/dd/47/8a/dd478a0eabcb5979522626ab3223fa8c.jpg",
    "https://i.pinimg.com/736x/dd/47/8a/dd478a0eabcb5979522626ab3223fa8c.jpg",
    "https://i.pinimg.com/736x/dd/47/8a/dd478a0eabcb5979522626ab3223fa8c.jpg"
  ];

  return (
    <div className="min-h-screen w-full bg-gray-100 p-4 flex flex-col items-center">
      {/* Main Content Container - Centered with max-width */}
      <div className="w-full max-w-7xl flex flex-col lg:flex-row">
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden mb-4 w-full">
          <button className="w-full bg-yellow-500 text-white py-2 rounded-md font-medium">
            Show Services Menu
          </button>
        </div>

        {/* Left Sidebar */}
        <div className="hidden lg:block w-full lg:w-72 bg-white p-4 shadow-lg rounded-xl h-auto lg:h-full overflow-y-auto lg:mr-4 mb-4 lg:mb-0">
          <div className="mb-6">
            <h3 className="font-semibold mb-3">Popular Services</h3>
            <div className="grid grid-cols-3 gap-2">
              {galleryImages.map((img, index) => (
                <div key={index} className="rounded-md overflow-hidden border border-gray-200">
                  <img 
                    src={img} 
                    alt={`Service ${index+1}`}
                    className="w-full h-16 object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h1 className="text-xl font-bold">Laptop</h1>
            <p className="text-sm text-yellow-500 mb-4">4.81 (321K bookings)</p>
            
            <div className="p-3 bg-yellow-500 text-white rounded-md mb-6">
              <p className="font-medium">UC COVER</p>
              <p className="text-xs">Upto 180-day warranty on all repairs</p>
            </div>

            <div className="mb-2">
              <h2 className="font-semibold text-gray-700">Select a service</h2>
              <div className="border-t border-gray-200 my-3"></div>
              
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Quick home booking</p>
                  <div className="ml-2 mt-2 space-y-2">
                    <div className="flex items-center">
                      <FaWindows className="text-blue-500 mr-2" />
                      <p className="text-sm">Windows</p>
                    </div>
                    <div className="flex items-center">
                      <FaApple className="text-gray-700 mr-2" />
                      <p className="text-sm">Apple</p>
                    </div>
                    <div className="flex items-center">
                      <FaGoogle className="text-red-500 mr-2" />
                      <p className="text-sm">Chrome OS</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-t border-gray-200 my-3"></div>
                
                <div>
                  <p className="font-medium">Desktop</p>
                  <div className="ml-2 mt-2">
                    <p className="text-sm">Upgrade/service</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Section */}
        <div
          ref={scrollRef}
          className="w-full lg:w-[600px] bg-white p-4 shadow-lg rounded-xl h-auto overflow-y-auto mb-4 lg:mb-0"
        >
          <h2 className="font-bold text-lg mb-4">Quick home booking</h2>
          
          <ServiceCard 
            title="Quick visit" 
            rating={4.83} 
            reviews="20K" 
            price={159}
            description="Visit charge of Rs 159 waived in final bill; spare part/repair cost extra"
            image="https://i.pinimg.com/736x/dd/47/8a/dd478a0eabcb5979522626ab3223fa8c.jpg"
          />
          
          <h3 className="font-medium">Windows</h3>
          
          <ServiceCard 
            title="Windows laptop repair" 
            rating={4.43} 
            reviews="10K" 
            price={159}
            description="Visit charge of Rs 159 waived in final bill; spare part/repair cost extra"
            image="https://i.pinimg.com/736x/dd/47/8a/dd478a0eabcb5979522626ab3223fa8c.jpg"
          />
          
          <ServiceCard 
            title="MacBook screen replacement" 
            rating={4.65} 
            reviews="8.5K" 
            price={1299}
            description="Original Apple parts with 180-day warranty"
            image="https://i.pinimg.com/736x/dd/47/8a/dd478a0eabcb5979522626ab3223fa8c.jpg"
          />
          
          <ServiceCard 
            title="Laptop battery replacement" 
            rating={4.72} 
            reviews="15K" 
            price={799}
            description="Genuine battery with 1-year warranty"
            image="https://i.pinimg.com/736x/dd/47/8a/dd478a0eabcb5979522626ab3223fa8c.jpg"
          />
          
          <ServiceCard 
            title="Liquid damage repair" 
            rating={4.35} 
            reviews="5.2K" 
            price={499}
            description="Diagnosis and repair for liquid damaged devices"
            image="https://i.pinimg.com/736x/dd/47/8a/dd478a0eabcb5979522626ab3223fa8c.jpg"
          />
        </div>

        {/* Right Sidebar */}
        <div className="hidden lg:block w-full lg:w-72 bg-white p-4 shadow-lg rounded-xl h-auto lg:h-full lg:ml-4">
          <h2 className="font-semibold mb-4">UCPromise</h2>
          <div className="space-y-2 text-sm">
            <p className="flex items-center">✅ Verified Professionals</p>
            <p className="flex items-center">✅ Hassle Free Booking</p>
            <p className="flex items-center">✅ Transparent Pricing</p>
          </div>
          
          <div className="mt-6">
            <button className="w-full bg-yellow-500 py-2 text-white rounded-md text-sm font-medium">
              Add
            </button>
            <p className="text-xs text-gray-500 mt-1 text-center">11 options</p>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white shadow-lg p-3 flex justify-around items-center border-t border-gray-200">
        <button className="text-center">
          <div className="mx-auto">🏠</div>
          <span className="text-xs">Home</span>
        </button>
        <button className="text-center">
          <div className="mx-auto">🔍</div>
          <span className="text-xs">Search</span>
        </button>
        <button className="text-center">
          <div className="mx-auto">🛒</div>
          <span className="text-xs">Cart</span>
        </button>
        <button className="text-center">
          <div className="mx-auto">👤</div>
          <span className="text-xs">Account</span>
        </button>
      </div>
    </div>
  );
}