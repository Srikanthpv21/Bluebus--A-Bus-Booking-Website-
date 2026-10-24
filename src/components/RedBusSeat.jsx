import React from 'react';

/**
 * Authentic redBus-style bus seat SVG component matching real redBus apps.
 * Supports:
 * - Seater recliner chairs with headrest, armrests, and inner gender person silhouette.
 * - Sleeper berths with head pillow and inner gender person silhouette.
 * - Distinct vibrant states for Available (Women / Men / General), Sold/Booked (faded pastel), and Selected (red).
 */
export function RedBusSeatSvg({
  type = 'seater',
  isFemale = false,
  isMale = false,
  isBooked = false,
  isSelected = false
}) {
  // Determine color theme
  let strokeColor = '#64748b'; // default available neutral
  let fillColor = '#ffffff';
  let personColor = '#94a3b8';

  if (isSelected) {
    strokeColor = '#1d4ed8';
    fillColor = '#1d4ed8';
    personColor = '#ffffff';
  } else if (isFemale) {
    if (isBooked) {
      strokeColor = '#fbcfe8';
      fillColor = '#fdf2f8';
      personColor = '#f472b6';
    } else {
      strokeColor = '#ec4899';
      fillColor = '#ffffff';
      personColor = '#ec4899';
    }
  } else if (isMale) {
    if (isBooked) {
      strokeColor = '#bae6fd';
      fillColor = '#f0f9ff';
      personColor = '#7dd3fc';
    } else {
      strokeColor = '#0284c7';
      fillColor = '#ffffff';
      personColor = '#0284c7';
    }
  } else {
    // General seat
    if (isBooked) {
      strokeColor = '#e2e8f0';
      fillColor = '#f8fafc';
      personColor = '#cbd5e1';
    } else {
      strokeColor = '#64748b';
      fillColor = '#ffffff';
      personColor = '#64748b';
    }
  }

  if (type === 'sleeper') {
    // Sleeper Berth (Vertical Bed)
    return (
      <svg
        width="34"
        height="64"
        viewBox="0 0 34 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="seat-svg-graphic sleeper"
      >
        {/* Outer berth rounded rectangle */}
        <rect
          x="1.5"
          y="1.5"
          width="31"
          height="61"
          rx="4"
          fill={fillColor}
          stroke={strokeColor}
          strokeWidth="1.8"
        />

        {/* Head Pillow */}
        <rect
          x="5"
          y="4.5"
          width="24"
          height="8.5"
          rx="2"
          fill={isSelected ? '#ffffff' : fillColor}
          fillOpacity={isSelected ? 0.35 : 0.8}
          stroke={strokeColor}
          strokeWidth="1.2"
        />

        {/* Person icon in center of berth */}
        {isFemale ? (
          <g transform="translate(0, 7)">
            <circle cx="17" cy="18" r="3" fill={personColor} />
            <path
              d="M13 23 H21 A1.5 1.5 0 0 1 22.5 24.5 L20.8 33 H13.2 L11.5 24.5 A1.5 1.5 0 0 1 13 23 Z"
              fill={personColor}
            />
            <line x1="14.8" y1="33" x2="14.8" y2="37" stroke={personColor} strokeWidth="1.5" strokeLinecap="round" />
            <line x1="19.2" y1="33" x2="19.2" y2="37" stroke={personColor} strokeWidth="1.5" strokeLinecap="round" />
          </g>
        ) : isMale ? (
          <g transform="translate(0, 7)">
            <circle cx="17" cy="18" r="3" fill={personColor} />
            <path
              d="M13 23 H21 A1.5 1.5 0 0 1 22.5 24.5 V29 H11.5 V24.5 A1.5 1.5 0 0 1 13 23 Z"
              fill={personColor}
            />
            <path
              d="M11.5 29 H22.5 V35.5 A1 1 0 0 1 21.5 36.5 H18.8 V32.5 H15.2 V36.5 H12.5 A1 1 0 0 1 11.5 35.5 Z"
              fill={personColor}
            />
          </g>
        ) : (
          <g transform="translate(0, 7)">
            <circle cx="17" cy="18" r="3" fill={personColor} />
            <path
              d="M13 23 H21 A1.5 1.5 0 0 1 22.5 24.5 V34 A1.5 1.5 0 0 1 21 35.5 H13 A1.5 1.5 0 0 1 11.5 34 V24.5 A1.5 1.5 0 0 1 13 23 Z"
              fill={personColor}
            />
          </g>
        )}
      </svg>
    );
  }

  // Seater Chair (Matching user screenshot)
  return (
    <svg
      width="34"
      height="38"
      viewBox="0 0 34 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="seat-svg-graphic seater"
    >
      {/* Chair Outer Shell with Headrest and Armrests */}
      <path
        d="M 8 4 
           C 8 1.8, 9.8 0, 12 0 
           L 22 0 
           C 24.2 0, 26 1.8, 26 4 
           L 26 6 
           C 29 6.5, 31.5 8.5, 31.5 11.5 
           L 31.5 32 
           C 31.5 34.5, 29.5 36.5, 27 36.5 
           L 7 36.5 
           C 4.5 36.5, 2.5 34.5, 2.5 32 
           L 2.5 11.5 
           C 2.5 8.5, 5 6.5, 8 6 
           Z"
        fill={fillColor}
        stroke={strokeColor}
        strokeWidth="1.8"
      />

      {/* Headrest partition line */}
      <path
        d="M 8 6.5 L 26 6.5"
        stroke={strokeColor}
        strokeWidth="1.1"
        strokeOpacity={isSelected ? 0.6 : 0.45}
      />

      {/* Inner Person Silhouette */}
      {isFemale ? (
        <g>
          {/* Female Head */}
          <circle cx="17" cy="14" r="2.8" fill={personColor} />
          {/* Flared Dress */}
          <path
            d="M 13.5 18.5 H 20.5 A 1.5 1.5 0 0 1 22 20 L 20.5 27 H 13.5 L 12 20 A 1.5 1.5 0 0 1 13.5 18.5 Z"
            fill={personColor}
          />
          {/* Legs */}
          <line x1="15.2" y1="27" x2="15.2" y2="30.5" stroke={personColor} strokeWidth="1.3" strokeLinecap="round" />
          <line x1="18.8" y1="27" x2="18.8" y2="30.5" stroke={personColor} strokeWidth="1.3" strokeLinecap="round" />
        </g>
      ) : isMale ? (
        <g>
          {/* Male Head */}
          <circle cx="17" cy="14" r="2.8" fill={personColor} />
          {/* Torso */}
          <path
            d="M 13.5 18.5 H 20.5 A 1.5 1.5 0 0 1 22 20 V 24 H 12 V 20 A 1.5 1.5 0 0 1 13.5 18.5 Z"
            fill={personColor}
          />
          {/* Trousers */}
          <path
            d="M 12 24 H 22 V 29 A 1 1 0 0 1 21 30 H 18.5 V 26.5 H 15.5 V 30 H 13 A 1 1 0 0 1 12 29 Z"
            fill={personColor}
          />
        </g>
      ) : (
        <g>
          {/* Neutral Head */}
          <circle cx="17" cy="14" r="2.8" fill={personColor} />
          {/* Torso */}
          <path
            d="M 13.5 18.5 H 20.5 A 1.5 1.5 0 0 1 22 20 V 27 A 1.5 1.5 0 0 1 20.5 28.5 H 13.5 A 1.5 1.5 0 0 1 12 27 V 20 A 1.5 1.5 0 0 1 13.5 18.5 Z"
            fill={personColor}
          />
        </g>
      )}
    </svg>
  );
}

/**
 * Driver Steering Wheel SVG matching redBus chassis top-right
 */
export function SteeringWheelSvg({ size = 32, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Driver Steering Wheel"
    >
      <circle cx="18" cy="18" r="16" stroke="#94a3b8" strokeWidth="2.5" />
      <circle cx="18" cy="18" r="5" fill="#94a3b8" />
      {/* 3 spokes */}
      <line x1="18" y1="23" x2="18" y2="34" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="14" y1="15" x2="4.5" y2="10" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
      <line x1="22" y1="15" x2="31.5" y2="10" stroke="#94a3b8" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}
