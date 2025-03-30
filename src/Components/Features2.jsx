"use client"

import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { 
  ShieldCheck, 
  Headphones, 
  Zap,
  Clock,
  Server,
  Activity,
  LifeBuoy
} from "lucide-react"

const StatsSection = () => {
  return (
    <div className="font-[Poppins] px-4 sm:px-6 lg:px-8 bg-gray-50 py-12 relative bottom-5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Uptime Box */}
          <StatBox 
            value={99.9}
            label="Uptime Guarantee"
            gradientFrom="#fcd34d"  // Lighter yellow
            gradientTo="#fbbf24"     // Lighter orange
            icon={<Server className="w-6 h-6" />}
          />
          
          {/* Support Box */}
          <StatBox 
            value={24}
            label="Support Availability"
            gradientFrom="#fcd34d"   // Lighter yellow
            gradientTo="#fbbf24"     // Lighter orange
            icon={<Headphones className="w-6 h-6" />}
          />
          
          {/* Response Box */}
          <StatBox 
            value={30}
            label="Average Response Time"
            gradientFrom="#fcd34d"   // Lighter yellow
            gradientTo="#fbbf24"     // Lighter orange
            icon={<Zap className="w-6 h-6" />}
          />
        </div>
      </div>
    </div>
  )
}

const StatBox = ({ value, label, gradientFrom, gradientTo, icon }) => {
  const [count, setCount] = useState(0)
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5
  })

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
      })

      const duration = 2000
      const startTime = Date.now()
      
      const animateCount = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        const currentValue = progress * value
        
        setCount(currentValue)
        
        if (progress < 1) {
          requestAnimationFrame(animateCount)
        }
      }
      
      requestAnimationFrame(animateCount)
    }
  }, [inView, value, controls])

  const displayValue = value === 99.9 
    ? count.toFixed(1) 
    : Math.floor(count)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      className="rounded-xl p-8 shadow-lg text-white relative overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`
      }}
      whileHover={{
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.2)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Floating icon with subtle glow */}
      <motion.div 
        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 backdrop-blur-sm"
        whileHover={{
          rotate: 5,
          background: "rgba(255,255,255,0.2)"
        }}
      >
        {icon}
      </motion.div>
      
      {/* Content */}
      <div className="relative z-10">
        <div className="text-4xl font-bold">
          {displayValue}
          {value === 99.9 && '%'}
          {value === 30 && 's'}
          {value === 24 && '/7'}
        </div>
        <p className="mt-2 text-lg opacity-90">{label}</p>
      </div>

      {/* Subtle hover effect layer */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-white/0 to-white/5 opacity-0"
        whileHover={{
          opacity: 0.1,
          transition: { duration: 0.3 }
        }}
      />
      
      {/* Animated border on hover */}
      <motion.div 
        className="absolute inset-0 rounded-xl border-2 border-white/0 pointer-events-none"
        whileHover={{
          borderColor: "rgba(255,255,255,0.2)",
          transition: { duration: 0.4 }
        }}
      />
    </motion.div>
  )
}

export default StatsSection