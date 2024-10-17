import React, { useState } from 'react';
import { ProgressBar, Step } from 'react-step-progress-bar';
import 'react-step-progress-bar/styles.css';

const StepProgress = () => {
  const steps = ["Underlying asset", "Amount", "Fees optimization", "Review"];
  const [isDeposit, setIsDeposit] = useState(true); 
  const [currentStep, setCurrentStep] = useState(0);

  const handleStepClick = (stepIndex) => {
    setCurrentStep(stepIndex);
  };

  const handleToggle = () => {
    setIsDeposit((prev) => !prev);
  };

  return (
    <>
      <div className="px-20 flex items-center justify-between pt-4">
        {/* ====Toggler==== */}
        <label className="relative inline-flex items-center cursor-pointer mb-6">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onChange={handleToggle}
            checked={isDeposit}
          />
          
          <div
            className={`w-[316px] h-[52px] rounded-xl flex justify-between items-center bg-secondary transition-colors duration-200`}
          >
            <span
              className={`absolute ml-3 w-[150px] left-8 top-4 h-[44px] text-sm ${
                isDeposit ? 'text-white' : 'text-gray-500'
              }`}
            >
              Deposit
            </span>

            <span
              className={`absolute left-[210px] top-4 mr-3 text-sm ${
                !isDeposit ? 'text-white' : 'text-gray-500'
              }`}
            >
              Withdraw
            </span>
          </div>

          <span
            className={`absolute w-[150px] h-[44px] rounded-xl bg-white text-primary transition-transform duration-200 ${
              isDeposit ? 'translate-x-[4px]' : 'translate-x-[160px]'
            } flex items-center justify-center`}
          >
            <span className="text-primary font-semibold text-sm">
              {isDeposit ? "Deposit" : "Withdraw"}
            </span>
          </span>
        </label>

        {/* ====Stepper==== */}
        <div className="flex flex-col items-center max-w-[719px] w-full">
          <div className="w-full flex items-center justify-between mb-4">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div
                  className="flex space-x-2 items-center cursor-pointer"
                  onClick={() => handleStepClick(index)}
                >
                  <div
                    className={`flex font-semibold items-center justify-center size-10 rounded-xl bg-secondary  ${
                      currentStep === index ? ' text-primaryText' : ' text-[#3B4B66] opacity-70'
                    }`}
                  >
                    {index + 1}
                  </div>
                  <div
                    className={`text-sm font-semibold ${
                      currentStep === index ? ' text-primaryText' : 'text-[#3B4B66] opacity-70'
                    }`}
                  >
                    {step}
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="flex-grow h-[1px] bg-[#3B4B66] opacity-70 mx-2"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default StepProgress;
