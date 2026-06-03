import React from 'react';

export interface ProgressBarProps {
  value: number; // 0 to 100
  label?: string;
  showPercentage?: boolean;
  variant?: 'primary' | 'secondary';
  isSegmented?: boolean;
}

/**
 * ProgressBar
 * 
 * A themed loading bar. Supports "Segmented" mode for a classic
 * 8-bit / BIOS loading effect.
 */
export const ProgressBar: React.FC<ProgressBarProps> = ({ 
  value, 
  label, 
  showPercentage = true,
  variant = 'primary',
  isSegmented = true
}) => {
  const percent = Math.min(100, Math.max(0, value));
  
  return (
    <div className="ads-progress-container" style={{ marginBottom: '1rem' }}>
      {(label || showPercentage) && (
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          fontSize: '0.8rem', 
          marginBottom: '4px',
          textTransform: 'uppercase'
        }}>
          <span>{label}</span>
          {showPercentage && <span>{Math.round(percent)}%</span>}
        </div>
      )}
      <div style={{
        height: '20px',
        border: '1px solid var(--ads-color-border)',
        background: 'var(--ads-color-surface)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          height: '100%',
          width: '100%',
          clipPath: `inset(0 ${100 - percent}% 0 0)`,
          background: variant === 'primary' ? 'var(--ads-color-primary)' : 'var(--ads-color-secondary)',
          transition: 'clip-path 0.3s ease-in-out',
          display: 'flex'
        }}>
          {isSegmented && (
            <div style={{
              width: '100%',
              height: '100%',
              backgroundImage: 'linear-gradient(90deg, transparent 0%, transparent 80%, var(--ads-color-surface) 80%, var(--ads-color-surface) 100%)',
              backgroundSize: '15px 100%'
            }} />
          )}
        </div>
      </div>
    </div>
  );
};
