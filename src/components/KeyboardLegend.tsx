import React from 'react';

export interface LegendItem {
  key: string;
  action: string;
}

export interface KeyboardLegendProps extends React.HTMLAttributes<HTMLDivElement> {
  items: LegendItem[];
  variant?: 'default' | 'accent' | 'compact';
}

/**
 * KeyboardLegend
 * 
 * Displays retro keyboard shortcuts/hotkeys legend at the bottom of screens or panels.
 * Commonly seen in BIOS, MS-DOS, or terminal utilities.
 */
export const KeyboardLegend = React.forwardRef<HTMLDivElement, KeyboardLegendProps>(
  ({ className, items, variant = 'default', style, ...props }, ref) => {
    const containerStyles: React.CSSProperties = {
      display: 'flex',
      flexWrap: 'wrap',
      gap: variant === 'compact' ? '0.75rem' : '1.5rem',
      padding: variant === 'compact' ? '0.25rem 0.5rem' : '0.5rem 1rem',
      background: variant === 'accent' 
        ? 'var(--ads-color-primary, #39ff14)' 
        : 'var(--ads-color-surface, #0d150d)',
      color: variant === 'accent' 
        ? 'var(--ads-color-bg, #000000)' 
        : 'var(--ads-color-text, #ffffff)',
      borderTop: variant === 'accent' ? 'none' : '1px solid var(--ads-color-border, var(--ads-color-primary))',
      borderBottom: variant === 'accent' ? 'none' : '1px solid var(--ads-color-border, var(--ads-color-primary))',
      fontFamily: 'var(--ads-font-mono, monospace)',
      fontSize: '0.75rem',
      textTransform: 'uppercase',
      boxSizing: 'border-box',
      ...style,
    };

    return (
      <div 
        ref={ref} 
        style={containerStyles} 
        className={`ads-keyboard-legend ads-keyboard-legend--${variant} ${className || ''}`}
        {...props}
      >
        {items.map((item, index) => (
          <div 
            key={index} 
            className="ads-keyboard-legend__item"
            style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}
          >
            <span 
              className="ads-keyboard-legend__key"
              style={{
                fontWeight: 'bold',
                color: variant === 'accent' 
                  ? 'var(--ads-color-bg, #000000)' 
                  : 'var(--ads-color-primary, #39ff14)',
                background: variant === 'accent' 
                  ? 'rgba(0, 0, 0, 0.1)' 
                  : 'rgba(255, 255, 255, 0.05)',
                padding: '1px 4px',
                border: variant === 'accent'
                  ? '1px solid var(--ads-color-bg)'
                  : '1px solid var(--ads-color-border)',
                borderRadius: '2px',
              }}
            >
              {item.key}
            </span>
            <span className="ads-keyboard-legend__action" style={{ opacity: variant === 'accent' ? 0.9 : 0.7 }}>
              {item.action}
            </span>
          </div>
        ))}
      </div>
    );
  }
);

KeyboardLegend.displayName = 'KeyboardLegend';
