import React from "react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      x: -50 
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const features = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
      ),
      title: "Precise Reporting",
      description: "Delivering comprehensive, meticulously crafted technical documentation with unparalleled accuracy.",
      color: "#372828"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="9" y1="21" x2="9" y2="9"></line>
        </svg>
      ),
      title: "Efficient Workflow",
      description: "Optimizing processes with strategic technical solutions and streamlined methodologies.",
      color: "#fbc800"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
          <circle cx="12" cy="12" r="10"></circle>
          <polygon points="12 6 12 12 16 14"></polygon>
        </svg>
      ),
      title: "Timely Execution",
      description: "Committed to delivering high-quality solutions within precise timelines and expectations.",
      color: "#ffa100"
    }
  ];

  return (
    <section 
      className="py-16 bg-white"
      style={{ backgroundColor: "#ffffff" }}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          {/* Circular Main Title */}
          <motion.div 
            className="w-64 h-64 flex justify-center items-center rounded-full text-white text-center font-bold text-3xl shadow-2xl relative overflow-hidden"
            style={{ 
              background: "linear-gradient(135deg, #372828, #ffa100)",
              boxShadow: "0 25px 50px -12px rgba(55, 40, 40, 0.25)"
            }}
            variants={itemVariants}
          >
            <div className="absolute opacity-10">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" className="w-full h-full">
                <path fill="#ffffff" d="M103.5 0C46.3 0 0 46.3 0 103.5S46.3 207 103.5 207 207 160.7 207 103.5 160.7 0 103.5 0zm0 180c-42.4 0-76.5-34.1-76.5-76.5S61.1 27 103.5 27s76.5 34.1 76.5 76.5-34.1 76.5-76.5 76.5zm5.5-76.5V52h-15v51.5H84l20 34h17l-20-34z"/>
              </svg>
            </div>
            WHY<br />CHOOSE<br />US
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid grid-cols-1 gap-6 w-full max-w-2xl"
            variants={itemVariants}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={index}
                className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.03,
                  transition: { duration: 0.2 }
                }}
              >
                <div 
                  className="w-16 h-16 flex justify-center items-center rounded-full text-white"
                  style={{ 
                    backgroundColor: feature.color,
                    boxShadow: `0 10px 15px -3px ${feature.color}40`
                  }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;