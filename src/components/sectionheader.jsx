import React from 'react';
import PropTypes from 'prop-types';

export default function SectionHeader({ overline, title, description, className = '' }) {
  return (
    <section className={`relative bg-transparent text-white ${className}`}>
      {/* Decorative side bars */}
      <div className="absolute inset-y-0 left-0 w-1 bg-[#111]" />
      <div className="absolute inset-y-0 right-0 w-1 bg-[#111]" />

      <div className="relative max-w-3xl mx-auto px-4 text-center">
  {overline && (
    <p className="text-sm text-[#629DC7] uppercase mb-2 leading-relaxed">
      {overline}
    </p>
  )}

  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
    {title}
  </h2>

  {description && (
    <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
      {description}
    </p>
  )}
</div>

    </section>
  );
}

// Prop type validation
SectionHeader.propTypes = {
  overline: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  className: PropTypes.string,
};
