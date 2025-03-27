import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const timelineEvents = [
  { time: "9 AM", title: "Orientation", description: "Kickstart the day with an introduction to the company’s vision, mission, and culture." },
  { time: "10 AM", title: "HR Panel", description: "Meet the human resources team and key personnel who will guide you through your journey." },
  { time: "11 AM", title: "Industry Panel", description: "Gain insights into industry trends and expectations from experienced professionals." },
  { time: "12 PM", title: "Lunch", description: "Take a break and enjoy a welcome lunch to connect with colleagues in a relaxed setting." },
];

const ProgressIndicator = ({ progress }) => {
  const progressWidth = useTransform(progress, [0, 1], ["0%", "100%"]);
  return (
    <div className="fixed top-0 left-0 right-0 h-1 z-50 bg-gray-200">
      <motion.div className="h-full bg-[#fbc800]" style={{ width: progressWidth }} />
    </div>
  );
};

function Timeline() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });

  return (
    <div className="relative overflow-hidden font-[Poppins]">
      {/* Progress Indicator */}
      <ProgressIndicator progress={scrollYProgress} />

      <div className="min-h-screen flex justify-center items-center text-gray-800" ref={containerRef}>
        <div className="w-full max-w-4xl px-6 relative">
          <div className="text-center pt-20 pb-10">
            <motion.h1 className="text-5xl font-bold mb-6 text-[#fbc800]"
              initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}>
              Event Timeline
            </motion.h1>
            <p className="text-xl text-gray-600">
              Follow your journey through our carefully crafted schedule of events.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-300"></div>

            {timelineEvents.map((event, index) => (
              <motion.div key={index} className="relative mb-12 flex items-center justify-center"
                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>

                <motion.div className={`bg-white shadow-lg p-6 rounded-lg border w-[80%] max-w-lg ${
                    index % 2 === 0 ? "ml-auto text-right" : "mr-auto text-left"
                  }`}
                  whileHover={{ boxShadow: "0 10px 30px rgba(0, 95, 115, 0.2)", borderColor: "#fbc800" }}
                  initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: index * 0.1 }}>

                  <div className="text-sm font-medium mb-2 text-[#fbc800]">{event.time}</div>
                  <h3 className="text-xl font-bold mb-2 text-[#fbc800]">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Timeline;

