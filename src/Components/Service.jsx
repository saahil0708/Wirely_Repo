import { useRef } from "react";
import { FaWindows, FaApple, FaGoogle } from "react-icons/fa";

const ServiceCard = ({ title, rating, reviews, price, description, image }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4 flex" style={{ minHeight: '280px', width: '100%' }}>
      <div className="w-3/4 pr-4">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-sm text-gray-500">⭐ {rating} ({reviews} reviews)</p>
        <p className="font-semibold mt-1">Starts at ₹{price}</p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-4">{description}</p>
        <a href="#" className="text-blue-500 text-sm block mt-2">View details</a>
      </div>

      <div className="w-1/4 flex flex-col items-center justify-between h-full">
        <div className="relative h-3/4 w-full">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover rounded-md border border-gray-200"
          />
          <button className="absolute top-[90%] left-[30%] bg-yellow-500 text-white px-3 py-1 rounded-md text-sm">
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
    <div className="laptop-repair-container">
      {/* Left Sidebar */}
      <div className="left-sidebar">
        {/* Image Gallery Section */}
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Popular Services</h3>
          <div className="gallery-grid">
            {galleryImages.map((img, index) => (
              <div key={index} className="gallery-item">
                <img 
                  src={img} 
                  alt={`Service ${index+1}`}
                  className="gallery-image"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Original Left Sidebar Content with Icons */}
        <div>
          <h1 className="text-xl font-bold">Laptop</h1>
          <p className="text-sm text-yellow-500 mb-4">4.81 (321K bookings)</p>
          
          <div className="uc-cover">
            <p className="font-medium">UC COVER</p>
            <p className="text-xs">Upto 180-day warranty on all repairs</p>
          </div>

          <div className="mb-2">
            <h2 className="font-semibold text-gray-700">Select a service</h2>
            <div className="divider"></div>
            
            <div className="service-options">
              <div>
                <p className="font-medium">Quick home booking</p>
                <div className="option-items">
                  <div className="option-item">
                    <FaWindows className="text-blue-500 mr-2" />
                    <p className="text-sm">Windows</p>
                  </div>
                  <div className="option-item">
                    <FaApple className="text-gray-700 mr-2" />
                    <p className="text-sm">Apple</p>
                  </div>
                  <div className="option-item">
                    <FaGoogle className="text-red-500 mr-2" />
                    <p className="text-sm">Chrome OS</p>
                  </div>
                </div>
              </div>
              
              <div className="divider"></div>
              
              <div>
                <p className="font-medium">Desktop</p>
                <div className="option-items">
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
        className="middle-section"
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
      <div className="right-sidebar">
        <h2 className="font-semibold mb-4">UCPromise</h2>
        <div className="promise-items">
          <p className="promise-item">✅ Verified Professionals</p>
          <p className="promise-item">✅ Hassle Free Booking</p>
          <p className="promise-item">✅ Transparent Pricing</p>
        </div>
        
        <div className="add-button-container">
          <button className="add-button">
            Add
          </button>
          <p className="options-text">11 options</p>
        </div>
      </div>

      <style jsx>{`
        .laptop-repair-container {
          display: flex;
          flex-direction: column;
          height: 100vh;
          width: 100%;
          background-color: #f3f4f6;
          padding: 1rem;
          box-sizing: border-box;
        }
        
        .left-sidebar, .middle-section, .right-sidebar {
          background-color: white;
          padding: 1rem;
          border-radius: 0.75rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          margin-bottom: 1rem;
        }
        
        .uc-cover {
          padding: 0.75rem;
          background-color: #f59e0b;
          color: white;
          border-radius: 0.375rem;
          margin-bottom: 1.5rem;
        }
        
        .divider {
          border-top: 1px solid #e5e7eb;
          margin: 0.75rem 0;
        }
        
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.5rem;
        }
        
        .gallery-item {
          border-radius: 0.375rem;
          overflow: hidden;
          border: 1px solid #e5e7eb;
        }
        
        .gallery-image {
          width: 100%;
          height: 4rem;
          object-fit: cover;
        }
        
        .service-options {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        .option-items {
          margin-left: 0.5rem;
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }
        
        .option-item {
          display: flex;
          align-items: center;
        }
        
        .promise-items {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 0.875rem;
        }
        
        .promise-item {
          display: flex;
          align-items: center;
        }
        
        .add-button-container {
          margin-top: 1.5rem;
        }
        
        .add-button {
          width: 100%;
          background-color: #f59e0b;
          padding: 0.5rem;
          color: white;
          border-radius: 0.375rem;
          font-size: 0.875rem;
          font-weight: 500;
        }
        
        .options-text {
          font-size: 0.75rem;
          color: #6b7280;
          text-align: center;
          margin-top: 0.25rem;
        }
        
        @media (min-width: 1024px) {
          .laptop-repair-container {
            flex-direction: row;
            justify-content: center;
            padding: 1rem;
          }
          
          .left-sidebar {
            width: 18rem;
            margin-right: 1rem;
            margin-bottom: 0;
            height: 100%;
            overflow-y: auto;
          }
          
          .middle-section {
            width: 37.5rem;
            height: 100%;
            overflow-y: auto;
            margin-bottom: 0;
          }
          
          .right-sidebar {
            width: 18rem;
            margin-left: 1rem;
            height: 100%;
            margin-bottom: 0;
          }
        }
        
        @media (max-width: 1023px) {
          .left-sidebar, .middle-section, .right-sidebar {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}