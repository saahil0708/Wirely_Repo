import { Phone, Ambulance, Shield, AlertTriangle, HeartPulse, Biohazard } from "lucide-react"

export default function EmergencyCards() {
  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        <span className="bg-red-100 px-3 py-1 rounded-lg">Emergency</span> Contacts
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Card 1 - Medical Emergency */}
        <div className="relative overflow-hidden bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300 group">
          <div className="absolute -right-6 -top-6 text-red-100 group-hover:text-red-200 transition-colors">
            <HeartPulse size={80} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 p-2 rounded-full">
                <Ambulance className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-700">Medical Emergency</h3>
            </div>
            <p className="text-sm text-gray-600 mb-5">Immediate medical assistance and ambulance</p>
            <div className="mb-6">
              <p className="text-3xl font-extrabold text-gray-800">911</p>
              <p className="text-xs text-gray-500 mt-1">Available 24 hours</p>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-red-200">
              <Phone className="h-5 w-5" /> Call Now
            </button>
          </div>
        </div>

        {/* Card 2 - Police */}
        <div className="relative overflow-hidden bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300 group">
          <div className="absolute -right-6 -top-6 text-red-100 group-hover:text-red-200 transition-colors">
            <Shield size={80} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 p-2 rounded-full">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-700">Police Emergency</h3>
            </div>
            <p className="text-sm text-gray-600 mb-5">For immediate police assistance</p>
            <div className="mb-6">
              <p className="text-3xl font-extrabold text-gray-800">911</p>
              <p className="text-xs text-gray-500 mt-1">Emergency response</p>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-red-200">
              <Phone className="h-5 w-5" /> Call Police
            </button>
          </div>
        </div>

        {/* Card 3 - Fire */}
        <div className="relative overflow-hidden bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300 group">
          <div className="absolute -right-6 -top-6 text-red-100 group-hover:text-red-200 transition-colors">
            <AlertTriangle size={80} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 p-2 rounded-full">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-700">Fire Emergency</h3>
            </div>
            <p className="text-sm text-gray-600 mb-5">Fire, smoke, or rescue emergencies</p>
            <div className="mb-6">
              <p className="text-3xl font-extrabold text-gray-800">911</p>
              <p className="text-xs text-gray-500 mt-1">Fire and rescue services</p>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-red-200">
              <Phone className="h-5 w-5" /> Report Fire
            </button>
          </div>
        </div>

        {/* Card 4 - Poison Control */}
        <div className="relative overflow-hidden bg-gradient-to-br from-red-50 to-white p-6 rounded-xl shadow-lg border border-red-100 hover:shadow-xl transition-all duration-300 group">
          <div className="absolute -right-6 -top-6 text-red-100 group-hover:text-red-200 transition-colors">
            <Biohazard size={80} />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-red-100 p-2 rounded-full">
                <Biohazard className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-700">Poison Control</h3>
            </div>
            <p className="text-sm text-gray-600 mb-5">Toxic substance exposure</p>
            <div className="mb-6">
              <p className="text-3xl font-extrabold text-gray-800">1-800-222-1222</p>
              <p className="text-xs text-gray-500 mt-1">National poison helpline</p>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg font-medium transition-all transform hover:scale-[1.02] active:scale-95 shadow-md hover:shadow-red-200">
              <Phone className="h-5 w-5" /> Get Help
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 p-6 bg-red-50 border-l-4 border-red-400 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertTriangle className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-bold text-lg text-red-800">Emergency Tips</h3>
            <p className="text-sm text-red-700">
              • Stay calm and speak clearly<br />
              • Provide your exact location<br />
              • Describe the emergency<br />
              • Follow operator instructions<br />
              • Don't hang up until told to do so
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}