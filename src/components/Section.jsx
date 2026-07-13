import React from 'react';

export const Section = ({ id, children, className = '', bgGradient = 'from-black to-[#0B0B0B]' }) => (
  <section
    id={id}
    className={`relative w-full py-20 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-10 bg-gradient-to-b ${bgGradient} scroll-mt-24 overflow-hidden ${className}`}
  >
    {/* Animated background glow */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/5 rounded-full blur-3xl opacity-10 animate-pulse" style={{ animationDelay: '1s' }}></div>
    </div>

    {/* Content */}
    <div className="relative z-10">{children}</div>
  </section>
);

export const Container = ({ children, className = '' }) => (
  <div className={`max-w-7xl mx-auto w-full ${className}`}>{children}</div>
);

export const SectionTitle = ({ children, className = '' }) => (
  <div className="mb-12 sm:mb-16 lg:mb-20">
    <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4 ${className}`}>
      {children}
    </h2>
    <div className="w-16 h-1 bg-gradient-to-r from-red-600 to-red-500 rounded-full"></div>
  </div>
);
