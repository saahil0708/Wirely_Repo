// // import React, { useEffect, useRef } from "react";
// // import { motion, useScroll, useTransform } from "framer-motion";

// // // Define timeline events
// // const timelineEvents = [
// //   { 
// //     time: "9 AM", 
// //     title: "Orientation", 
// //     description: "Kickstart the day with an introduction to the company’s vision, mission, and culture. This session includes a welcome address from HR, an overview of company policies, and completion of essential paperwork."
// //   },
// //   { 
// //     time: "10 AM", 
// //     title: "HR Panel", 
// //     description: "Meet the human resources team and key personnel who will guide you through your journey in the organization. Get familiar with your workspace, facilities, and available resources."
// //   },
// //   { 
// //     time: "11 AM", 
// //     title: "Industry Panel", 
// //     description: "Gain insights into industry trends and expectations from experienced professionals. Learn about the company’s role in the sector and how your contributions align with its goals."
// //   },
// //   { 
// //     time: "12 PM", 
// //     title: "Lunch", 
// //     description: "Take a break and enjoy a specially arranged welcome lunch. This is a great opportunity to connect with your colleagues in a relaxed setting and build professional relationships."
// //   },
// // ];

// // const ProgressIndicator = ({ progress }) => {
// //   const progressWidth = useTransform(progress, [0, 1], ["0%", "100%"]);
  
// //   return (
// //     <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gray-200">
// //       <motion.div 
// //         className="h-full bg-[#005F73]"
// //         style={{ width: progressWidth }}
// //       />
// //     </div>
// //   );
// // };

// // // Main Timeline component
// // function Timeline() {
// //   const containerRef = useRef(null);
// //   const { scrollYProgress } = useScroll({ 
// //     target: containerRef,
// //     offset: ["start start", "end end"] 
  // });

// //   return (
// //     <>
// //       <ProgressIndicator progress={scrollYProgress} />
      
// //       <div className="min-h-screen flex justify-center items-center bg-white text-gray-800" ref={containerRef}>
// //         <div className="w-full max-w-4xl px-6">
// //           {/* Header section */}
// //           <div className="text-center pt-20 pb-10">
// //             <motion.h1 
// //               initial={{ opacity: 0, y: -50 }}
// //               animate={{ opacity: 1, y: 0 }}
// //               transition={{ duration: 1, delay: 0.2 }}
// //               className="text-5xl font-bold mb-6 text-[#005F73]"
// //             >
// //               Event Timeline
// //             </motion.h1>
// //             <p className="text-xl text-gray-600">
// //               Follow your journey through our carefully crafted schedule of events.
// //             </p>
// //           </div>

// //           {/* Timeline events */}
// //           <div className="relative">
// //             <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300"></div>

// //             {timelineEvents.map((event, index) => (
// //               <motion.div
// //                 key={index}
// //                 className="relative mb-12 flex items-center justify-center"
// //                 initial={{ opacity: 0 }}
// //                 whileInView={{ opacity: 1 }}
// //                 viewport={{ once: true, amount: 0.2 }}
// //                 transition={{ duration: 0.5 }}
// //               >
// //                 {/* Event card */}
// //                 <motion.div
// //                   className={`bg-white shadow-lg p-6 rounded-lg border w-[80%] max-w-lg ${
// //                     index % 2 === 0 ? "ml-auto text-right" : "mr-auto text-left"
// //                   }`}
// //                   whileHover={{
// //                     boxShadow: "0 10px 30px rgba(0, 95, 115, 0.1)",
// //                     borderColor: "#005F73",
// //                   }}
// //                   initial={{ y: 30, opacity: 0 }}
// //                   whileInView={{ y: 0, opacity: 1 }}
// //                   viewport={{ once: true, amount: 0.2 }}
// //                   transition={{ duration: 0.5, delay: index * 0.1 }}
// //                 >
// //                   <div className="text-sm font-medium mb-2 text-[#005F73]">
// //                     {event.time}
// //                   </div>
// //                   <h3 className="text-xl font-bold mb-2 text-[#005F73]">{event.title}</h3>
// //                   <p className="text-gray-600">{event.description}</p>
// //                 </motion.div>
// //               </motion.div>
// //             ))}
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }

// export default Timeline;
import { useState } from "react";
import { motion } from "framer-motion";

const ProgressRoadmap = () => {
  const [step, setStep] = useState(0);
  const totalSteps = 5;

  const stepsData = [
    { title: "Step 1", description: "Starting point of the journey." },
    { title: "Step 2", description: "Gaining momentum and moving forward." },
    { title: "Step 3", description: "Halfway through, keeping up the pace." },
    { title: "Step 4", description: "Almost there, final efforts in motion." },
    { title: "Step 5", description: "Destination reached! Completion achieved." },
  ];

  const handleNext = () => {
    if (step < totalSteps - 1) setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 0) setStep(step - 1);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white text-black p-6 overflow-hidden">
      <h1 className="text-4xl font-extrabold text-[#fcb800] mb-10">Track Your Progress</h1>

      {/* Progress Path */}
      <div className="relative w-full max-w-4xl flex flex-col items-center">
        {stepsData.map((stepData, index) => (
          <div key={index} className="relative w-full flex flex-col items-center">
            {/* Dotted Path */}
            {index > 0 && step >= index && (
              <motion.div
                className="absolute w-1 h-16 border-l-4 border-dotted border-gray-600 top-[-40px] left-[50%] translate-x-[-50%]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              ></motion.div>
            )}

            {/* Step Circle */}
            {step >= index && (
              <motion.div
                className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-[#fcb800] bg-[#fcb800] text-white relative z-10 shadow-xl"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.5 }}
              >
                {index + 1}
              </motion.div>
            )}

            {/* Step Description Box */}
            {step >= index && (
              <motion.div
                className={`w-80 p-6 bg-white text-black rounded-lg shadow-xl mt-4 relative z-20 border-l-4 border-[#fcb800] ${
                  index % 2 === 0 ? "self-start ml-20" : "self-end mr-20"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-[#fcb800]">{stepData.title}</h2>
                <p className="text-gray-700 font-medium">{stepData.description}</p>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="mt-8 flex gap-4">
        <button
          className="px-6 py-3 bg-gray-700 hover:bg-gray-900 text-white font-bold rounded-lg shadow-xl transition-transform transform hover:scale-105 disabled:opacity-50"
          onClick={handlePrevious}
          disabled={step <= 0}
        >
          Previous
        </button>
        <button
          className="px-6 py-3 bg-[#fcb800] hover:bg-yellow-600 text-black font-bold rounded-lg shadow-xl transition-transform transform hover:scale-105 disabled:opacity-50"
          onClick={handleNext}
          disabled={step >= totalSteps - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProgressRoadmap;
