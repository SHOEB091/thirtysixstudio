import React from "react";

const SpicyCTA = () => {
  return (
    <div className="w-full bg-white dark:bg-black py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto space-y-6 sm:space-y-8 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-black dark:text-white">
          Pssst. Looking for something spicy?
        </h2>
        <p className="text-sm sm:text-base text-black dark:text-gray-300 leading-relaxed">
          Find the floating adjuma pepper or click the big red button below to
          unlock our fiery alter ego. Be warned, it's hot in there! Don't forget
          to turn on your sound.
        </p>
        <button className="bg-red-600 hover:bg-red-700 text-white font-medium text-sm sm:text-base px-6 sm:px-8 py-2 sm:py-3 rounded-full transition-all duration-300 transform hover:scale-105">
          BRING THE HEAT!
        </button>
      </div>
    </div>
  );
};

export default SpicyCTA;
