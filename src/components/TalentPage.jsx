import React from "react";

const TalentPage = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-8 py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between">
        {/* Left Section - Talk to us */}
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h3 className="text-[18px] font-medium tracking-wide flex items-center gap-3">
            <span>04</span>
            <span className="w-6 h-[2px] bg-black dark:bg-white inline-block transition-colors duration-300"></span>
            <span className="uppercase">Talk to us</span>
          </h3>
        </div>

        {/* Right Section - Talent */}
        <div className="lg:w-1/2 space-y-8">
          <div>
            <p className="text-sm font-medium uppercase mb-2">Talent</p>
            <h2 className="text-[36px] md:text-[42px] font-semibold leading-snug">
              Thirtysixstudio is <br />
              seeking talented <br />
              collaborators.
            </h2>
          </div>

          <div className="space-y-6 text-[16px] leading-7 dark:text-gray-300">
            <p>
              If you are a multi-talented individual with exceptional communication skills,
              eager to elevate your digital craft together with us, we want to hear from you.
            </p>
            <p>
              We specifically welcome progressive people who value high-quality work and
              workplace well-being equally. At Thirtysixstudio, we believe that one can only
              exist in the presence of the other.
            </p>
          </div>

          <button className="mt-4 px-6 py-2 border border-black dark:border-white rounded-full text-sm font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
            DROP US A LINE
          </button>
        </div>
      </div>
    </section>
  );
};

export default TalentPage;