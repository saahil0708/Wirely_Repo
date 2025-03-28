import React from "react";

const Stepper = ({ children }) => {
  return <div className="stepper-container">{children}</div>;
};

export const Step = ({ children }) => {
  return <div className="step">{children}</div>;
};

export default Stepper;
