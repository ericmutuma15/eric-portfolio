import React from 'react';

export const PremiumCard = ({ children, className = '', ...props }) => (
  <div
    className={`bg-[#1C1C1C] border border-white/8 rounded-lg hover:border-white/20 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 transform hover:scale-102 ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const ProjectCard = ({ image, title, description, link, className = '' }) => (
  <PremiumCard className={`overflow-hidden group ${className}`}>
    <div className="relative aspect-video overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    </div>
    <div className="p-6">
      <h3 className="font-bold text-lg text-white mb-2 group-hover:text-red-500 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-400 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-bold rounded text-sm transition-colors"
      >
        Visit Project
      </a>
    </div>
  </PremiumCard>
);

export const SkillCard = ({ image, name, icon: Icon }) => (
  <div className="flex flex-col items-center text-center group">
    {image ? (
      <div className="relative mb-3">
        <div className="absolute inset-0 bg-red-600 rounded-full blur opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
        <img
          src={image}
          alt={name}
          className="relative mx-auto w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 object-cover rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 ring-2 ring-white/20 group-hover:ring-red-600/50"
        />
      </div>
    ) : (
      <div className="relative mb-3 mx-auto w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-red-600 to-red-700 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-300 ring-2 ring-white/20 flex items-center justify-center">
        {Icon && <Icon className="text-white text-3xl sm:text-4xl lg:text-5xl" />}
      </div>
    )}
    <p className="font-bold text-sm sm:text-base text-white group-hover:text-red-500 transition-colors">
      {name}
    </p>
  </div>
);

export const TestimonialCard = ({ image, name, role, text }) => (
  <PremiumCard className="h-full flex flex-col items-center text-center p-6">
    <div className="relative mb-4">
      <div className="absolute inset-0 bg-red-600 rounded-full blur opacity-20"></div>
      <img
        src={image}
        alt={name}
        className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover ring-2 ring-white/20 shadow-lg"
      />
    </div>
    <h3 className="font-bold text-lg text-white">{name}</h3>
    <p className="text-sm text-red-500 font-medium mt-1">{role}</p>
    <p className="mt-4 text-sm leading-relaxed text-gray-300">{text}</p>
  </PremiumCard>
);
