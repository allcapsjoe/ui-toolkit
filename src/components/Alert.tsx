import React from 'react';

export interface AlertProps {
  children: React.ReactNode;
  variant?: 'info' | 'warning' | 'error';
  title?: string;
  className?: string;
  style?: React.CSSProperties;
}

/**
 * Alert
 * 
 * An inline notification banner designed for warnings, errors, and system details.
 */
export const Alert: React.FC<AlertProps> = ({
  children,
  variant = 'info',
  title,
  className = '',
  style
}) => {
  const colors = {
    info: {
      border: 'var(--ads-color-border)',
      color: 'var(--ads-color-primary)',
      symbol: '[i]'
    },
    warning: {
      border: 'var(--ads-color-secondary)',
      color: 'var(--ads-color-secondary)',
      symbol: '[!]'
    },
    error: {
      border: 'var(--ads-color-secondary)',
      color: 'var(--ads-color-secondary)',
      symbol: '[X]'
    }
  }[variant];

  return (
    <div
      className={`ads-alert ads-alert--${variant} ${className}`}
      role="alert"
      style={{
        border: `1px solid ${colors.border}`,
        padding: '1rem',
        background: 'var(--ads-color-surface)',
        color: colors.color,
        fontFamily: 'var(--ads-font-mono)',
        marginBottom: '1rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.25rem',
        textTransform: 'uppercase',
        ...style
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
        <span>{colors.symbol}</span>
        {title && <span>{title}</span>}
      </div>
      <div style={{ fontSize: '0.9rem', color: 'var(--ads-color-text)', marginTop: '4px' }}>
        {children}
      </div>
    </div>
  );
};
