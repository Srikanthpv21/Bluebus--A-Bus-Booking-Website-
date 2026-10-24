import React from 'react';

/**
 * Authentic redBus-style gender person icons for reserved seats.
 * FemalePersonIcon: Woman silhouette with flared dress/skirt.
 * MalePersonIcon: Man silhouette with straight shoulders and trousers.
 */
export function FemalePersonIcon({ size = 13, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`seat-gender-icon female-icon ${className}`}
      aria-label="Women Only Reserved Seat"
    >
      {/* Head */}
      <circle cx="12" cy="4" r="3" />
      {/* Dress silhouette */}
      <path d="M9 8h6a2 2 0 0 1 2 2l-1.2 7H14.5v4a1 1 0 0 1-2 0v-4h-1v4a1 1 0 0 1-2 0v-4H8.2L7 10a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function MalePersonIcon({ size = 13, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`seat-gender-icon male-icon ${className}`}
      aria-label="Men Only Reserved Seat"
    >
      {/* Head */}
      <circle cx="12" cy="4" r="3" />
      {/* Trousers silhouette */}
      <path d="M8 8h8a2 2 0 0 1 2 2v5a1 1 0 0 1-1 1h-2v5a1 1 0 0 1-2 0v-5h-2v5a1 1 0 0 1-2 0v-5H7a1 1 0 0 1-1-1v-5a2 2 0 0 1 2-2z" />
    </svg>
  );
}
