import React from 'react';

/**
 * High-definition brand logo badges for top Indian bus operators:
 * - IntrCity SmartBus
 * - VRL Travels
 * - NueGo Electric
 * - Orange Tours
 * - Zingbus
 * - KSRTC Airavat
 */
export default function OperatorLogo({ operatorName, size = 'md' }) {
  const nameLower = (operatorName || '').toLowerCase();

  const isSmall = size === 'sm';
  const width = isSmall ? 40 : 48;
  const height = isSmall ? 40 : 48;

  if (nameLower.includes('intrcity')) {
    return (
      <div className={`operator-logo-badge intrcity ${size}`} title="IntrCity SmartBus Authorized Fleet">
        <svg width={width} height={height} viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="10" fill="#0f172a" />
          <path d="M12 24L24 10L22 23H34L22 38L24 25H12Z" fill="#fbbf24" />
          <circle cx="24" cy="24" r="21" stroke="#fbbf24" strokeWidth="2" strokeDasharray="3 3" />
        </svg>
      </div>
    );
  }

  if (nameLower.includes('vrl')) {
    return (
      <div className={`operator-logo-badge vrl ${size}`} title="VRL Travels - India's Premier Fleet">
        <svg width={width} height={height} viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="10" fill="#1e3a8a" />
          <rect x="3" y="3" width="42" height="42" rx="7" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="24" y="30" fill="#f59e0b" fontSize="16" fontWeight="900" fontFamily="sans-serif" textAnchor="middle" letterSpacing="1">VRL</text>
        </svg>
      </div>
    );
  }

  if (nameLower.includes('nuego') || nameLower.includes('electric')) {
    return (
      <div className={`operator-logo-badge nuego ${size}`} title="NueGo Electric - 100% Green Fleets">
        <svg width={width} height={height} viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="10" fill="#065f46" />
          <path d="M24 6C14.06 6 6 14.06 6 24C6 33.94 14.06 42 24 42C33.94 42 42 33.94 42 24" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
          <path d="M26 12L16 26H24L22 36L32 22H24L26 12Z" fill="#10b981" />
        </svg>
      </div>
    );
  }

  if (nameLower.includes('orange')) {
    return (
      <div className={`operator-logo-badge orange ${size}`} title="Orange Tours and Travels">
        <svg width={width} height={height} viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="10" fill="#c2410c" />
          <circle cx="24" cy="24" r="16" fill="#f97316" />
          <path d="M14 24C14 18.48 18.48 14 24 14C29.52 14 34 18.48 34 24C34 29.52 29.52 34 24 34" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <circle cx="24" cy="24" r="5" fill="#ffffff" />
        </svg>
      </div>
    );
  }

  if (nameLower.includes('zingbus')) {
    return (
      <div className={`operator-logo-badge zingbus ${size}`} title="Zingbus Premium Lounges">
        <svg width={width} height={height} viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="10" fill="#4338ca" />
          <path d="M12 16H36L18 32H36" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="36" cy="16" r="3" fill="#ec4899" />
        </svg>
      </div>
    );
  }

  if (nameLower.includes('ksrtc') || nameLower.includes('airavat')) {
    return (
      <div className={`operator-logo-badge ksrtc ${size}`} title="KSRTC Airavat Club Class">
        <svg width={width} height={height} viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="10" fill="#991b1b" />
          <rect x="4" y="4" width="40" height="40" rx="6" stroke="#fbbf24" strokeWidth="1.5" />
          <path d="M14 18L24 10L34 18V34L24 38L14 34V18Z" fill="#b91c1c" stroke="#fbbf24" strokeWidth="1" />
          <text x="24" y="27" fill="#ffffff" fontSize="10" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">AIRAVAT</text>
        </svg>
      </div>
    );
  }

  // Generic Premium Transport Crest
  return (
    <div className={`operator-logo-badge generic ${size}`} title={operatorName}>
      <svg width={width} height={height} viewBox="0 0 48 48" fill="none">
        <rect width="48" height="48" rx="10" fill="#1d4ed8" />
        <path d="M14 14H34V28C34 32.4 24 36 24 36C24 36 14 32.4 14 28V14Z" fill="#1e40af" stroke="#ffffff" strokeWidth="1.5" />
        <text x="24" y="26" fill="#ffffff" fontSize="13" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
          {operatorName ? operatorName.charAt(0).toUpperCase() : 'B'}
        </text>
      </svg>
    </div>
  );
}
