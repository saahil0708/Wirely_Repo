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
