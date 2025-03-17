import React from "react";

const ClientsSection = () => {
  return (
    <div className="w-full bg-white dark:bg-black py-16 px-6 md:px-20 lg:pl-[300px] flex justify-center md:justify-start transition-colors duration-300">
      <div className="max-w-xl w-full flex flex-col gap-6 text-center md:text-left">
        {/* CLIENTS Header */}
        <div className="text-sm font-semibold text-black dark:text-white tracking-wide transition-colors duration-300">
          CLIENTS
        </div>

        {/* Main Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-black dark:text-white leading-tight transition-colors duration-300">
          Ready to get your project off the ground?
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-800 dark:text-gray-300 max-w-full transition-colors duration-300">
          We're currently accepting new clients and are excited to hear from
          you. Get in touch by sending an email to{" "}
          <a
            href="mailto:hello@thirtysixstudio.com"
            className="underline hover:text-black dark:text-white dark:hover:text-gray-300 transition-colors"
          >
            hello@thirtysixstudio.com
          </a>{" "}
          or fill out the form below to start your journey with us.
        </p>
      </div>
    </div>
  );
};

export default ClientsSection;
