import React from 'react';

export const SvgFilters: React.FC = () => (
  <svg width="0" height="0" className="absolute pointer-events-none -z-50" aria-hidden="true">
    <defs>
      {/* Filtro de borda rabiscada orgânica */}
      <filter id="roughen" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="7" result="noise" />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="4.5" />
      </filter>

      {/* Filtro de textura de papel / nanquim */}
      <filter id="ink-bleed" x="-10%" y="-10%" width="120%" height="120%">
        <feTurbulence type="fractalNoise" baseFrequency="0.08" numOctaves="3" result="bleedNoise" />
        <feDisplacementMap in="SourceGraphic" in2="bleedNoise" scale="2.5" />
      </filter>

      {/* Sombra orgânica de post-it / bilhete */}
      <filter id="sketch-shadow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
        <feOffset dx="2" dy="4" result="offsetblur" />
        <feComponentTransfer>
          <feFuncA type="linear" slope="0.18" />
        </feComponentTransfer>
        <feMerge> 
          <feMergeNode />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  </svg>
);