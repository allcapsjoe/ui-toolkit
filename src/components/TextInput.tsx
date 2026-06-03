import React from 'react';

export interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

/**
 * TextInput
 * 
 * A styled single-line text field using theme-contract variables.
 */
export const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`ads-input ads-text-input ${error ? 'ads-input--error' : ''} ${className || ''}`}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          fontFamily: 'var(--ads-font-mono)',
          background: 'var(--ads-color-surface)',
          border: `1px solid ${error ? 'var(--ads-color-secondary)' : 'var(--ads-color-border)'}`,
          color: 'var(--ads-color-text)',
          padding: '0.5rem',
          outline: 'none',
          borderRadius: 'var(--ads-radius)',
          transition: 'all 0.2s',
          fontSize: '1rem',
          ...props.style
        }}
        {...props}
      />
    );
  }
);

TextInput.displayName = 'TextInput';
