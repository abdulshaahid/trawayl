import React from 'react';
import { Check } from 'lucide-react';

interface TimelineProps {
  steps: { title: string }[];
  currentStep: number;
}

export function Timeline({ steps, currentStep }: TimelineProps) {
  return (
    <div className="w-full py-4 px-2 sm:px-6">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <div className="flex flex-col items-center">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center
                  ${
                    index < currentStep
                      ? 'bg-[#37e5a5] text-black'
                      : index === currentStep
                      ? 'bg-[#37e5a5]/20 text-[#37e5a5] border-2 border-[#37e5a5]'
                      : 'bg-gray-700 text-gray-400'
                  }`}
              >
                {index < currentStep ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
              <span
                className={`mt-2 text-xs sm:text-sm ${
                  index <= currentStep ? 'text-[#37e5a5]' : 'text-gray-400'
                }`}
              >
                {step.title}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-2 ${
                  index < currentStep ? 'bg-[#37e5a5]' : 'bg-gray-700'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}