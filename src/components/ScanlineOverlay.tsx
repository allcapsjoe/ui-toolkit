import React from 'react';

export interface ScanlineOverlayProps {
  opacity?: number;
  flicker?: boolean;
}

/**
 * ScanlineOverlay
 * 
 * A decorative component that adds CRT-style scanlines and noise.
 * Purely aesthetic, pointer-events are disabled so it doesn't block interactions.
 */
export const ScanlineOverlay: React.FC<ScanlineOverlayProps> = ({ opacity = 0.1, flicker = true }) => {
  return (
    <div className="ads-scanline-overlay" style={{
      position: 'fixed',
      inset: 0,
      pointerEvents: 'none',
      zIndex: 9999,
      overflow: 'hidden'
    }}>
      {/* Scanlines */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,${opacity}) 2px, rgba(0,0,0,${opacity}) 4px)`,
        zIndex: 1
      }} />
      
      {/* Noise/Flicker */}
      {flicker && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(18, 16, 16, 0.02)',
          animation: 'ads-flicker 0.15s infinite',
          zIndex: 2
        }} />
      )}

      <style>{`
        @keyframes ads-flicker {
          0% { opacity: 1; } 50% { opacity: 0.95; } 100% { opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ads-scanline-overlay div {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
};
