import React from "react";

const Talk = () => {
  return (
    <div className="min-h-[50vh] flex items-center justify-center bg-[#F8F5F3] dark:bg-black text-black dark:text-white p-6 transition-all duration-300">
      <div className="max-w-2xl text-center">
        <p className="text-lg mb-4 text-black dark:text-white">
          Got a project in mind? Drop us a line at <br />
          <a href="mailto:hello@thirtysixstudio.com" className="underline text-black dark:text-white">
            hello@thirtysixstudio.com
          </a>{" "}
          or use the form below.
        </p>
        <p className="text-base max-w-lg mx-auto text-gray-800 dark:text-gray-300">
          Not sure what you need? We’re here to help you define the undefined.
          Let’s explore all creative and technical possibilities together
          through one of our tailored labs, where we champion future-forward
          thinking within an ethical framework.
        </p>
        <button className="mt-6 px-6 py-3 border rounded-full transition border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black">
          TALK TO US
        </button>
      </div>
    </div>
  );
};

export default Talk;
