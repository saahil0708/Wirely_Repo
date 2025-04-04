import React, { useState } from "react";
import { Stepper, Step, StepLabel, Button } from "@mui/material";
import { motion } from "framer-motion";

import bookingWiFi from "..//assets/completed.png";
import wifiTroubleshooting from "..//assets/Started.png";
import wifiLoading from "..//assets/75.png";
import confirmed from "../assets/confirm.png";

function Workflow() {
  const [activeStep, setActiveStep] = useState(0);
  const [direction, setDirection] = useState(-1); // -1 for Next (left), 1 for Previous (right)

  const steps = ["Booking Feature", "Work Started", "Approximate Done", "Completed"];
  const stepImages = [bookingWiFi, wifiTroubleshooting, wifiLoading, confirmed];

  // Step descriptions
  const stepDescriptions = [
    "You have successfully booked a WiFi service. Our team will get in touch with you shortly to assist further.",
    "The troubleshooting process has started. Our system is diagnosing the potential issues with your WiFi.",
    "The issue has been 75% resolved. Some final optimizations are being made to ensure smooth connectivity.",
    "Your WiFi is now fully operational! Enjoy seamless internet without any interruptions.",
  ];

  const handleNext = () => {
    if (activeStep < steps.length - 1) {
      setDirection(-1);
      setActiveStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setDirection(1);
      setActiveStep((prev) => prev - 1);
    }
  };

  const handleStepClick = (index) => {
    setDirection(index > activeStep ? -1 : 1);
    setActiveStep(index);
  };

  return (
    <div className="bg-white p-8 w-full min-h-screen font-[Poppins] text-center shadow-md mt-10">
      {/* Heading & Description */}
      <h1 className="text-3xl font-bold text-black">Track Your Work</h1>
      <p className="text-gray-600 text-lg mt-2 max-w-lg mx-auto">
        Stay updated with your progress step by step. Monitor the status of your task in real-time.
      </p>

      {/* Stepper */}
      <div className="w-full mt-6 font-[Poppins]">
        <Stepper activeStep={activeStep} alternativeLabel className="w-full">
          {steps.map((label, index) => (
            <Step key={index} onClick={() => handleStepClick(index)} className="cursor-pointer">
              <StepLabel
                sx={{
                  "& .MuiStepIcon-root": { 
                    fontFamily: 'Poppins',
                    color: activeStep >= index ? "#000000" : "#fcb800"  // Black for completed/active, Yellow otherwise
                  },
                  "& .MuiStepConnector-line": { 
                    fontFamily: 'Poppins',
                    borderColor: activeStep >= index ? "#000000" : "#fcb800" 
                  },
                  "& .MuiStepIcon-text": { fill: "#ffffff" }, // White text inside icons
                  "& .MuiTypography-root": { 
                    fontFamily: 'Poppins',
                    color: activeStep >= index ? "#000000" : "#fcb800", 
                    fontWeight: "bold" 
                  }, 
                }}
              >
                {label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>

      {/* Step Image */}
      <div className="relative font-[Poppins] overflow-hidden w-full max-w-lg mx-auto mt-6">
        <motion.img
          key={activeStep}
          src={stepImages[activeStep]}
          alt={`Step ${activeStep + 1}`}
          initial={{ x: direction * 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -direction * 300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-h-52 object-contain rounded-lg shadow-md bg-white"
        />
      </div>

      {/* Step Title & Description */}
      <h2 className="text-xl font-[Poppins] font-semibold text-black mt-4">{steps[activeStep]}</h2>
      <p className="text-gray-600 font-[Poppins] text-lg mt-2 max-w-lg mx-auto">{stepDescriptions[activeStep]}</p>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6 max-w-lg mx-auto">
      <Button
  disabled={activeStep === 0}
  onClick={handleBack}
  sx={{
    fontFamily: 'Poppins',
    backgroundColor: "black",
    color: "white",
    px: 3,
    py: 1,
    borderRadius: "6px",
    border: "2px solid black",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "white",  // Change to white on hover
      color: "black",  // Ensure text remains visible
      border: "2px solid black", // Keep border visible
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
      backgroundColor: "black",
      color: "white", // Ensure disabled text remains visible
    },
  }}
>
  Previous
</Button>


<Button
  onClick={handleNext}
  disabled={activeStep === steps.length - 1}
  sx={{
    fontFamily: 'Poppins',
    backgroundColor: "#fcb800",
    color: "black",
    px: 3,
    py: 1,
    borderRadius: "6px",
    border: "2px solid #fcb800",
    transition: "all 0.3s ease-in-out",
    "&:hover": {
      backgroundColor: "white",  // Change background to black on hover
      color: "#fcb800",  // Text becomes white for contrast
      border: "2px solid #fcb800", // Keep border visible
    },
    "&:disabled": {
      opacity: 0.5,
      cursor: "not-allowed",
      backgroundColor: "#fcb800",
      color: "black", // Ensure disabled text remains visible
    },
  }}
>
  Move Forward
</Button>


      </div>
    </div>
  );
}

export default Workflow;