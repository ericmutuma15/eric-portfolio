import React from 'react';

export const PrimaryButton = ({ children, className = '', ...props }) => (
  <button
    className={`px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50 active:scale-95 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export const SecondaryButton = ({ children, className = '', ...props }) => (
  <button
    className={`px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 ${className}`}
    {...props}
  >
    {children}
  </button>
);

export const IconButton = ({ icon: Icon, className = '', ...props }) => (
  <button
    className={`p-2 sm:p-3 rounded-full bg-red-600 hover:bg-red-700 text-white transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50 ${className}`}
    {...props}
  >
    {Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6" />}
  </button>
);
