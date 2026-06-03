import React from 'react';

export interface SelectDropdownOption {
  value: string;
  label: string;
}

export interface SelectDropdownProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectDropdownOption[];
  error?: boolean;
}

/**
 * SelectDropdown
 * 
 * A styled dropdown menu utilizing custom arrows and theme-contract variables.
 */
export const SelectDropdown = React.forwardRef<HTMLSelectElement, SelectDropdownProps>(
  ({ className, options, error, ...props }, ref) => {
    return (
      <div style={{ position: 'relative', width: '100%' }}>
        <select
          ref={ref}
          className={`ads-select ${error ? 'ads-select--error' : ''} ${className || ''}`}
          style={{
            width: '100%',
            appearance: 'none',
            WebkitAppearance: 'none',
            boxSizing: 'border-box',
            fontFamily: 'var(--ads-font-mono)',
            background: 'var(--ads-color-surface)',
            border: `1px solid ${error ? 'var(--ads-color-secondary)' : 'var(--ads-color-border)'}`,
            color: 'var(--ads-color-text)',
            padding: '0.5rem 2rem 0.5rem 0.5rem',
            outline: 'none',
            borderRadius: 'var(--ads-radius)',
            transition: 'all 0.2s',
            fontSize: '1rem',
            cursor: 'pointer',
            ...props.style
          }}
          {...props}
        >
          {options.map((opt) => (
            <option 
              key={opt.value} 
              value={opt.value} 
              style={{
                background: 'var(--ads-color-surface)',
                color: 'var(--ads-color-text)',
              }}
            >
              {opt.label.toUpperCase()}
            </option>
          ))}
        </select>
        <span style={{
          position: 'absolute',
          right: '12px',
          top: '50%',
          transform: 'translateY(-50%)',
          pointerEvents: 'none',
          fontFamily: 'var(--ads-font-mono)',
          fontSize: '0.8rem',
          color: 'var(--ads-color-primary)',
          fontWeight: 'bold'
        }}>
          ▼
        </span>
        <style>{`
          .ads-select:focus-visible {
            outline: 2px solid var(--ads-color-primary) !important;
            outline-offset: 2px;
          }
        `}</style>
      </div>
    );
  }
);

SelectDropdown.displayName = 'SelectDropdown';
