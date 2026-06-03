import React from 'react';

export interface FormGroupProps {
  label?: string;
  helperText?: string;
  error?: string;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
}

/**
 * FormGroup
 * 
 * A layout wrapper combining standard form labels, input controls, 
 * helper descriptions, and validation error messages.
 */
export const FormGroup: React.FC<FormGroupProps> = ({
  label,
  helperText,
  error,
  children,
  className = '',
  required = false
}) => {
  return (
    <div className={`ads-form-group ${className}`} style={{ marginBottom: '1.25rem', width: '100%' }}>
      {label && (
        <label style={{
          display: 'block',
          fontSize: '0.8rem',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          marginBottom: '0.35rem',
          color: error ? 'var(--ads-color-secondary)' : 'var(--ads-color-primary)',
          fontFamily: 'var(--ads-font-mono)'
        }}>
          {label}
          {required && <span style={{ marginLeft: '4px', color: 'var(--ads-color-secondary)' }}>*</span>}
        </label>
      )}
      <div className="ads-form-group__control" style={{ width: '100%' }}>
        {children}
      </div>
      {error && (
        <div style={{
          marginTop: '0.25rem',
          fontSize: '0.75rem',
          color: 'var(--ads-color-secondary)',
          fontFamily: 'var(--ads-font-mono)',
          textTransform: 'uppercase'
        }}>
          [!] {error}
        </div>
      )}
      {!error && helperText && (
        <div style={{
          marginTop: '0.25rem',
          fontSize: '0.75rem',
          color: 'var(--ads-color-text-muted)',
          fontFamily: 'var(--ads-font-mono)',
          textTransform: 'uppercase'
        }}>
          {helperText}
        </div>
      )}
    </div>
  );
};
