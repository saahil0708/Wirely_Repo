import { FaWifi, FaMobile, FaGamepad, FaMicrophone, FaBolt } from "react-icons/fa";
import '../Styles/styles.css'; // Ensure you have a CSS file with clip-path styles

export default function ProductCards() {
  const products = [
    {
      title: "WiFi Router",
      description: "High-speed internet connection for seamless browsing.",
      price: "$120",
      icon: <FaWifi className="text-5xl text-gray-800" />,
      bgColor: "bg-[#fcb800]",
    },
    {
      title: "Smartphone",
      description: "Latest technology in your hands.",
      price: "$999",
      icon: <FaMobile className="text-5xl text-gray-800" />,
      bgColor: "bg-gray-500",
    },
    {
      title: "Gaming Console",
      description: "Experience the next level of gaming.",
      price: "$500",
      icon: <FaGamepad className="text-5xl text-gray-800" />,
      bgColor: "bg-black",
    },
    {
      title: "Microphone",
      description: "Professional audio recording quality.",
      price: "$150",
      icon: <FaMicrophone className="text-5xl text-gray-800" />,
      bgColor: "bg-white",
    },
  ];

  return (
    <div className="p-6 mt-20 bg-white min-h-screen font-[Poppins] flex flex-col items-center">
        <button className="flex items-center gap-2 bg-gray-200 text-black px-6 py-2 rounded-lg shadow-md mb-4 hover:bg-yellow-600 transition">
        <FaBolt className="text-xl" /> Flash Deals
      </button>
      
      {/* Title and Description */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Our Exclusive Products</h1>
        <p className="text-gray-600 mt-2">Discover the best tech products at unbeatable prices.</p>
      </div>

      <div className="flex justify-center gap-6 flex-wrap">
        {products.map((product, index) => (
          <div key={index} className="relative bg-white rounded-xl shadow-lg overflow-hidden w-72 h-96 flex flex-col items-center">
            {/* Background Triangular Section */}
            <div className="absolute top-0 left-0 w-full h-1/2">
              <div className={`absolute top-0 left-0 w-full h-full ${product.bgColor} clip-triangle`}></div>
            </div>
            
            {/* Price Circle */}
            <div className="absolute top-4 right-4 bg-yellow-200 text-gray-800 font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-md">
              {product.price}
            </div>
            
            {/* Icon Circle */}
            <div className="relative w-32 h-32 mt-16 bg-white rounded-full border-4 border-white overflow-hidden flex items-center justify-center shadow-md">
              {product.icon}
            </div>
            
            {/* Text Content */}
            <div className="p-4 text-center">
              <h3 className="font-bold text-lg text-gray-800">{product.title}</h3>
              <p className="text-gray-500 text-sm mt-2">{product.description}</p>
            </div>
            
            {/* Bottom Section */}
            <div className="w-full flex justify-between items-center p-4 absolute bottom-0">
              <div className="flex space-x-2">
                <span className="w-3 h-3 bg-gray-300 rounded-full"></span>
                <span className="w-3 h-3 bg-gray-400 rounded-full"></span>
                <span className="w-3 h-3 bg-gray-500 rounded-full"></span>
              </div>
              <button className="bg-black text-white px-4 py-2 rounded-lg text-sm">BOOK NOW</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}