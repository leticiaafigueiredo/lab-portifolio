export const SvgFilters = () => (
  <svg width="0" height="0" className="absolute pointer-events-none">
    <filter id="roughen" x="-20%" y="-20%" width="140%" height="140%">
      <feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="2" seed="7" result="noise" />
      <feDisplacementMap in="SourceGraphic" in2="noise" scale="5.5" />
    </filter>
  </svg>
);