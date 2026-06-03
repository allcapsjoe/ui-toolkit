import React from 'react';

export interface DividerProps {
  label?: string;
  variant?: 'primary' | 'secondary';
  className?: string;
}

/**
 * Divider
 * 
 * A themed horizontal rule with an optional label.
 */
export const Divider: React.FC<DividerProps> = ({ label, variant = 'primary', className = '' }) => {
  return (
    <div className={`ads-divider ${className}`} style={{
      display: 'flex',
      alignItems: 'center',
      gap: '1rem',
      margin: '1.5rem 0'
    }}>
      <div style={{ flex: 1, height: '1px', background: 'var(--ads-color-border)' }} />
      {label && (
        <span style={{ 
          fontSize: '0.75rem', 
          color: variant === 'primary' ? 'var(--ads-color-primary)' : 'var(--ads-color-secondary)',
          textTransform: 'uppercase',
          fontFamily: 'var(--ads-font-mono)'
        }}>
          {label}
        </span>
      )}
      <div style={{ flex: 1, height: '1px', background: 'var(--ads-color-border)' }} />
    </div>
  );
};
