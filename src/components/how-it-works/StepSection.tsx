import React from "react";

const StepsSubsection = () => {
  return (
    <>
      <section className="bg-gray-50 py-12 px-4 text-center">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-gray-800 mb-10">How Pawtful Works</h2>

        {/* Steps Container */}
        <div className="flex flex-col md:flex-row justify-center items-start gap-8 md:gap-16 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center text-lg font-bold text-gray-800 mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">INTRODUCE US TO YOUR PUP</h3>
            <p className="text-gray-600">
              We’ve distilled our quiz down to the essential questions so you can spend less time
              online and more time playing fetch.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-red-200 flex items-center justify-center text-lg font-bold text-gray-800 mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">GET YOUR STARTER BOX</h3>
            <p className="text-gray-600">
              Your starter box contains two weeks of food and the tools you need for easy serving at{" "}
              <span className="font-bold text-yellow-500">70% OFF</span>.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold text-gray-800 mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              REAL FOOD, REGULARLY DELIVERED
            </h3>
            <p className="text-gray-600">
              No more last-minute trips to the pet store — we deliver your pup’s meals to your door
              on your schedule.
            </p>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-10">
          <button className="bg-blue-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default StepsSubsection;
