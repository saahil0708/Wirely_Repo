import { FaBolt, FaTools, FaShieldAlt, FaBatteryFull } from "react-icons/fa";

const services = [
  {
    title: "Rapid Implementation",
    description: "Enterprise-grade deployment in days, not months with streamlined onboarding.",
    icon: <FaBolt className="text-amber-500 text-3xl" />,
    accent: "border-l-4 border-amber-500"
  },
  {
    title: "Dedicated Expertise",
    description: "24/7 access to senior technical architects and strategic guidance.",
    icon: <FaTools className="text-blue-500 text-3xl" />,
    accent: "border-l-4 border-blue-500"
  },
  {
    title: "Trust Architecture",
    description: "End-to-end encryption with zero-trust protocols and compliance-ready frameworks.",
    icon: <FaShieldAlt className="text-emerald-500 text-3xl" />,
    accent: "border-l-4 border-emerald-500"
  },
  {
    title: "Continuous Optimization",
    description: "Proactive performance tuning with real-time analytics and SLA-backed uptime.",
    icon: <FaBatteryFull className="text-violet-500 text-3xl" />,
    accent: "border-l-4 border-violet-500"
  }
];

export default function ServicesOverview() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Enterprise Solutions</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strategic technology services for mission-critical operations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`bg-gray-50 p-6 rounded-lg ${service.accent} hover:bg-gray-100 transition-colors`}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
            Trusted by industry leaders
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-700">
            {['Fortune 500', 'Microsoft', 'IBM', 'Siemens'].map((company) => (
              <div key={company}>{company}</div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}