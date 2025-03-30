// import React, { useState, useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { Target } from 'lucide-react';

// const MissionSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const missions = [
//     {
//       title: "Satisfied Customer Ratings",
//       description: "Building Trust Through Excellence",
//       details: "Consistently delivering high-quality solutions that exceed customer expectations.",
//       image: "https://upraise.io/wp-content/uploads/2021/03/Group-203-1.svg"
//     },
//     {
//       title: "Solutions at the Earliest",
//       description: "Rapid Problem Resolution",
//       details: "Providing swift and efficient solutions to minimize downtime and maximize productivity.",
//       image: "https://vectormine.b-cdn.net/wp-content/uploads/professions-1.jpg"
//     },
//     {
//       title: "Empowering Users Through Technology",
//       description: "Transformative Digital Experiences",
//       details: "Leveraging cutting-edge technology to empower users and enhance their capabilities.",
//       image: "https://i.pinimg.com/736x/bc/f9/f1/bcf9f1e36a0b25ae421a6fc801bd5529.jpg"
//     },
//     {
//       title: "Bridging People and Technicians",
//       description: "Connecting Expertise with Needs",
//       details: "Creating seamless connections between users and technical professionals.",
//       image: "https://i.pinimg.com/736x/46/a8/4a/46a84a7953abee83c0d2d57c95e3880b.jpg"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % missions.length);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section className="font-[Poppins] flex flex-col lg:flex-row items-center justify-center gap-8 px-4 md:px-8 py-12 min-h-screen w-full bg-white">
//       {/* Left Side - Clean Text Content */}
//       <div className="w-full lg:w- xl:w-2/5 flex flex-col items-center justify-center px-4 lg:px-8 text-center lg:text-left max-w-3xl mx-auto">
//         <div className="mb-8 w-full">
//           <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold mb-4">
//             <span className="text-black">Our</span> <span className="text-yellow-500">Mission</span>
//           </h2>
//           <p className="text-sm md:text-base lg:text-lg text-gray-600 mb-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//           </p>
//         </div>

//         <motion.div 
//           key={currentIndex}
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.5 }}
//           className="w-full"
//         >
//           <div className="flex items-center justify-center lg:justify-start mb-2">
//             <Target className="text-yellow-500 w-5 h-5 mr-2 flex-shrink-0" />
//             <h3 className="text-lg md:text-xl font-semibold text-gray-800">
//               {missions[currentIndex].title}
//             </h3>
//           </div>
//           <p className="text-sm md:text-base text-gray-700 mb-4">
//             {missions[currentIndex].description}
//           </p>

//           <div className="w-full flex justify-center mb-4">
//             <img 
//               src={missions[currentIndex].image} 
//               alt={missions[currentIndex].title}
//               className="w-full max-w-[280px] h-auto aspect-[260/172] object-cover rounded-lg"
//             />
//           </div>
//         </motion.div>

//         <div className="flex justify-center space-x-2 mt-4">
//           {missions.map((_, index) => (
//             <div 
//               key={index} 
//               className={`w-2 h-2 rounded-full transition-colors ${
//                 index === currentIndex 
//                   ? 'bg-yellow-500' 
//                   : 'bg-gray-300'
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Right Side - Image */}
//       <div className="relative w-1020 h-720 lg:w-1/2 xl:w-2/5 flex justify-center mt-8 lg:mt-0">
//         <motion.img 
//           src="https://upraise.io/wp-content/uploads/2021/03/Layer-2-2-1-2.svg"
//           alt="Mission Illustration"
//           className="w-full max-w-md lg:max-w-2xl xl:max-w-3xl"
//           animate={{ y: [0, -10, 0] }}
//           transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
//         />

//         <div className="absolute -top-4 left-6 w-4 h-4 md:w-6 md:h-6 bg-yellow-500 rounded-full opacity-50"></div>
//         <div className="absolute bottom-4 right-10 w-4 h-4 md:w-6 md:h-6 bg-yellow-500 rounded-full opacity-50"></div>
//         <div className="absolute top-1/4 left-14 w-5 h-5 md:w-8 md:h-8 bg-yellow-400 rounded-full opacity-60"></div>
//         <div className="absolute bottom-1/3 right-16 w-5 h-5 md:w-8 md:h-8 bg-yellow-600 rounded-full opacity-70"></div>
//       </div>
//     </section>
//   );
// };

// export default MissionSection;

"use client"
import { motion } from "framer-motion"
import { Target, Eye, Gem, Circle, Triangle, Square, Star } from "lucide-react"

const cards = [
    {
        id: 1,
        title: "Our Mission",
        icon: <Target size={40} className="text-[#fbc800]" />,
        description: "To empower individuals and businesses with innovative solutions that drive progress, efficiency, and sustainability.",
    },
    {
        id: 2,
        title: "Our Vision",
        icon: <Eye size={40} className="text-[#fbc800]" />,
        description: "To be a global leader in cutting-edge technology, fostering a future where innovation and ethical values shape a better world.",
    },
    {
        id: 3,
        title: "Our Values",
        icon: <Gem size={40} className="text-[#fbc800]" />,
        description: "Integrity, innovation, and inclusivity define our core principles, ensuring trust, excellence, and collaboration in everything we do.",
    },
]

