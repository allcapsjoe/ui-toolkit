import React from 'react';

export interface RadioOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  label?: string;
  direction?: 'vertical' | 'horizontal';
}

/**
 * RadioGroup
 * 
 * A theme-aware radio button group with clicky vintage checkbox/radio styling.
 * Supports tactile retro check states: `(*)` and `( )`.
 */
export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ className, name, options, value, onChange, label, direction = 'vertical', style, ...props }, ref) => {
    
    const containerStyles: React.CSSProperties = {
      display: 'flex',
      flexDirection: direction === 'vertical' ? 'column' : 'row',
      gap: direction === 'vertical' ? '0.5rem' : '1.5rem',
      fontFamily: 'var(--ads-font-mono, monospace)',
      boxSizing: 'border-box',
      ...style,
    };

    return (
      <div ref={ref} className={`ads-radiogroup-container ${className || ''}`} {...props}>
        {label && (
          <div 
            style={{ 
              fontSize: '0.75rem', 
              fontWeight: 'bold', 
              textTransform: 'uppercase',
              color: 'var(--ads-color-text-muted)',
              marginBottom: '0.5rem'
            }}
          >
            {label}
          </div>
        )}
        <div style={containerStyles} className="ads-radiogroup">
          {options.map((option) => {
            const isChecked = option.value === value;
            return (
              <label
                key={option.value}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  cursor: option.disabled ? 'not-allowed' : 'pointer',
                  opacity: option.disabled ? 0.5 : 1,
                  userSelect: 'none',
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  color: 'var(--ads-color-text)',
                  gap: '0.5rem'
                }}
                className={`ads-radio-label ${isChecked ? 'ads-radio-label--checked' : ''}`}
              >
                <input
                  type="radio"
                  name={name}
                  value={option.value}
                  checked={isChecked}
                  disabled={option.disabled}
                  onChange={() => !option.disabled && onChange(option.value)}
                  style={{
                    position: 'absolute',
                    opacity: 0,
                    width: 0,
                    height: 0,
                    margin: 0
                  }}
                />
                
                {/* Custom Retro Radio Bullet */}
                <span 
                  className="ads-radio-bullet"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '18px',
                    height: '18px',
                    border: '1px solid var(--ads-color-border, var(--ads-color-primary))',
                    borderRadius: '50%',
                    background: 'var(--ads-color-surface, #000)',
                    color: 'var(--ads-color-primary, #39ff14)',
                    fontSize: '0.9rem',
                    lineHeight: 1,
                    textAlign: 'center',
                    fontWeight: 'bold',
                    transition: 'all 0.1s',
                    flexShrink: 0
                  }}
                >
                  {isChecked ? '•' : ''}
                </span>

                <span>{option.label}</span>
              </label>
            );
          })}
        </div>
      </div>
    );
  }
);

RadioGroup.displayName = 'RadioGroup';
