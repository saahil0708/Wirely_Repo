import React, { useState } from "react";

const TrackingTimeline = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ["Dispatching soon", "Dispatched", "In transit", "Out for delivery", "Delivered"];

  const handleNextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="relative flex items-center space-x-4 w-full max-w-3xl mb-6">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-center flex-1 relative">
            {index > 0 && (
              <div className={`absolute top-4 left-0 w-full h-1 ${index < currentStep ? "bg-green-500" : "bg-yellow-500"}`}></div>
            )}
            <div
              className={`relative z-10 w-8 h-8 flex items-center justify-center rounded-full text-white font-bold text-sm 
                ${index < currentStep ? "bg-green-500" : "bg-yellow-500"}
              `}
            >
              {index + 1}
            </div>
            <p className={`mt-2 text-sm font-semibold ${index < currentStep ? "text-green-600" : "text-yellow-600"}`}>{step}</p>
          </div>
        ))}
      </div>
      <div className="space-x-4">
        <button onClick={handleNextStep} className="px-4 py-2 bg-green-500 text-white rounded-lg shadow">Done</button>
        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg shadow">Pending</button>
      </div>
    </div>
  );
};

export default TrackingTimeline;

