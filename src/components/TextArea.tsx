import React from 'react';

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

/**
 * TextArea
 * 
 * A styled multi-line text input using theme-contract variables.
 */
export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`ads-input ads-textarea ${error ? 'ads-input--error' : ''} ${className || ''}`}
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
          minHeight: '80px',
          resize: 'vertical',
          ...props.style
        }}
        {...props}
      />
    );
  }
);

TextArea.displayName = 'TextArea';
