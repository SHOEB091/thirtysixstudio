import React from "react";

const ContactForm = () => {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black flex items-start justify-center p-10">
      <form className="w-full max-w-2xl space-y-6 text-left">
        <input
          type="text"
          placeholder="Name*"
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-full px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />
        <input
          type="email"
          placeholder="Email*"
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-full px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        />
        <select
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-full px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white"
        >
          <option value="">Topic*</option>
          <option value="General">General</option>
          <option value="Support">Support</option>
          <option value="Jobs">Jobs</option>
        </select>
        <textarea
          placeholder="Message"
          rows={6}
          className="w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-2xl px-6 py-4 text-lg focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white resize-none"
        ></textarea>
        <button
          type="submit"
          className="text-lg rounded-full border border-black dark:border-white text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 px-8 py-3"
        >
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactForm;