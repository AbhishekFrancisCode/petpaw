"use client";

export default function ProgressTracker({ currentStep }: { currentStep: any }) {
  const steps = ["Dog details", "Dog health", "Plan detail"];

  return (
    <div className="flex flex-col max-w-[400px] mx-auto">
      <div className="flex max-w-[300px] mt-4 mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 min-w-[130px]">
            {/* Step Indicator */}
            <div className="flex items-center">
              <div
                className={`relative flex items-center justify-center w-8 h-8 rounded-full border-2 ${
                  index < currentStep
                    ? "border-[#EE9422] bg-[#EE9422] text-white"
                    : index === currentStep
                      ? "border-[#EE9422] text-[#EE9422]"
                      : "border-gray-300 text-gray-500"
                }`}
              >
                {index < currentStep ? (
                  <span className="text-sm font-semibold">✔</span>
                ) : (
                  <span className="text-sm font-semibold">{index + 1}</span>
                )}
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div
                  className={`flex-1 h-1 ${index < currentStep ? "bg-[#EE9422]" : "bg-gray-300"}`}
                ></div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex mb-6 min-w-[400px]">
        {steps.map((step, index) => (
          <div key={index} className="flex-1 max-w-[130px]">
            {/* Step Label */}
            <div className=" text-center mt-2 text-[12px] font-normal">{step}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
