import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex justify-center md:order-2">
            <a href="#" className="ml-4 text-gray-400 hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 3a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1V5H8v14h4a1 1 0 010 2H8a3 3 0 01-3-3V5a3 3 0 013-3h8a3 3 0 013 3v4a1 1 0 11-2 0V5a1 1 0 00-1-1H8a1 1 0 00-1 1v14a1 1 0 001 1h8a1 1 0 100-2H8V5h4v4a1 1 0 11-2 0V5a3 3 0 013-3h8a3 3 0 013 3v14a3 3 0 01-3 3h-4a3 3 0 01-3-3v-4a1 1 0 10-2 0v4a1 1 0 001 1h4a1 1 0 001-1V5a1 1 0 00-1-1z"
                />
              </svg>
            </a>
            <a href="#" className="ml-4 text-gray-400 hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16 3a1 1 0 011 1v1h3a1 1 0 011 1v3h1a1 1 0 011 1v3a1 1 0 01-1 1h-1v3a1 1 0 01-1 1h-3v1a1 1 0 01-1 1h-3v1a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1H5a1 1 0 01-1-1v-3H3a1 1 0 01-1-1v-3a1 1 0 011-1h1V9a1 1 0 011-1h3V5a1 1 0 011-1h3V3a1 1 0 011-1h3zm-5 2h-3v3h3V5zm5 5h-3v3h3v-3zm-9 0H8v3h3v-3zm0 5H8v3h3v-3zm5 0h-3v3h3v-3zm5 0h-3v3h3v-3zm0-5h-3v3h3V9zm-9 5H8v3h3v-3zm-5 5H3v-3h3v3z"
                />
              </svg>
            </a>
            <a href="#" className="ml-4 text-gray-400 hover:text-white">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M21 3a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h18zM7 16h10v-2H7v2zm0-4h10v-2H7v2zm8-7H9V7h6V5z"
                />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base leading-6 text-gray-400">
              &copy; 2024 Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
