import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-white p-8 min-h-screen">
      {/* Mission Section */}
      <motion.section 
        className="mb-16 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-[#372828]">Our Mission</h1>
        <p className="mt-4 text-lg text-gray-600">
          Empowering businesses with innovative solutions that drive growth and impact.
        </p>
      </motion.section>

      {/* Team Details Section */}
      <motion.section 
        className="mb-16"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-[#372828] text-center">Meet Our Team</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {['John Doe', 'Jane Smith', 'Alex Johnson'].map((name, index) => (
            <motion.div
              key={index}
              className="p-4 shadow-lg rounded-lg bg-[#fbc800] text-center"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl font-medium text-[#372828]">{name}</h3>
              <p className="text-gray-700">Expert in Innovation</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Why Trust Us Section */}
      <motion.section 
        className="text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-semibold text-[#372828]">Why Trust Us</h2>
        <p className="mt-4 text-lg text-gray-600">
          With proven results, a passionate team, and innovative technology, we ensure success.
        </p>
      </motion.section>
    </div>
  );
};

export default About;
