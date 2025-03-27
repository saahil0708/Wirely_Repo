"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  Check, 
  X, 
  ArrowRight,
  // New professional icons
  LifeBuoy,
  Headphones,
  MonitorCheck,
  Ticket,
  UserCog,
  CreditCard,
  Bell,
  HardDrive,
  ShieldCheck,
  Cpu,
  Wifi,
  Mic,
  Gamepad
} from "lucide-react"

export default function SubscriptionPlans() {
  const [isAnnual, setIsAnnual] = useState(false)
  const [activeTab, setActiveTab] = useState("plans")
  const [animatedCount, setAnimatedCount] = useState({ premium: 0, freemium: 0 })

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedCount((prev) => ({
        premium: (prev.premium + 1) % 100,
        freemium: (prev.freemium + 1) % 100,
      }))
    }, 100)

    return () => clearInterval(interval)
  }, [])

  const plans = [
    {
      name: "Freemium",
      description: "Basic technical support with standard response time",
      price: isAnnual ? 0 : 0,
      responseTime: "24 hours",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-white to-blue-50",
      borderColor: "border-blue-200",
      buttonColor: "bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600",
      icon: LifeBuoy, // Changed to support icon
      features: [
        { name: "Standard support response", included: true },
        { name: "Basic device diagnostics", included: true },
        { name: "Community forum access", included: true },
        { name: "Limited ticket submissions", included: true },
        { name: "Email support", included: true },
        { name: "Priority queue", included: false },
        { name: "Dedicated support agent", included: false },
        { name: "Advanced troubleshooting", included: false },
      ],
    },
    {
      name: "Premium",
      description: "Priority technical support with fast response",
      price: isAnnual ? 49 : 4.99,
      responseTime: "1 hour",
      color: "from-[#fbc800] to-[#e6b800]",
      bgColor: "bg-gradient-to-br from-white to-[#fff9e6]",
      borderColor: "border-[#ffe680]",
      buttonColor: "bg-gradient-to-r from-[#fbc800] to-[#e6b800] hover:from-[#ffcc00] hover:to-[#f2c200]",
      icon: Headphones, // Changed to headset icon
      features: [
        { name: "Priority support response", included: true },
        { name: "Advanced device diagnostics", included: true },
        { name: "Direct technician access", included: true },
        { name: "Unlimited ticket submissions", included: true },
        { name: "24/7 Phone & chat support", included: true },
        { name: "Priority queue", included: true },
        { name: "Dedicated support agent", included: true },
        { name: "Advanced troubleshooting", included: true },
      ],
    },
  ]

  // Enhanced tab transition variants
  const tabVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.98
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1] // Beautiful easing curve
      } 
    },
    exit: { 
      opacity: 0, 
      y: -10,
      scale: 0.98,
      transition: { 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1]
      } 
    }
  }

  // Slide transition for tab content
  const slideVariants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0
      }
    },
    center: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.22, 1, 0.36, 1]
      }
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 100 : -100,
        opacity: 0,
        transition: {
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1]
        }
      }
    }
  }

  // Track tab direction for slide animation
  const [[tab, direction], setTab] = useState([0, 0])
  const paginate = (newTab) => {
    const tabs = ["plans", "features", "faq"]
    const newIndex = tabs.indexOf(newTab)
    setTab([newIndex, newIndex > tab ? 1 : -1])
    setActiveTab(newTab)
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-[Poppins] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {/* Grid Pattern */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9IiNlYmViZWIiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-40" />

        {/* Glowing Orbs */}
        <div className="absolute top-[10%] right-[5%] w-[300px] h-[300px] bg-[#fbc800]/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse delay-1000" />

        {/* Animated Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent w-full"
            animate={{
              y: ["100vh", "-100vh"],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 15 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
              delay: i * 3,
            }}
            style={{ top: `${i * 20}%` }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <div className="px-3 py-1 rounded-full bg-white border border-gray-200 text-[#fbc800] text-sm font-medium shadow-sm">
              Subscription Plans
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl font-bold mb-4 text-gray-900"
          >
            Choose Your Support Plan
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Select the perfect support plan for your technical needs with flexible options
          </motion.p>

          {/* Navigation Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-10 mb-12"
          >
            <div className="inline-flex p-1 rounded-lg bg-white border border-gray-200 shadow-sm">
              {["plans", "features", "faq"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => paginate(tab)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeTab === tab 
                      ? "bg-gradient-to-r from-[#fbc800] to-[#e6b800] text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Billing Toggle */}
          <AnimatePresence mode="wait">
            {activeTab === "plans" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="mt-8 inline-flex items-center bg-white p-1 rounded-full border border-gray-200 shadow-sm"
              >
                <button
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    !isAnnual 
                      ? "bg-gradient-to-r from-[#fbc800] to-[#e6b800] text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsAnnual(true)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isAnnual 
                      ? "bg-gradient-to-r from-[#fbc800] to-[#e6b800] text-white shadow-md"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  Annual
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeTab}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="relative"
          >
            {activeTab === "plans" && (
              <motion.div
                className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                variants={tabVariants}
              >
                {plans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="relative group"
                  >
                    {/* Animated Border */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-[#fbc800]/40 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 blur-sm transition duration-500 group-hover:duration-200 animate-gradient-x"></div>

                    <div
                      className={`relative rounded-2xl ${plan.bgColor} border ${plan.borderColor} overflow-hidden shadow-md`}
                    >
                      {plan.name === "Premium" && (
                        <div className="absolute top-0 right-0">
                          <div className="text-xs font-semibold bg-gradient-to-r from-[#fbc800] to-[#e6b800] text-white px-3 py-1 rounded-bl-lg shadow-md">
                            RECOMMENDED
                          </div>
                        </div>
                      )}

                      <div className="p-8">
                        {/* Plan Header */}
                        <div className="flex items-center mb-4">
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${plan.color} text-white mr-4`}>
                            <plan.icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                        </div>

                        <p className="text-gray-600 mb-6">{plan.description}</p>

                        {/* Price */}
                        <div className="mb-6">
                          <div className="flex items-baseline">
                            <span className="text-4xl font-bold text-gray-900">
                              {plan.price === 0 ? "Free" : `$${plan.price}`}
                            </span>
                            {plan.price !== 0 && (
                              <span className="ml-2 text-gray-600">/{isAnnual ? "year" : "month"}</span>
                            )}
                          </div>
                          {isAnnual && plan.price !== 0 && (
                            <p className="text-sm text-blue-600 mt-1">Save 18% with annual billing</p>
                          )}
                        </div>

                        {/* Response Time Highlight */}
                        <div className="flex items-center p-4 bg-white rounded-lg border border-gray-200 mb-6 shadow-sm">
                          <div className="relative mr-3">
                            <MonitorCheck className="w-5 h-5 text-gray-600" />
                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-green-500 rounded-full animate-ping" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Response Time</p>
                            <p className="font-semibold text-gray-900">Within {plan.responseTime}</p>
                          </div>

                          {/* Technical Indicator */}
                          <div className="ml-auto flex items-center">
                            <div className="w-16 h-6 bg-gray-200 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${plan.name === "Premium" ? "bg-[#fbc800]" : "bg-blue-500"}`}
                                style={{
                                  width: `${plan.name === "Premium" ? animatedCount.premium : animatedCount.freemium}%`,
                                }}
                              />
                            </div>
                          </div>
                        </div>

                        {/* Features */}
                        <ul className="space-y-3 mb-8">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              {feature.included ? (
                                <Check className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                              ) : (
                                <X className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                              )}
                              <span className={feature.included ? "text-gray-700" : "text-gray-400"}>
                                {feature.name}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA Button */}
                        <button
                          className={`w-full py-3 px-4 rounded-lg text-white font-medium ${plan.buttonColor} transition-all duration-300 flex items-center justify-center group relative overflow-hidden shadow-md`}
                        >
                          <span className="relative z-10">Get Started</span>
                          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform relative z-10" />
                          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </button>
                      </div>

                      {/* Technical Pattern Bottom */}
                      <div className="h-10 bg-gray-100 flex items-center justify-around px-4 border-t border-gray-200">
                        <div className="flex items-center space-x-2">
                          <div
                            className={`w-2 h-2 rounded-full ${plan.name === "Premium" ? "bg-[#fbc800]" : "bg-blue-500"} animate-pulse`}
                          />
                          <div className="text-xs text-gray-500 font-mono">STATUS:ACTIVE</div>
                        </div>
                        <div className="flex space-x-1">
                          {[...Array(4)].map((_, i) => (
                            <div
                              key={i}
                              className={`h-1 w-${i % 3 === 0 ? "6" : "3"} rounded-full ${
                                plan.name === "Premium" ? "bg-[#fbc800]/40" : "bg-blue-500/40"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "features" && (
              <motion.div
                className="max-w-5xl mx-auto"
                variants={tabVariants}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      icon: LifeBuoy,
                      title: "Comprehensive Support",
                      description: "Covers all electronic devices with expert technicians",
                      color: "from-blue-500 to-cyan-500",
                    },
                    {
                      icon: Ticket,
                      title: "Easy Ticket System",
                      description: "Simple interface to submit and track support tickets",
                      color: "from-[#fbc800] to-[#e6b800]",
                    },
                    {
                      icon: MonitorCheck,
                      title: "Real-time Diagnostics",
                      description: "Remote device diagnostics for faster resolution",
                      color: "from-purple-500 to-fuchsia-500",
                    },
                    {
                      icon: UserCog,
                      title: "Automated Assignment",
                      description: "Smart routing to the most qualified technician",
                      color: "from-emerald-500 to-teal-500",
                    },
                    {
                      icon: CreditCard,
                      title: "Secure Payments",
                      description: "Encrypted payment processing for premium services",
                      color: "from-green-500 to-emerald-500",
                    },
                    {
                      icon: Bell,
                      title: "Instant Notifications",
                      description: "Real-time updates on your support requests",
                      color: "from-amber-500 to-orange-500",
                    },
                    {
                      icon: HardDrive,
                      title: "Device Coverage",
                      description: "Support for all major brands and models",
                      color: "from-red-500 to-rose-500",
                    },
                    {
                      icon: ShieldCheck,
                      title: "Data Security",
                      description: "Guaranteed privacy during remote sessions",
                      color: "from-indigo-500 to-blue-500",
                    },
                    {
                      icon: Cpu,
                      title: "Advanced Tools",
                      description: "Specialized diagnostic software for complex issues",
                      color: "from-pink-500 to-rose-500",
                    },
                  ].map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="relative group"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-[#fbc800]/40 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition duration-500 group-hover:duration-200 animate-gradient-x"></div>
                      <div className="relative bg-white border border-gray-200 p-6 rounded-xl hover:border-[#fbc800] transition-colors duration-300 shadow-sm">
                        <div
                          className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}
                        >
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center">{feature.title}</h4>
                        <p className="text-gray-600 text-center">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Technical Specs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="mt-16 bg-white border border-gray-200 rounded-xl p-8 shadow-sm"
                >
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                    {/* <Terminal className="w-5 h-5 mr-2 text-[#fbc800]" /> */}
                    Technical Specifications
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span className="text-gray-600">Supported Devices</span>
                        <span className="text-gray-900 font-mono bg-gray-100 px-2 py-0.5 rounded text-sm">
                          All Electronics
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span className="text-gray-600">Response SLA</span>
                        <span className="text-gray-900 font-mono bg-gray-100 px-2 py-0.5 rounded text-sm">
                          1h (Premium)
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span className="text-gray-600">Resolution Time</span>
                        <span className="text-gray-900 font-mono bg-gray-100 px-2 py-0.5 rounded text-sm">
                          24h (90%)
                        </span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span className="text-gray-600">Technicians</span>
                        <span className="text-gray-900 font-mono bg-gray-100 px-2 py-0.5 rounded text-sm">
                          200+ Certified
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span className="text-gray-600">Data Encryption</span>
                        <span className="text-gray-900 font-mono bg-gray-100 px-2 py-0.5 rounded text-sm">
                          AES-256
                        </span>
                      </div>
                      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                        <span className="text-gray-600">Uptime</span>
                        <span className="text-gray-900 font-mono bg-gray-100 px-2 py-0.5 rounded text-sm">
                          99.99%
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}

            {activeTab === "faq" && (
              <motion.div
                className="max-w-3xl mx-auto"
                variants={tabVariants}
              >
                <div className="space-y-6">
                  {[
                    {
                      question: "What devices do you support?",
                      answer: "We support all major electronic devices including computers, smartphones, smart home devices, gaming consoles, and audio equipment.",
                    },
                    {
                      question: "How quickly will I get help?",
                      answer: "Premium users get responses within 1 hour, while Freemium users typically receive responses within 24 hours.",
                    },
                    {
                      question: "Is remote support secure?",
                      answer: "Yes, all remote sessions use end-to-end encryption and require your explicit permission before we access your device.",
                    },
                    {
                      question: "Can I upgrade my plan later?",
                      answer: "Absolutely! You can upgrade at any time and only pay the prorated difference for the remainder of your billing cycle.",
                    },
                    {
                      question: "What payment methods do you accept?",
                      answer: "We accept all major credit cards, PayPal, and bank transfers. Enterprise customers can be invoiced directly.",
                    },
                  ].map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="relative group"
                    >
                      <div className="absolute -inset-0.5 bg-gradient-to-r from-transparent via-[#fbc800]/40 to-transparent rounded-xl opacity-0 group-hover:opacity-100 blur-sm transition duration-500 group-hover:duration-200 animate-gradient-x"></div>
                      <div className="relative bg-white border border-gray-200 p-6 rounded-xl hover:border-[#fbc800] transition-colors duration-300 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2 flex items-start">
                          <span className="text-[#fbc800] mr-2 font-mono">Q:</span>
                          {faq.question}
                        </h4>
                        <p className="text-gray-600 pl-6">
                          <span className="text-blue-500 mr-2 font-mono">A:</span>
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-[#fbc800] to-[#e6b800] rounded-full opacity-70 group-hover:opacity-100 blur-lg transition duration-200"></div>
            <button className="relative px-8 py-3 bg-white border border-gray-200 rounded-full text-gray-900 font-medium group-hover:border-[#fbc800] transition-colors duration-200 shadow-md">
              Start Your Free Trial
            </button>
          </div>
          <p className="text-gray-500 mt-4 text-sm">No credit card required. Cancel anytime.</p>
        </motion.div>
      </div>
    </div>
  )
}