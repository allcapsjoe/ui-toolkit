import React from 'react';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Spinner
 * 
 * An animated circular loading indicator utilizing CSS keyframe animations
 * with automatic reduced motion fallbacks.
 */
export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  className = ''
}) => {
  const dimensions = {
    sm: '16px',
    md: '32px',
    lg: '48px'
  }[size];

  return (
    <div 
      className={`ads-spinner ${className}`}
      role="status"
      aria-label="Loading"
      style={{
        width: dimensions,
        height: dimensions,
        border: '2px solid var(--ads-color-surface)',
        borderTop: '2px solid var(--ads-color-primary)',
        borderRadius: '50%',
        animation: 'ads-spin 1s linear infinite',
        display: 'inline-block'
      }}
    >
      <style>{`
        @keyframes ads-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @media (prefers-reduced-motion: reduce) {
          .ads-spinner {
            animation: none !important;
            border-top-color: var(--ads-color-surface) !important;
            border-left-color: var(--ads-color-primary) !important;
          }
        }
      `}</style>
    </div>
  );
};
