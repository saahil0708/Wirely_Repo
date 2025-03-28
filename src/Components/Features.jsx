"use client"

import { motion } from "framer-motion"
import { 
  Zap, 
  Shield, 
  Clock, 
  Headphones, 
  Code, 
  Server, 
  Globe, 
  Smartphone,
  LifeBuoy,
  Settings,
  Database,
  Lock
} from "lucide-react"

export default function FeaturesSection() {
  // Color theme with your #fbc800 accent
  const colors = {
    primary: "#fbc800",  // Your golden yellow
    secondary: "#2563eb", // Blue
    accent: "#7c3aed",   // Purple
    background: "#f8fafc", // Lightest slate
    card: "#ffffff",       // Pure white
    text: "#1e293b",       // Dark slate
    muted: "#64748b"       // Gray
  }

  const features = [
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance from our expert technicians",
      color: colors.primary
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Instant Diagnostics",
      description: "Real-time system analysis for quick problem resolution",
      color: colors.secondary
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Advanced Security",
      description: "Protection against all modern digital threats",
      color: colors.accent
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Server Monitoring",
      description: "Continuous oversight of your critical infrastructure",
      color: colors.primary
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Coverage",
      description: "Support available in every timezone",
      color: colors.secondary
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored configurations for your unique needs",
      color: colors.accent
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Data Recovery",
      description: "Emergency retrieval of lost or corrupted files",
      color: colors.primary
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Encrypted Backups",
      description: "Secure storage of your critical data",
      color: colors.secondary
    }
  ]

  return (
    <div 
      className="py-20 px-4 sm:px-6 lg:px-8 relative font-[Poppins]"
      style={{ background: colors.background }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block mb-6"
          >
            <div 
              className="px-4 py-2 rounded-full bg-[#fbc800]/10 text-[#fbc800] text-sm font-medium flex items-center justify-center mx-auto w-fit"
            >
              <Zap className="w-4 h-4 mr-2 fill-[#fbc800]" />
              PREMIUM FEATURES
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: colors.text }}
          >
            Everything You Need to Stay Protected
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto"
          >
            Comprehensive tools and services designed for maximum uptime and peace of mind
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.05 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-white rounded-xl shadow-md border border-gray-200 group-hover:border-[#fbc800]/30 transition-colors" />
              
              <div className="relative h-full p-6 rounded-xl bg-white">
                <div 
                  className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
                  style={{
                    background: `${feature.color}10`,
                    border: `1px solid ${feature.color}20`
                  }}
                >
                  {feature.icon}
                </div>
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{ color: colors.text }}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
                
                {/* Hover effect */}
                <div 
                  className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#fbc800]/20 pointer-events-none transition-all duration-300"
                  style={{
                    boxShadow: `0 0 0 1px ${feature.color}20 inset`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        {/* <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid md:grid-cols-3 gap-8 bg-white rounded-2xl p-8 shadow-md border border-gray-200"
        >
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{ color: colors.primary }}>99.9%</div>
            <p className="text-gray-600">Uptime Guarantee</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{ color: colors.primary }}>24/7</div>
            <p className="text-gray-600">Support Availability</p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold mb-2" style={{ color: colors.primary }}>30s</div>
            <p className="text-gray-600">Average Response Time</p>
          </div>
        </motion.div> */}
      </div>
    </div>
  )
}