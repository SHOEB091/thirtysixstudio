import React from "react";

const WhoWeAre = () => {
  return (
    <div className="max-w-6xl mx-auto px-8 py-24 font-sans">
      {/* Top Border */}
      <div className="border-t border-gray-300 dark:border-gray-600 pt-12"></div>

      {/* Content Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Section Title */}
        <div className="flex items-center text-lg font-light tracking-wide">
          <span className="mr-4">02</span>
          <span className="w-6 h-[1px] bg-black dark:bg-white mx-4"></span>
          <span className="text-black dark:text-white">WHO WE ARE</span>
        </div>

        {/* Vision Statement */}
        <div>
          <h1 className="text-4xl md:text-5xl font-light leading-tight text-black dark:text-white">
            Our vision is to refine digital production while creating social impact and opportunity.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
