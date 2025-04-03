import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  { year: "2017", title: "Enter your text", text: "This slide is an editable slide with all your needs.", color: "bg-gradient-to-r from-purple-500 to-pink-500" },
  { year: "2018", title: "Enter your text", text: "This slide is an editable slide with all your needs.", color: "bg-gradient-to-r from-purple-500 to-blue-500" },
  { year: "2019", title: "Enter your text", text: "This slide is an editable slide with all your needs.", color: "bg-gradient-to-r from-green-500 to-blue-500" },
  { year: "2020", title: "Enter your text", text: "This slide is an editable slide with all your needs.", color: "bg-gradient-to-r from-yellow-500 to-red-500" }
];

const HorizontalTimeline = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50 width-80">
      <h2 className="text-4xl font-extrabold mb-12 text-purple-700">📍 Stunning Timeline</h2>
      <div className="relative flex items-center overflow-x-auto space-x-20 p-6">
        {/* Gradient Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="relative flex flex-col items-center text-center min-w-[280px]"
          >
            {/* Top Card for even indices */}
            {index % 2 === 0 ? (
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="mb-10 p-6 bg-white shadow-xl rounded-lg border border-gray-200 transform transition-all duration-300"
              >
                <div className={absolute top-0 left-0 px-4 py-2 text-white font-semibold rounded-bl-lg ${item.color}}>{item.year}</div>
                <div className="text-purple-600 font-bold text-lg">{item.title}</div>
                <div className="text-gray-600 mt-2 text-sm">{item.text}</div>
              </motion.div>
            ) : null}

            {/* Glowing Dots */}
            <motion.div
              className="w-10 h-10 rounded-full border-4 border-white bg-purple-600 shadow-lg shadow-purple-400 z-10"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            ></motion.div>

            {/* Bottom Card for odd indices */}
            {index % 2 !== 0 ? (
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="mt-10 p-6 bg-white shadow-xl rounded-lg border border-gray-200 transform transition-all duration-300"
              >
                <div className={absolute bottom-0 right-0 px-4 py-2 text-white font-semibold rounded-tr-lg ${item.color}}>{item.year}</div>
                <div className="text-purple-600 font-bold text-lg">{item.title}</div>
                <div className="text-gray-600 mt-2 text-sm">{item.text}</div>
              </motion.div>
            ) : null}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTimeline;


// export default function PricingTable() {
//   return (
//     <div className="flex flex-col md:flex-row justify-center items-center gap-6 p-8 bg-gray-100 min-h-screen">
//       {[
//         { name: "BASIC", price: "$5.99", color: "blue" },
//         { name: "STANDART", price: "$7.99", color: "yellow" },
//         { name: "PREMIUM", price: "$9.99", color: "green" },
//       ].map((plan, index) => (
//         <div
//           key={index}
//           className="relative w-72 p-6 bg-white shadow-lg rounded-3xl overflow-hidden"
//         >
//           <div
//             className={absolute top-0 left-0 w-20 h-20 bg-${plan.color}-500 rounded-br-3xl}
//           ></div>
//           <h2 className={text-${plan.color}-600 font-bold text-xl mt-6 ml-4}>{plan.name}</h2>
//           <p className="text-3xl font-bold mt-2 text-center">{plan.price}</p>
//           <ul className="mt-4 space-y-2 px-4">
//             {[true, false, true, true, false, false].map((included, i) => (
//               <li key={i} className="flex items-center gap-2">
//                 {included ? (
//                   <span className="text-green-500">✔</span>
//                 ) : (
//                   <span className="text-red-500">✖</span>
//                 )}
//                 <span className="text-gray-700">Lorem ipsum dolor sit amet</span>
//               </li>
//             ))}
//           </ul>
//           <button
//             className={mt-6 w-full py-2 rounded-full text-white bg-${plan.color}-600 hover:bg-${plan.color}-700 transition}
//           >
//             ORDER NOW
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// }
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
// import { FaWifi, FaShoppingBag, FaMobileAlt, FaGamepad, FaMicrophone } from "react-icons/fa";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const teamMembers = [
//   { id: 1, name: "Wi-Fi", icon: <FaWifi />, bio: "Fast internet up to 1Gbps." },
//   { id: 2, name: "Home Appliances", icon: <FaShoppingBag />, bio: "Latest energy-efficient appliances." },
//   { id: 3, name: "Mobile & PC", icon: <FaMobileAlt />, bio: "Top-rated devices at the best prices." },
//   { id: 4, name: "Gaming Consoles", icon: <FaGamepad />, bio: "Next-gen gaming with immersive experience." },
//   { id: 5, name: "Audio & Microphone", icon: <FaMicrophone />, bio: "High-quality sound for professionals." },
// ];

// export default function Team() {
//   return (
//     <div className="w-full h-auto bg-white py-10">
//       <div className="text-center">
//         <h1 className="text-5xl font-bold text-black flex justify-center items-center">
//           Our <span className="text-yellow-500 ml-3 font-['MV Boli'] relative">Team
//             <span className="block h-1 w-full bg-yellow-500 absolute bottom-[-10px]"></span>
//           </span>
//         </h1>

//         <Swiper
//           spaceBetween={30}
//           slidesPerView={3}
//           navigation
//           pagination={{ clickable: true }}
//           modules={[Navigation, Pagination]}
//           className="mt-10"
//         >
//           {teamMembers.map((member) => (
//             <SwiperSlide key={member.id} className="flex justify-center">
//               <div className="w-60 h-60 flex flex-col items-center relative rounded-full shadow-lg transition-all duration-300 hover:rounded-xl group bg-white hover:shadow-yellow-500">
//                 <div className="w-32 h-32 flex items-center justify-center text-5xl text-yellow-500 bg-gray-100 rounded-full shadow-md transition-all duration-300 group-hover:rounded-xl group-hover:-translate-y-16">
//                   {member.icon}
//                 </div>
                
//                 <div className="absolute bottom-5 opacity-0 group-hover:opacity-100 transition-all duration-300 text-center">
//                   <h2 className="text-yellow-500 text-lg font-semibold">{member.name}</h2>
//                   <p className="text-black text-sm w-3/4 mx-auto">{member.bio}</p>
//                   <div className="flex justify-center mt-3 space-x-4 text-yellow-500 text-3xl">
//                     <FaFacebookF className="hover:text-black cursor-pointer" />
//                     <FaTwitter className="hover:text-black cursor-pointer" />
//                     <FaInstagram className="hover:text-black cursor-pointer" />
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>
//   );
// }
