import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-10 px-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8">
        {/* Social Links */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex gap-6">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right">
          <a
            href="mailto:hello@thirtysixstudio.com"
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
          >
            hello@thirtysixstudio.com
          </a>
          <p className="text-gray-600 dark:text-gray-400 mt-1 transition-colors duration-300">
            Amsterdam and worldwide
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-8">
        <div className="text-gray-600 dark:text-gray-400 text-center md:text-left transition-colors duration-300">
          <p>All Rights Reserved</p>
          <p>©️2025, Thirtysixstudio</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 text-center md:text-left">
          <a href="/privacy" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300">
            PRIVACY STATEMENT
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors duration-300"
          >
            BACK TO TOP
          </button>
        </div>
      </div>

      {/* Registration Info */}
      <div className="max-w-7xl mx-auto mt-10 text-center md:text-left">
        <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
          Thirtysixstudio is registered with the Dutch Chamber of Commerce under registration number KVK 90210152.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
