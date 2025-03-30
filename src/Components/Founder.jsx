import React from "react";
import { motion } from "framer-motion";

const founders = [
  {
    name: "John Doe",
    role: "Co-Founder & CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80",
    bio: "Serial entrepreneur with 15+ years in tech. Built three successful startups before Wirely.",
    fact: "🏃‍♂️ Ran a marathon on every continent",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Jane Smith",
    role: "Co-Founder & CTO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
    bio: "AI pioneer and systems architect. Former lead engineer at Fortune 500 tech companies.",
    fact: "🗣️ Speaks 4 languages fluently",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
];

const FoundersSection = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white to-gray-50">
      {/* Animated gradient background elements */}
      <motion.div 
        className="absolute top-0 left-0 w-1/3 h-full opacity-20"
        animate={{
          background: "linear-gradient(45deg, #FBC800 0%, rgba(251,200,0,0) 70%)"
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      
      <motion.div 
        className="absolute bottom-0 right-0 w-1/4 h-1/2 opacity-15"
        animate={{
          background: "linear-gradient(135deg, #FBC800 0%, rgba(251,200,0,0) 70%)"
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-[#FBC800] font-medium mb-3 tracking-widest text-sm">
            THE VISIONARIES
          </span>
          <h2 className="text-5xl font-bold text-[#FBC800] mb-4">
            Meet Our Founders
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FBC800] to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The brilliant minds redefining what's possible
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {founders.map((founder, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Glass Morphic Card */}
              <div className="relative h-full overflow-hidden rounded-2xl">
                {/* Glass background */}
                <div className="absolute inset-0 bg-white/20  border border-white/20 rounded-2xl"></div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/20"></div>
                
                {/* Inner card content */}
                <div className={`relative h-full flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} z-10`}>
                  {/* Image container with glass border */}
                  <div className={`relative ${index % 2 === 0 ? 'lg:w-2/5' : 'lg:w-2/5'} h-96 lg:h-auto overflow-hidden`}>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/50 z-10"></div>
                    <div className="absolute inset-0 border-r border-white/20 "></div>
                    <img
                      src={founder.image}
                      alt={founder.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Floating role badge */}
                    <div className="absolute bottom-4 left-4 bg-black/80  px-3 py-1 rounded-full">
                      <p className="text-[#FBC800] text-xs font-medium tracking-wider">{founder.role}</p>
                    </div>
                  </div>
                  
                  {/* Content area */}
                  <div className={`${index % 2 === 0 ? 'lg:w-3/5' : 'lg:w-3/5'} p-8 lg:p-10 flex flex-col justify-between`}>
                    <div>
                      <h3 className="text-3xl font-bold text-black mb-2">{founder.name}</h3>
                      <div className="w-12 h-0.5 bg-[#FBC800] mb-4"></div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">{founder.bio}</p>
                      
                      {/* Glass fact bubble */}
                      <div className="bg-white/20 p-4 rounded-xl border border-white/30 mb-6">
                        <p className="text-sm text-black font-medium">✨ {founder.fact}</p>
                      </div>
                    </div>
                    
                    {/* Social links with hover effect */}
                    <div className="flex space-x-4">
                      <motion.a 
                        href={founder.social.linkedin}
                        whileHover={{ y: -2 }}
                        className="bg-black/80 hover:bg-[#FBC800] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                        </svg>
                      </motion.a>
                      <motion.a 
                        href={founder.social.twitter}
                        whileHover={{ y: -2 }}
                        className="bg-black/80 hover:bg-[#FBC800] w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                      >
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </motion.a>
                    </div>
                  </div>
                </div>
                
                {/* Floating accent elements */}
                <div className={`absolute ${index % 2 === 0 ? '-right-6 -bottom-6' : '-left-6 -bottom-6'} w-32 h-32 rounded-full bg-[#FBC800]/10 backdrop-blur-sm -z-10 transition-all duration-500 group-hover:opacity-30`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoundersSection;