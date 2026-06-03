import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md';
}

/**
 * Badge / Tag
 * 
 * Small status indicator.
 */
export const Badge: React.FC<BadgeProps> = ({ children, variant = 'primary', size = 'sm' }) => {
  const isOutline = variant === 'outline';
  
  return (
    <span
      className={`ads-badge ads-badge--${variant} ads-badge--${size}`}
      style={{
      display: 'inline-flex',
      padding: size === 'sm' ? '2px 6px' : '4px 8px',
      fontSize: '0.7rem',
      fontFamily: 'var(--ads-font-mono)',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      background: isOutline ? 'transparent' : (variant === 'primary' ? 'var(--ads-color-primary)' : 'var(--ads-color-secondary)'),
      color: isOutline ? 'var(--ads-color-primary)' : 'var(--ads-color-bg)',
      border: `1px solid ${variant === 'secondary' ? 'var(--ads-color-secondary)' : 'var(--ads-color-primary)'}`,
      boxShadow: !isOutline ? 'var(--ads-glow)' : 'none',
      whiteSpace: 'nowrap'
    }}>
      {children}
    </span>
  );
};
