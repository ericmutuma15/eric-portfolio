import React, { useState } from 'react';
import { SkillCard } from './Card';
import { FaShieldAlt } from 'react-icons/fa';

export const SkillsGrid = ({ skills, title, className = '', style = {} }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className={className} style={style}>
      <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
        <span className="w-1 h-8 bg-red-600 rounded-full"></span>
        {title}
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {skills.map((skill, idx) => (
          <div
            key={skill.name}
            className="animate-fade-up"
            style={{ animationDelay: `${idx * 0.05}s` }}
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={`h-full transition-all duration-300 transform ${
                hoveredIndex === idx ? 'scale-110' : 'scale-100'
              }`}
            >
              <SkillCard image={skill.image} name={skill.name} icon={skill.icon} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
