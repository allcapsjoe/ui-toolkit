import React from 'react';

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
}

/**
 * Checkbox
 * 
 * A styled checkbox selector adopting theme-contract variables.
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, ...props }, ref) => {
    return (
      <label 
        className="ads-checkbox-label" 
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          cursor: 'pointer',
          fontFamily: 'var(--ads-font-mono)',
          textTransform: 'uppercase',
          fontSize: '0.9rem',
          color: error ? 'var(--ads-color-secondary)' : 'var(--ads-color-text)',
          userSelect: 'none'
        }}
      >
        <input
          ref={ref}
          type="checkbox"
          className={`ads-checkbox ${className || ''}`}
          style={{
            appearance: 'none',
            WebkitAppearance: 'none',
            width: '18px',
            height: '18px',
            border: `1px solid ${error ? 'var(--ads-color-secondary)' : 'var(--ads-color-primary)'}`,
            background: 'var(--ads-color-surface)',
            borderRadius: 'var(--ads-radius)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            outline: 'none',
            position: 'relative'
          }}
          {...props}
        />
        <span>{label}</span>
        <style>{`
          .ads-checkbox:checked {
            background: var(--ads-color-primary) !important;
          }
          .ads-checkbox:checked::after {
            content: '✓';
            color: var(--ads-color-bg);
            font-size: 12px;
            font-weight: bold;
          }
          .ads-checkbox:focus-visible {
            outline: 2px solid var(--ads-color-primary);
            outline-offset: 2px;
          }
        `}</style>
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
