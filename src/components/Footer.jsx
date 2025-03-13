import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-4 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            LinkedIn
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-gray-900"
          >
            Instagram
          </a>
        </div>

        {/* Contact Info */}
        <div className="text-right">
          <a
            href="mailto:hello@thirtysixstudio.com"
            className="text-gray-600 hover:text-gray-900"
          >
            hello@thirtysixstudio.com
          </a>
          <p className="text-gray-600 mt-1">Amsterdam and worldwide</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="text-gray-600">
          <p>All Rights Reserved</p>
          <p>©️2025, Thirtysixstudio</p>
        </div>

        <div className="flex gap-6">
          <a href="/privacy" className="text-gray-600 hover:text-gray-900">
            PRIVACY STATEMENT
          </a>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-gray-600 hover:text-gray-900"
          >
            BACK TO TOP
          </button>
        </div>
      </div>

      {/* Registration Info */}
      <div className="max-w-7xl mx-auto mt-12">
        <p className="text-sm text-gray-500">
          Thirtysixstudio is registered with the Dutch Chamber of Commerce under registration number KVK 90210152.
        </p>
      </div>
    </footer>
  );
};

export default Footer;