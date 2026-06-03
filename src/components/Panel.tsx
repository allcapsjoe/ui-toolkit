import React from 'react';

export interface PanelProps {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  onClose?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
  isFullHeight?: boolean;
  id?: string;
  ariaLabel?: string;
}

/**
 * Panel / Window
 * 
 * A modular container with an optional title bar and themed borders.
 * This is the primary building block for "dashboard" or "OS" style interfaces.
 * Refactored to match the workbench-panel pattern in codex.build.
 */
export const Panel: React.FC<PanelProps> = ({ 
  eyebrow,
  title, 
  children, 
  actions, 
  onClose,
  className = '', 
  variant = 'primary',
  isFullHeight = false,
  id,
  ariaLabel
}) => {
  const hasHeader = title || eyebrow || onClose || actions;

  return (
    <section 
      id={id}
      className={`ads-panel ads-panel--${variant} ${className}`} 
      aria-label={ariaLabel || title || eyebrow || 'Panel'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid var(--ads-color-border)',
        background: 'var(--ads-color-surface)',
        height: isFullHeight ? '100%' : 'auto',
        marginBottom: '1rem',
        overflow: 'hidden'
      }}
    >
      {hasHeader && (
        <header className="ads-panel__header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'start',
          padding: '1rem',
          background: variant === 'primary' ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.1)',
          borderBottom: '1px solid var(--ads-color-border)',
        }}>
          <div>
            {eyebrow && (
              <p className="eyebrow" style={{
                margin: '0 0 0.25rem',
                fontSize: '0.7rem',
                fontWeight: '800',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--ads-color-secondary)'
              }}>
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 style={{
                margin: 0,
                fontSize: '1.1rem',
                lineHeight: 1.2,
                color: 'var(--ads-color-primary)'
              }}>
                {title}
              </h2>
            )}
          </div>
          
          <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {actions && <div className="ads-panel__actions">{actions}</div>}
            {onClose && (
              <button 
                type="button" 
                className="panel-close-action" 
                onClick={onClose}
                aria-label="Close panel"
                style={{
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid var(--ads-color-border)',
                  color: 'var(--ads-color-text)',
                  padding: '4px 12px',
                  cursor: 'pointer',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  textTransform: 'uppercase'
                }}
              >
                Close
              </button>
            )}
          </div>
        </header>
      )}
      <div className="ads-panel__content" style={{ 
        padding: '1rem',
        flex: 1,
        overflowY: 'auto'
      }}>
        {children}
      </div>
    </section>
  );
};
