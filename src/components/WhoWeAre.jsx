import React from "react";

const WhoWeAre = () => {
  return (
    <div className="w-full bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-24 font-sans">
        {/* Top Border */}
        <div className="border-t border-gray-300 dark:border-gray-600 pt-8 sm:pt-12"></div>

        {/* Content Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Section Title */}
          <div className="flex items-center text-base sm:text-lg font-light tracking-wide text-black dark:text-white transition-colors duration-300">
            <span className="mr-3 sm:mr-4">02</span>
            <span className="w-6 h-[1px] bg-black dark:bg-white mx-3 sm:mx-4 transition-colors duration-300"></span>
            <span>WHO WE ARE</span>
          </div>

          {/* Vision Statement */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-light leading-snug sm:leading-tight text-black dark:text-white transition-colors duration-300">
              Our vision is to refine digital production while creating social impact and opportunity.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
