import React from "react";

const OurServices = () => {
  return (
    <div className="w-full min-h-1/4 flex flex-col items-center justify-center bg-[#faf7f5] dark:bg-black px-10">
      {/* Heading Section */}
      <div className="w-full max-w-4xl">
        <h4 className="text-sm font-semibold text-black dark:text-white tracking-wide uppercase">
          OUR SERVICES
        </h4>
      </div>

      {/* Description Section with margin-top */}
      <div className="w-full max-w-4xl mt-6">
        <p className="text-[36px] leading-[1.3] font-normal text-black dark:text-white">
          We provide you with captivating design, interactive animations, reliable code, and immaculate project coordination. Whether you need a campaign built from scratch or assistance at a specific phase, we’ve got you covered.
        </p>
      </div>
    </div>
  );
};

export default OurServices;