const MissionVisionValues = () => {
    return (
        <div className="relative font-[Poppins] flex flex-col items-center overflow-hidden bg-gradient-to-b from-[#f9f9f9] to-[#f5f5f5] min-h-screen py-12 md:py-20 px-4 md:px-12">
            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    className="absolute top-[30%] right-[10%] w-16 h-16 md:w-24 md:h-24 bg-gradient-to-r from-[#fbc800] to-[#ffa100] opacity-20 rounded-full blur-md"
                    animate={{
                        scale: [1, 1.5, 1],
                        x: [0, -30, 0],
                        y: [0, 20, 0],
                    }}
                    transition={{ duration: 7, repeat: Infinity, repeatType: "reverse" }}
                />
                <motion.div
                    className="absolute top-[60%] left-[15%] w-24 h-24 md:w-32 md:h-32 bg-gradient-to-r from-[#fbc800] to-[#ffa100] opacity-20 rounded-full blur-md"
                    animate={{
                        scale: [1, 1.4, 1],
                        x: [0, 25, 0],
                        y: [0, -15, 0],
                    }}
                    transition={{ duration: 9, repeat: Infinity, repeatType: "reverse" }}
                />

                {/* Floating Shapes */}
                <div className="absolute inset-0 z-0">
                    {[...Array(15)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute"
                            style={{
                                top: `${Math.random() * 100}%`,
                                left: `${Math.random() * 100}%`,
                                opacity: 0.07,
                                color: "#ffa100",
                            }}
                            animate={{
                                y: [0, Math.random() * 30 - 15],
                                x: [0, Math.random() * 30 - 15],
                                rotate: [0, Math.random() * 360],
                            }}
                            transition={{
                                duration: 5 + Math.random() * 10,
                                repeat: Infinity,
                                repeatType: "reverse",
                                ease: "easeInOut",
                            }}
                        >
                            {i % 4 === 0 ? (
                                <Circle size={10 + Math.random() * 15} />
                            ) : i % 4 === 1 ? (
                                <Triangle size={10 + Math.random() * 15} />
                            ) : i % 4 === 2 ? (
                                <Square size={10 + Math.random() * 15} />
                            ) : (
                                <Star size={10 + Math.random() * 15} />
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Hero Content */}
            <motion.div
                className="relative z-10 w-full max-w-7xl mx-auto mb-8 md:mb-12 lg:mb-16 pt-6 md:pt-10"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <div className="text-center mb-4 px-4">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="inline-block px-4 py-1 md:px-6 md:py-2 bg-gradient-to-r from-[#ffa100]/10 to-[#fbc800]/10 rounded-full text-sm md:text-base text-[#ffa100] font-medium mb-4 md:mb-6 lg:mb-8"
                    >
                        Welcome to Our Solution
                    </motion.div>
                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#372828] mb-4 md:mb-6 tracking-tight leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        Building the <span className="text-[#ffa100]">Future</span>
                    </motion.h1>
                    <motion.p
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl md:max-w-3xl mx-auto leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        Discover how our principles guide us to create innovative solutions for tomorrow's challenges
                    </motion.p>
                </div>
            </motion.div>

            {/* Core Policies Section */}
            <div className="flex flex-col items-center text-center relative z-10 w-full px-4 mb-6 md:mb-8">
                <motion.h2
                    className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#372828] tracking-[0.5em] mb-3 md:mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <span className="text-[#ffa100]">CORE</span> POLICIES
                </motion.h2>
                <motion.div
                    className="flex flex-col gap-1 md:gap-2"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                </motion.div>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-16 p-4 md:p-8 w-full max-w-7xl relative z-10">
                {cards.map((card, index) => (
                    <motion.div
                        key={card.id}
                        className="relative bg-white p-5 md:p-6 lg:p-8 w-full flex flex-col shadow-lg md:shadow-xl rounded-xl md:rounded-2xl border border-gray-200 overflow-hidden group hover:shadow-xl lg:hover:shadow-2xl hover:border-[#ffa100]/30 transition-all duration-300"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 + index * 0.2 }}
                    >
                        {/* Card Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#ffa100]/5 to-[#fbc800]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Card Number */}
                        <div className="absolute -right-4 -top-4 md:-right-5 md:-top-5 text-[80px] md:text-[100px] lg:text-[120px] font-bold text-[#ffa100]/5 group-hover:text-[#ffa100]/10 transition-colors duration-300">
                            0{card.id}
                        </div>

                        <div className="relative">
                            {/* Icon with consistent alignment */}
                            <div className="h-16 opacity-45 -mt-4 mb-4 md:h-20 flex items-center md:-mt-5 md:mb-5 lg:mb-6 -ml-2 md:-ml-3">
                                <motion.div
                                    className="text-[#fbc800] text-3xl md:text-4xl"
                                    whileHover={{
                                        rotate: [0, -10, 10, -5, 0],
                                        transition: { duration: 0.5 },
                                    }}
                                >
                                    {card.icon}
                                </motion.div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#372828] mb-3 md:mb-4">
                                {card.title}
                                <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-[#ffa100] to-[#fbc800] mt-2 rounded-full" />
                            </h3>

                            {/* Description */}
                            <p className="text-sm md:text-base lg:text-lg text-gray-600 font-medium leading-relaxed">
                                {card.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Bottom Decoration */}
            <motion.div
                className="relative z-10 w-full max-w-5xl mx-auto mt-12 md:mt-16 flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
            >
                <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-[#ffa100] to-[#fbc800] rounded-full" />
            </motion.div>
        </div>
    )
}

export default MissionVisionValues